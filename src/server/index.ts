import { Hono } from "hono";

const app = new Hono();

const routes = app.get("/time", (c) => {
  return c.json({
    message: new Date().toISOString(),
  });
});

export const server = app;
export type AppType = typeof routes;
