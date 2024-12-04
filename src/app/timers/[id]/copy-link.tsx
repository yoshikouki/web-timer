"use client";

import { Button } from "@/components/ui/button";
import { ClipboardIcon } from "lucide-react";
import { toast } from "sonner";

export const CopyLink = () => {
  const onCopyClick = async () => {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    toast("Link copied to clipboard.");
  };

  return (
    <Button size="lg" onClick={onCopyClick}>
      <ClipboardIcon className="size-4" />
      Copy Link
    </Button>
  );
};
