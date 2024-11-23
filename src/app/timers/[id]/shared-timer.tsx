"use client";

import { Timer } from "@/components/timer";
import { useSharedTimer } from "./use-shared-timer";

export const SharedTimer = ({ id }: { id: string }) => {
  return <Timer useTimer={() => useSharedTimer({ id })} />;
};
