import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { ReactNode } from "react";
import { FontSelector } from "./font-selector";

export const TimerControllerSettings = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="grid gap-4">
          <div className="py-2">
            <h3 className="font-medium leading-none">Settings</h3>
          </div>
          <div className="grid gap-2">
            <h4 className="font-medium">Font</h4>
            <FontSelector />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
