"use client";

import { cn, sequenceNumbers } from "@/lib/utils";
import type React from "react";
import { useEffect, useState } from "react";

interface NumberWheelProps {
  number: number;
  className?: string;
}

export const NumberWheel: React.FC<NumberWheelProps> = ({
  number,
  className,
}) => {
  const [wheelSize, setWheelSize] = useState(100);
  const translateZ = wheelSize * 0.5;

  useEffect(() => {
    const updateWheelSize = () => {
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        document.documentElement.clientWidth || 0,
        window.innerHeight || 0,
        window.innerWidth || 0,
      );
      setWheelSize(vh * 0.8);
    };
    updateWheelSize();
    window.addEventListener("resize", updateWheelSize);
    return () => window.removeEventListener("resize", updateWheelSize);
  }, []);

  return (
    <div
      className={cn("relative h-[27vw] w-[16vw] overflow-hidden", className)}
      aria-label={`Current number: ${number}`}
    >
      <div
        className="h-full w-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${number * 36}deg)`,
        }}
      >
        {sequenceNumbers(10).map((n) => (
          <div
            key={n}
            className={cn(
              "absolute flex h-full w-full items-center justify-center opacity-30 transition-opacity duration-300 ease-in-out",
              n === number && "opacity-100",
            )}
            style={{
              backfaceVisibility: "hidden",
              transform: `rotateX(${n * -36}deg) translateZ(${translateZ}px)`,
            }}
            aria-hidden={n !== number}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};