"use client";

import { fonts } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { BellIcon } from "lucide-react";
import type { ReactNode } from "react";
import { finishSoundOptions } from "../settings";
import { useTimerSettings } from "../use-timer-settings";
import { FinishSoundSelector } from "./finish-sound-selector";
import { FontSelector } from "./font-selector";

export const TimerControllerSettings = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { timerControlSettings } = useTimerSettings();

  const playFinishSound = () => {
    const finishSoundOption = finishSoundOptions.find(
      (option) => option.key === timerControlSettings.finishSound,
    );
    if (!finishSoundOption) return;
    const audio = new Audio(finishSoundOption.path);
    audio.volume = timerControlSettings.finishSoundVolume;
    audio.play();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="grid gap-5">
          <div className="py-2">
            <h3 className="font-medium leading-none">Settings</h3>
          </div>
          <div className="grid gap-5">
            <div className="grid gap-2">
              <h4
                className={cn(
                  "font-medium",
                  fonts[timerControlSettings.font].className,
                )}
              >
                Font
              </h4>
              <FontSelector />
            </div>
            <div className="grid gap-2">
              <h4 className="flex items-center gap-1 font-medium">
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex h-6 min-h-fit w-6 items-center justify-center [&_svg]:size-4"
                  onMouseDown={playFinishSound}
                >
                  <BellIcon className="h-4 w-4" />
                </Button>
                Sound
              </h4>
              <FinishSoundSelector />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
