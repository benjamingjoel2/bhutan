"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navigation, site, whatsappHref } from "@/config/site";
import { useUi } from "@/lib/ui";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const { menuOpen, setMenuOpen, openPlanner } = useUi();
  const [open, setOpen] = useState<string | null>(null);
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-whitewash lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex h-16 items-center justify-between border-b border-line px-5">
            <CurrencySwitcher />
            <button onClick={() => setMenuOpen(false)} className="text-[0.6875rem] uppercase tracking-[0.18em] font-medium" aria-label="Close menu">
              Close
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="divide-y divide-line">
              {navigation.map((g) => {
                const isOpen = open === g.label;
                return (
                  <li key={g.label}>
                    <button
                      className="flex w-full items-center justify-between py-4 font-display text-[1.75rem]"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : g.label)}
                    >
                      {g.label}
                      <span className={cn("grid h-6 w-6 place-items-center rounded-full border border-line-strong transition-transform", isOpen && "rotate-45")} aria-hidden="true">
                        <svg viewBox="0 0 12 12" className="h-3 w-3"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.1" /></svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pb-5 pl-1 space-y-5">
                            {g.columns.map((c, i) => (
                              <div key={i}>
                                {c.title && <p className="eyebrow mb-2 text-ink-mute">{c.title}</p>}
                                <ul className="space-y-2">
                                  {c.links.map((l) => (
                                    <li key={l.href + l.label}>
                                      <Link href={l.href} onClick={() => setMenuOpen(false)} className="text-[1.0625rem] text-ink-soft">
                                        {l.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            <Link href={g.href} onClick={() => setMenuOpen(false)} className="inline-block text-[0.6875rem] uppercase tracking-[0.18em] font-medium text-maroon">
                              View all {g.label.toLowerCase()} →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="space-y-3 border-t border-line p-5">
            <button className="btn btn-primary w-full" onClick={() => openPlanner()}>Plan your journey</button>
            <div className="flex justify-between text-[0.8125rem] text-ink-soft">
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
