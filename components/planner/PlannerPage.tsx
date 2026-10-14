"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { PlannerForm } from "./PlannerForm";
import type { PlannerPrefill } from "@/lib/ui";

/** Page version of the planner. Reads ?journey=slug&type=…&festival=… so links can pre-fill it. */
export function PlannerPage() {
  const params = useSearchParams();
  const prefill = useMemo<PlannerPrefill>(() => ({
    journeySlug: params.get("journey") ?? undefined,
    journeyType: params.get("type") ?? undefined,
    festival: params.get("festival") ?? undefined,
    month: params.get("month") ?? undefined,
    nights: params.get("nights") ? Number(params.get("nights")) : undefined,
  }), [params]);
  return <PlannerForm prefill={prefill} />;
}
