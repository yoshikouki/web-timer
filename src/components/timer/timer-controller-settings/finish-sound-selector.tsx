import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BellRingIcon } from "lucide-react";
import { type FinishSoundOptionKeys, finishSoundOptions } from "../settings";
import { useTimer } from "../use-timer";

export const FinishSoundSelector = () => {
  const { timerControlSettings, updateTimerControlSettings } = useTimer();

  const playFinishSound = (path: string) => {
    const audio = new Audio(path);
    audio.volume = timerControlSettings.finishSoundVolume;
    audio.play();
  };

  return (
    <Select
      value={timerControlSettings.finishSound}
      onValueChange={(value: FinishSoundOptionKeys) => {
        updateTimerControlSettings({ finishSound: value });
      }}
    >
      <SelectTrigger className="h-auto py-0">
        <SelectValue placeholder="Finish sound" asChild>
          <div className="flex h-10 w-full items-center justify-between">
            <div className="leading-none">
              {timerControlSettings.finishSound}
            </div>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {finishSoundOptions.map((finishSoundOption) => (
          <div key={finishSoundOption.key} className="flex">
            <Button
              variant="ghost"
              size="icon"
              className="flex h-10 w-10 items-center justify-center [&_svg]:size-4"
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                playFinishSound(finishSoundOption.path);
              }}
            >
              <BellRingIcon className="h-4 w-4" />
            </Button>
            <SelectItem value={finishSoundOption.key} className="py-0">
              {finishSoundOption.name}
            </SelectItem>
          </div>
        ))}
      </SelectContent>
    </Select>
  );
};
