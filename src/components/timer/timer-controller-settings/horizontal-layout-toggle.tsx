import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { RotateCwSquareIcon } from "lucide-react";
import { useTimer } from "../use-timer";

export const HorizontalLayoutToggle = () => {
  const { timerControlSettings, updateTimerControlSettings } = useTimer();
  const isHorizontal = timerControlSettings.orientation === "horizontal";
  return (
    <Toggle
      variant="outline"
      aria-label="Horizontal layout"
      pressed={isHorizontal}
      onPressedChange={(checked) => {
        updateTimerControlSettings({
          orientation: checked ? "horizontal" : "vertical",
        });
      }}
      asChild
    >
      <Button variant="outline" className="h-10 w-fit px-4">
        <RotateCwSquareIcon
          className={cn(
            "size-6 transition-all duration-300 ease-in-out",
            isHorizontal && "rotate-90",
          )}
        />
        Horizontal
      </Button>
    </Toggle>
  );
};
