import { type TimerClient, sharedTimer } from "@/server/shared-times";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  let controller: TimerClient;
  const stream = new ReadableStream<Uint8Array>({
    start: (ctrl) => {
      controller = ctrl;
      sharedTimer.sse.addClient(id, ctrl);
      console.debug("Stream started", id);
    },
    cancel: () => {
      sharedTimer.sse.removeClient(id, controller);
      console.debug("Stream cancelled", id);
    },
  });
  const closeStream = () => {
    sharedTimer.sse.removeClient(id, controller);
    console.debug("Request aborted", id);
  };
  request.signal.addEventListener("abort", closeStream);

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
    const parsed = sharedTimer.parseTimerEvent(await request.json());
    if (!parsed.success) {
      return new Response("Invalid request body", { status: 400 });
    }
    const newTimer = sharedTimer.updateCurrentTimer(id, parsed.data);
    if (!newTimer) return new Response("Invalid request", { status: 400 });
    sharedTimer.sse.broadcast(id, parsed.data);
    return new Response(null, { status: 204 }); // No Content
  } catch (error) {
    console.error(error);
    return new Response("Error processing PATCH request", { status: 500 });
  }
};
