import { useContext } from "react";
import type { TimerControllerSettingsType } from "./settings";
import { TimerContext } from "./timer-provider";

export const useTimerSettings = () => {
  const { timerControlSettings, setTimerControlSettings } =
    useContext(TimerContext);

  const update = (settings: Partial<TimerControllerSettingsType>) => {
    setTimerControlSettings((prev) => ({
      ...prev,
      ...settings,
    }));
  };

  return {
    timerControlSettings,
    update,
  };
};
