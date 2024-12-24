"use client";

import { useSharedTimer } from "@/app/timers/[id]/use-shared-timer";
import { cn } from "@/lib/utils";
import { PenIcon, PinIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useActionState, useState } from "react";
import { AnimatedLink } from "../animated-link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TimerNameSchema } from "./timer";
import { useTimer } from "./use-timer";

export const TimerName = ({ timerId }: { timerId?: string }) => {
  const { status, updateCurrentTimer, currentTimer } = timerId
    ? useSharedTimer({ id: timerId })
    : useTimer();

  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, submitAction, isPending] = useActionState<
    string | null,
    FormData
  >(async (_previousState, formData) => {
    const name = formData.get("name");
    const parsed = TimerNameSchema.safeParse(name);
    if (!parsed.success) return parsed.error.issues[0]?.message;
    updateCurrentTimer({ name: parsed.data });
    setIsEditing(false);
    return null;
  }, null);

  return (
    <div className="flex items-start">
      <AnimatePresence mode="wait">
        {!isEditing ? (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatedLink href="/" className="flex h-10 items-center">
              <h1
                className={cn(
                  "font-bold text-2xl text-primary opacity-100 transition-all duration-300 ease-in-out",
                  status === "running" &&
                    currentTimer.name &&
                    "text-foreground opacity-30",
                  status === "running" && !currentTimer.name && "opacity-0",
                )}
              >
                {currentTimer.name || "Web Timer"}
              </h1>
            </AnimatedLink>
            <Button
              onClick={() => setIsEditing(true)}
              disabled={isPending}
              variant="ghost"
              size="icon"
              className={cn(
                "bg-background/80 [&_svg]:size-4",
                status === "running" && currentTimer.name && "opacity-30",
                status === "running" && !currentTimer.name && "opacity-0",
              )}
            >
              <PenIcon className="stroke-muted-foreground" />
            </Button>
          </motion.div>
        ) : (
          <form
            action={submitAction}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                type="text"
                name="name"
                defaultValue={currentTimer.name || ""}
                placeholder="Web Timer"
                autoFocus
                autoComplete="off"
                className="h-10 bg-background/80 py-0 font-bold text-2xl text-primary placeholder:text-primary"
              />
              <Button
                disabled={isPending}
                type="submit"
                variant="ghost"
                size="icon"
                className="bg-background/80 [&_svg]:size-4"
              >
                <PinIcon className="stroke-primary" />
              </Button>
              <Button
                onClick={() => setIsEditing(false)}
                disabled={isPending}
                type="button"
                variant="ghost"
                size="icon"
                className="bg-background [&_svg]:size-4"
              >
                <XIcon className="stroke-muted-foreground" />
              </Button>
            </motion.div>
            {errorMessage && (
              <p className="text-muted-foreground text-sm">{errorMessage}</p>
            )}
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
