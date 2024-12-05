import { randomID } from "@/lib/utils";
import { z } from "zod";

export type TimersType = BaseTimerType[];

type BaseTimerType = {
  id: string;
  duration: number;
};

// ReadyTimer -> RunningTimer -> StoppedTimer
//               RunningTimer <-> PausedTimer -> StoppedTimer

const ReadyTimerSchema = z.object({
  id: z.string(),
  status: z.literal("ready"),
  startTime: z.null(),
  duration: z.number(), // ms
  remainingTime: z.number(), // ms
});
export type ReadyTimerType = z.infer<typeof ReadyTimerSchema>;

const RunningTimerSchema = z.object({
  id: z.string(),
  status: z.literal("running"),
  startTime: z.number(),
  duration: z.number(), // ms
  remainingTime: z.number(), // ms
});
export type RunningTimerType = z.infer<typeof RunningTimerSchema>;

const PausedTimerSchema = z.object({
  id: z.string(),
  status: z.literal("paused"),
  startTime: z.number(),
  duration: z.number(),
  remainingTime: z.number(), // ms
  pausedTime: z.number(), // ms
});
export type PausedTimerType = z.infer<typeof PausedTimerSchema>;

const StoppedTimerSchema = z.object({
  id: z.string(),
  status: z.literal("stopped"),
  startTime: z.number(),
  duration: z.number(), // ms
  remainingTime: z.number(), // ms
});
export type StoppedTimerType = z.infer<typeof StoppedTimerSchema>;

// TimerType has common properties
export const CurrentTimerSchema = z.union([
  RunningTimerSchema,
  ReadyTimerSchema,
  PausedTimerSchema,
  StoppedTimerSchema,
]);
export type CurrentTimerType = z.infer<typeof CurrentTimerSchema>;

export const initTimers = (): TimersType => [
  {
    id: randomID(),
    duration: 300_000,
  },
];

export const updateTimers = (
  timers: TimersType,
  newTimer: CurrentTimerType,
) => {
  const newTimers = timers.map((timer) =>
    timer.id === newTimer.id
      ? {
          ...timer,
          duration: newTimer.duration,
        }
      : timer,
  );
  return newTimers;
};

export const initReadyTimer = (baseTimer?: BaseTimerType): ReadyTimerType => ({
  id: baseTimer?.id ?? randomID(),
  status: "ready",
  startTime: null,
  duration: baseTimer?.duration ?? 300_000, // 5 minutes
  remainingTime: baseTimer?.duration ?? 300_000,
});

const commonTimerProps = (
  _currentTimer: CurrentTimerType,
): Omit<CurrentTimerType, "pausedTime"> => {
  const { pausedTime, ...commonProps } = {
    ..._currentTimer,
    pausedTime: "pausedTime" in _currentTimer ? _currentTimer.pausedTime : null,
  };
  return commonProps;
};

export const startTimer = (
  _currentTimer: CurrentTimerType,
): RunningTimerType => {
  const currentTimer = commonTimerProps(_currentTimer);
  return {
    ...currentTimer,
    status: "running",
    startTime: Date.now(),
    remainingTime: currentTimer.duration,
  };
};

export const tickTimer = (currentTimer: CurrentTimerType): RunningTimerType => {
  switch (currentTimer.status) {
    case "running": {
      const elapsedTime = Date.now() - currentTimer.startTime;
      return {
        ...currentTimer,
        remainingTime: currentTimer.duration - elapsedTime,
      };
    }
    case "paused": {
      return resumeTimer(currentTimer);
    }
    default:
      return {
        ...currentTimer,
        status: "running",
        startTime: currentTimer.startTime ?? Date.now(),
      };
  }
};

export const pauseTimer = (currentTimer: CurrentTimerType): PausedTimerType => {
  if (currentTimer.status === "paused") return currentTimer;
  return {
    ...currentTimer,
    status: "paused",
    startTime: currentTimer.startTime ?? Date.now(),
    pausedTime: Date.now(),
  };
};

export const resumeTimer = (
  currentTimer: CurrentTimerType,
): RunningTimerType => {
  if (currentTimer.status !== "paused") {
    return {
      ...currentTimer,
      status: "running",
      startTime: currentTimer.startTime ?? Date.now(),
    };
  }
  const { pausedTime, ...rest } = currentTimer;
  const elapsedTime = pausedTime - currentTimer.startTime;
  return {
    ...rest,
    status: "running",
    startTime: Date.now() - elapsedTime,
    remainingTime: currentTimer.duration - elapsedTime,
  };
};

export const stopTimer = (currentTimer: CurrentTimerType): StoppedTimerType => {
  return {
    ...commonTimerProps(currentTimer),
    status: "stopped",
    startTime: currentTimer.startTime ?? Date.now(),
  };
};

export const resetTimer = (currentTimer: CurrentTimerType): ReadyTimerType => {
  return {
    ...commonTimerProps(currentTimer),
    status: "ready",
    startTime: null,
    remainingTime: currentTimer.duration,
  };
};

export const updateTimer = (
  currentTimer: CurrentTimerType,
  value: { minutes: number; seconds: number },
): CurrentTimerType => {
  const duration = Math.max(value.minutes * 60_000 + value.seconds * 1_000, 0);
  return {
    ...currentTimer,
    duration,
    remainingTime: duration,
  };
};
