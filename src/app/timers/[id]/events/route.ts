import {
  type CurrentTimerType,
  initReadyTimer,
  pauseTimer,
  resetTimer,
  resumeTimer,
  startTimer,
  stopTimer,
  updateTimer,
} from "@/components/timer/timer";
import {
  TimerEventMessageSchema,
  type TimerEventMessageType,
} from "@/schema/timer-event";

type TimerId = string;
type TimerClient = ReadableStreamDefaultController<Uint8Array>;

const clientsByTimer = new Map<TimerId, Set<TimerClient>>();
const timers = new Map<TimerId, CurrentTimerType>();

const initTimer = (id: TimerId) => {
  const storedTimer = timers.get(id);
  if (storedTimer) return storedTimer;
  const timer = initReadyTimer();
  timers.set(id, timer);
  return timer;
};

const updateCurrentTimer = (id: TimerId, data: TimerEventMessageType) => {
  const currentTimer = initTimer(id);
  let newTimer: CurrentTimerType;
  switch (data.event) {
    case "start":
      newTimer = startTimer(currentTimer);
      break;
    case "pause":
      newTimer = pauseTimer(currentTimer);
      break;
    case "resume":
      newTimer = resumeTimer(currentTimer);
      break;
    case "stop":
      newTimer = stopTimer(currentTimer);
      break;
    case "reset":
      newTimer = resetTimer(currentTimer);
      break;
    case "updateTime":
      if (currentTimer.status !== "ready") return;
      newTimer = updateTimer(currentTimer, data.time);
      break;
    default:
      return;
  }
  if (!newTimer) return;
  timers.set(id, newTimer);
  return newTimer;
};

const addClient = (id: TimerId, controller: TimerClient) => {
  const timer = initTimer(id);
  const clientSet = clientsByTimer.get(id) || new Set<TimerClient>();
  clientSet.add(controller);
  clientsByTimer.set(id, clientSet);
  controller.enqueue(
    encodeTimerEventMessage({
      event: "currentTimer",
      currentTimer: timer,
    }),
  );
};

const removeClient = (id: TimerId, controller: TimerClient) => {
  const clientSet = clientsByTimer.get(id);
  if (!clientSet) return;
  clientSet.delete(controller);
  if (clientSet.size === 0) {
    clientsByTimer.delete(id);
  }
};

const encoder = new TextEncoder();
const encodeTimerEventMessage = (data: TimerEventMessageType) => {
  return encoder.encode(`data: ${JSON.stringify(data)}\n\n`);
};

const broadcast = async (id: TimerId, data: TimerEventMessageType) => {
  const encodedData = encodeTimerEventMessage(data);
  const clientsSet = clientsByTimer.get(id);
  if (!clientsSet) return;
  console.log("clientsSet.size", clientsSet.size);
  await Promise.all(
    Array.from(clientsSet).map((controller) => controller.enqueue(encodedData)),
  );
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
    const newTimer = updateCurrentTimer(id, parsed.data);
    if (!newTimer) return new Response("Invalid request", { status: 400 });
    broadcast(id, parsed.data);
    return new Response(null, { status: 204 }); // No Content
  } catch (error) {
    console.error(error);
    return new Response("Error processing PATCH request", { status: 500 });
  }
};
