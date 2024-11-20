import { SharedTimer } from "./shared-timer";

export default async function TimerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <SharedTimer id={id} />;
}
