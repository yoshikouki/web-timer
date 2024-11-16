"use client";

import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useRef,
  useState,
} from "react";
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
});

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [timers, setTimers] = useState(initTimers());
  const [currentTimer, setCurrentTimer] = useState<CurrentTimerType>(
    initReadyTimer(timers[0]),
  );
  const [timerControlSettings, setTimerControlSettings] = useState(
    initialTimerControllerSettings,
  );
  const [finishSoundAudio, setFinishSoundAudio] =
    useState<HTMLAudioElement | null>(null);

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
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
