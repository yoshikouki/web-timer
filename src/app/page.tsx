import { Timer } from "@/components/timer";
import { TimerController } from "@/components/timer/timer-controller";
import { TimerProvider } from "@/components/timer/timer-provider";
import { HeadTitleController } from "./head-title-controller";

export default function Home() {
  return (
    <TimerProvider>
      <HeadTitleController />
      <main className="flex min-h-svh flex-col items-center justify-center gap-10 py-20">
        <div className="flex flex-col gap-4">
          <Timer />
        </div>
        <TimerController />
      </main>
    </TimerProvider>
  );
}
