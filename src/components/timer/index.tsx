"use client";

import { cn, sequenceNumbers } from "@/lib/utils";
import { WheelPicker } from "../wheel-picker";
import { NumberWheel } from "./number-wheel";
import { useTimer } from "./use-timer";

export const Timer = () => {
  const { time, status, updateTime } = useTimer();

  return (
    <div className="flex items-center justify-center gap-1 font-bold text-[clamp(3rem,25vw,100vh)] tabular-nums">
      <WheelPicker
        className="inline-flex items-center justify-center"
        value={time.m}
        options={sequenceNumbers(60)}
        onChange={(value) => {
          updateTime({ minutes: value, seconds: time.s });
        }}
      >
        <NumberWheel number={Number.parseInt(time.mm[0])} />
        <NumberWheel number={Number.parseInt(time.mm[1])} />
      </WheelPicker>
      <span
        className={cn(
          "font-normal opacity-30 transition-opacity duration-300",
          time.ms < 300 && "opacity-20",
        )}
      >
        :
      </span>
      <WheelPicker
        className="inline-flex items-center justify-center"
        value={time.s}
        options={sequenceNumbers(6, 10)}
        onChange={(value) => {
          updateTime({ minutes: time.m, seconds: value });
        }}
      >
        <NumberWheel number={Number.parseInt(time.ss[0])} />
        <NumberWheel number={Number.parseInt(time.ss[1])} />
      </WheelPicker>
    </div>
  );
};
