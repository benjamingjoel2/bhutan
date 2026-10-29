"use client";

import { useEffect, useRef, useState } from "react";
import { planner } from "@/config/site";
import { useUi } from "@/lib/ui";
import { cn } from "@/lib/utils";

/**
 * "Plan your journey" bar — the reference's booking bar.
 * Rendered inline at the bottom of a hero (`variant="hero"`). A sentinel tracks when it
 * scrolls out of view; a compact copy then slides in under the header (desktop) or a
 * single pinned button appears at the bottom (mobile).
 */
export function PlanBar({ variant = "hero", className }: { variant?: "hero" | "inline"; className?: string }) {
  const { openPlanner } = useUi();
  const [month, setMonth] = useState<string>(planner.months[2]);
  const [nights, setNights] = useState<number>(planner.defaultNights);
  const [travelers, setTravelers] = useState(2);
  const [journeyType, setJourneyType] = useState<string>(planner.journeyTypes[0]);
  const [stuck, setStuck] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  // Default to two months ahead, set after mount to avoid a server/client mismatch
  useEffect(() => { setMonth(planner.months[(new Date().getMonth() + 2) % 12]); }, []);

  useEffect(() => {
    if (variant !== "hero" || !sentinel.current) return;
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
    io.observe(sentinel.current);
    return () => io.disconnect();
  }, [variant]);

  const begin = () => openPlanner({ month, nights, travelers, journeyType });

  const fields = (compact: boolean) => (
    <>
      <Field label="Arrival month" compact={compact}>
        <select className="bar-select" value={month} onChange={(e) => setMonth(e.target.value)} aria-label="Arrival month">
          {planner.months.map((m) => <option key={m}>{m}</option>)}
        </select>
      </Field>
      <Field label="Nights" compact={compact}>
        <select className="bar-select" value={nights} onChange={(e) => setNights(Number(e.target.value))} aria-label="Nights">
          {Array.from({ length: planner.maxNights - planner.minNights + 1 }, (_, i) => i + planner.minNights).map((n) => (
            <option key={n} value={n}>{n} nights</option>
          ))}
        </select>
      </Field>
      <Field label="Travellers" compact={compact}>
        <select className="bar-select" value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} aria-label="Travellers">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? "traveller" : "travellers"}</option>)}
        </select>
      </Field>
      <Field label="Journey type" compact={compact} last>
        <select className="bar-select" value={journeyType} onChange={(e) => setJourneyType(e.target.value)} aria-label="Journey type">
          {planner.journeyTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>
    </>
  );

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="h-px w-full" />
      <div className={cn("hidden md:block", className)}>
        <div className="grid grid-cols-[repeat(4,minmax(0,1fr))_auto] items-stretch bg-whitewash text-ink shadow-[0_20px_50px_-20px_rgba(31,26,23,0.4)]">
          {fields(false)}
          <button onClick={begin} className="bg-maroon px-10 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-maroon-deep">
            Begin
          </button>
        </div>
      </div>
      {/* Mobile: compact card */}
      <div className={cn("md:hidden", className)}>
        <button onClick={begin} className="flex w-full items-center justify-between bg-whitewash px-5 py-4 text-left text-ink shadow-lg">
          <span>
            <span className="eyebrow block text-ink-mute">Plan your journey</span>
            <span className="text-[0.9375rem]">{month} · {nights} nights · {travelers} travellers</span>
          </span>
          <span className="btn btn-primary !py-2.5 !px-4">Begin</span>
        </button>
      </div>

      {/* Sticky compact strip (desktop) & pinned button (mobile) once the hero bar scrolls away.
          Always rendered; shown and hidden with CSS transitions. */}
      {variant === "hero" && (
        <>
          <div
            inert={!stuck}
            aria-hidden={!stuck}
            className={cn(
              "fixed inset-x-0 top-16 z-40 hidden border-b border-line bg-whitewash/95 backdrop-blur transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:block",
              stuck ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0",
            )}
          >
            <div className="container-x grid grid-cols-[repeat(4,minmax(0,1fr))_auto] items-stretch">
              {fields(true)}
              <button onClick={begin} className="my-2 ml-4 rounded-full bg-maroon px-7 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-maroon-deep">
                Begin
              </button>
            </div>
          </div>
          <div
            inert={!stuck}
            aria-hidden={!stuck}
            className={cn(
              "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-whitewash p-3 transition-transform duration-300 md:hidden",
              stuck ? "translate-y-0" : "pointer-events-none translate-y-full",
            )}
          >
            <button onClick={begin} className="btn btn-primary w-full">Plan your journey</button>
          </div>
        </>
      )}
    </>
  );
}

function Field({ label, children, compact, last }: { label: string; children: React.ReactNode; compact?: boolean; last?: boolean }) {
  return (
    <div className={cn("flex flex-col justify-center border-line", compact ? "px-4 py-2.5" : "px-6 py-4 md:py-5", !last && "border-r")}>
      <span className={cn("eyebrow text-ink-mute", compact ? "text-[0.5625rem] mb-0" : "mb-1")}>{label}</span>
      {children}
    </div>
  );
}
