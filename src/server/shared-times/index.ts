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

import { SSE, type SSEChannelId } from "./sse";
export * from "./sse";

const timers = new Map<SSEChannelId, CurrentTimerType>();

const initTimer = (_id?: SSEChannelId) => {
  if (_id) {
    const storedTimer = timers.get(_id);
    if (storedTimer) return storedTimer;
  }
  const timer = {
    ...initReadyTimer(),
    ...(_id ? { id: _id } : {}),
  };
  timers.set(timer.id, timer);
  return timer;
};

const createTimer = (data: CurrentTimerType) => {
  const timer = {
    ...initReadyTimer(),
    ...data,
  };
  timers.set(timer.id, timer);
  return timer;
};

const updateCurrentTimer = (id: SSEChannelId, data: TimerEventMessageType) => {
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

const sharedTimer = {
  sse: new SSE({
    onAddClient: ({ channelId, controller }) => {
      const timer = initTimer(channelId);
      controller.enqueue(
        encodeTimerEventMessage({
          event: "currentTimer",
          currentTimer: timer,
        }),
      );
    },
    onRemoveClient: ({ channelId, clients }) => {
      if (0 < clients.size) return;
      timers.delete(channelId);
    },
  }),
  createTimer,
  updateCurrentTimer,
  parseTimerEvent,
};

export { sharedTimer };
