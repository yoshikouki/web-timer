"use client";

import { cn } from "@/lib/utils";
import { Settings2Icon } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { TimerControllerSettings } from "./timer-controller-settings";
import { TimerName } from "./timer-name";
import { useTimer } from "./use-timer";

export const TimerHeader = ({ timerId }: { timerId?: string }) => {
  const { status, timerControlSettings } = useTimer();

  return (
    <>
      <TimerHeaderContainer className="fixed left-0 z-50">
        <TimerName timerId={timerId} />
      </TimerHeaderContainer>

      <TimerHeaderContainer className="right-0">
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
                timerControlSettings.orientation === "horizontal" &&
                  "rotate-90",
              )}
            />
          </Button>
        </TimerControllerSettings>
      </TimerHeaderContainer>
    </>
  );
};

const TimerHeaderContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute top-0 flex items-center justify-center p-4",
        className,
      )}
    >
      {children}
    </div>
  );
};
