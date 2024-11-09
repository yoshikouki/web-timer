import { randomID } from "@/lib/utils";

export type TimersType = BaseTimerType[];

type BaseTimerType = {
  id: string;
  duration: number;
};

// ReadyTimerType -> RunningTimerType -> StoppedTimerType
//                   RunningTimerType <-> PausedTimerType -> StoppedTimerType

// TimerType has common properties
export type CurrentTimerType =
  | RunningTimerType
  | ReadyTimerType
  | PausedTimerType
  | StoppedTimerType;

type ReadyTimerType = {
  id: string;
  status: "ready";
  startTime: null;
  duration: number; // ms
  remainingTime: number; // ms
};

type RunningTimerType = {
  id: string;
  status: "running";
  startTime: number;
  duration: number; // ms
  remainingTime: number; // ms
};

type PausedTimerType = {
  id: string;
  status: "paused";
  startTime: number;
  duration: number;
  pausedTime: number; // ms
  remainingTime: number; // ms
};

type StoppedTimerType = {
  id: string;
  status: "stopped";
  startTime: number;
  duration: number; // ms
  remainingTime: number; // ms
};

export const initTimers = (): TimersType => [initReadyTimer()];

export const initReadyTimer = (baseTimer?: BaseTimerType): ReadyTimerType => ({
  id: baseTimer?.id ?? randomID(),
  status: "ready",
  startTime: null,
  duration: baseTimer?.duration ?? 300_000, // 5 minutes
  remainingTime: baseTimer?.duration ?? 300_000,
});

export const startTimer = (
  currentTimer: CurrentTimerType,
): RunningTimerType => {
  return {
    ...currentTimer,
    status: "running",
    startTime: Date.now(),
    remainingTime: currentTimer.duration,
  };
};

export const tickTimer = (currentTimer: CurrentTimerType): RunningTimerType => {
  if (currentTimer.status !== "running") {
    throw new Error(`Timer is not running. status: ${currentTimer.status}`);
  }
  const elapsedTime = Date.now() - currentTimer.startTime;
  return {
    ...currentTimer,
    remainingTime: currentTimer.duration - elapsedTime,
  };
};

export const pauseTimer = (currentTimer: CurrentTimerType): PausedTimerType => {
  if (currentTimer.status !== "running") {
    throw new Error(`Timer is not running. status: ${currentTimer.status}`);
  }
  return {
    ...currentTimer,
    status: "paused",
    pausedTime: Date.now(),
  };
};

export const resumeTimer = (
  currentTimer: CurrentTimerType,
): RunningTimerType => {
  if (currentTimer.status !== "paused") {
    throw new Error(`Timer is not paused. status: ${currentTimer.status}`);
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
  switch (currentTimer.status) {
    case "running":
      return {
        ...currentTimer,
        status: "stopped",
      };
    case "paused": {
      const { pausedTime, ...rest } = currentTimer;
      return {
        ...rest,
        status: "stopped",
      };
    }
    default:
      throw new Error(
        `Timer is not running or paused. status: ${currentTimer.status}`,
      );
  }
};

export const resetTimer = (currentTimer: CurrentTimerType): ReadyTimerType => {
  return {
    ...currentTimer,
    status: "ready",
    startTime: null,
    remainingTime: currentTimer.duration,
  };
};
