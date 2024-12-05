"use client";

import { cn } from "@/lib/utils";
import { type TouchEventHandler, useEffect, useRef } from "react";

export const WheelPicker = ({
  children,
  className,
  value,
  options,
  scrollThreshold = 40,
  onChange,
  isScrollable = true,
}: {
  value: number;
  options: number[];
  scrollThreshold?: number;
  onChange: (value: number) => void;
  children: React.ReactNode;
  className?: string;
  isScrollable?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollDelta = useRef(0);
  const valueIndex = useRef(options.findIndex((v) => v === value) ?? 0);
  const touchStartY = useRef<number | null>(null);

  const handleScroll = (deltaY: number) => {
    scrollDelta.current += deltaY;
    if (Math.abs(scrollDelta.current) < scrollThreshold) return;
    const steps = Math.sign(scrollDelta.current);
    scrollDelta.current = 0;
    const nextIndex = valueIndex.current - steps;
    const nextValue = options[nextIndex];
    if (nextValue === undefined) return;
    onChange(nextValue);
    valueIndex.current = nextIndex;
  };

  const onWheel = (event: WheelEvent) => {
    if (!isScrollable) return;
    event.preventDefault();
    // deltaMode 1: line, 0: pixel
    const deltaFactor = event.deltaMode === 1 ? 16 : 1; // 1 line = 16px
    const deltaY = event.deltaY * deltaFactor;
    handleScroll(deltaY);
  };

  const onTouchStart: TouchEventHandler = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const onTouchMove = (event: TouchEvent) => {
    if (!isScrollable || touchStartY.current === null) return;
    event.preventDefault();
    const currentY = event.touches[0].clientY;
    const deltaY = -(touchStartY.current - currentY);
    touchStartY.current = currentY;
    handleScroll(deltaY);
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
