import { useContext } from "react";
import { storeCurrentTimer } from "./local-storage";
import type { CurrentTimerType } from "./timer";
import { TimerContext } from "./timer-provider";

type UpdateCurrentTimerProps =
  | Pick<CurrentTimerType, "name">
  | CurrentTimerType;

export const useTimer = () => {
  const core = useContext(TimerContext);

  const updateCurrentTimer = (props: UpdateCurrentTimerProps) => {
    const newTimer = core.updateCurrentTimer(props);
    storeCurrentTimer(newTimer);
    return newTimer;
  };

  return {
    ...core,
    updateCurrentTimer,
  };
};
