import { hc } from "hono/client";
import type { AppType } from ".";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:8888";
const apiUrl = `${appUrl}/api`;

export const cacheableClient = hc<AppType>(apiUrl);
export const client = hc<AppType>(apiUrl, {
  init: { cache: "no-cache" },
});
