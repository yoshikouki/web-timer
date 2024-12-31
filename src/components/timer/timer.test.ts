import { describe, expect, it } from "bun:test";
import {
  type CurrentTimerType,
  type PausedTimerType,
  type ReadyTimerType,
  type RunningTimerType,
  calculateTime,
  initReadyTimer,
  pauseTimer,
  resetTimer,
  resumeTimer,
  startTimer,
  stopTimer,
  tickTimer,
  updateTimer,
} from "./timer";

describe("#initReadyTimer", () => {
  it("should return a ready timer with default values when no baseTimer is provided", () => {
    const timer = initReadyTimer();
    expect(timer.id).toBeDefined();
    expect(timer.status).toBe("ready");
    expect(timer.startTime).toBeNull();
    expect(timer.duration).toBe(300_000);
    expect(timer.remainingTime).toBe(300_000);
  });
});

describe("#startTimer", () => {
  it("should start the timer and set status to 'running'", () => {
    const currentTimer: ReadyTimerType = {
      id: "timer1",
      status: "ready",
      startTime: null,
      duration: 300_000,
      remainingTime: 300_000,
    };

    // Date.now() をモックします
    const originalDateNow = Date.now;
    const mockStartTime = 1000;
    Date.now = () => mockStartTime;

    const runningTimer = startTimer(currentTimer);

    expect(runningTimer.status).toBe("running");
    expect(runningTimer.startTime).toBe(mockStartTime);
    expect(runningTimer.remainingTime).toBe(300_000);

    // Date.now() を元に戻します
    Date.now = originalDateNow;
  });
});

describe("#tickTimer", () => {
  it("should update remainingTime for a running timer", () => {
    const originalDateNow = Date.now;

    const mockStartTime = 1000;
    const mockCurrentTime = 2000;
    Date.now = () => mockCurrentTime;

    const currentTimer: RunningTimerType = {
      id: "timer1",
      status: "running",
      startTime: mockStartTime,
      duration: 300_000,
      remainingTime: 300_000,
    };

    const updatedTimer = tickTimer(currentTimer);

    expect(updatedTimer.remainingTime).toBe(299_000);

    Date.now = originalDateNow;
  });

  it("should start running from paused timer", () => {
    const originalDateNow = Date.now;

    const mockStartTime = 1000;
    const mockCurrentTime = 2000;
    Date.now = () => mockCurrentTime;

    const currentTimer: PausedTimerType = {
      id: "timer1",
      status: "paused",
      startTime: mockStartTime,
      duration: 300_000,
      remainingTime: 299_000,
      pausedTime: 1500,
    };

    const updatedTimer = tickTimer(currentTimer);

    expect(updatedTimer.status).toBe("running");
    expect(updatedTimer.startTime).toBe(
      mockCurrentTime - currentTimer.pausedTime + mockStartTime,
    );
    expect(updatedTimer.remainingTime).toBe(299_500);

    Date.now = originalDateNow;
  });
});

describe("#pauseTimer", () => {
  it("should pause a running timer", () => {
    const originalDateNow = Date.now;

    const mockPausedTime = 2000;
    Date.now = () => mockPausedTime;

    const currentTimer: RunningTimerType = {
      id: "timer1",
      status: "running",
      startTime: 1000,
      duration: 300_000,
      remainingTime: 299_000,
    };

    const pausedTimer = pauseTimer(currentTimer);

    expect(pausedTimer.status).toBe("paused");
    expect(pausedTimer.pausedTime).toBe(mockPausedTime);

    Date.now = originalDateNow;
  });

  it("should pause a timer not in running state", () => {
    const originalDateNow = Date.now;

    const mockCurrentTime = 2000;
    Date.now = () => mockCurrentTime;

    const currentTimer: CurrentTimerType = {
      id: "timer1",
      status: "ready",
      startTime: null,
      duration: 300_000,
      remainingTime: 300_000,
    };

    const pausedTimer = pauseTimer(currentTimer);

    expect(pausedTimer.status).toBe("paused");
    expect(pausedTimer.startTime).toBe(mockCurrentTime);
    expect(pausedTimer.pausedTime).toBe(mockCurrentTime);

    Date.now = originalDateNow;
  });
});

describe("#resumeTimer", () => {
  it("should resume a paused timer", () => {
    const originalDateNow = Date.now;

    const mockStartTime = 1000;
    const mockPausedTime = 2000;
    const mockCurrentTime = 3000;
    Date.now = () => mockCurrentTime;

    const currentTimer: PausedTimerType = {
      id: "timer1",
      status: "paused",
      startTime: mockStartTime,
      duration: 300_000,
      remainingTime: 298_000,
      pausedTime: mockPausedTime,
    };

    const elapsedTime = mockPausedTime - mockStartTime;
    const newStartTime = mockCurrentTime - elapsedTime;
    const expectedRemainingTime =
      currentTimer.duration - (mockCurrentTime - newStartTime);

    const resumedTimer = resumeTimer(currentTimer);

    expect(resumedTimer.status).toBe("running");
    expect(resumedTimer.startTime).toBe(newStartTime);
    expect(resumedTimer.remainingTime).toBe(expectedRemainingTime);

    Date.now = originalDateNow;
  });

  it("should start a timer not in paused state", () => {
    const originalDateNow = Date.now;

    const mockCurrentTime = 3000;
    Date.now = () => mockCurrentTime;

    const currentTimer: CurrentTimerType = {
      id: "timer1",
      status: "ready",
      startTime: null,
      duration: 300_000,
      remainingTime: 300_000,
    };

    const resumedTimer = resumeTimer(currentTimer);

    expect(resumedTimer.status).toBe("running");
    expect(resumedTimer.startTime).toBe(mockCurrentTime);

    Date.now = originalDateNow;
  });
});

describe("#stopTimer", () => {
  it("should stop a paused timer", () => {
    const currentTimer: PausedTimerType = {
      id: "timer1",
      status: "paused",
      startTime: 1000,
      duration: 300_000,
      remainingTime: 298_000,
      pausedTime: 2000,
    };

    const stoppedTimer = stopTimer(currentTimer);

    expect(stoppedTimer.status).toBe("stopped");
    expect(stoppedTimer.startTime).toBe(1000);
    // pausedTime は存在しないため、型ガードを使用
    if ("pausedTime" in stoppedTimer) {
      expect(stoppedTimer.pausedTime).toBeUndefined();
    }
  });

  it("should stop a timer not in paused state", () => {
    const originalDateNow = Date.now;

    const mockCurrentTime = 3000;
    Date.now = () => mockCurrentTime;

    const currentTimer: RunningTimerType = {
      id: "timer1",
      status: "running",
      startTime: 1000,
      duration: 300_000,
      remainingTime: 297_000,
    };

    const stoppedTimer = stopTimer(currentTimer);

    expect(stoppedTimer.status).toBe("stopped");
    expect(stoppedTimer.startTime).toBe(1000);

    Date.now = originalDateNow;
  });
});

describe("#resetTimer", () => {
  it("should reset the timer to ready state", () => {
    const currentTimer: RunningTimerType = {
      id: "timer1",
      status: "running",
      startTime: 1000,
      duration: 300_000,
      remainingTime: 297_000,
    };

    const resetTimerObj = resetTimer(currentTimer);

    expect(resetTimerObj.status).toBe("ready");
    expect(resetTimerObj.startTime).toBeNull();
    expect(resetTimerObj.remainingTime).toBe(300_000);
  });
});

describe("#updateTimer", () => {
  it("should update the timer's duration and remainingTime", () => {
    const currentTimer: CurrentTimerType = {
      id: "timer1",
      status: "ready",
      startTime: null,
      duration: 300_000,
      remainingTime: 300_000,
    };

    const newValue = { minutes: 10, seconds: 30 };
    const updatedTimer = updateTimer(currentTimer, newValue);

    const expectedDuration = 10 * 60_000 + 30 * 1_000;

    expect(updatedTimer.duration).toBe(expectedDuration);
    expect(updatedTimer.remainingTime).toBe(expectedDuration);
  });
});

describe("#calculateTime", () => {
  it("should calculate time correctly", () => {
    const currentTimer: RunningTimerType = {
      id: "timer1",
      status: "running",
      startTime: 1000,
      duration: 300_000,
      remainingTime: 3661234, // 1h 1m 1s 234ms
    };

    const time = calculateTime(currentTimer);

    expect(time.h).toBe(1);
    expect(time.hh).toBe("01");
    expect(time.m).toBe(1);
    expect(time.mm).toBe("01");
    expect(time.s).toBe(1);
    expect(time.ss).toBe("01");
    expect(time.ms).toBe(234);
    expect(time.msPad).toBe("234");
    expect(time.fullSeconds).toBe(3661);
    expect(time.fullMinutes).toBe(61);
  });

  it("should handle negative remaining time", () => {
    const currentTimer: RunningTimerType = {
      id: "timer1",
      status: "running",
      startTime: 1000,
      duration: 300_000,
      remainingTime: -3661234, // -1h 1m 1s 234ms
    };

    const time = calculateTime(currentTimer);

    expect(time.h).toBe(1);
    expect(time.hh).toBe("01");
    expect(time.m).toBe(1);
    expect(time.mm).toBe("01");
    expect(time.s).toBe(1);
    expect(time.ss).toBe("01");
    expect(time.ms).toBe(234);
    expect(time.msPad).toBe("234");
    expect(time.fullSeconds).toBe(3661);
    expect(time.fullMinutes).toBe(61);
  });

  it("should handle zero remaining time", () => {
    const currentTimer: RunningTimerType = {
      id: "timer1",
      status: "running",
      startTime: 1000,
      duration: 300_000,
      remainingTime: 0,
    };

    const time = calculateTime(currentTimer);

    expect(time.h).toBe(0);
    expect(time.hh).toBe("00");
    expect(time.m).toBe(0);
    expect(time.mm).toBe("00");
    expect(time.s).toBe(0);
    expect(time.ss).toBe("00");
    expect(time.ms).toBe(0);
    expect(time.msPad).toBe("000");
    expect(time.fullSeconds).toBe(0);
    expect(time.fullMinutes).toBe(0);
  });

  it("should handle small values (less than 1 minute)", () => {
    const currentTimer: RunningTimerType = {
      id: "timer1",
      status: "running",
      startTime: 1000,
      duration: 300_000,
      remainingTime: 45678, // 45s 678ms
    };

    const time = calculateTime(currentTimer);

    expect(time.h).toBe(0);
    expect(time.hh).toBe("00");
    expect(time.m).toBe(0);
    expect(time.mm).toBe("00");
    expect(time.s).toBe(45);
    expect(time.ss).toBe("45");
    expect(time.ms).toBe(678);
    expect(time.msPad).toBe("678");
    expect(time.fullSeconds).toBe(45);
    expect(time.fullMinutes).toBe(0);
  });

  it("should handle large values (more than 24 hours)", () => {
    const currentTimer: RunningTimerType = {
      id: "timer1",
      status: "running",
      startTime: 1000,
      duration: 300_000,
      remainingTime: 90_000_000, // 25h
    };

    const time = calculateTime(currentTimer);

    expect(time.h).toBe(25);
    expect(time.hh).toBe("25");
    expect(time.m).toBe(0);
    expect(time.mm).toBe("00");
    expect(time.s).toBe(0);
    expect(time.ss).toBe("00");
    expect(time.ms).toBe(0);
    expect(time.msPad).toBe("000");
    expect(time.fullSeconds).toBe(90000);
    expect(time.fullMinutes).toBe(1500);
  });
});
