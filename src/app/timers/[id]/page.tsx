import { HeadTitleController } from "@/app/head-title-controller";
import { TimerHeader } from "@/components/timer/timer-header";
import { TimerProvider } from "@/components/timer/timer-provider";
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
      <main className="flex h-full min-h-svh w-full flex-col items-center justify-center gap-10 py-20">
        <SharedTimer id={id} />
      </main>
    </TimerProvider>
  );
}
