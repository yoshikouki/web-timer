"use client";

import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { loadCurrentTimer, loadTimerControlSettings } from "./local-storage";
import {
  type TimerControllerSettingsType,
  initialTimerControllerSettings,
} from "./settings";
import { type CurrentTimerType, initReadyTimer } from "./timer";

type TimerContextType = {
  currentTimer: CurrentTimerType;
  setCurrentTimer: Dispatch<SetStateAction<CurrentTimerType>>;
  timerControlSettings: TimerControllerSettingsType;
  setTimerControlSettings: Dispatch<
    SetStateAction<TimerControllerSettingsType>
  >;
  finishSoundAudio: HTMLAudioElement | null;
  setFinishSoundAudio: Dispatch<SetStateAction<HTMLAudioElement | null>>;
  tickIntervalRef: React.RefObject<Timer | null>;
};

export const TimerContext = createContext<TimerContextType>({
  currentTimer: initReadyTimer(),
  setCurrentTimer: () => {},
  timerControlSettings: initialTimerControllerSettings,
  setTimerControlSettings: () => {},
  finishSoundAudio: null,
  setFinishSoundAudio: () => {},
  tickIntervalRef: { current: null },
});

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTimer, setCurrentTimer] =
    useState<CurrentTimerType>(initReadyTimer);
  const [timerControlSettings, setTimerControlSettings] =
    useState<TimerControllerSettingsType>(initialTimerControllerSettings);
  const [finishSoundAudio, setFinishSoundAudio] =
    useState<HTMLAudioElement | null>(null);

  const tickIntervalRef = useRef<Timer | null>(null);

  useEffect(() => {
    setTimerControlSettings((prev) => loadTimerControlSettings() || prev);
    setCurrentTimer((prev) => loadCurrentTimer() || prev);
  }, []);

  return (
    <TimerContext.Provider
      value={{
        timerControlSettings,
        setTimerControlSettings,
        currentTimer,
        setCurrentTimer,
        finishSoundAudio,
        setFinishSoundAudio,
        tickIntervalRef,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
