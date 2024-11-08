import { useContext, useRef } from "react";
import {
  pauseTimer,
  resumeTimer,
  startTimer,
  stopTimer,
  tickTimer,
} from "./timer";
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

  const pause = () => {
    setCurrentTimer(pauseTimer);
    clearInterval(tickIntervalRef.current);
    tickIntervalRef.current = undefined;
  };

  const resume = () => {
    setCurrentTimer(resumeTimer);
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

  const absRemainingTime = Math.abs(currentTimer.remainingTime);
  const ms = absRemainingTime % 1000;
  const s = Math.floor(absRemainingTime / 1000) % 60;
  const m = Math.floor(absRemainingTime / 1000 / 60) % 60;
  const h = Math.floor(absRemainingTime / 1000 / 60 / 60);
  const time = {
    h,
    hh: h.toString().padStart(2, "0"),
    m,
    mm: m.toString().padStart(2, "0"),
    s,
    ss: s.toString().padStart(2, "0"),
    ms,
    msPad: ms.toString().padStart(3, "0"),
  };

  return {
    time,
    status: currentTimer.status,
    timers,
    currentTimer,
    timerControlSettings,
    setTimerControlSettings,
    start,
    pause,
    resume,
    stop,
  };
};
