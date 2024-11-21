"use client";

import { useTimer } from "@/components/timer/use-timer";
import { TimerEventSchema } from "@/schema/timer-event";
import { useEffect, useRef } from "react";

export const useSharedTimer = ({
  id,
}: {
  id: string;
}) => {
  const eventSourceRef = useRef<EventSource | null>(null);
  const {
    start: startTimer,
    pause: pauseTimer,
    resume: resumeTimer,
    stop: stopTimer,
    reset: resetTimer,
    ...timer
  } = useTimer();

  const start = async () => {
    await fetch(`/timers/${id}/events`, {
      method: "PATCH",
      body: JSON.stringify({ event: "start" }),
    });
  };
  const pause = async () => {
    await fetch(`/timers/${id}/events`, {
      method: "PATCH",
      body: JSON.stringify({ event: "pause" }),
    });
  };
  const resume = async () => {
    await fetch(`/timers/${id}/events`, {
      method: "PATCH",
      body: JSON.stringify({ event: "resume" }),
    });
  };
  const reset = async () => {
    await fetch(`/timers/${id}/events`, {
      method: "PATCH",
      body: JSON.stringify({ event: "reset" }),
    });
  };
  const stop = async () => {
    await fetch(`/timers/${id}/events`, {
      method: "PATCH",
      body: JSON.stringify({ event: "stop" }),
    });
  };

  const onSSE = (event: string) => {
    switch (event) {
      case "start":
        startTimer();
        break;
      case "pause":
        pauseTimer();
        break;
      case "resume":
        resumeTimer();
        break;
      case "stop":
        stopTimer();
        break;
      case "reset":
        resetTimer();
        break;
      default:
        console.warn(`Unknown timer event: ${event}`);
        break;
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: onSSE is a dependency
  useEffect(() => {
    if (!eventSourceRef.current) {
      const eventSource = new EventSource(`/timers/${id}/events`);
      eventSourceRef.current = eventSource;
    }
    const eventSource = eventSourceRef.current;
    if (!eventSource) return () => eventSourceRef.current?.close();
    eventSource.onmessage = (event) => {
      const { event: timerEvent } = TimerEventSchema.parse(
        JSON.parse(event.data),
      );
      onSSE(timerEvent);
    };
    eventSource.onerror = () => {
      console.error("SSE connection error");
      eventSource.close();
    };
    return () => {
      eventSourceRef.current?.close();
    };
  }, [id]);

  return {
    start,
    pause,
    resume,
    stop,
    reset,
    ...timer,
  };
};
