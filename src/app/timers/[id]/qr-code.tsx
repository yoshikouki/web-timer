"use client";
import { safeViewTransition } from "@/components/animated-link/safe-view-transition";
import { cn } from "@/lib/utils";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useRef, useState } from "react";

export const QRCode = ({
  url,
  className,
}: { url: string; className?: string }) => {
  const [size, setSize] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const renderedSizeRef = useRef(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const qrCodeSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    renderedSizeRef.current = containerRef.current.clientWidth;
    setSize(renderedSizeRef.current);
  }, []);

  const onZoom = safeViewTransition(() => {
    setIsZoomed((prev) => !prev);
    setSize(
      isZoomed
        ? renderedSizeRef.current
        : Math.min(window.innerWidth, window.innerHeight) - 16,
    );
  });

  // const onDownload = () => {
  //   // TODO: WIP
  //   if (!qrCodeSvgRef.current) return;
  //   const svg = qrCodeSvgRef.current;
  //   const svgData = new XMLSerializer().serializeToString(svg);
  //   const canvas = document.createElement("canvas");
  //   canvas.width = svg.clientWidth;
  //   canvas.height = svg.clientHeight;
  //   const ctx = canvas.getContext("2d");
  //   const img = new Image();
  //   img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  //   ctx?.drawImage(img, 0, 0);
  //   const a = document.createElement("a");
  //   a.href = canvas.toDataURL("image/png");
  //   a.download = "qr-code.png";
  //   a.click();
  // };

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex h-full w-full items-center justify-center transition-all duration-300 ease-in-out",
        isZoomed ? "fixed inset-0 bg-background/80 p-10" : "",
        className,
      )}
      onClick={onZoom}
      onKeyDown={(event) => {
        if (event.key !== "q") return;
        onZoom();
      }}
    >
      <div className="">
        <QRCodeSVG
          ref={qrCodeSvgRef}
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
          className="transition-all duration-300 ease-in-out"
          style={{
            viewTransitionName: "qr-code",
          }}
        />
      </div>
      {/* <Button
        variant="secondary"
        size="icon"
        className="absolute rounded-xl p-10 opacity-0 transition-opacity duration-300 group-hover:opacity-80 [&_svg]:size-10"
        onClick={onDownload}
      >
        <DownloadIcon />
      </Button> */}
    </div>
  );
};
