"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Sticky anchor strip under the header, as on the reference's property pages. */
export function SubNav({ items, cta }: { items: { id: string; label: string }[]; cta?: React.ReactNode }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);
  return (
    <div className="sticky top-16 z-30 border-b border-line bg-whitewash/95 backdrop-blur">
      <div className="container-x flex items-center justify-between gap-6">
        <nav aria-label="On this page" className="scrollbar-none -mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
          <ul className="flex gap-7 whitespace-nowrap">
            {items.map((i) => (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  className={cn(
                    "block border-b-2 py-4 text-[0.6875rem] uppercase tracking-[0.18em] font-medium transition-colors",
                    active === i.id ? "border-maroon text-ink" : "border-transparent text-ink-mute hover:text-ink",
                  )}
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {cta && <div className="hidden shrink-0 md:block">{cta}</div>}
      </div>
    </div>
  );
}
