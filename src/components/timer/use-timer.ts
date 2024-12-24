import { isSamePath } from "@/lib/url";
import { useContext, useEffect, useRef } from "react";
import { storeTimerControlSettings, storeTimers } from "./local-storage";
import { storeCurrentTimer } from "./local-storage";
import {
  type TimerControllerSettingsType,
  finishSoundOptions,
} from "./settings";
import {
  type CurrentTimerType,
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

type UpdateCurrentTimerProps =
  | Pick<CurrentTimerType, "name">
  | CurrentTimerType;

export const useTimer = () => {
  const {
    timers,
    setTimers,
    currentTimer,
    setCurrentTimer,
    timerControlSettings,
    setTimerControlSettings,
    finishSoundAudio,
    setFinishSoundAudio,
  } = useContext(TimerContext);

  const tickIntervalRef = useRef<Timer>(undefined);

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
        playFinishSound();
      }
      // TODO: handle overflow
      return newTimer;
    });
  };
  const loopTick = () => {
    clearInterval(tickIntervalRef.current);
    tickIntervalRef.current = setInterval(
      tick,
      timerControlSettings.timerResolution,
    );
  };

  const start = () => {
    setCurrentTimer(startTimer);
    prepareFinishSound();
    loopTick();
  };

  const pause = () => {
    setCurrentTimer(pauseTimer);
    clearInterval(tickIntervalRef.current);
    tickIntervalRef.current = undefined;
  };

  const resume = () => {
    setCurrentTimer(resumeTimer);
    loopTick();
  };

  const stop = () => {
    setCurrentTimer(stopTimer);
    clearInterval(tickIntervalRef.current);
    tickIntervalRef.current = undefined;
  };

  const reset = () => {
    setCurrentTimer(resetTimer);
  };

  const updateTime = (value: Partial<{ minutes: number; seconds: number }>) => {
    if (currentTimer.status !== "ready") return;
    const { minutes = time.fullMinutes, seconds = time.s } = value;
    const newTimer = updateTimer(currentTimer, { minutes, seconds });
    updateCurrentTimer(newTimer);
    return newTimer;
  };

  const prepareFinishSound = (
    settings?: Partial<TimerControllerSettingsType>,
  ) => {
    const { finishSound, finishSoundVolume } = {
      ...timerControlSettings,
      ...settings,
    };
    const finishSoundPath = finishSoundOptions.find(
      (option) => option.key === finishSound,
    )?.path;
    if (!finishSoundPath) return null;
    if (isSamePath(finishSoundAudio?.src, finishSoundPath))
      return finishSoundAudio;
    const sound = finishSoundAudio || new Audio(finishSoundPath);
    sound.src = finishSoundPath;
    sound.volume = finishSoundVolume;
    sound.load();
    setFinishSoundAudio(sound);
    return sound;
  };

  const playFinishSound = () => {
    const sound = prepareFinishSound();
    if (!sound) return;
    sound.volume = timerControlSettings.finishSoundVolume;
    sound.currentTime = 0;
    sound.play();
  };

  const updateCurrentTimer = (props: UpdateCurrentTimerProps) => {
    const newTimer = {
      ...currentTimer,
      ...props,
    };
    const newTimers = updateTimers(timers, newTimer);
    setCurrentTimer(newTimer);
    setTimers(newTimers);
    storeCurrentTimer(newTimer);
    storeTimers(newTimers);
    return newTimer;
  };

  const updateTimerControlSettings = (
    timerControlSettings: Partial<TimerControllerSettingsType>,
  ) => {
    setTimerControlSettings((prev) => {
      const newTimerControlSettings = {
        ...prev,
        ...timerControlSettings,
      };
      if (
        newTimerControlSettings.finishSound ||
        newTimerControlSettings.finishSoundVolume
      ) {
        prepareFinishSound(newTimerControlSettings);
      }
      storeTimerControlSettings(newTimerControlSettings);
      return newTimerControlSettings;
    });
  };

  useEffect(() => {
    return () => clearInterval(tickIntervalRef.current);
  }, []);

  return {
    time,
    status: currentTimer.status,
    timers,
    currentTimer,
    timerControlSettings,
    isOvertime: currentTimer.remainingTime < 0,
    start,
    pause,
    resume,
    stop,
    reset,
    updateTime,
    playFinishSound,
    updateCurrentTimer,
    updateTimerControlSettings,
  };
};
