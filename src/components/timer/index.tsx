"use client";

import { fonts } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon, RotateCcwIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "../ui/button";
import { WheelPicker } from "../wheel-picker";
import { TimerController } from "./timer-controller";
import { useTimer as useTimerHook } from "./use-timer";
import type { useTimerCore } from "./use-timer-core";

export type UseTimerType = typeof useTimerCore;

export const Timer = (props?: {
  useTimer?: typeof useTimerHook;
}) => {
  const useTimer = props?.useTimer || useTimerHook;
  const { time, status, updateTime, isOvertime, timerControlSettings, reset } =
    useTimer();
  const font = fonts[timerControlSettings.font];
  const isUpdatable = ["ready"].includes(status);
  const { scrollY } = useScroll();
  const timerY = useTransform(scrollY, [0, 1000], [0, 600], { clamp: false });

  return (
    <div
      className={cn("flex h-full w-full flex-col items-center justify-center")}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ y: timerY }}
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
          <div className="relative flex items-center justify-center">
            <WheelPicker
              value={time.fullMinutes}
              max={999}
              isInteractive={isUpdatable}
              onChange={(value) => {
                updateTime({ minutes: value });
              }}
              className="inline-flex items-center justify-center"
            />

            <div
              className={cn(
                "-translate-y-full absolute top-0 flex h-1/4 min-h-10 w-full flex-col justify-between opacity-0 transition-all duration-300 ease-in-out",
                isUpdatable && "opacity-50",
              )}
            >
              <Button
                onClick={() => updateTime({ minutes: time.fullMinutes + 1 })}
                variant="ghost"
                size="sm"
                className="h-full hover:bg-transparent active:bg-transparent"
              >
                <PlusIcon className="size-6" />
              </Button>
            </div>
            <div
              className={cn(
                "absolute bottom-0 flex h-1/4 min-h-10 w-full translate-y-full flex-col justify-between opacity-0 transition-all duration-300 ease-in-out",
                isUpdatable && "opacity-50",
              )}
            >
              <Button
                onClick={() => updateTime({ minutes: time.fullMinutes - 1 })}
                variant="ghost"
                size="sm"
                className="h-full hover:bg-transparent active:bg-transparent"
              >
                <MinusIcon className="size-6" />
              </Button>
            </div>
          </div>

          <motion.span
            layout
            className={cn(
              "font-normal opacity-20 transition-opacity duration-500 ease-in-out",
              0 < time.ms && time.ms < 500 && "opacity-10",
            )}
          >
            :
          </motion.span>

          <div className="relative inline-flex items-center justify-center">
            <WheelPicker
              value={time.s}
              max={59}
              increment={10}
              isInteractive={isUpdatable}
              onChange={(value) => {
                updateTime({ seconds: value });
              }}
              className="inline-flex items-center justify-center"
            />

            <div
              className={cn(
                "-translate-y-full absolute top-0 flex h-1/4 min-h-10 w-full flex-col justify-between opacity-0 transition-all duration-300 ease-in-out",
                isUpdatable && "opacity-50",
              )}
            >
              <Button
                onClick={() => updateTime({ seconds: time.s + 10 })}
                variant="ghost"
                size="sm"
                className="h-full hover:bg-transparent active:bg-transparent"
              >
                <PlusIcon className="size-6" />
              </Button>
            </div>
            <div
              className={cn(
                "absolute bottom-0 flex h-1/4 min-h-10 w-full translate-y-full flex-col justify-between opacity-0 transition-all duration-300 ease-in-out",
                isUpdatable && "opacity-50",
              )}
            >
              <Button
                onClick={() => updateTime({ seconds: time.s - 10 })}
                variant="ghost"
                size="sm"
                className="h-full hover:bg-transparent active:bg-transparent"
              >
                <MinusIcon className="size-6" />
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "absolute top-0 right-0 flex items-center justify-center",
              status !== "paused" &&
                "pointer-events-none touch-none select-none",
            )}
          >
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
      </motion.div>

      <TimerController useTimer={useTimer} />
    </div>
  );
};
