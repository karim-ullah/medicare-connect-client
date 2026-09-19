import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-3"
    >
      <Spinner size="xl" />
      <span className="text-xs text-muted">Loading…</span>
    </div>
  );
};

export default Loading;
