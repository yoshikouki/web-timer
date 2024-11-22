"use client";

import { useTimer } from "@/components/timer/use-timer";
import {
  TimerEventMessageSchema,
  type TimerEventType,
} from "@/schema/timer-event";
import { useEffect, useRef } from "react";

const pushEvent = async (id: string, event: TimerEventType) => {
  return await push(id, { event });
};

const push = async (id: string, data: Record<string, unknown>) => {
  return await fetch(`/timers/${id}/events`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};

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
    await pushEvent(id, "start");
  };
  const pause = async () => {
    await pushEvent(id, "pause");
  };
  const resume = async () => {
    await pushEvent(id, "resume");
  };
  const reset = async () => {
    await pushEvent(id, "reset");
  };
  const stop = async () => {
    await pushEvent(id, "stop");
  };

  const onEventMessage = (event: TimerEventType) => {
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
      const { event: timerEvent } = TimerEventMessageSchema.parse(
        JSON.parse(event.data),
      );
      onEventMessage(timerEvent);
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
