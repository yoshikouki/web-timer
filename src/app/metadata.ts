import type { Metadata, Viewport } from "next";

export const title = "Web Timer";
export const description =
  "Easily share timers with QR codes or URLs. Perfect for meetings, events, and more!";

export const metadata: Metadata = {
  metadataBase: new URL("https://web-timer.vercel.app/"),
  title,
  description,
  keywords: ["timer", "stopwatch", "countdown", "pomodoro", "pomodoro timer"],
  authors: { name: "yoshikouki", url: "https://yoshikouki.com/" },
  icons: [
    {
      url: "/icon.png",
      sizes: "1024x1024",
      type: "image/png",
      color: "#211E1E",
      fetchPriority: "high",
    },
    {
      url: "/icon-192x192.webp",
      sizes: "192x192",
      type: "image/webp",
      color: "#211E1E",
      fetchPriority: "auto",
    },
    {
      url: "/icon-512x512.webp",
      sizes: "512x512",
      type: "image/webp",
      color: "#211E1E",
      fetchPriority: "auto",
    },
  ],
  robots: "index, follow",
  openGraph: {
    url: "/",
    title,
    description,
    images: [
      {
        url: "/favicon",
        alt: title,
        width: 256,
        height: 256,
      },
      {
        url: "/icon.png",
        alt: title,
        width: 1024,
        height: 1024,
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@yoshikouki_",
    creator: "@yoshikouki_",
    title,
    description,
    images: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#211E1E",
};
