"use client";

import { useTimer } from "./use-timer";

export const TimerController = () => {
  const { currentTimer, start, stop } = useTimer();
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-center">
      {currentTimer.status === "ready" && (
        <button
          type="button"
          onClick={start}
          className="px-4 py-2 font-black text-lg hover:opacity-80"
        >
          Start
        </button>
      )}
      {currentTimer.status === "running" && (
        <button
          type="button"
          onClick={stop}
          className="px-4 py-2 font-black text-lg hover:opacity-80"
        >
          Stop
        </button>
      )}
      {currentTimer.status === "stopped" && (
        <button
          type="button"
          onClick={start}
          className="px-4 py-2 font-black text-lg hover:opacity-80"
        >
          Restart
        </button>
      )}
    </div>
  );
};
