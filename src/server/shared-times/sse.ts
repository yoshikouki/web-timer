export type ChannelId = string;
export type Client = {
  id: ClientId;
  controller: Controller;
  connectedAt: Date;
};
export type ClientId = string;
export type Controller = ReadableStreamDefaultController<Uint8Array>;

type AddClientCallback = (props: {
  channelId: ChannelId;
  controller: Controller;
}) => void;

type RemoveClientCallback = (props: {
  channelId: ChannelId;
  channel: Map<ClientId, Client>;
}) => void;

export class SSE {
  private channels: Map<ChannelId, Map<ClientId, Client>> = new Map();
  private encoder = new TextEncoder();

  private onAddClient: AddClientCallback | undefined;
  private onRemoveClient: RemoveClientCallback | undefined;

  constructor(params?: {
    onAddClient?: AddClientCallback;
    onRemoveClient?: RemoveClientCallback;
  }) {
    this.onAddClient = params?.onAddClient;
    this.onRemoveClient = params?.onRemoveClient;
  }

  addClient({
    channelId,
    controller,
    clientId = crypto.randomUUID(),
  }: {
    channelId: ChannelId;
    controller: Controller;
    clientId?: ClientId;
  }): ClientId {
    const channel = this.channels.get(channelId) || new Map();
    channel.set(clientId, {
      id: clientId,
      controller,
      connectedAt: new Date(),
    });
    this.channels.set(channelId, channel);
    console.log({
      clients: this.channels.get(channelId)?.size,
      channelId,
      channels: this.channels.size,
    });
    this.onAddClient?.({ channelId, controller });
    return clientId;
  }

  removeClient({
    channelId,
    clientId,
  }: { channelId: ChannelId; clientId: ClientId }) {
    console.log("DEBUG: removeClient", channelId);
    const channel = this.channels.get(channelId);
    const client = channel?.get(clientId);
    if (!channel || !client) return;
    try {
      client.controller.close();
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes("is already closed")
      ) {
        console.log(`Client already closed: channelId=${channelId}`);
      } else {
        console.error("Error closing controller", error);
      }
    }
    channel.delete(clientId);
    if (channel.size === 0) {
      this.channels.delete(channelId);
    }
    this.onRemoveClient?.({ channelId, channel });
  }

  broadcast = async (channelId: ChannelId, data: Record<string, unknown>) => {
    const clients = this.channels.get(channelId);
    if (!clients) return;
    const encodedData = this.encode(data);
    await Promise.all(
      Array.from(clients.values()).map((client) => {
        try {
          client.controller.enqueue(encodedData);
        } catch (error) {
          console.error("Error broadcasting event", error);
          this.removeClient({ channelId, clientId: client.id });
        }
      }),
    );
  };

  private encode = (data: Record<string, unknown>) => {
    return this.encoder.encode(`data: ${JSON.stringify(data)}\n\n`);
  };
}
