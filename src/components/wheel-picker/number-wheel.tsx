"use client";

import { motion } from "motion/react";
import { type FC, useEffect, useRef, useState } from "react";

import { cn, sequenceNumbers } from "@/lib/utils";
import style from "./number-wheel.module.css";

const WHEEL_SIZE_RATIO = 0.8;
const calculateWheelRadius = () => {
  const maxSize = Math.max(
    document.documentElement.clientHeight || 0,
    document.documentElement.clientWidth || 0,
    window.innerHeight || 0,
  );
  return (maxSize * WHEEL_SIZE_RATIO) / 2;
};

interface NumberWheelProps {
  value: number | string;
  className?: string;
  options?: number[];
  transitionDuration?: number;
}

export const NumberWheel: FC<NumberWheelProps> = ({
  value: _value,
  className,
  options = sequenceNumbers(10),
  transitionDuration = 0.5,
}) => {
  const value = typeof _value === "string" ? Number.parseInt(_value) : _value;
  const previousAngle = useRef<number>(0);
  const normalizedPreviousAngle = previousAngle.current % 360;

  const anglePerOption = 360 / options.length;
  const targetAngle = value * anglePerOption;

  let deltaAngle = targetAngle - normalizedPreviousAngle;
  if (deltaAngle > 180) deltaAngle -= 360;
  if (deltaAngle < -180) deltaAngle += 360;
  const currentAngle = previousAngle.current + deltaAngle;
  previousAngle.current = currentAngle;

  const [wheelRadius, setWheelRadius] = useState(3000);

  useEffect(() => {
    const resizeWheelSize = () => setWheelRadius(calculateWheelRadius());
    resizeWheelSize();
    window.addEventListener("resize", resizeWheelSize);
    return () => window.removeEventListener("resize", resizeWheelSize);
  }, []);

  return (
    <motion.div
      layout
      className={cn(
        "relative h-[27vw] w-[16vw] overflow-hidden",
        style.wheelContainerGradient,
        className,
      )}
      aria-label={`Current number: ${value}`}
    >
      <div
        className="h-full w-full transition-transform ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${currentAngle}deg)`,
          transitionDuration: `${transitionDuration}s`,
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
              transform: `rotateX(${option * -anglePerOption}deg) translateZ(${wheelRadius}px)`,
            }}
            aria-hidden={option !== value}
          >
            {option}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
