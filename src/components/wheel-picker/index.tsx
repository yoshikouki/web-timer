"use client";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef } from "react";

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

  useEffect(() => {
    containerRef.current?.addEventListener("wheel", onWheel, {
      passive: false,
    });
    return () => {
      containerRef.current?.removeEventListener("wheel", onWheel);
    };
  }, [onWheel]);

  return (
    <div ref={containerRef} className={cn("touch-none select-none", className)}>
      {children}
    </div>
  );
};
