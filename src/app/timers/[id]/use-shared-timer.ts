"use client";

import { TimerContext } from "@/components/timer/timer-provider";
import {
  type TimerUpdater,
  type UpdateCurrentTimerProps,
  isTimerUpdater,
} from "@/components/timer/use-timer-core";
import {
  type TimerActionEventType,
  TimerEventMessageSchema,
  type TimerEventMessageType,
} from "@/schema/timer-event";
import { useContext, useEffect, useRef } from "react";

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
    updateTime: updateCurrentTime,
    updateCurrentTimer: updateLocalTimer,
    ...timer
  } = useContext(TimerContext);

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
  const updateTime = (time: Partial<{ minutes: number; seconds: number }>) => {
    const newTimer = updateCurrentTime(time);
    if (!newTimer) return;
    push(id, {
      event: "updateTime",
      time: {
        minutes: time.minutes ?? timer.time.fullMinutes,
        seconds: time.seconds ?? timer.time.s,
      },
    });
    return newTimer;
  };
  const updateCurrentTimer = (
    props: UpdateCurrentTimerProps | TimerUpdater,
  ) => {
    updateLocalTimer((prev) => {
      const newTimer = isTimerUpdater(props)
        ? props(prev)
        : { ...prev, ...props };
      push(id, {
        event: "currentTimer",
        currentTimer: newTimer,
      });
      return newTimer;
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
        updateCurrentTime(message.time);
        break;
      case "currentTimer":
        updateLocalTimer(message.currentTimer);
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
    updateCurrentTimer,
    ...timer,
  };
};
