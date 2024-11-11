export type TimerControllerFont = "poppins" | "sora" | "teko" | "comfortaa";

export type TimerControllerSettingsType = {
  mode: "basic" | "overtime";
  style: "default" | "classic";
  font: TimerControllerFont;
  theme: "dark" | "light";
  showSeconds: boolean;
  showMilliseconds: boolean;
  timerResolution: number; // ms
};

export const initialTimerControllerSettings: TimerControllerSettingsType = {
  mode: "basic",
  style: "default",
  font: "sora",
  theme: "dark",
  showSeconds: true,
  showMilliseconds: false,
  timerResolution: 100, // ms
};
