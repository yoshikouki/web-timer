"use client";

import { useTimer } from "./use-timer";

export const Timer = () => {
  const { time } = useTimer();
  return (
    <div className="font-bold text-[clamp(3rem,25vw,100vh)] tabular-nums">
      {time.mm}:{time.ss}
    </div>
  );
};
