import { Slider } from "@/components/ui/slider";
import { useTimer } from "../use-timer";

export const FinishSoundVolumeSlider = () => {
  const { timerControlSettings, updateTimerControlSettings } = useTimer();
  return (
    <Slider
      value={[timerControlSettings.finishSoundVolume * 100]}
      onValueChange={(value) => {
        const volume = value[0] / 100;
        updateTimerControlSettings({ finishSoundVolume: volume });
      }}
    />
  );
};
