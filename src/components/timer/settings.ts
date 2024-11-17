export type TimerControllerFont = "poppins" | "sora" | "teko" | "comfortaa";

export type FinishSoundOptionKeys =
  | "default"
  | "light01"
  | "light02"
  | "light03"
  | "light04"
  | "simple01"
  | "simple02"
  | "simple03"
  | "simple04"
  | "simple05";
type FinishSoundOption = {
  key: FinishSoundOptionKeys;
  name: string;
  path: string;
};

export type TimerControllerSettingsType = {
  mode: "basic" | "overtime";
  style: "default" | "classic";
  font: TimerControllerFont;
  theme: "dark" | "light";
  showSeconds: boolean;
  showMilliseconds: boolean;
  horizontalLayout: boolean;

  // Sound
  finishSound: FinishSoundOptionKeys;
  finishSoundVolume: number; // 0.0 - 1.0

  timerResolution: number; // ms
};

export const initialTimerControllerSettings: TimerControllerSettingsType = {
  mode: "basic",
  style: "default",
  font: "sora",
  theme: "dark",
  showSeconds: true,
  showMilliseconds: false,
  horizontalLayout: false,
  finishSound: "default",
  finishSoundVolume: 1.0,

  timerResolution: 100, // ms
};

export const finishSoundOptions: Array<FinishSoundOption> = [
  {
    key: "default",
    name: "default",
    path: "/audio/sfx/maoudamashii_se_onepoint26.mp3",
  },
  {
    key: "light01",
    name: "Light 1",
    path: "/audio/sfx/maoudamashii_se_onepoint09.mp3",
  },
  {
    key: "light02",
    name: "Light 2",
    path: "/audio/sfx/maoudamashii_se_onepoint23.mp3",
  },
  {
    key: "light03",
    name: "Light 3",
    path: "/audio/sfx/maoudamashii_se_onepoint28.mp3",
  },
  {
    key: "light04",
    name: "Light 4",
    path: "/audio/sfx/maoudamashii_se_effect11.mp3",
  },
  {
    key: "simple01",
    name: "Simple 1",
    path: "/audio/sfx/simple_01.mp3",
  },
  {
    key: "simple02",
    name: "Simple 2",
    path: "/audio/sfx/simple_02.mp3",
  },
  {
    key: "simple03",
    name: "Simple 3",
    path: "/audio/sfx/maoudamashii_se_system34.mp3",
  },
  {
    key: "simple04",
    name: "Simple 4",
    path: "/audio/sfx/maoudamashii_se_system35.mp3",
  },
  {
    key: "simple05",
    name: "Simple 5",
    path: "/audio/sfx/maoudamashii_se_onepoint22.mp3",
  },
];
