import { cn } from "@/lib/utils";
import {
  type HTMLProps,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import styles from "./number-picker.module.css";
import { usePickerActions, usePickerData } from "./picker";
import { useColumnData } from "./picker-column";

interface PickerItemRenderProps {
  selected: boolean;
}

export interface PickerItemProps
  extends Omit<HTMLProps<HTMLDivElement>, "value" | "children"> {
  children: ReactNode | ((renderProps: PickerItemRenderProps) => ReactNode);
  value: string | number;
}
function isFunction(
  functionToCheck: unknown,
): functionToCheck is (props: PickerItemRenderProps) => ReactNode {
  return typeof functionToCheck === "function";
}

function PickerItem({
  style,
  children,
  value,
  className,
  ...restProps
}: PickerItemProps) {
  const optionRef = useRef<HTMLDivElement | null>(null);
  const { itemHeight, value: pickerValue } = usePickerData("PickerItem");
  const pickerActions = usePickerActions("PickerItem");
  const { key } = useColumnData("PickerItem");

  useEffect(
    () => pickerActions.registerOption(key, { value, element: optionRef }),
    [key, pickerActions, value],
  );

  const handleClick = useCallback(() => {
    pickerActions.change(key, value);
  }, [pickerActions, key, value]);

  return (
    <div
      style={{
        height: `${itemHeight}px`,
        ...style,
      }}
      ref={optionRef}
      onClick={handleClick}
      className={cn(styles.pickerItem, className)}
      {...restProps}
    >
      {isFunction(children)
        ? children({ selected: pickerValue[key] === value })
        : children}
    </div>
  );
}

export default PickerItem;
