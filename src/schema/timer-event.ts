import { z } from "zod";

export const TimerEventSchema = z.object({
  event: z.enum(["start", "pause", "resume", "stop", "reset"]),
});
