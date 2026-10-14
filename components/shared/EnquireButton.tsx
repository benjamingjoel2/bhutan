"use client";

import { useUi, type PlannerPrefill } from "@/lib/ui";
import { cn } from "@/lib/utils";

export function EnquireButton({ prefill, children = "Plan this journey", variant = "primary", className, size }: { prefill?: PlannerPrefill; children?: React.ReactNode; variant?: "primary" | "outline" | "ghost" | "pine"; className?: string; size?: "sm" }) {
  const { openPlanner } = useUi();
  return (
    <button type="button" onClick={() => openPlanner(prefill)} className={cn("btn", `btn-${variant}`, size === "sm" && "!py-3 !px-5", className)}>
      {children}
    </button>
  );
}
