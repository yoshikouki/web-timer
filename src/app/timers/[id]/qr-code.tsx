"use client";

import { cn } from "@/lib/utils";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

export const QRCode = ({
  url,
  className,
}: { url: string; className?: string }) => {
  const [size, setSize] = useState(1);
  const containerRef = (container: HTMLDivElement) => {
    if (!container) return;
    setSize(container.clientWidth);
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "flex aspect-square w-full items-center justify-center",
        className,
      )}
    >
      <QRCodeSVG
        value={url}
        size={size}
        marginSize={0}
        bgColor="transparent"
        fgColor="currentColor"
        imageSettings={{
          src: "/logo.webp",
          x: undefined,
          y: undefined,
          height: size / 2,
          width: size / 2,
          opacity: 1,
          excavate: false,
        }}
        className="transition-all duration-300"
      />
    </div>
  );
};
