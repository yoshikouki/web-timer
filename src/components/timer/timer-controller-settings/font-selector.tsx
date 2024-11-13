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
      <SelectTrigger className="h-full w-full">
        <SelectValue placeholder="Font" />
      </SelectTrigger>
      <SelectContent className="w-full">
        <SelectItem value="poppins">
          <div
            className={cn(
              "grid grid-cols-[90px_1fr] p-4 tabular-nums",
              fonts.poppins.className,
            )}
          >
            <span className="text-left">01:23:45</span>
            <span className="text-left">Poppins</span>
          </div>
        </SelectItem>
        <SelectItem value="sora">
          <div
            className={cn(
              "grid grid-cols-[90px_1fr] p-4 tabular-nums",
              fonts.sora.className,
            )}
          >
            <span className="text-left">01:23:45</span>
            <span className="text-left">Sora</span>
          </div>
        </SelectItem>
        <SelectItem value="teko">
          <div
            className={cn(
              "grid grid-cols-[90px_1fr] p-4 tabular-nums",
              fonts.teko.className,
            )}
          >
            <span className="text-left">01:23:45</span>
            <span className="text-left">Teko</span>
          </div>
        </SelectItem>
        <SelectItem value="comfortaa">
          <div
            className={cn(
              "grid grid-cols-[90px_1fr] p-4 tabular-nums",
              fonts.comfortaa.className,
            )}
          >
            <span className="text-left">01:23:45</span>
            <span className="text-left">Comfortaa</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
