"use client";

import { useState } from "react";
import { Picker, PickerColumn, PickerItem } from "../number-picker";
import { useTimer } from "./use-timer";

const selections = {
  minutes: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55,
  ],
  seconds: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55,
  ],
};

export const Timer = () => {
  const { time } = useTimer();
  const [pickerValue, setPickerValue] = useState({
    minutes: time.m,
    seconds: time.s,
  });

  return (
    <div className="flex items-center font-bold text-[clamp(3rem,25vw,100vh)] tabular-nums">
      <Picker
        value={pickerValue}
        onChange={setPickerValue}
        wheelMode="natural"
        itemHeight={160}
      >
        <PickerColumn key="minutes" name="minutes">
          {selections.minutes.map((option) => (
            <PickerItem key={option} value={option}>
              {option}
            </PickerItem>
          ))}
        </PickerColumn>
        <div className="flex items-center justify-center">:</div>
        <PickerColumn key="seconds" name="seconds">
          {selections.seconds.map((option) => (
            <PickerItem key={option} value={option}>
              {option}
            </PickerItem>
          ))}
        </PickerColumn>
      </Picker>
    </div>
  );
};
