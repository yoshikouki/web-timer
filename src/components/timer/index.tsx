"use client";

import { useTimer } from "./use-timer";

export const Timer = () => {
  const { currentTimer } = useTimer();
  return (
    <div className="font-bold text-[13vw]">{currentTimer.remainingTime}</div>
  );
};
