"use client";

import { cn, sequenceNumbers } from "@/lib/utils";
import type React from "react";
import { useEffect, useState } from "react";

const WHEEL_SIZE_RATIO = 0.8;
const getWheelSize = () =>
  Math.max(
    document.documentElement.clientHeight || 0,
    document.documentElement.clientWidth || 0,
    window.innerHeight || 0,
  ) * WHEEL_SIZE_RATIO;

interface NumberWheelProps {
  value: number | string;
  className?: string;
  options?: number[];
}

export const NumberWheel: React.FC<NumberWheelProps> = ({
  value: _value,
  className,
  options = sequenceNumbers(10),
}) => {
  const value = typeof _value === "string" ? Number.parseInt(_value) : _value;
  const optionAngle = 360 / options.length;
  const [wheelAngle, setWheelAngle] = useState(() => value * optionAngle);
  const [wheelSize, setWheelSize] = useState(100);
  const wheelRadius = wheelSize * 0.5;

  useEffect(() => {
    const resizeWheelSize = () => setWheelSize(getWheelSize());
    resizeWheelSize();
    window.addEventListener("resize", resizeWheelSize);
    return () => window.removeEventListener("resize", resizeWheelSize);
  }, []);

  useEffect(() => {
    setWheelAngle((prevAngle) => {
      const targetAngle = value * optionAngle;
      const currentAngle = prevAngle % 360;
      let deltaAngle = targetAngle - currentAngle;
      if (deltaAngle > 180) deltaAngle -= 360;
      if (deltaAngle < -180) deltaAngle += 360;
      return prevAngle + deltaAngle;
    });
  }, [value, optionAngle]);

  return (
    <div
      className={cn("relative h-[27vw] w-[16vw] overflow-hidden", className)}
      aria-label={`Current number: ${value}`}
    >
      <div
        className="h-full w-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${wheelAngle}deg)`,
        }}
      >
        {options.map((option) => (
          <div
            key={option}
            className={cn(
              "absolute flex h-full w-full items-center justify-center opacity-30 transition-opacity duration-300 ease-in-out",
              option === value && "opacity-100",
            )}
            style={{
              backfaceVisibility: "hidden",
              transform: `rotateX(${option * -optionAngle}deg) translateZ(${wheelRadius}px)`,
            }}
            aria-hidden={option !== value}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
