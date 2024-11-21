"use client";
import { fonts } from "@/app/fonts";
import { NumberWheel } from "@/components/timer/number-wheel";
import { Button } from "@/components/ui/button";
import { WheelPicker } from "@/components/wheel-picker";
import { cn, sequenceNumbers } from "@/lib/utils";
import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { useSharedTimer } from "./use-shared-timer";

export const SharedTimer = ({ id }: { id: string }) => {
  const {
    time,
    status,
    isOvertime,
    timerControlSettings,
    start,
    pause,
    resume,
    reset,
    updateTime,
  } = useSharedTimer({ id });
  const paddedFullMinutes = time.fullMinutes.toString().padStart(3, "0");
  const font = fonts[timerControlSettings.font];

  return (
    <div
      className={cn("flex h-full w-full flex-col items-center justify-center")}
    >
      <div
        className={cn(
          "relative flex items-center justify-center gap-1 font-bold text-[clamp(3rem,25vw,100vh)] tabular-nums transition-all",
          !["ready", "running"].includes(status) && "opacity-70",
          isOvertime && "text-destructive",
          timerControlSettings.orientation === "horizontal" && "rotate-90",
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

      <div
        className={cn(
          "fixed bottom-0 flex items-center justify-center md:static",
          timerControlSettings.orientation === "horizontal" &&
            "absolute bottom-auto left-0 rotate-90 md:absolute",
        )}
      >
        <div className="flex w-full items-center justify-center gap-10 px-7 py-7">
          <div className="relative">
            <Button
              onClick={() => {
                switch (status) {
                  case "ready":
                    start();
                    break;
                  case "running":
                    pause();
                    break;
                  case "paused":
                    resume();
                    break;
                  case "stopped":
                    reset();
                    break;
                  default:
                    break;
                }
              }}
              variant={status === "running" ? "ghost" : "outline"}
              size="icon"
              className={cn(
                "group h-auto rounded-full p-4 transition-all duration-300 md:p-7 [&_svg]:size-8 md:[&_svg]:size-20",
                status === "running" ? "rounded-lg" : "rounded-full",
              )}
            >
              <PlayIcon
                className={cn(
                  "fill-foreground stroke-none opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-100",
                  status === "running" &&
                    "absolute opacity-0 group-hover:opacity-0",
                )}
              />
              <PauseIcon
                className={cn(
                  "fill-foreground stroke-none opacity-30 transition-all duration-300 ease-in-out group-hover:opacity-100",
                  status !== "running" &&
                    "absolute opacity-0 group-hover:opacity-0",
                )}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
