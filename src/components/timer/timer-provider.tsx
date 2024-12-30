"use client";

import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  loadCurrentTimer,
  loadTimerControlSettings,
  loadTimers,
} from "./local-storage";
import {
  type TimerControllerSettingsType,
  initialTimerControllerSettings,
} from "./settings";
import {
  type CurrentTimerType,
  type TimersType,
  initReadyTimer,
  initTimers,
} from "./timer";

type TimerContextType = {
  timers: TimersType;
  setTimers: Dispatch<SetStateAction<TimersType>>;
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
  timers: [],
  setTimers: () => {},
  currentTimer: initReadyTimer(),
  setCurrentTimer: () => {},
  timerControlSettings: initialTimerControllerSettings,
  setTimerControlSettings: () => {},
  finishSoundAudio: null,
  setFinishSoundAudio: () => {},
  tickIntervalRef: { current: null },
});

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const newTimers = initTimers();
  const [timers, setTimers] = useState<TimersType>(newTimers);
  const [currentTimer, setCurrentTimer] = useState<CurrentTimerType>(
    initReadyTimer(newTimers[0]),
  );
  const [timerControlSettings, setTimerControlSettings] =
    useState<TimerControllerSettingsType>(initialTimerControllerSettings);
  const [finishSoundAudio, setFinishSoundAudio] =
    useState<HTMLAudioElement | null>(null);

  const tickIntervalRef = useRef<Timer | null>(null);

  useEffect(() => {
    setTimerControlSettings((prev) => loadTimerControlSettings() || prev);
    setCurrentTimer((prev) => loadCurrentTimer() || prev);
    setTimers((prev) => loadTimers() || prev);
  }, []);

  return (
    <TimerContext.Provider
      value={{
        timers,
        setTimers,
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
