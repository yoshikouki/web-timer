type GtagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

const event = ({ action, category, label, value }: GtagEvent) => {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Timer Events
const timerStart = (seconds: number) =>
  event({
    action: "timer_start",
    category: "timer",
    label: "start",
    value: seconds,
  });

const timerPause = (remainingSeconds: number) =>
  event({
    action: "timer_pause",
    category: "timer",
    label: "pause",
    value: remainingSeconds,
  });

const timerReset = (remainingSeconds: number) =>
  event({
    action: "timer_reset",
    category: "timer",
    label: "reset",
    value: remainingSeconds,
  });

const timerComplete = (totalSeconds: number) =>
  event({
    action: "timer_complete",
    category: "timer",
    label: "complete",
    value: totalSeconds,
  });

// Timer Settings Events
const timerTimeSet = (seconds: number) =>
  event({
    action: "timer_time_set",
    category: "timer_settings",
    label: "time",
    value: seconds,
  });

const timerFontChange = (fontName: string) =>
  event({
    action: "timer_font_change",
    category: "timer_settings",
    label: fontName,
  });

const timerOrientationChange = (orientation: "horizontal" | "vertical") =>
  event({
    action: "timer_orientation_change",
    category: "timer_settings",
    label: orientation,
  });

const timerSettingsOpen = () =>
  event({
    action: "timer_settings_open",
    category: "timer_settings",
    label: "open",
  });

const timerSettingsClose = () =>
  event({
    action: "timer_settings_close",
    category: "timer_settings",
    label: "close",
  });

const timerResolutionChange = (resolution: number) =>
  event({
    action: "timer_resolution_change",
    category: "timer_settings",
    label: `${resolution}ms`,
  });

const timerFinishSoundChange = (soundName: string) =>
  event({
    action: "timer_finish_sound_change",
    category: "timer_settings",
    label: soundName,
  });

const timerFinishSoundVolumeChange = (volume: number) =>
  event({
    action: "timer_finish_sound_volume_change",
    category: "timer_settings",
    label: "volume",
    value: volume,
  });

// Share Events
const timerShare = (seconds: number) =>
  event({
    action: "timer_share",
    category: "share",
    label: "create",
    value: seconds,
  });

const timerShareJoin = (remainingSeconds: number) =>
  event({
    action: "timer_share_join",
    category: "share",
    label: "join",
    value: remainingSeconds,
  });

// Error Events
const error = (message: string) =>
  event({
    action: "error",
    category: "error",
    label: message,
  });

export const events = {
  pageview,
  event,
  timerStart,
  timerPause,
  timerReset,
  timerComplete,
  timerTimeSet,
  timerFontChange,
  timerOrientationChange,
  timerSettingsOpen,
  timerSettingsClose,
  timerResolutionChange,
  timerFinishSoundChange,
  timerFinishSoundVolumeChange,
  timerShare,
  timerShareJoin,
  error,
};
