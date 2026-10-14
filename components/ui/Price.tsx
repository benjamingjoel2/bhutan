"use client";

import { useCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils";

export function Price({ usd, className, approx = true, round }: { usd: number; className?: string; approx?: boolean; round?: number }) {
  const { format } = useCurrency();
  return <span className={className}>{format(usd, { approx, round })}</span>;
}

export function PriceLine({
  usd,
  unit,
  sdfIncluded = true,
  visaIncluded,
  className,
  light,
}: {
  usd: number;
  unit: string;
  sdfIncluded?: boolean;
  visaIncluded?: boolean;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <p className={cn("text-[0.9375rem]", light ? "text-white/90" : "text-ink")}>
        From <Price usd={usd} className="font-medium" /> <span className={light ? "text-white/60" : "text-ink-mute"}>{unit}</span>
      </p>
      <p className={cn("text-[0.6875rem] uppercase tracking-[0.16em]", light ? "text-saffron" : "text-pine")}>
        {sdfIncluded ? "SDF included" : "SDF not included"}
        {visaIncluded !== undefined && <> · {visaIncluded ? "Visa fee included" : "Visa fee not included"}</>}
      </p>
    </div>
  );
}
