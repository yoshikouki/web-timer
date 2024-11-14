"use client";

import { useHeadTitle } from "@/components/head-title";
import { useTimer } from "@/components/timer/use-timer";
import { useEffect } from "react";

export const HeadTitleController = () => {
  const { setTitle } = useHeadTitle();
  const { time, status } = useTimer();

  useEffect(() => {
    if (status === "running") {
      const mm =
        time.fullMinutes >= 100
          ? time.fullMinutes
          : time.fullMinutes.toString().padStart(2, "0");
      setTitle(`${mm}:${time.ss} - Web Timer`);
    } else {
      setTitle("");
    }
  }, [status, time.fullMinutes, time.ss, setTitle]);

  return null;
};
