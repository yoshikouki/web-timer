"use client";
import { Picker, PickerColumn, PickerItem } from "../number-picker";
import { useTimer } from "./use-timer";

const selections = {
  minutes: Array.from({ length: 60 }, (_, i) => i),
  seconds: Array.from({ length: 60 }, (_, i) => i),
};

export const Timer = () => {
  const { time, status, updateTime } = useTimer();

  return (
    <div className="flex items-center font-bold text-[clamp(3rem,25vw,100vh)] tabular-nums">
      <Picker
        wheelMode="natural"
        value={{
          minutes: time.m,
          seconds: time.s,
        }}
        onChange={(value) => {
          updateTime(value);
        }}
        itemHeight={160}
      >
        <PickerColumn key="minutes" name="minutes">
          {selections.minutes.map((option) => (
            <PickerItem key={option} value={option}>
              {option.toString().padStart(2, "0")}
            </PickerItem>
          ))}
        </PickerColumn>
        <div className="flex items-center justify-center">:</div>
        <PickerColumn key="seconds" name="seconds">
          {selections.seconds.map((option) => (
            <PickerItem key={option} value={option}>
              {option.toString().padStart(2, "0")}
            </PickerItem>
          ))}
        </PickerColumn>
      </Picker>
    </div>
  );
};
