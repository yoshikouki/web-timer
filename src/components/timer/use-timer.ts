import { useContext } from "react";
import { TimerContext } from "./timer-provider";

export const useTimer = () => {
  const {
    timers,
    setTimers,
    timerControlSettings,
    setTimerControlSettings,
    currentTimer,
    setCurrentTimer,
  } = useContext(TimerContext);

  return {
    timers,
    setTimers,
    timerControlSettings,
    setTimerControlSettings,
    currentTimer,
  };
};
