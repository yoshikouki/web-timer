"use client";

import { type FC, useEffect, useState } from "react";

import { cn, sequenceNumbers } from "@/lib/utils";
import style from "./number-wheel.module.css";

const WHEEL_SIZE_RATIO = 0.8;
const calculateWheelDiameter = () =>
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

export const NumberWheel: FC<NumberWheelProps> = ({
  value: _value,
  className,
  options = sequenceNumbers(10),
}) => {
  const value = typeof _value === "string" ? Number.parseInt(_value) : _value;
  const anglePerOption = 360 / options.length;
  const [currentAngle, setCurrentAngle] = useState(
    () => value * anglePerOption,
  );
  const [wheelDiameter, setWheelDiameter] = useState(3000);
  const wheelRadius = wheelDiameter * 0.5;

  useEffect(() => {
    const resizeWheelSize = () => setWheelDiameter(calculateWheelDiameter());
    resizeWheelSize();
    window.addEventListener("resize", resizeWheelSize);
    return () => window.removeEventListener("resize", resizeWheelSize);
  }, []);

  useEffect(() => {
    setCurrentAngle((prevAngle) => {
      const targetAngle = value * anglePerOption;
      const normalizedPrevAngle = prevAngle % 360;
      let deltaAngle = targetAngle - normalizedPrevAngle;
      if (deltaAngle > 180) deltaAngle -= 360;
      if (deltaAngle < -180) deltaAngle += 360;
      return prevAngle + deltaAngle;
    });
  }, [value, anglePerOption]);

  return (
    <div
      className={cn(
        "relative h-[27vw] w-[16vw] overflow-hidden",
        style.wheelContainerGradient,
        className,
      )}
      aria-label={`Current number: ${value}`}
    >
      <div
        className="h-full w-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${currentAngle}deg)`,
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
    </div>
  );
};
