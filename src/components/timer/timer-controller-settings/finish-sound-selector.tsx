import { BellRingIcon, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { finishSoundOptions } from "../settings";
import { useTimerSettings } from "../use-timer-settings";

export const FinishSoundSelector = () => {
  const { timerControlSettings, update } = useTimerSettings();
  const [isOpen, setIsOpen] = useState(false);

  const playFinishSound = (path: string) => {
    const audio = new Audio(path);
    audio.volume = timerControlSettings.finishSoundVolume;
    audio.play();
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <CollapsibleTrigger asChild>
        <Button
          variant={isOpen ? "default" : "outline"}
          className="w-full justify-between py-2"
        >
          {timerControlSettings.finishSound}
          <ChevronsUpDown className="h-4 w-4" />
          <span className="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {finishSoundOptions.map((finishSoundOption) => (
            <Button
              key={finishSoundOption.key}
              onClick={() => {
                update({ finishSound: finishSoundOption.key });
                setIsOpen(false);
              }}
              variant="outline"
              size="default"
              className="w-full justify-between py-0 pr-0"
            >
              {finishSoundOption.name}
              <Button
                variant="ghost"
                // size="icon"
                className="pr-4 pl-2"
                onClick={(e) => {
                  e.stopPropagation();
                  playFinishSound(finishSoundOption.path);
                }}
              >
                <BellRingIcon className="h-4 w-4" />
              </Button>
            </Button>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
