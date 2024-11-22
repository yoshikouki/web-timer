"use client";

import { useTimer } from "@/components/timer/use-timer";
import {
  type TimerActionEventType,
  TimerEventMessageSchema,
  type TimerEventMessageType,
} from "@/schema/timer-event";
import { useEffect, useRef } from "react";

const pushEvent = async (id: string, event: TimerActionEventType["event"]) => {
  return await push(id, { event });
};

const push = async (id: string, data: TimerEventMessageType) => {
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
    updateTime: updateCurrentTimer,
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
  const updateTime = async (time: { minutes: number; seconds: number }) => {
    await push(id, {
      event: "updateTime",
      time,
    });
  };

  const onEventMessage = (message: TimerEventMessageType) => {
    switch (message.event) {
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
      case "updateTime":
        updateCurrentTimer(message.time);
        break;
      default:
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
      const parsed = TimerEventMessageSchema.safeParse(JSON.parse(event.data));
      if (!parsed.success) {
        console.error("Invalid timer event message", event.data);
        return;
      }
      onEventMessage(parsed.data);
    };
    eventSource.onerror = () => {
      console.error("Server-Sent Events connection error");
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
    updateTime,
    ...timer,
  };
};
