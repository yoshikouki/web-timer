import {
  type HTMLProps,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
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

function PickerItem({ style, children, value, ...restProps }: PickerItemProps) {
  const optionRef = useRef<HTMLDivElement | null>(null);
  const { itemHeight, value: pickerValue } = usePickerData("PickerItem");
  const pickerActions = usePickerActions("PickerItem");
  const { key } = useColumnData("PickerItem");

  useEffect(
    () => pickerActions.registerOption(key, { value, element: optionRef }),
    [key, pickerActions, value],
  );

  const itemStyle = useMemo(
    () => ({
      height: `${itemHeight}px`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
    [itemHeight],
  );

  const handleClick = useCallback(() => {
    pickerActions.change(key, value);
  }, [pickerActions, key, value]);

  return (
    <div
      style={{
        ...itemStyle,
        ...style,
      }}
      ref={optionRef}
      onClick={handleClick}
      {...restProps}
    >
      {isFunction(children)
        ? children({ selected: pickerValue[key] === value })
        : children}
    </div>
  );
}

export default PickerItem;
