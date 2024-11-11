"use client";

import { cn } from "@/lib/utils";
import {
  HistoryIcon,
  PauseIcon,
  PlayIcon,
  Settings2Icon,
  SquareIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { useTimer } from "./use-timer";

export const TimerController = () => {
  const { status, start, pause, resume, reset } = useTimer();

  return (
    <div className="fixed bottom-0 flex w-full items-center justify-center md:static">
      <div className="flex w-full items-center justify-center gap-10 px-4 py-4 md:items-start md:gap-20">
        <div>
          <Button
            onClick={() => {
              switch (status) {
                case "paused":
                  reset();
                  break;
                default:
                  break;
              }
            }}
            variant="ghost"
            size="icon"
            className="group transition-all duration-300 [&_svg]:size-8 md:[&_svg]:size-20"
          >
            <HistoryIcon
              className={cn(
                "opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-100",
                status === "paused" &&
                  "absolute opacity-0 group-hover:opacity-0",
                status === "running" && "opacity-30",
              )}
            />
            <SquareIcon
              className={cn(
                "fill-foreground stroke-none opacity-30 transition-all duration-300 ease-in-out group-hover:opacity-100",
                status !== "paused" &&
                  "absolute opacity-0 group-hover:opacity-0",
              )}
            />
          </Button>
        </div>
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
            variant="ghost"
            size="icon"
            className={cn(
              "group transition-all duration-300 [&_svg]:size-8 md:[&_svg]:size-20",
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
        <div>
          <Button
            onClick={() => {
              switch (status) {
                default:
                  break;
              }
            }}
            variant="ghost"
            size="icon"
            className="group transition-all duration-300 [&_svg]:size-8 md:[&_svg]:size-20"
          >
            <Settings2Icon
              className={cn(
                "opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-100",
                status === "running" && "opacity-30",
              )}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
