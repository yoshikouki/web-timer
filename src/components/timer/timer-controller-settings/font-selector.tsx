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
import { useTimer } from "../use-timer";

export const FontSelector = () => {
  const { timerControlSettings, setTimerControlSettings } = useTimer();

  return (
    <Select
      value={timerControlSettings.font}
      onValueChange={(value) => {
        setTimerControlSettings({
          ...timerControlSettings,
          font: value as TimerControllerFont,
        });
      }}
    >
      <SelectTrigger className="h-full w-full p-4">
        <SelectValue placeholder="Font" />
      </SelectTrigger>
      <SelectContent className="w-full">
        <SelectItem
          value="poppins"
          className={cn("p-4 tabular-nums", fonts.poppins.className)}
        >
          <div className="grid grid-cols-[90px_1fr] ">
            <span className="text-left">01:23:45</span>
            <span className="text-left">Poppins</span>
          </div>
        </SelectItem>
        <SelectItem
          value="sora"
          className={cn("p-4 tabular-nums", fonts.sora.className)}
        >
          <div className="grid grid-cols-[90px_1fr] ">
            <span className="text-left">01:23:45</span>
            <span className="text-left">Sora</span>
          </div>
        </SelectItem>
        <SelectItem
          value="teko"
          className={cn("p-4 tabular-nums", fonts.teko.className)}
        >
          <div className="grid grid-cols-[90px_1fr] ">
            <span className="text-left">01:23:45</span>
            <span className="text-left">Teko</span>
          </div>
        </SelectItem>
        <SelectItem
          value="comfortaa"
          className={cn("p-4 tabular-nums", fonts.comfortaa.className)}
        >
          <div className="grid grid-cols-[90px_1fr] ">
            <span className="text-left">01:23:45</span>
            <span className="text-left">Comfortaa</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
