import { HeadTitleController } from "@/app/head-title-controller";
import { TimerHeader } from "@/components/timer/timer-header";
import { TimerProvider } from "@/components/timer/timer-provider";
import { url } from "@/lib/url";
import { CopyLink } from "./copy-link";
import { QRCode } from "./qr-code";
import { SharedTimer } from "./shared-timer";

export default async function TimerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <TimerProvider>
      <HeadTitleController />
      <TimerHeader />
      <main className="flex h-full w-full flex-col items-center justify-center gap-10">
        <section className="flex h-full min-h-svh w-full items-center justify-center">
          <SharedTimer id={id} />
        </section>
        <section className="flex w-full flex-col items-center justify-center gap-10">
          <div className="flex w-full max-w-sm flex-col items-start justify-center gap-2">
            <h2 className="text-center font-bold text-2xl">Share</h2>
            <p className="text-muted-foreground text-sm">
              Share the synced timer with others to collaborate.
            </p>
            <CopyLink />
          </div>
          <div className="flex aspect-square w-full max-w-sm items-center justify-center">
            <QRCode url={url.sharedTimers.show(id, { url: true })} />
          </div>
        </section>
      </main>
    </TimerProvider>
  );
}
