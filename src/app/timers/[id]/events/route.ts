import {
  type ClientId,
  type Controller,
  sharedTimer,
} from "@/server/shared-times";
import { cookies } from "next/headers";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id: channelId } = await params;
  const cookieStore = await cookies();

  let controller: Controller;
  let clientId: ClientId;

  const stream = new ReadableStream<Uint8Array>({
    start: (ctrl) => {
      console.log("DEBUG: Start stream", channelId);
      controller = ctrl;
      clientId = sharedTimer.sse.addClient({
        channelId: channelId,
        controller,
        clientId: cookieStore.get("shared-timer-client-id")?.value,
      });
      cookieStore.set("shared-timer-client-id", clientId);
    },
    cancel: (arg) => {
      console.log("DEBUG: Cancel stream", arg, channelId);
      sharedTimer.sse.removeClient({ channelId, clientId });
    },
    pull: (ctrl) => {
      if (request.signal.aborted) {
        console.log("DEBUG: Abort signal on pulling stream", channelId);
        sharedTimer.sse.removeClient({ channelId, clientId });
      }
    },
  });
  request.signal.addEventListener("abort", () => {
    console.log("DEBUG: Abort signal on event listener", channelId);
    sharedTimer.sse.removeClient({ channelId, clientId });
  });
  request.signal.onabort = () => {
    console.log("DEBUG: Abort signal on onabort", channelId);
    sharedTimer.sse.removeClient({ channelId, clientId });
  };

  return new Response(stream, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
};

export const PATCH = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const { id: channelId } = await params;
    const parsed = sharedTimer.parseTimerEvent(await request.json());
    if (!parsed.success) {
      console.error("Invalid request body", parsed.error);
      return new Response("Invalid request body", { status: 400 });
    }
    const newTimer = sharedTimer.updateCurrentTimer(channelId, parsed.data);
    if (!newTimer) {
      console.error("Invalid request", parsed.data);
      return new Response("Invalid request", { status: 400 });
    }
    sharedTimer.sse.broadcast(channelId, parsed.data);
    return new Response(null, { status: 204 }); // No Content
  } catch (error) {
    console.error(error);
    return new Response("Error processing PATCH request", { status: 500 });
  }
};
