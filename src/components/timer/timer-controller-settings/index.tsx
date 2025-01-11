"use client";

import { fonts } from "@/app/fonts";
import { events } from "@/components/analytics/events";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BellIcon,
  Settings2Icon,
  Volume1Icon,
  Volume2Icon,
  VolumeIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTimer } from "../use-timer";
import { FinishSoundSelector } from "./finish-sound-selector";
import { FinishSoundVolumeSlider } from "./finish-sound-volume-slider";
import { FontSelector } from "./font-selector";
import { HorizontalLayoutToggle } from "./horizontal-layout-toggle";

export const TimerControllerSettings = () => {
  const { timerControlSettings, playFinishSound, status } = useTimer();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !(
          containerRef.current &&
          event.target instanceof Node &&
          !containerRef.current.contains(event.target)
        )
      ) {
        return;
      }
      setIsOpen(false);
      events.timerSettingsClose();
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      events.timerSettingsOpen();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 right-0 z-50 flex flex-col items-end gap-4 p-4"
    >
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "group bg-card/90 transition-all duration-300 [&_svg]:size-6",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Settings2Icon
          className={cn(
            "opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-100",
            status === "running" && "opacity-30",
            timerControlSettings.orientation === "horizontal" && "rotate-90",
          )}
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-end gap-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="rounded-lg [&_button]:bg-card/90"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <HorizontalLayoutToggle />
            </motion.div>

            <motion.div
              className="rounded-lg [&_button]:bg-card/90"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2, delay: 0.15 }}
            >
              <div className="flex items-center justify-between gap-1">
                <h4 className="flex items-center gap-1 font-medium">
                  <BellIcon className="h-4 w-4 fill-card/90 p-0.5" />
                  Finish sound
                </h4>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex h-10 items-center justify-center bg-card/90 [&_svg]:size-4"
                  onMouseDown={() => playFinishSound()}
                >
                  <Volume2Icon className="h-4 w-4" />
                </Button>
              </div>
              <FinishSoundSelector />
              <div className="flex items-center justify-between gap-2 py-4">
                <h4 className="flex items-center gap-1 font-medium">
                  {timerControlSettings.finishSoundVolume === 0 ? (
                    <VolumeIcon className="h-4 w-4 fill-card/90 p-0.5" />
                  ) : timerControlSettings.finishSoundVolume < 0.5 ? (
                    <Volume1Icon className="h-4 w-4 fill-card/90 p-0.5" />
                  ) : (
                    <Volume2Icon className="h-4 w-4 fill-card/90 p-0.5" />
                  )}
                  <span className="sr-only">Finish sound volume</span>
                </h4>
                <FinishSoundVolumeSlider />
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg [&_button]:bg-card/90"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
