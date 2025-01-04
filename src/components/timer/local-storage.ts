import {
  CurrentTimerSchema,
  type CurrentTimerType,
  calculateRemainingTime,
} from "./timer";
import type { TimerControllerSettingsType } from "./timer-controller-settings/settings";

const storage = globalThis.localStorage;

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
