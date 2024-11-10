"use client";

import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export const WheelPicker = ({
  children,
  className,
  value,
  options,
  scrollOffset = 10,
  onChange,
}: {
  value: number;
  options: number[];
  scrollOffset?: number;
  onChange: (value: number) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onWheel = useCallback(
    (event: WheelEvent) => {
      event.cancelable && event.preventDefault();
      const delta = event.deltaY;
      if (Math.abs(delta) < scrollOffset) return;
      const valueIndex = options.findIndex((v) => v === value);
      const nextValue =
        delta > 0 ? options[valueIndex + 1] : options[valueIndex - 1];
      if (nextValue === undefined) return;
      onChange(nextValue);
    },
    [value, options, onChange, scrollOffset],
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
