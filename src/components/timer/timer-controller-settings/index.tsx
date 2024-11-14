import { fonts } from "@/app/fonts";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { BellIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useTimerSettings } from "../use-timer-settings";
import { FinishSoundSelector } from "./finish-sound-selector";
import { FontSelector } from "./font-selector";

export const TimerControllerSettings = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { timerControlSettings } = useTimerSettings();
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
              <h4 className="flex items-center gap-2 font-medium">
                <BellIcon className="h-4 w-4" />
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