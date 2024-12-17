"use client";

import { type FC, useId, useRef } from "react";
import { NumberWheel } from "./number-wheel";

interface NumberWheelProps {
  value: number;
  max: number;
  tilt?: number;
  className?: string;
  options?: number[];
  transitionDuration?: number;
}

type Numbers = Array<{ value: number; max: number; tilt?: number }>;

export const NumbersWheel: FC<NumberWheelProps> = ({
  value: _value,
  max,
  tilt = 0,
  className,
  transitionDuration = 0.5,
}) => {
  if (_value > max) {
    console.warn("value must be less than max");
  }
  const value = _value % (max + 1);
  const paddedLength = Math.max(value.toString().length, 2);
  const paddedValues = [...value.toString().padStart(paddedLength, "0")];
  const maxLength = max.toString().length;
  const numbers: Numbers = paddedValues.map((paddedValue, index) => ({
    value: Number(paddedValue),
    max: Number(max.toString()[maxLength - paddedLength + index]),
    tilt: index + 1 === paddedLength ? tilt : 0,
  }));

  const componentIdRef = useRef(useId());

  return numbers.map((number, index) => (
    <NumberWheel
      key={`${componentIdRef.current}-${index}`}
      value={number.value}
      max={number.max}
      tilt={number.tilt}
      className={className}
      transitionDuration={transitionDuration}
    />
  ));
};
