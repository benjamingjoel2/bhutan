"use client";

import { currencies, type CurrencyCode } from "@/config/site";
import { useCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils";

export function CurrencySwitcher({ light, className }: { light?: boolean; className?: string }) {
  const { currency, setCurrency } = useCurrency();
  return (
    <label className={cn("relative inline-flex items-center", className)}>
      <span className="sr-only">Currency</span>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
        className={cn(
          "cursor-pointer appearance-none bg-transparent pr-4 text-[0.6875rem] font-medium uppercase tracking-[0.18em] outline-none focus-visible:underline",
          light ? "text-white" : "text-ink",
        )}
      >
        {currencies.options.map((o) => (
          <option key={o.code} value={o.code} className="text-ink">
            {o.code}
          </option>
        ))}
      </select>
      <svg className="pointer-events-none absolute right-0 h-2 w-2" viewBox="0 0 12 8" aria-hidden="true">
        <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </label>
  );
}
