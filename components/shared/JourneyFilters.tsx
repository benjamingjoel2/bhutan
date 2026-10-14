"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Journey, JourneyKind, Region, BudgetTier } from "@/data/types";
import { regionLabels } from "@/data/types";
import { JourneyCard } from "./Cards";
import { cn } from "@/lib/utils";

const kinds: { id: JourneyKind | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "classic-western", label: "Classic western" },
  { id: "western-central", label: "Western & central" },
  { id: "festival", label: "Festival" },
  { id: "lodge-circuit", label: "Lodge circuit" },
  { id: "wellness", label: "Wellness" },
  { id: "bhutan-plus", label: "Bhutan + Nepal / India" },
];
const durations = [
  { id: "all", label: "Any length", test: () => true },
  { id: "short", label: "Up to 7 nights", test: (n: number) => n <= 7 },
  { id: "mid", label: "8–10 nights", test: (n: number) => n >= 8 && n <= 10 },
  { id: "long", label: "11+ nights", test: (n: number) => n >= 11 },
];
const budgets: { id: BudgetTier | "all"; label: string }[] = [
  { id: "all", label: "Any budget" },
  { id: "comfort", label: "Comfort" },
  { id: "premium", label: "Premium" },
  { id: "ultra", label: "Ultra luxury" },
];

export function JourneyFilters({ journeys }: { journeys: Journey[] }) {
  const params = useSearchParams();
  const initialKind = (params.get("kind") as JourneyKind | null) ?? "all";
  const [kind, setKind] = useState<JourneyKind | "all">(kinds.some((k) => k.id === initialKind) ? initialKind : "all");
  const [region, setRegion] = useState<Region | "all">("all");
  const [duration, setDuration] = useState("all");
  const [budget, setBudget] = useState<BudgetTier | "all">("all");
  const [festival, setFestival] = useState(false);
  const [wellness, setWellness] = useState(false);

  const list = useMemo(() => journeys.filter((j) =>
    (kind === "all" || j.kind === kind) &&
    (region === "all" || j.regions.includes(region)) &&
    (durations.find((d) => d.id === duration)?.test(j.nights) ?? true) &&
    (budget === "all" || j.budgetTier === budget || j.pricing.some((p) => p.tier === budget)) &&
    (!festival || !!j.festival) &&
    (!wellness || !!j.wellness),
  ), [journeys, kind, region, duration, budget, festival, wellness]);

  const reset = () => { setKind("all"); setRegion("all"); setDuration("all"); setBudget("all"); setFestival(false); setWellness(false); };

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-5 border-b border-line bg-whitewash/95 px-5 py-4 backdrop-blur md:mx-0 md:px-0">
        <div className="scrollbar-none flex items-center gap-2 overflow-x-auto">
          {kinds.map((k) => (
            <button key={k.id} onClick={() => setKind(k.id)} aria-pressed={kind === k.id} className={cn("shrink-0 rounded-full border px-4 py-2 text-[0.75rem] uppercase tracking-[0.12em] transition-colors", kind === k.id ? "border-ink bg-ink text-whitewash" : "border-line-strong text-ink-soft hover:border-ink")}>{k.label}</button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.8125rem]">
          <Select label="Region" value={region} onChange={(v) => setRegion(v as Region | "all")} options={[{ id: "all", label: "Any region" }, ...(Object.keys(regionLabels) as Region[]).map((r) => ({ id: r, label: regionLabels[r] }))]} />
          <Select label="Duration" value={duration} onChange={setDuration} options={durations} />
          <Select label="Budget" value={budget} onChange={(v) => setBudget(v as BudgetTier | "all")} options={budgets} />
          <label className="flex items-center gap-2"><input type="checkbox" className="accent-maroon" checked={festival} onChange={(e) => setFestival(e.target.checked)} /> Built around a festival</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="accent-maroon" checked={wellness} onChange={(e) => setWellness(e.target.checked)} /> Wellness focus</label>
          <button onClick={reset} className="text-ink-mute underline underline-offset-4">Reset</button>
          <span className="ml-auto text-ink-mute">{list.length} {list.length === 1 ? "journey" : "journeys"}</span>
        </div>
      </div>
      {list.length === 0 ? (
        <p className="py-20 text-center text-ink-soft">No journey matches every filter. Loosen one, or <a href="/plan-your-journey" className="underline">tell us what you want</a> and we will build it.</p>
      ) : (
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {list.map((j) => <JourneyCard key={j.slug} j={j} />)}
        </div>
      )}
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { id: string; label: string }[] }) {
  return (
    <label className="flex items-center gap-2">
      <span className="eyebrow text-ink-mute">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="cursor-pointer bg-transparent text-ink outline-none">
        {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
      </select>
    </label>
  );
}
