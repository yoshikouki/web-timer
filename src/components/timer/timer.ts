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
  id: baseTimer?.id ?? crypto.randomUUID(),
  status: "ready",
  startTime: null,
  duration: baseTimer?.duration ?? 300_000, // 5 minutes
  remainingTime: baseTimer?.duration ?? 300_000,
});
