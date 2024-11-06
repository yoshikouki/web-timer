"use client";

import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useState,
} from "react";
import {
  type TimerControllerSettingsType,
  initialTimerControllerSettings,
} from "./settings";
import {
  type CurrentTimerType,
  type TimersType,
  initialCurrentTimer,
  initialTimers,
} from "./timer";

type TimerContextType = {
  timers: TimersType;
  setTimers: Dispatch<SetStateAction<TimersType>>;
  timerControlSettings: TimerControllerSettingsType;
  setTimerControlSettings: Dispatch<
    SetStateAction<TimerControllerSettingsType>
  >;
  currentTimer: CurrentTimerType;
  setCurrentTimer: Dispatch<SetStateAction<CurrentTimerType>>;
};

export const TimerContext = createContext<TimerContextType>({
  timers: initialTimers,
  setTimers: () => {},
  timerControlSettings: initialTimerControllerSettings,
  setTimerControlSettings: () => {},
  currentTimer: initialCurrentTimer,
  setCurrentTimer: () => {},
});

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [timers, setTimers] = useState(initialTimers);
  const [timerControlSettings, setTimerControlSettings] = useState(
    initialTimerControllerSettings,
  );
  const [currentTimer, setCurrentTimer] =
    useState<CurrentTimerType>(initialCurrentTimer);
  return (
    <TimerContext.Provider
      value={{
        timers,
        setTimers,
        timerControlSettings,
        setTimerControlSettings,
        currentTimer,
        setCurrentTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
