"use client";

import { createContext } from "react";
import {
  type TimerControllerSettingsType,
  initialTimerControllerSettings,
} from "./settings";
import { type CurrentTimerType, initReadyTimer } from "./timer";
import { useTimerCore } from "./use-timer-core";

type UpdateCurrentTimerProps =
  | Pick<CurrentTimerType, "name">
  | CurrentTimerType;

export const TimerContext = createContext<ReturnType<typeof useTimerCore>>({
  time: {
    h: 0,
    hh: "00",
    m: 0,
    mm: "00",
    s: 0,
    ss: "00",
    ms: 0,
    msPad: "000",
    fullSeconds: 0,
    fullMinutes: 0,
    elapsedSeconds: 0,
    elapsedMinutes: 0,
  },
  status: "ready",
  currentTimer: initReadyTimer(),
  timerControlSettings: initialTimerControllerSettings,
  isOvertime: false,
  start: () => {},
  pause: () => {},
  resume: () => {},
  stop: () => {},
  reset: () => {},
  updateTime: (_: Partial<{ minutes: number; seconds: number }>) => undefined,
  playFinishSound: () => {},
  updateCurrentTimer: (_: UpdateCurrentTimerProps) => initReadyTimer(),
  updateTimerControlSettings: (_: Partial<TimerControllerSettingsType>) => {},
});

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const timerCore = useTimerCore();
  return (
    <TimerContext.Provider value={timerCore}>{children}</TimerContext.Provider>
  );
};
