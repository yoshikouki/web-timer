import {
  type ClientId,
  type Controller,
  sharedTimer,
} from "@/server/shared-times";
import { cookies } from "next/headers";

const COOKIE_NAME = "shared-timer-client-id";

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
      controller = ctrl;
      clientId = sharedTimer.sse.addClient({
        channelId: channelId,
        controller,
        clientId: cookieStore.get(COOKIE_NAME)?.value,
      });
      cookieStore.set(COOKIE_NAME, clientId);
    },
    cancel: () => {
      sharedTimer.sse.removeClient({ channelId, clientId });
    },
    pull: () => {
      if (!request.signal.aborted) return;
      sharedTimer.sse.removeClient({ channelId, clientId });
    },
  });
  request.signal.addEventListener("abort", () => {
    sharedTimer.sse.removeClient({ channelId, clientId });
  });
  console.log("DEBUG: request.signal", request.signal, request.signal.aborted);

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
