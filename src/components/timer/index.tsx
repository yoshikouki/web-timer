"use client";

import { cn } from "@/lib/utils";
import { NumberWheel } from "./number-wheel";
import { useTimer } from "./use-timer";

export const Timer = () => {
  const { time, status, updateTime } = useTimer();

  return (
    <div className="flex items-center justify-center gap-1 font-bold text-[clamp(3rem,25vw,100vh)] tabular-nums">
      <span className="inline-flex items-center justify-center">
        <NumberWheel number={Number.parseInt(time.mm[0])} />
        <NumberWheel number={Number.parseInt(time.mm[1])} />
      </span>
      <span
        className={cn(
          "font-normal opacity-30 transition-opacity duration-300",
          time.ms < 300 && "opacity-20",
        )}
      >
        :
      </span>
      <span className="inline-flex items-center justify-center">
        <NumberWheel number={Number.parseInt(time.ss[0])} />
        <NumberWheel number={Number.parseInt(time.ss[1])} />
      </span>
    </div>
  );
};
