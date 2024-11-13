import Link from "next/link";

import { GitHubIcon } from "@/components/icons/github-icon";
import { XIcon } from "@/components/icons/x-icon";
import { Button } from "@/components/ui/button";

export { metadata, viewport } from "./metadata";

export const Footer = () => {
  return (
    <footer className="mt-20 flex w-full flex-col items-center justify-center gap-4 p-4 pb-96">
      <div className="flex items-center gap-4 p-4">
        <Link
          href="https://github.com/yoshikouki/web-timer"
          target="_blank"
          rel="noreferrer noopener"
          prefetch={false}
        >
          <GitHubIcon className="size-6" />
        </Link>
        <Link
          href="https://x.com/yoshikouki_"
          target="_blank"
          rel="noreferrer noopener"
          prefetch={false}
        >
          <XIcon className="size-4 stroke-primary" />
        </Link>
      </div>
      <div>
        <Button variant="link" asChild className="text-primary/50 text-sm">
          <Link
            href="https://maou.audio/"
            target="_blank"
            rel="noreferrer noopener"
            prefetch={false}
          >
            SFX by MaouDamashii
          </Link>
        </Button>
      </div>
      {/* copyright */}
      <div className="text-primary/50 text-sm">Copyright © 2024 yoshikouki</div>
    </footer>
  );
};
