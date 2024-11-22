import { z } from "zod";

export const TimerActionEventSchema = z.object({
  event: z.enum(["start", "pause", "resume", "stop", "reset"]),
});
export type TimerActionEventType = z.infer<typeof TimerActionEventSchema>;

export const TimerMutationEventSchema = z.object({
  event: z.literal("updateTime"),
  time: z.object({
    minutes: z.number(),
    seconds: z.number(),
  }),
});

export const TimerEventMessageSchema = z.union([
  TimerActionEventSchema,
  TimerMutationEventSchema,
]);
export type TimerEventMessageType = z.infer<typeof TimerEventMessageSchema>;
