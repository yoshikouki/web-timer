import { useContext, useRef } from "react";
import {
  pauseTimer,
  resetTimer,
  resumeTimer,
  startTimer,
  stopTimer,
  tickTimer,
  updateTimer,
  updateTimers,
} from "./timer";
import { TimerContext } from "./timer-provider";

export const useTimer = () => {
  const {
    timers,
    setTimers,
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

  const reset = () => {
    setCurrentTimer(resetTimer);
  };

  const updateTime = (value: { minutes: number; seconds: number }) => {
    if (currentTimer.status !== "ready") {
      console.error("Timer is required to be ready to update time");
      return;
    }
    const newTimer = updateTimer(currentTimer, value);
    setCurrentTimer(newTimer);
    setTimers(updateTimers(timers, newTimer));
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
    reset,
    updateTime,
  };
};
