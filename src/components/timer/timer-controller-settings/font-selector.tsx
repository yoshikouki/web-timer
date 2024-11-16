import { fonts } from "@/app/fonts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { TimerControllerFont } from "../settings";
import { useTimerSettings } from "../use-timer-settings";

export const FontSelector = () => {
  const { timerControlSettings, update } = useTimerSettings();

  return (
    <Select
      value={timerControlSettings.font}
      onValueChange={(value: TimerControllerFont) => {
        update({ font: value });
      }}
    >
      <SelectTrigger className="h-full w-full py-[2px] pl-0">
        <SelectValue placeholder="Font" asChild>
          <FontOption font={timerControlSettings.font} />
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="w-full">
        <SelectItem value="sora" className="py-[2px] pl-0">
          <FontOption font="sora" />
        </SelectItem>
        <SelectItem value="poppins" className="py-[2px] pl-0">
          <FontOption font="poppins" />
        </SelectItem>
        <SelectItem value="teko" className="py-[2px] pl-0">
          <FontOption font="teko" />
        </SelectItem>
        <SelectItem value="comfortaa" className="py-[2px] pl-0">
          <FontOption font="comfortaa" />
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

const FontOption = ({ font }: { font: TimerControllerFont }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-[90px_1fr] px-4 py-2 tabular-nums",
        fonts[font].className,
      )}
    >
      <span className="text-left">01:23:45</span>
      <span className="text-left capitalize">{font}</span>
    </div>
  );
};
