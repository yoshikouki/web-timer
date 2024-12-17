"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { type TouchEventHandler, useEffect, useRef, useState } from "react";
import { NumbersWheel } from "./numbers-wheel";

export const WheelPicker = ({
  value,
  max,
  increment = 1,
  scrollThreshold = 28,
  isScrollable = true,
  className,
  onChange,
}: {
  value: number;
  max: number;
  increment?: number;
  scrollThreshold?: number;
  isScrollable?: boolean;
  className?: string;
  onChange: (value: number) => void;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollDelta = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const wheelEndTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [tilt, setTilt] = useState(0);

  const handleScroll = (steps: number) => {
    const next = value + steps * increment;
    const newValue = Math.max(0, Math.min(max, next));
    onChange(newValue);
    setTilt(0);
  };

  const onWheelEnd = () => {
    setTilt(0);
  };

  const onWheel = (event: WheelEvent) => {
    if (!isScrollable) return;
    event.preventDefault();
    // deltaMode 1: line, 0: pixel
    const deltaFactor = event.deltaMode === 1 ? scrollThreshold / 2 : 1; // 2 line = scrollThreshold
    const deltaY = event.deltaY * deltaFactor * 0.5;
    scrollDelta.current += deltaY;
    setTilt(Math.round((scrollDelta.current / scrollThreshold) * 100) / 100);
    if (wheelEndTimeoutRef.current) clearTimeout(wheelEndTimeoutRef.current);
    wheelEndTimeoutRef.current = setTimeout(onWheelEnd, 300);
    if (Math.abs(scrollDelta.current) < scrollThreshold) return;
    const steps = Math.sign(scrollDelta.current);
    scrollDelta.current = 0;
    handleScroll(steps);
  };

  const onTouchStart: TouchEventHandler = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const onTouchMove = (event: TouchEvent) => {
    if (!isScrollable || touchStartY.current === null) return;
    event.preventDefault();
    const currentY = event.touches[0].clientY;
    const deltaY = touchStartY.current - currentY;
    touchStartY.current = currentY;
    scrollDelta.current += deltaY;
    setTilt(Math.round((scrollDelta.current / scrollThreshold) * 100) / 100);
    if (Math.abs(scrollDelta.current) < scrollThreshold) return;
    const steps = Math.round(scrollDelta.current / scrollThreshold);
    scrollDelta.current = 0;
    handleScroll(steps);
  };

  const onTouchEnd = () => {
    touchStartY.current = null;
    scrollDelta.current = 0;
    setTilt(0);
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
    <motion.div
      layout
      ref={containerRef}
      className={cn("touch-none select-none", className)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <NumbersWheel
        value={value}
        max={max}
        tilt={isScrollable ? tilt : 0}
        transitionDuration={isScrollable ? 0 : 0.5}
      />
    </motion.div>
  );
};
