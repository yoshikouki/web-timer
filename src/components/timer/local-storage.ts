import type { TimerControllerSettingsType } from "./settings";
import type { CurrentTimerType, TimersType } from "./timer";

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

export const loadCurrentTimer = (): CurrentTimerType => {
  const timer = storage?.getItem("currentTimer");
  return timer ? JSON.parse(timer) : null;
};

export const storeTimerControlSettings = (
  settings: TimerControllerSettingsType,
) => {
  if (!storage) return;
  storage.setItem("timerControlSettings", JSON.stringify(settings));
};

export const loadTimerControlSettings = (): TimerControllerSettingsType => {
  const settings = storage?.getItem("timerControlSettings");
  return settings ? JSON.parse(settings) : null;
};
