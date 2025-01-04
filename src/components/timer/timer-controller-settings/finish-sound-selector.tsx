import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BellRingIcon } from "lucide-react";
import { useTimer } from "../use-timer";
import { type FinishSoundOptionKeys, finishSoundOptions } from "./settings";

export const FinishSoundSelector = () => {
  const { timerControlSettings, updateTimerControlSettings, playFinishSound } =
    useTimer();

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
                playFinishSound();
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
