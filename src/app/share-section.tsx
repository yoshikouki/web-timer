import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { ShareTimer } from "./share-timer";

export const ShareSection = ({ className }: { className?: string }) => {
  return (
    <section className={cn("mx-auto w-full max-w-3xl px-4 py-12", className)}>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-bold text-2xl">
            Share Time Together <br />
            in 3 Seconds
          </h2>
          <p className="text-muted-foreground">
            Scan QR code or share URL. That's all you need to sync time with
            everyone.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <ShareTimer />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <Icons.devices className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">Any Device</h3>
            <p className="text-muted-foreground text-sm">
              Works on all devices with a web browser
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <Icons.notion className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">Embed Anywhere</h3>
            <p className="text-muted-foreground text-sm">
              Notion, Confluence and more
              <span className="mt-1 block">
                Enhance your workspace with live timers
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <Icons.zap className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">No Setup</h3>
            <p className="text-muted-foreground text-sm">
              No account required. Just share and start collaborating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
