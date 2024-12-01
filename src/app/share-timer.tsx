"use client";

import { useTimer } from "@/components/timer/use-timer";
import { Button } from "@/components/ui/button";
import { client } from "@/server/client";
import { ShareIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const ShareTimer = () => {
  const { currentTimer } = useTimer();
  const router = useRouter();
  const onShareClick = async () => {
    const response = await client.timers.$post({
      json: currentTimer,
    });
    router.push(response.url);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Button size="lg" onClick={onShareClick}>
        <ShareIcon className="size-4" />
        Share Timer
      </Button>
      <p className="text-muted-foreground text-sm">
        Share the synced timer with others to collaborate.
      </p>
    </div>
  );
};
