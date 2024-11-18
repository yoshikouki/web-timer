"use client";

import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useTimer } from "./use-timer";

export const TimerController = () => {
  const { status, timerControlSettings, start, pause, resume, reset } =
    useTimer();

  return (
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
  );
};
