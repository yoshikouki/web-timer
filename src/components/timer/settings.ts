export type TimerControllerSettingsType = {
  mode: "basic" | "overtime";
  style: "default" | "classic";
  theme: "dark" | "light";
  showSeconds: boolean;
  showMilliseconds: boolean;
  timerResolution: number; // ms
};

export const initialTimerControllerSettings: TimerControllerSettingsType = {
  mode: "basic",
  style: "default",
  theme: "dark",
  showSeconds: true,
  showMilliseconds: false,
  timerResolution: 100, // ms
};
