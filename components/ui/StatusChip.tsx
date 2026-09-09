import type { HorizonStatus } from "@/content/types";
import { cn } from "@/lib/cn";

const labels: Record<HorizonStatus, string> = {
  now: "Now",
  building: "Building",
  frontier: "Frontier",
  future: "Future",
};

export function StatusChip({
  status,
  label,
  className,
}: {
  status: HorizonStatus;
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "micro inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-waran-paper/80",
        className,
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", {
          "bg-waran-gold": status === "now",
          "bg-waran-atmosphere": status === "building",
          "bg-waran-sunrise": status === "frontier",
          "bg-sky-300": status === "future",
        })}
      />
      {label ?? labels[status]}
    </span>
  );
}
