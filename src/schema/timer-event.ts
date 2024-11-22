import { z } from "zod";

export type TimerEventType = z.infer<typeof TimerEventSchema>;
export const TimerEventSchema = z.enum([
  "start",
  "pause",
  "resume",
  "stop",
  "reset",
]);

export const TimerEventMessageSchema = z.object({
  event: TimerEventSchema,
});
