"use client";

import { PauseIcon, PlayIcon, SquareIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useTimer } from "./use-timer";

export const TimerController = () => {
  const { currentTimer, start, pause, resume, stop } = useTimer();
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-center py-4">
      {(currentTimer.status === "ready" ||
        currentTimer.status === "stopped") && (
        <Button
          onClick={start}
          variant="ghost"
          size="icon"
          className="[&_svg]:size-6"
        >
          <PlayIcon className="fill-foreground stroke-none" />
        </Button>
      )}
      {currentTimer.status === "running" && (
        <>
          <Button
            onClick={stop}
            variant="ghost"
            size="icon"
            className="[&_svg]:size-6"
          >
            <SquareIcon className="fill-foreground stroke-none" />
          </Button>
          <Button
            onClick={pause}
            variant="ghost"
            size="icon"
            className="[&_svg]:size-6"
          >
            <PauseIcon className="fill-foreground stroke-none" />
          </Button>
        </>
      )}
      {currentTimer.status === "paused" && (
        <>
          <Button
            onClick={stop}
            variant="ghost"
            size="icon"
            className="[&_svg]:size-6"
          >
            <SquareIcon className="fill-foreground stroke-none" />
          </Button>
          <Button
            onClick={resume}
            variant="ghost"
            size="icon"
            className="[&_svg]:size-6"
          >
            <PlayIcon className="fill-foreground stroke-none" />
          </Button>
        </>
      )}
    </div>
  );
};
