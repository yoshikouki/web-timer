import { isSamePath } from "@/lib/url";
import { useEffect, useRef, useState } from "react";
import { events } from "../analytics/events";
import {
  loadCurrentTimer,
  loadTimerControlSettings,
  storeCurrentTimer,
  storeTimerControlSettings,
} from "./local-storage";
import {
  type CurrentTimerType,
  calculateTime,
  initReadyTimer,
  isInitialTimer,
  pauseTimer,
  resetTimer,
  resumeTimer,
  startTimer,
  stopTimer,
  tickTimer,
  updateTimer,
} from "./timer";
import {
  type TimerControllerSettingsType,
  finishSoundOptions,
  initialTimerControllerSettings,
} from "./timer-controller-settings/settings";

export type UpdateCurrentTimerProps =
  | Pick<CurrentTimerType, "name">
  | CurrentTimerType;

export type TimerUpdater = (prev: CurrentTimerType) => CurrentTimerType;

export const isTimerUpdater = (value: unknown): value is TimerUpdater =>
  typeof value === "function";

export const useTimerCore = () => {
  const [currentTimer, setCurrentTimer] =
    useState<CurrentTimerType>(initReadyTimer);
  const time = calculateTime(currentTimer);
  const [timerControlSettings, setTimerControlSettings] =
    useState<TimerControllerSettingsType>(initialTimerControllerSettings);
  const [finishSoundAudio, setFinishSoundAudio] =
    useState<HTMLAudioElement | null>(null);

  const tickIntervalRef = useRef<Timer | null>(null);

  const tick = () => {
    updateCurrentTimer((prev) => {
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
    updateCurrentTimer(startTimer);
    prepareFinishSound();
    loopTick();
    events.timerStart(time.fullSeconds);
  };

  const pause = () => {
    updateCurrentTimer(pauseTimer);
    clearTickInterval();
    events.timerPause(time.fullSeconds);
  };

  const resume = () => {
    updateCurrentTimer(resumeTimer);
    loopTick();
    events.timerStart(time.fullSeconds);
  };

  const stop = () => {
    updateCurrentTimer(stopTimer);
    clearTickInterval();
  };

  const reset = () => {
    updateCurrentTimer(resetTimer);
    events.timerReset(time.fullSeconds);
  };

  const updateTime = (value: Partial<{ minutes: number; seconds: number }>) => {
    if (currentTimer.status !== "ready") return;
    const { minutes = time.fullMinutes, seconds = time.s } = value;
    const newTimer = updateTimer(currentTimer, { minutes, seconds });
    updateCurrentTimer(newTimer);
    events.timerTimeSet(minutes * 60 + seconds);
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
    events.timerComplete(time.fullSeconds);
  };

  const updateCurrentTimer = (
    props: UpdateCurrentTimerProps | TimerUpdater,
  ) => {
    if (isTimerUpdater(props)) {
      setCurrentTimer(props);
    } else {
      setCurrentTimer((prev) => ({
        ...prev,
        ...props,
      }));
    }
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
      if (timerControlSettings.font) {
        events.timerFontChange(timerControlSettings.font);
      }
      if (timerControlSettings.orientation) {
        events.timerOrientationChange(timerControlSettings.orientation);
      }
      storeTimerControlSettings(newTimerControlSettings);
      return newTimerControlSettings;
    });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: for initial render
  useEffect(() => {
    const isTickingDesynchronized =
      currentTimer.status === "running" && !tickIntervalRef.current;
    if (!isTickingDesynchronized) return;
    loopTick();
  }, [currentTimer.status]);

  useEffect(() => {
    if (isInitialTimer(currentTimer)) return;
    storeCurrentTimer(currentTimer);
  }, [currentTimer]);

  // Load from local storage
  useEffect(() => {
    setTimerControlSettings((prev) => loadTimerControlSettings() || prev);
    setCurrentTimer((prev) => loadCurrentTimer() || prev);
  }, []);

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
