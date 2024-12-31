import { randomID } from "@/lib/utils";
import { z } from "zod";

export const TimerNameSchema = z.string().max(64).nullish();
export type TimerNameType = z.infer<typeof TimerNameSchema>;

// ReadyTimer -> RunningTimer -> StoppedTimer
//               RunningTimer <-> PausedTimer -> StoppedTimer

const ReadyTimerSchema = z.object({
  id: z.string(),
  name: TimerNameSchema,
  status: z.literal("ready"),
  startTime: z.null(),
  duration: z.number(), // ms
  remainingTime: z.number(), // ms
});
export type ReadyTimerType = z.infer<typeof ReadyTimerSchema>;

const RunningTimerSchema = z.object({
  id: z.string(),
  name: TimerNameSchema,
  status: z.literal("running"),
  startTime: z.number(),
  duration: z.number(), // ms
  remainingTime: z.number(), // ms
});
export type RunningTimerType = z.infer<typeof RunningTimerSchema>;

const PausedTimerSchema = z.object({
  id: z.string(),
  name: TimerNameSchema,
  status: z.literal("paused"),
  startTime: z.number(),
  duration: z.number(),
  remainingTime: z.number(), // ms
  pausedTime: z.number(), // ms
});
export type PausedTimerType = z.infer<typeof PausedTimerSchema>;

const StoppedTimerSchema = z.object({
  id: z.string(),
  name: TimerNameSchema,
  status: z.literal("stopped"),
  startTime: z.number(),
  duration: z.number(), // ms
  remainingTime: z.number(), // ms
});
export type StoppedTimerType = z.infer<typeof StoppedTimerSchema>;

// TimerType has common properties
export const CurrentTimerSchema = z.union([
  ReadyTimerSchema,
  RunningTimerSchema,
  PausedTimerSchema,
  StoppedTimerSchema,
]);
export type CurrentTimerType = z.infer<typeof CurrentTimerSchema>;

export const initReadyTimer = (): ReadyTimerType => ({
  id: randomID(),
  status: "ready",
  startTime: null,
  duration: 300_000, // 5 minutes
  remainingTime: 300_000,
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

export const calculateRemainingTime = (currentTimer: CurrentTimerType) => {
  const elapsedTime = currentTimer.startTime
    ? Date.now() - currentTimer.startTime
    : 0;
  if (currentTimer.status !== "paused") {
    return currentTimer.duration - elapsedTime;
  }
  const pausedDuration =
    "pausedTime" in currentTimer ? Date.now() - currentTimer.pausedTime : 0;
  return currentTimer.duration - elapsedTime + pausedDuration;
};

export const tickTimer = (currentTimer: CurrentTimerType): RunningTimerType => {
  switch (currentTimer.status) {
    case "running": {
      return {
        ...currentTimer,
        remainingTime: calculateRemainingTime(currentTimer),
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
  const pausedTime = Date.now();
  const pausedTimer: PausedTimerType = {
    ...currentTimer,
    status: "paused",
    startTime: currentTimer.startTime ?? pausedTime,
    pausedTime,
  };
  return {
    ...pausedTimer,
    remainingTime: calculateRemainingTime(pausedTimer),
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

export const calculateTime = (currentTimer: CurrentTimerType) => {
  const absRemainingMs = Math.abs(currentTimer.remainingTime);
  const ms = absRemainingMs % 1000;
  const fullSeconds = Math.floor(absRemainingMs / 1000);
  const s = fullSeconds % 60;
  const fullMinutes = Math.floor(fullSeconds / 60);
  const m = fullMinutes % 60;
  const h = Math.floor(fullMinutes / 60);
  const elapsedSeconds =
    Math.floor(currentTimer.duration - currentTimer.remainingTime) / 1000;
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const time = {
    h,
    hh: h.toString().padStart(2, "0"),
    m,
    mm: m.toString().padStart(2, "0"),
    s,
    ss: s.toString().padStart(2, "0"),
    ms,
    msPad: ms.toString().padStart(3, "0"),
    fullSeconds,
    fullMinutes,
    elapsedSeconds,
    elapsedMinutes,
  };
  return time;
};
