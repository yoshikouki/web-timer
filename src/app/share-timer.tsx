"use client";

import { Button } from "@/components/ui/button";
import { ShareIcon } from "lucide-react";

export const ShareTimer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Button size="lg">
        <ShareIcon className="size-4" />
        Share Timer
      </Button>
      <p className="text-muted-foreground text-sm">
        Share the synced timer with others to collaborate.
      </p>
    </div>
  );
};
