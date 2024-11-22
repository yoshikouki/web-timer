import { TimerEventMessageSchema } from "@/schema/timer-event";

type TimerId = string;
type TimerClient = ReadableStreamDefaultController<Uint8Array>;

const clientsByTimer = new Map<TimerId, Set<TimerClient>>();

const addClient = (id: TimerId, controller: TimerClient) => {
  const clientSet = clientsByTimer.get(id) || new Set<TimerClient>();
  clientSet.add(controller);
  clientsByTimer.set(id, clientSet);
};

const removeClient = (id: TimerId, controller: TimerClient) => {
  const clientSet = clientsByTimer.get(id);
  if (!clientSet) return;
  clientSet.delete(controller);
  if (clientSet.size === 0) {
    clientsByTimer.delete(id);
  }
};

const broadcast = async (id: TimerId, data: Record<string, unknown>) => {
  const encodedData = new TextEncoder().encode(
    `data: ${JSON.stringify(data)}\n\n`,
  );
  const clientSet = clientsByTimer.get(id);
  if (!clientSet) return;
  for (const controller of clientSet) {
    controller.enqueue(encodedData);
  }
};

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      addClient(id, controller);

      const closeStream = () => {
        removeClient(id, controller);
        controller.close();
      };
      request.signal.addEventListener("abort", closeStream);
    },
  });

  const streamHeaders: HeadersInit = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  };

  return new Response(stream, {
    status: 200,
    headers: streamHeaders,
  });
};

export const PATCH = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const { id } = await params;
    const parsed = TimerEventMessageSchema.safeParse(await request.json());
    if (!parsed.success) {
      return new Response("Invalid request body", { status: 400 });
    }
    broadcast(id, { event: parsed.data.event });
    return new Response(null, { status: 204 }); // No Content
  } catch (_error) {
    return new Response("Error processing PATCH request", { status: 500 });
  }
};
