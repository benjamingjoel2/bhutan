"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = { id: string; title: React.ReactNode; body: React.ReactNode; meta?: React.ReactNode };

/** Accessible accordion. Height animates with a CSS grid-rows transition (no animation library). */
export function Accordion({ items, className, defaultOpen }: { items: AccordionItem[]; className?: string; defaultOpen?: string }) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null);
  const base = useId();
  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((it) => {
        const isOpen = open === it.id;
        const btnId = `${base}-${it.id}-btn`;
        const panelId = `${base}-${it.id}-panel`;
        return (
          <div key={it.id}>
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : it.id)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left md:py-6"
              >
                <span className="flex flex-col gap-1">
                  {it.meta && <span className="eyebrow text-ink-mute">{it.meta}</span>}
                  <span className="display-sm">{it.title}</span>
                </span>
                <span className={cn("mt-2 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line-strong transition-transform duration-300", isOpen && "rotate-45")} aria-hidden="true">
                  <svg viewBox="0 0 12 12" className="h-3 w-3"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.1" /></svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={cn("grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
              inert={!isOpen}
            >
              <div className="overflow-hidden">
                <div className="max-w-3xl pb-6 pr-10 text-[1.0625rem] leading-relaxed text-ink-soft">{it.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
