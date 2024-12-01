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
export type TimerClient = ReadableStreamDefaultController<Uint8Array>;

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
    timers.delete(id);
  }
};

const parseTimerEvent = (data: unknown) => {
  const result = TimerEventMessageSchema.safeParse(data);
  if (!result.success) {
    console.error("Invalid timer event", result.error);
  }
  return result;
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
    Array.from(clientsSet).map((controller) => {
      try {
        controller.enqueue(encodedData);
      } catch (error) {
        console.error("Error broadcasting event", error);
        removeClient(id, controller);
        controller.close();
      }
    }),
  );
};

const sharedTimer = {
  sse: {
    addClient,
    removeClient,
    broadcast,
  },
  updateCurrentTimer,
  parseTimerEvent,
};

export { sharedTimer };
