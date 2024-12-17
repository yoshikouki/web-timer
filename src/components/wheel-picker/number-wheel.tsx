"use client";

import { motion } from "motion/react";
import { type FC, useEffect, useRef, useState } from "react";

import { cn, sequenceNumbers } from "@/lib/utils";
import style from "./number-wheel.module.css";

const WHEEL_SIZE_RATIO = 0.85;
const calculateWheelRadius = (
  container: HTMLDivElement | null,
  anglePerOption: number,
) => {
  if (!container) return 0;
  const angleRad = (anglePerOption * Math.PI) / 180;
  const rect = container.getBoundingClientRect();
  const radius =
    (rect.height / (2 * Math.sin(angleRad / 2))) * WHEEL_SIZE_RATIO;
  return radius;
};

const TILT_RATIO = 0.3;

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

  const previousAngle = useRef<number>(0);
  const normalizedPreviousAngle = previousAngle.current % 360;

  let deltaAngle = targetAngle - normalizedPreviousAngle;
  if (deltaAngle > 180) deltaAngle -= 360;
  if (deltaAngle < -180) deltaAngle += 360;
  const currentAngle =
    previousAngle.current + deltaAngle + tilt * anglePerOption * TILT_RATIO;
  previousAngle.current = currentAngle;

  const containerRef = useRef<HTMLDivElement>(null);
  const [wheelRadius, setWheelRadius] = useState(3000);

  useEffect(() => {
    const resizeWheelSize = () => {
      setWheelRadius(
        calculateWheelRadius(containerRef.current, anglePerOption),
      );
    };
    resizeWheelSize();
    window.addEventListener("resize", resizeWheelSize);
    return () => window.removeEventListener("resize", resizeWheelSize);
  }, [anglePerOption]);

  return (
    <motion.div
      layout
      className={cn(
        "relative h-[27vw] w-[16vw]",
        style.wheelContainerGradient,
        className,
      )}
      ref={containerRef}
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
