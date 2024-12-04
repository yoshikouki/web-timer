import { HeadTitleController } from "@/app/head-title-controller";
import { TimerHeader } from "@/components/timer/timer-header";
import { TimerProvider } from "@/components/timer/timer-provider";
import { CopyLink } from "./copy-link";
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
        <section className="flex flex-col items-start justify-center gap-10">
          <div className="flex flex-col items-start justify-center gap-2">
            <h2 className="text-center font-bold text-2xl">Share</h2>
            <p className="text-muted-foreground text-sm">
              Share the synced timer with others to collaborate.
            </p>
          </div>
          <CopyLink />
        </section>
      </main>
    </TimerProvider>
  );
}
