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

const TILT_RATIO = 0.5;

interface NumberWheelProps {
  value: number;
  tilt?: number;
  max?: number;
  className?: string;
  transitionDuration?: number;
}

export const NumberWheel: FC<NumberWheelProps> = ({
  value,
  tilt = 0,
  max = 9,
  className,
  transitionDuration = 0.5,
}) => {
  const anglePerOption = 360 / (max + 1);
  const targetAngle = value * anglePerOption;

  const previousValue = useRef<number>(0);
  const previousAngle = previousValue.current * anglePerOption;
  previousValue.current = value;
  const normalizedPreviousAngle = previousAngle % 360;

  let deltaAngle = targetAngle - normalizedPreviousAngle;
  if (deltaAngle > 180) deltaAngle -= 360;
  if (deltaAngle < -180) deltaAngle += 360;
  const currentAngle =
    previousAngle + deltaAngle + tilt * anglePerOption * TILT_RATIO;

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
        {sequenceNumbers(max + 1).map((option) => (
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
