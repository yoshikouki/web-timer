"use client";

import { cn } from "@/lib/utils";
import { type TouchEventHandler, useCallback, useEffect, useRef } from "react";

export const WheelPicker = ({
  children,
  className,
  value,
  options,
  scrollThreshold = 40, // スクロール閾値を設定
  onChange,
}: {
  value: number;
  options: number[];
  scrollThreshold?: number;
  onChange: (value: number) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollDelta = useRef(0);
  const valueIndex = useRef(options.findIndex((v) => v === value) ?? 0);
  const touchStartY = useRef<number | null>(null);

  const onWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      scrollDelta.current += event.deltaY;
      // deltaMode 1: line, 0: pixel
      const deltaFactor = event.deltaMode === 1 ? 16 : 1; // 1 line = 16px
      const normalizedDelta = scrollDelta.current * deltaFactor;
      if (Math.abs(normalizedDelta) < scrollThreshold) return;
      scrollDelta.current = 0;
      const steps = Math.sign(normalizedDelta); // 1 or -1
      const nextIndex = valueIndex.current - steps;
      const nextValue = options[nextIndex];
      if (nextValue === undefined) return;
      onChange(nextValue);
      valueIndex.current = nextIndex;
    },
    [options, onChange, scrollThreshold],
  );

  const onTouchStart: TouchEventHandler = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const onTouchMove = (event: TouchEvent) => {
    if (touchStartY.current === null) return;
    event.preventDefault();
    const currentY = event.touches[0].clientY;
    const deltaY = touchStartY.current - currentY;
    scrollDelta.current += -deltaY;
    touchStartY.current = currentY;
    if (Math.abs(scrollDelta.current) < scrollThreshold) return;
    const steps = Math.sign(scrollDelta.current);
    scrollDelta.current = 0;
    const nextIndex = valueIndex.current - steps;
    const nextValue = options[nextIndex];
    if (nextValue === undefined) return;
    onChange(nextValue);
    valueIndex.current = nextIndex;
  };

  const onTouchEnd = () => {
    touchStartY.current = null;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // passive: false to enable event.preventDefault
    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchmove", onTouchMove);
    };
    // biome-ignore lint/correctness/useExhaustiveDependencies: React Compiler is enabled
  }, [onWheel, onTouchMove]);

  return (
    <div
      ref={containerRef}
      className={cn("touch-none select-none", className)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
};
