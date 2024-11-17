"use client";

import { fonts } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { BellIcon, Volume1Icon, Volume2Icon, VolumeIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useTimer } from "../use-timer";
import { FinishSoundSelector } from "./finish-sound-selector";
import { FinishSoundVolumeSlider } from "./finish-sound-volume-slider";
import { FontSelector } from "./font-selector";

export const TimerControllerSettings = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { timerControlSettings, playFinishSound } = useTimer();

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
              <div className="flex items-center justify-between gap-1">
                <h4 className="flex items-center gap-1 font-medium">
                  <BellIcon className="h-4 w-4" />
                  Finish sound
                </h4>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex h-10 items-center justify-center [&_svg]:size-4"
                  onMouseDown={() => playFinishSound()}
                >
                  <Volume2Icon className="h-4 w-4" />
                </Button>
              </div>
              <FinishSoundSelector />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between gap-1">
                <h4 className="flex items-center gap-1 font-medium">
                  {timerControlSettings.finishSoundVolume === 0 ? (
                    <VolumeIcon className="h-4 w-4" />
                  ) : timerControlSettings.finishSoundVolume < 0.5 ? (
                    <Volume1Icon className="h-4 w-4" />
                  ) : (
                    <Volume2Icon className="h-4 w-4" />
                  )}
                  Finish sound volume
                </h4>
              </div>
              <FinishSoundVolumeSlider />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
