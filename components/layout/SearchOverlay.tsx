"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useUi } from "@/lib/ui";
import { searchIndex, type SearchItem } from "@/lib/search";

export function SearchOverlay() {
  const { searchOpen, closeSearch } = useUi();
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setQ("");
      const t = window.setTimeout(() => input.current?.focus(), 50);
      return () => window.clearTimeout(t);
    }
  }, [searchOpen]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [] as SearchItem[];
    return searchIndex
      .map((it) => ({ it, score: scoreItem(it, term) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((r) => r.it);
  }, [q]);

  const suggestions = ["Tiger's Nest", "Paro Tshechu", "Punakha", "Druk Path trek", "Hot stone bath", "Black-necked cranes"];

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] overflow-y-auto bg-whitewash/98 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div className="container-x pt-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Search Dzong House</p>
              <button onClick={closeSearch} className="text-[0.6875rem] uppercase tracking-[0.18em] font-medium">
                Close <span className="ml-2 rounded border border-line-strong px-1.5 py-0.5 text-[0.5625rem]">Esc</span>
              </button>
            </div>
            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="mx-auto mt-16 max-w-3xl">
              <input
                ref={input}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="A valley, a festival, a trek…"
                className="w-full border-b border-ink bg-transparent pb-4 font-display text-[2rem] md:text-[3rem] font-light outline-none placeholder:text-ink-mute/60"
                aria-label="Search"
              />
              {q.trim().length < 2 ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  {suggestions.map((s) => (
                    <button key={s} onClick={() => setQ(s)} className="rounded-full border border-line-strong px-4 py-2 text-[0.8125rem] text-ink-soft transition-colors hover:bg-ink hover:text-whitewash">
                      {s}
                    </button>
                  ))}
                </div>
              ) : results.length === 0 ? (
                <p className="mt-8 text-ink-soft">Nothing found for “{q}”. Try a valley, a festival or a journey type.</p>
              ) : (
                <ul className="mt-8 divide-y divide-line">
                  {results.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} onClick={closeSearch} className="group flex items-baseline justify-between gap-6 py-4">
                        <span>
                          <span className="eyebrow mr-3 text-ink-mute">{r.type}</span>
                          <span className="font-display text-[1.375rem] group-hover:text-maroon transition-colors">{r.title}</span>
                          {r.line && <span className="mt-1 block text-[0.9375rem] text-ink-soft">{r.line}</span>}
                        </span>
                        <span className="text-ink-mute" aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function scoreItem(it: SearchItem, term: string) {
  const t = it.title.toLowerCase();
  if (t === term) return 100;
  if (t.startsWith(term)) return 60;
  if (t.includes(term)) return 40;
  if (it.keywords.some((k) => k.toLowerCase().includes(term))) return 20;
  if (it.line?.toLowerCase().includes(term)) return 10;
  return 0;
}
