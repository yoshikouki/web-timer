import type { MetadataRoute } from "next";
import { description } from "./metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Web Timer",
    short_name: "Web Timer",
    description,
    start_url: "/",
    display: "standalone",
    background_color: "#211E1E",
    theme_color: "#211E1E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
      {
        src: "/icon-192x192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/icon-512x512.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
