import { Toggle } from "@/components/ui/toggle";
import { RotateCwSquareIcon } from "lucide-react";
import { useTimer } from "../use-timer";

export const HorizontalLayoutToggle = () => {
  const { timerControlSettings, updateTimerControlSettings } = useTimer();
  return (
    <Toggle
      variant="outline"
      aria-label="Horizontal layout"
      pressed={timerControlSettings.orientation === "horizontal"}
      onPressedChange={(checked) => {
        updateTimerControlSettings({
          orientation: checked ? "horizontal" : "vertical",
        });
      }}
      className="h-10 w-fit px-4"
    >
      <RotateCwSquareIcon className="size-6" />
      Horizontal
    </Toggle>
  );
};
