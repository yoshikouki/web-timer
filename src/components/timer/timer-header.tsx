"use client";

import { cn } from "@/lib/utils";
import { Settings2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { TimerControllerSettings } from "./timer-controller-settings";
import { useTimer } from "./use-timer";

export const TimerHeader = () => {
  const { status, timerControlSettings } = useTimer();

  return (
    <div className="absolute top-0 flex w-full items-center justify-between p-4">
      <h1
        className={cn(
          "font-bold text-2xl opacity-100 transition-opacity duration-300 ease-in-out",
          status === "running" && "opacity-0",
        )}
      >
        Web Timer
      </h1>
      <TimerControllerSettings>
        <Button
          variant="ghost"
          size="icon"
          className={cn("group transition-all duration-300 [&_svg]:size-6")}
        >
          <Settings2Icon
            className={cn(
              "opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-100",
              status === "running" && "opacity-30",
              timerControlSettings.orientation === "horizontal" && "rotate-90",
            )}
          />
        </Button>
      </TimerControllerSettings>
    </div>
  );
};
