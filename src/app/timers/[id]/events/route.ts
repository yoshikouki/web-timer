import { type TimerClient, sharedTimer } from "@/server/shared-times";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  let controller: TimerClient;
  const stream = new ReadableStream<Uint8Array>({
    start: (ctrl) => {
      console.log("DEBUG: Stream started", id);
      controller = ctrl;
      sharedTimer.sse.addClient(id, ctrl);
    },
    cancel: (arg) => {
      console.log("DEBUG: Stream cancelled", arg, id);
      sharedTimer.sse.removeClient(id, controller);
    },
    pull: (ctrl) => {
      console.log("DEBUG: Stream pulled", id);
      if (request.signal.aborted) {
        console.log("DEBUG: Request aborted on pull", id);
        sharedTimer.sse.removeClient(id, ctrl);
      }
    },
  });
  request.signal.addEventListener("abort", () => {
    console.log("DEBUG: Request aborted on event listener", id);
    sharedTimer.sse.removeClient(id, controller);
  });
  request.signal.onabort = () => {
    console.log("DEBUG: Request aborted on onabort", id);
    sharedTimer.sse.removeClient(id, controller);
  };

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
      console.error("Invalid request body", parsed.error);
      return new Response("Invalid request body", { status: 400 });
    }
    const newTimer = sharedTimer.updateCurrentTimer(id, parsed.data);
    if (!newTimer) {
      console.error("Invalid request", parsed.data);
      return new Response("Invalid request", { status: 400 });
    }
    sharedTimer.sse.broadcast(id, parsed.data);
    return new Response(null, { status: 204 }); // No Content
  } catch (error) {
    console.error(error);
    return new Response("Error processing PATCH request", { status: 500 });
  }
};
