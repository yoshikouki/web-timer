"use client";

import { fonts } from "@/app/fonts";
import { cn, sequenceNumbers } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon, RotateCcwIcon } from "lucide-react";
import { Button } from "../ui/button";
import { WheelPicker } from "../wheel-picker";
import { NumberWheel } from "./number-wheel";
import { TimerController } from "./timer-controller";
import { useTimer as useTimerHook } from "./use-timer";

export const Timer = (props?: {
  useTimer?: () => ReturnType<typeof useTimerHook>;
}) => {
  const useTimer = props?.useTimer || useTimerHook;
  const { time, status, updateTime, isOvertime, timerControlSettings, reset } =
    useTimer();
  const paddedFullMinutes = time.fullMinutes.toString().padStart(3, "0");
  const font = fonts[timerControlSettings.font];
  const isUpdatable = ["ready"].includes(status);

  return (
    <div
      className={cn("flex h-full w-full flex-col items-center justify-center")}
    >
      <div
        className={cn(
          "relative flex items-center justify-center gap-1 font-bold text-[clamp(3rem,25vw,100vh)] tabular-nums transition-all ease-in-out",
          !["ready", "running"].includes(status) && "opacity-70",
          isOvertime && "text-destructive",
          timerControlSettings.orientation === "horizontal" && "rotate-90",
          font.className,
        )}
        style={{
          viewTransitionName: "web-timer",
        }}
      >
        <WheelPicker
          className="relative inline-flex items-center justify-center"
          value={time.m}
          options={sequenceNumbers(1000)}
          onChange={(value) => {
            updateTime({ minutes: value, seconds: time.s });
          }}
          isScrollable={isUpdatable}
        >
          <NumberWheel
            value={paddedFullMinutes[0]}
            className={cn(paddedFullMinutes[0] === "0" && "hidden opacity-0")}
          />
          <NumberWheel value={paddedFullMinutes[1]} />
          <NumberWheel value={paddedFullMinutes[2]} />

          <div
            className={cn(
              "absolute flex h-[150%] flex-col justify-between opacity-0 transition-all duration-300 ease-in-out",
              isUpdatable && "opacity-100",
            )}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                updateTime({ minutes: time.m + 1, seconds: time.s })
              }
            >
              <ChevronUpIcon className="size-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                updateTime({ minutes: time.m - 1, seconds: time.s })
              }
            >
              <ChevronDownIcon className="size-6" />
            </Button>
          </div>
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
          className="relative inline-flex items-center justify-center"
          value={time.s}
          options={sequenceNumbers(6, 10)}
          onChange={(value) => {
            updateTime({ minutes: time.m, seconds: value });
          }}
          isScrollable={isUpdatable}
        >
          <NumberWheel value={time.ss[0]} options={sequenceNumbers(6)} />
          <NumberWheel value={time.ss[1]} />

          <div
            className={cn(
              "absolute flex h-[150%] flex-col justify-between opacity-0 transition-all duration-300 ease-in-out",
              isUpdatable && "opacity-100",
            )}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                updateTime({ minutes: time.m, seconds: time.s + 10 })
              }
            >
              <ChevronUpIcon className="size-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                updateTime({ minutes: time.m, seconds: time.s - 10 })
              }
            >
              <ChevronDownIcon className="size-6" />
            </Button>
          </div>
        </WheelPicker>

        <div className="absolute top-0 right-0 flex items-center justify-center">
          <Button
            onClick={() => reset()}
            variant="outline"
            size="icon"
            className={cn(
              "group w-full rounded-full p-3 opacity-100 transition-all duration-500 [&_svg]:size-6",
              "md:p-[clamp(1rem,2vw,1.25rem)] md:[&_svg]:size-[clamp(1rem,3vw,2rem)]",
              status !== "paused" && "invisible rounded-none opacity-0",
            )}
          >
            <RotateCcwIcon
              className={cn(
                "stroke-foreground opacity-100 transition-all duration-300 ease-in-out",
                status !== "paused" && "opacity-0",
              )}
            />
          </Button>
        </div>
      </div>

      <TimerController useTimer={useTimer} />
    </div>
  );
};
