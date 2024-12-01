export type SSEChannelId = string;
export type SSEClient = ReadableStreamDefaultController<Uint8Array>;

type AddClientCallback = (props: {
  channelId: SSEChannelId;
  controller: SSEClient;
}) => void;
type RemoveClientCallback = (props: {
  channelId: SSEChannelId;
  controller: SSEClient;
  clients: Set<SSEClient>;
}) => void;

export class SSE {
  private channels: Map<SSEChannelId, Set<SSEClient>> = new Map();
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

  addClient(channelId: SSEChannelId, controller: SSEClient) {
    const clientSet = this.channels.get(channelId) || new Set();
    clientSet.add(controller);
    this.channels.set(channelId, clientSet);
    this.onAddClient?.({ channelId, controller });
  }

  removeClient(channelId: SSEChannelId, controller: SSEClient) {
    console.log("DEBUG: removeClient", channelId);
    try {
      controller.close();
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
    const clientSet = this.channels.get(channelId);
    if (!clientSet) return;
    clientSet.delete(controller);
    if (clientSet.size === 0) {
      this.channels.delete(channelId);
    }
    this.onRemoveClient?.({ channelId, controller, clients: clientSet });
  }

  broadcast = async (id: SSEChannelId, data: Record<string, unknown>) => {
    const encodedData = this.encode(data);
    const clients = this.channels.get(id);
    if (!clients) return;
    await Promise.all(
      Array.from(clients).map((controller) => {
        try {
          controller.enqueue(encodedData);
        } catch (error) {
          console.error("Error broadcasting event", error);
          this.removeClient(id, controller);
        }
      }),
    );
  };

  private encode = (data: Record<string, unknown>) => {
    return this.encoder.encode(`data: ${JSON.stringify(data)}\n\n`);
  };
}
