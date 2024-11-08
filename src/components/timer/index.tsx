"use client";

import { useTimer } from "./use-timer";

export const Timer = () => {
  const { currentTimer } = useTimer();
  return (
    <p className="font-bold text-[13vw] tabular-nums">
    </p>
  );
};
