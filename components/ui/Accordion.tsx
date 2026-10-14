"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = { id: string; title: React.ReactNode; body: React.ReactNode; meta?: React.ReactNode };

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
            <button
              id={btnId}
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
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-10 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">{it.body}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
