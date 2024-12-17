"use client";

import { type FC, useId, useRef } from "react";
import { NumberWheel } from "./number-wheel";

interface NumberWheelProps {
  value: number;
  max: number;
  tilt?: number;
  tiltDigits?: number;
  className?: string;
  options?: number[];
  isInteractive?: boolean;
}

export const isTiltable = (value: number, max: number, tiltDigits: number) => {
  if (tiltDigits === 1) {
    return value.toString().length === 2;
  }
  return value.toString().length === tiltDigits;
};

export const NumbersWheel: FC<NumberWheelProps> = ({
  value: _value,
  max,
  tilt = 0,
  tiltDigits = 1,
  className,
  isInteractive = false,
}) => {
  if (_value > max) {
    console.warn("value must be less than max");
  }
  const value = _value % (max + 1);
  const paddedLength = Math.max(value.toString().length, 2);
  const paddedValues = [...value.toString().padStart(paddedLength, "0")];
  const maxLength = max.toString().length;
  const isTiltable = (index: number) => {
    if (tiltDigits === 1) {
      return index + 1 === paddedLength;
    }
    if (paddedLength === tiltDigits) {
      return index === 0;
    }
    return index + 1 === paddedLength;
  };
  const numbers = paddedValues.map((paddedValue, index) => ({
    index: paddedLength - index,
    value: Number(paddedValue),
    max: Number(max.toString()[maxLength - paddedLength + index]),
    tilt: isTiltable(index) ? tilt : 0,
    transitionDuration: isInteractive && isTiltable(index) ? 0 : 0.5,
  }));

  const componentIdRef = useRef(useId());

  return numbers.map((number) => (
    <NumberWheel
      key={`${componentIdRef.current}-${number.index}`}
      value={number.value}
      max={number.max}
      tilt={number.tilt}
      className={className}
      transitionDuration={number.transitionDuration}
    />
  ));
};
