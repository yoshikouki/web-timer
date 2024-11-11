"use client";

import { fonts } from "@/app/fonts";
import { cn, sequenceNumbers } from "@/lib/utils";
import { WheelPicker } from "../wheel-picker";
import { NumberWheel } from "./number-wheel";
import { useTimer } from "./use-timer";

export const Timer = () => {
  const { time, status, updateTime, isOvertime, timerControlSettings } =
    useTimer();
  const paddedFullMinutes = time.fullMinutes.toString().padStart(3, "0");
  const font = fonts[timerControlSettings.font];

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1 font-bold text-[clamp(3rem,25vw,100vh)] tabular-nums transition-all",
        !["ready", "running"].includes(status) && "opacity-70",
        isOvertime && "text-destructive",
        font.className,
      )}
    >
      <WheelPicker
        className="inline-flex items-center justify-center"
        value={time.m}
        options={sequenceNumbers(1000)}
        onChange={(value) => {
          updateTime({ minutes: value, seconds: time.s });
        }}
      >
        <NumberWheel
          value={paddedFullMinutes[0]}
          className={cn(paddedFullMinutes[0] === "0" && "hidden opacity-0")}
        />
        <NumberWheel value={paddedFullMinutes[1]} />
        <NumberWheel value={paddedFullMinutes[2]} />
      </WheelPicker>
      <span
        className={cn(
          "font-normal opacity-20 transition-opacity duration-500 ease-in-out",
          0 < time.ms && time.ms < 500 && "opacity-10",
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
        <NumberWheel value={time.ss[0]} options={sequenceNumbers(6)} />
        <NumberWheel value={time.ss[1]} />
      </WheelPicker>
    </div>
  );
};
