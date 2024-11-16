import { useContext, useRef } from "react";
import { finishSoundOptions } from "./settings";
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
  const beepAudioRef = useRef<HTMLAudioElement | null>(null);

  const absRemainingMs = Math.abs(currentTimer.remainingTime);
  const ms = absRemainingMs % 1000;
  const fullSeconds = Math.floor(absRemainingMs / 1000);
  const s = fullSeconds % 60;
  const fullMinutes = Math.floor(fullSeconds / 60);
  const m = fullMinutes % 60;
  const h = Math.floor(fullMinutes / 60);
  const elapsedSeconds =
    Math.floor(currentTimer.duration - currentTimer.remainingTime) / 1000;
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const time = {
    h,
    hh: h.toString().padStart(2, "0"),
    m,
    mm: m.toString().padStart(2, "0"),
    s,
    ss: s.toString().padStart(2, "0"),
    ms,
    msPad: ms.toString().padStart(3, "0"),
    fullSeconds,
    fullMinutes,
    elapsedSeconds,
    elapsedMinutes,
  };

  const tick = () => {
    setCurrentTimer((prev) => {
      const newTimer = tickTimer(prev);
      if (0 < newTimer.remainingTime) return newTimer;
      // Just passed 0
      if (0 <= prev.remainingTime) {
        beepAudioRef.current?.play();
      }
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
    setFinishSound();
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
    if (currentTimer.status !== "ready") return;
    const newTimer = updateTimer(currentTimer, value);
    setCurrentTimer(newTimer);
    setTimers(updateTimers(timers, newTimer));
  };

  const setFinishSound = () => {
    const finishSoundPath = finishSoundOptions.find(
      (option) => option.key === timerControlSettings.finishSound,
    )?.path;
    beepAudioRef.current = new Audio(finishSoundPath);
    beepAudioRef.current.load();
  };

  return {
    time,
    status: currentTimer.status,
    timers,
    currentTimer,
    timerControlSettings,
    isOvertime: currentTimer.remainingTime < 0,
    setTimerControlSettings,
    start,
    pause,
    resume,
    stop,
    reset,
    updateTime,
  };
};
