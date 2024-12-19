import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-full w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
