"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { TimerControllerSettings } from "./timer-controller-settings";
import { TimerName } from "./timer-name";

export const TimerHeader = ({ timerId }: { timerId?: string }) => {
  return (
    <>
      <TimerHeaderContainer className="fixed left-0 z-50">
        <TimerName timerId={timerId} />
      </TimerHeaderContainer>

      <TimerHeaderContainer className="right-0">
        <TimerControllerSettings />
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
