import { useContext } from "react";
import { TimerContext } from "./timer-provider";

export const useTimer = () => {
  const core = useContext(TimerContext);

  return core;
};
