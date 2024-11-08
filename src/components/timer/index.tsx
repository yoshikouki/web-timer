"use client";

import { useTimer } from "./use-timer";

export const Timer = () => {
  const { time } = useTimer();
  return (
    <p className="font-bold text-[13vw] tabular-nums">
      {time.mm}:{time.ss}
    </p>
  );
};
