"use client";

import { useEffect, useState } from "react";

export const SharedTimer = ({ id }: { id: string }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const eventSource = new EventSource(`/timers/${id}/events`);
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setTime(data.time);
    };
    eventSource.onerror = () => {
      console.error("SSE connection error");
      eventSource.close();
    };
    return () => {
      eventSource.close();
    };
  }, [id]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-2 gap-4 text-2xl">
        <div>TimerPage id:</div>
        <div>{id}</div>
        <div>time:</div>
        <div>{time}</div>
      </div>
      <button
        onClick={() => {
          fetch(`/timers/${id}/events`, {
            method: "PATCH",
          });
        }}
        type="button"
      >
        Update
      </button>
    </div>
  );
};
