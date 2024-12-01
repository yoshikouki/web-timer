import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

import { CurrentTimerSchema } from "@/components/timer/timer";
import { url } from "@/lib/url";
import { sharedTimer } from "./shared-times";

const app = new Hono();

const routes = app.post(
  "/timers",
  zValidator("json", CurrentTimerSchema),
  (c) => {
    const params = c.req.valid("json");
    const timer = sharedTimer.createTimer(params);
    return c.redirect(url.sharedTimer(timer.id));
  },
);

export const server = app;
export type AppType = typeof routes;
