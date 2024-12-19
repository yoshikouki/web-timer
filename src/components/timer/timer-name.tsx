"use client";

import { useSharedTimer } from "@/app/timers/[id]/use-shared-timer";
import { cn } from "@/lib/utils";
import { PenIcon, PinIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import { useActionState, useState } from "react";
import { AnimatedLink } from "../animated-link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useTimer } from "./use-timer";

export const TimerName = ({ timerId }: { timerId?: string }) => {
  const { status, updateCurrentTimer, currentTimer } = timerId
    ? useSharedTimer({ id: timerId })
    : useTimer();

  const [isEditing, setIsEditing] = useState(false);
  const [message, submitAction, isPending] = useActionState<
    string | null,
    FormData
  >(async (_previousState, formData) => {
    const name = formData.get("name");
    if (name && typeof name !== "string") return null;
    updateCurrentTimer({
      name,
    });
    setIsEditing(false);
    return null;
  }, null);

  return (
    <motion.div className="flex h-10 items-center" layout>
      {!isEditing && (
        <AnimatedLink href="/" className="flex h-full items-center">
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
        <form action={submitAction} className="flex h-10 items-center">
          <Input
            type="text"
            name="name"
            placeholder="Web Timer"
            className="py-0 font-bold text-2xl text-primary placeholder:text-primary"
          />
          <Button
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
            type="button"
            variant="ghost"
            size="icon"
            className="[&_svg]:size-4"
            onClick={() => setIsEditing(false)}
            asChild
          >
            <motion.button>
              <XIcon className="stroke-muted-foreground" />
            </motion.button>
          </Button>
          {message && <p>{message}</p>}
        </form>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className="[&_svg]:size-4"
          onClick={() => setIsEditing(true)}
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
