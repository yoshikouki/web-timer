"use client";

import { cn, sequenceNumbers } from "@/lib/utils";
import { motion } from "motion/react";
import { type TouchEventHandler, useEffect, useId, useRef } from "react";
import { NumberWheel } from "./number-wheel";

export const WheelPicker = ({
  className,
  value,
  options,
  scrollThreshold = 28,
  onChange,
  isScrollable = true,
  variant = "default",
}: {
  value: number;
  options: number[];
  scrollThreshold?: number;
  onChange: (value: number) => void;
  className?: string;
  isScrollable?: boolean;
  variant?: "default" | "minutes";
}) => {
  const paddedLength = Math.max(value.toString().length, 2);
  const paddedValues = [...value.toString().padStart(paddedLength, "0")];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollDelta = useRef(0);
  const touchStartY = useRef<number | null>(null);

  const handleScroll = (steps: number) => {
    const valueIndex = options.findIndex((v) => v === value) ?? 0;
    const nextIndex = valueIndex - steps;
    const nextValue = options[nextIndex];
    if (nextValue === undefined) return;
    onChange(nextValue);
  };

  const onWheel = (event: WheelEvent) => {
    if (!isScrollable) return;
    event.preventDefault();
    // deltaMode 1: line, 0: pixel
    const deltaFactor = event.deltaMode === 1 ? scrollThreshold / 2 : 1; // 2 line = scrollThreshold
    const deltaY = event.deltaY * deltaFactor * 0.5;
    scrollDelta.current += deltaY;
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
    const deltaY = -(touchStartY.current - currentY);
    touchStartY.current = currentY;
    scrollDelta.current += deltaY;
    if (Math.abs(scrollDelta.current) < scrollThreshold) return;
    const steps = Math.round(scrollDelta.current / scrollThreshold);
    scrollDelta.current = 0;
    handleScroll(steps);
  };

  const onTouchEnd = () => {
    touchStartY.current = null;
    scrollDelta.current = 0;
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

  const componentIdRef = useRef(useId());

  return (
    <motion.div
      layout
      ref={containerRef}
      className={cn("touch-none select-none", className)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {variant === "default" ? (
        paddedValues.map((paddedValue, index) => (
          <NumberWheel
            value={paddedValue}
            options={sequenceNumbers(10)}
            key={`${componentIdRef.current}-${index}`}
          />
        ))
      ) : (
        <>
          <NumberWheel
            value={paddedValues[0]}
            options={sequenceNumbers(6)}
            key={`${componentIdRef.current}-0`}
          />
          <NumberWheel
            value={paddedValues[1]}
            options={sequenceNumbers(10)}
            key={`${componentIdRef.current}-1`}
          />
        </>
      )}
    </motion.div>
  );
};
