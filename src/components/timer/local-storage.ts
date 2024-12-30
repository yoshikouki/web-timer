import type { TimerControllerSettingsType } from "./settings";
import {
  CurrentTimerSchema,
  type CurrentTimerType,
  type TimersType,
  calculateRemainingTime,
} from "./timer";

const storage = globalThis.localStorage;

export const storeTimers = (timers: TimersType) => {
  if (!storage) return;
  storage.setItem("timers", JSON.stringify(timers));
};

export const loadTimers = (): TimersType => {
  const timers = storage?.getItem("timers");
  return timers ? JSON.parse(timers) : null;
};

export const storeCurrentTimer = (timer: CurrentTimerType) => {
  if (!storage) return;
  storage.setItem("currentTimer", JSON.stringify(timer));
};

export const loadCurrentTimer = (): CurrentTimerType | null => {
  const timer = storage?.getItem("currentTimer");
  if (!timer) return null;
  const result = CurrentTimerSchema.safeParse(JSON.parse(timer));
  if (!result.success) {
    console.error("Invalid current timer", result.error);
    return null;
  }
  const currentTimer = {
    ...result.data,
    remainingTime: calculateRemainingTime(result.data),
  };
  return currentTimer;
};

export const storeTimerControlSettings = (
  settings: TimerControllerSettingsType,
) => {
  if (!storage) return;
  storage.setItem("timerControlSettings", JSON.stringify(settings));
};

export const loadTimerControlSettings =
  (): TimerControllerSettingsType | null => {
    const settings = storage?.getItem("timerControlSettings");
    return settings ? JSON.parse(settings) : null;
  };
