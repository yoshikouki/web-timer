"use client";

import { useSharedTimer } from "@/app/timers/[id]/use-shared-timer";
import { cn } from "@/lib/utils";
import { PenIcon, PinIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
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
    <motion.div className="flex items-start" layout>
      {!isEditing && (
        <AnimatedLink href="/" className="flex h-10 items-center">
          <motion.h1
            className={cn(
              "font-bold text-2xl text-primary opacity-100 transition-opacity duration-300 ease-in-out",
              status === "running" && "opacity-0",
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            layoutId="timer-name"
          >
            {currentTimer.name || "Web Timer"}
          </motion.h1>
        </AnimatedLink>
      )}

      {isEditing ? (
        <form
          action={submitAction}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <Input
              type="text"
              name="name"
              defaultValue={currentTimer.name || ""}
              placeholder="Web Timer"
              autoFocus
              className="h-10 bg-background py-0 font-bold text-2xl text-primary placeholder:text-primary"
            />
            <Button
              disabled={isPending}
              type="submit"
              variant="ghost"
              size="icon"
              className="[&_svg]:size-4"
              asChild
            >
              <motion.button layoutId="timer-name-navigation-button">
                <PinIcon className="stroke-primary" />
              </motion.button>
            </Button>
            <Button
              onClick={() => setIsEditing(false)}
              disabled={isPending}
              type="button"
              variant="ghost"
              size="icon"
              className="[&_svg]:size-4"
              asChild
            >
              <motion.button>
                <XIcon className="stroke-muted-foreground" />
              </motion.button>
            </Button>
          </div>
          {errorMessage && (
            <p className="text-muted-foreground text-sm">{errorMessage}</p>
          )}
        </form>
      ) : (
        <Button
          onClick={() => setIsEditing(true)}
          disabled={isPending}
          variant="ghost"
          size="icon"
          className="[&_svg]:size-4"
          asChild
        >
          <motion.button layoutId="timer-name-navigation-button">
            <PenIcon className="stroke-muted-foreground" />
          </motion.button>
        </Button>
      )}
    </motion.div>
  );
};
