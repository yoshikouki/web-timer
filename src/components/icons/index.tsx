import { cn } from "@/lib/utils";
import {
  Check,
  FileIcon,
  Laptop,
  Share,
  Smartphone,
  Tablet,
  Zap,
} from "lucide-react";
import type { HTMLAttributes } from "react";

type IconProps = HTMLAttributes<HTMLDivElement | SVGElement>;

export const Icons = {
  devices: ({ className, ...props }: IconProps) => (
    <div className={cn("relative", className)} {...props}>
      <Laptop className="absolute h-8 w-8 fill-background" />
      <Smartphone className="-right-1 -bottom-1 absolute h-4 w-4 fill-background" />
      <Tablet className="-left-1 -bottom-1 absolute h-5 w-5 fill-background" />
    </div>
  ),
  notion: FileIcon,
  zap: Zap,
  share: Share,
  check: Check,
};
