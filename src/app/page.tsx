import { Timer } from "@/components/timer";
import { TimerHeader } from "@/components/timer/timer-header";
import { TimerProvider } from "@/components/timer/timer-provider";
import { HeadTitleController } from "./head-title-controller";
import { ShareTimer } from "./share-timer";

export default function Home() {
  return (
    <TimerProvider>
      <HeadTitleController />
      <TimerHeader />
      <main className="flex h-full w-full flex-col items-center justify-center gap-10">
        <section className="flex h-full min-h-svh w-full items-center justify-center">
          <Timer />
        </section>
        <section>
          <ShareTimer />
        </section>
      </main>
    </TimerProvider>
  );
}
