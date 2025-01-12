import { TimerControllerSettings } from "./timer-controller-settings";
import { TimerName } from "./timer-name";

export const TimerHeader = ({ timerId }: { timerId?: string }) => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between p-4">
      <TimerName timerId={timerId} />
      <TimerControllerSettings />
    </div>
  );
};
