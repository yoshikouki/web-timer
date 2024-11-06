import { useContext, useRef } from "react";
import { startTimer, stopTimer, tickTimer } from "./timer";
import { TimerContext } from "./timer-provider";

export const useTimer = () => {
  const {
    timers,
    // setTimers,
    currentTimer,
    setCurrentTimer,
    timerControlSettings,
    setTimerControlSettings,
  } = useContext(TimerContext);
  const tickIntervalRef = useRef<NodeJS.Timeout>();

  const tick = () => {
    setCurrentTimer((prev) => {
      const newTimer = tickTimer(prev);
      if (0 < newTimer.remainingTime) return newTimer;
      // TODO: handle overflow
      return newTimer;
    });
  };

  const start = () => {
    setCurrentTimer(startTimer);
    tickIntervalRef.current = setInterval(
      tick,
      timerControlSettings.timerResolution,
    );
  };

  const stop = () => {
    setCurrentTimer(stopTimer);
    clearInterval(tickIntervalRef.current);
    tickIntervalRef.current = undefined;
  };

  return {
    timers,
    currentTimer,
    timerControlSettings,
    setTimerControlSettings,
    start,
    stop,
  };
};
