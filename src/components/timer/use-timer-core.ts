import { isSamePath } from "@/lib/url";
import { useEffect, useRef, useState } from "react";
import {
  loadCurrentTimer,
  loadTimerControlSettings,
  storeTimerControlSettings,
} from "./local-storage";
import { storeCurrentTimer } from "./local-storage";
import {
  type TimerControllerSettingsType,
  finishSoundOptions,
  initialTimerControllerSettings,
} from "./settings";
import {
  type CurrentTimerType,
  initReadyTimer,
  pauseTimer,
  resetTimer,
  resumeTimer,
  startTimer,
  stopTimer,
  tickTimer,
  updateTimer,
} from "./timer";

type UpdateCurrentTimerProps =
  | Pick<CurrentTimerType, "name">
  | CurrentTimerType;

export const useTimerCore = () => {
  const [currentTimer, setCurrentTimer] =
    useState<CurrentTimerType>(initReadyTimer);
  const [timerControlSettings, setTimerControlSettings] =
    useState<TimerControllerSettingsType>(initialTimerControllerSettings);
  const [finishSoundAudio, setFinishSoundAudio] =
    useState<HTMLAudioElement | null>(null);

  const tickIntervalRef = useRef<Timer | null>(null);

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
  const clearTickInterval = () => {
    if (tickIntervalRef.current) {
      clearInterval(tickIntervalRef.current);
      tickIntervalRef.current = null;
    }
  };
  const loopTick = () => {
    clearTickInterval();
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
    clearTickInterval();
  };

  const resume = () => {
    setCurrentTimer(resumeTimer);
    loopTick();
  };

  const stop = () => {
    setCurrentTimer(stopTimer);
    clearTickInterval();
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
    setCurrentTimer(newTimer);
    storeCurrentTimer(newTimer);
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

  // Load from local storage
  useEffect(() => {
    setTimerControlSettings((prev) => loadTimerControlSettings() || prev);
    setCurrentTimer((prev) => loadCurrentTimer() || prev);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: for initial render
  useEffect(() => {
    const isTickingDesynchronized =
      currentTimer.status === "running" && !tickIntervalRef.current;
    if (!isTickingDesynchronized) return;
    loopTick();
  }, [currentTimer.status]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: for cleanup
  useEffect(() => {
    return () => clearTickInterval();
  }, []);

  return {
    time,
    status: currentTimer.status,
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
