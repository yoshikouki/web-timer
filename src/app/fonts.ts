import type { TimerControllerFont } from "@/components/timer/timer-controller-settings/settings";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Comfortaa, Poppins, Sora, Teko } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});
const sora = Sora({
  subsets: ["latin"],
  weight: ["700"],
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["700"],
});
const teko = Teko({
  subsets: ["latin"],
  weight: ["700"],
});

export const fonts: Record<TimerControllerFont, NextFont> = {
  poppins,
  sora,
  comfortaa,
  teko,
};
