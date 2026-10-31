"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fees, planner, site } from "@/config/site";
import { images } from "@/data/images";
import { estimateSdf } from "@/lib/pricing";
import { Price } from "@/components/ui/Price";
import { cn } from "@/lib/utils";
import type { PlannerPrefill } from "@/lib/ui";
import { addOnOptions, emptyPlanner, journeyCardOptions, phoneCodes, type PlannerData } from "./types";

const STORAGE_KEY = "dzong-house:planner";
const steps = ["When", "What", "Budget", "Who", "Contact"] as const;

type Errors = Partial<Record<keyof PlannerData | "childAges", string>>;

export function PlannerForm({ prefill, onClose, compact }: { prefill?: PlannerPrefill; onClose?: () => void; compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<PlannerData>(emptyPlanner);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [hydrated, setHydrated] = useState(false);

  // Restore progress, then apply prefill on top
  useEffect(() => {
    let restored: Partial<PlannerData & { step: number }> = {};
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) restored = JSON.parse(raw);
    } catch {}
    const { step: savedStep, ...saved } = restored;
    const next: PlannerData = { ...emptyPlanner, ...saved };
    if (prefill?.month) next.arrivalMonth = prefill.month;
    if (prefill?.nights) next.nights = prefill.nights;
    if (prefill?.travelers) next.adults = prefill.travelers;
    if (prefill?.journeyType && !next.journeyTypes.includes(prefill.journeyType)) next.journeyTypes = [prefill.journeyType, ...next.journeyTypes];
    if (prefill?.journeySlug || prefill?.festival) next.source = { journeySlug: prefill.journeySlug, festival: prefill.festival };
    if (prefill?.festival) next.flexibleForFestival = true;
    setData(next);
    if (typeof savedStep === "number" && !prefill?.journeyType && !prefill?.month) setStep(Math.min(savedStep, steps.length - 1));
    setHydrated(true);
  }, [prefill]);

  // Persist
  useEffect(() => {
    if (!hydrated || status === "done") return;
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...data, step })); } catch {}
  }, [data, step, hydrated, status]);

  const set = useCallback(<K extends keyof PlannerData>(key: K, value: PlannerData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }, []);

  const validate = (s: number): Errors => {
    const e: Errors = {};
    if (s === 0) {
      if (data.dateMode === "exact" && !data.arrivalDate) e.arrivalDate = "Choose an arrival date.";
      if (data.dateMode === "approximate" && !data.arrivalMonth) e.arrivalMonth = "Choose an arrival month.";
      if (data.nights < planner.minNights || data.nights > planner.maxNights) e.nights = `Between ${planner.minNights} and ${planner.maxNights} nights.`;
    }
    if (s === 1 && data.journeyTypes.length === 0) e.journeyTypes = "Choose at least one, or “Not sure yet”.";
    if (s === 3) {
      if (data.adults < 1) e.adults = "At least one adult.";
      if (data.childAges.some((a) => Number.isNaN(a) || a < 0 || a > 17)) e.childAges = "Enter each child’s age (0–17).";
      if (!data.nationality.trim()) e.nationality = "Tell us your nationality — entry rules differ.";
    }
    if (s === 4) {
      if (!data.name.trim()) e.name = "Your name.";
      if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "A valid email address.";
      if (data.phone && !/^[0-9 ()-]{5,}$/.test(data.phone)) e.phone = "Digits only.";
      if (data.contactMethods.length === 0) e.contactMethods = "How should we reach you?";
      if (data.contactMethods.some((m) => m !== "Email") && !data.phone) e.phone = "Add a number so we can call you.";
    }
    return e;
  };

  const next = () => {
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length === 0) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    const e = validate(4);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/plan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("bad status");
      setStatus("done");
      try { window.localStorage.removeItem(STORAGE_KEY); } catch {}
    } catch {
      setStatus("error");
    }
  };

  const sdf = useMemo(() => estimateSdf(data.nights, data.adults, data.childAges), [data.nights, data.adults, data.childAges]);

  if (status === "done") return <Confirmation data={data} onClose={onClose} />;

  return (
    <div className={cn("flex flex-col", compact ? "h-full" : "")}>
      <Progress step={step} />
      <div className={cn("flex-1", compact && "overflow-y-auto")}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="py-8"
          >
            {step === 0 && <StepWhen data={data} set={set} errors={errors} />}
            {step === 1 && <StepWhat data={data} set={set} errors={errors} />}
            {step === 2 && <StepBudget data={data} set={set} />}
            {step === 3 && <StepWho data={data} set={set} errors={errors} sdf={sdf} />}
            {step === 4 && <StepContact data={data} set={set} errors={errors} />}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between border-t border-line pt-6">
        <button onClick={back} disabled={step === 0} className={cn("text-[0.6875rem] uppercase tracking-[0.18em] font-medium", step === 0 ? "invisible" : "")}>
          ← Back
        </button>
        <p className="text-[0.8125rem] text-ink-mute">Step {step + 1} of {steps.length}</p>
        {step < steps.length - 1 ? (
          <button onClick={next} className="btn btn-primary">Continue</button>
        ) : (
          <button onClick={submit} disabled={status === "sending"} className="btn btn-primary">
            {status === "sending" ? "Sending…" : "Send my plan"}
          </button>
        )}
      </div>
      {status === "error" && <p role="alert" className="mt-3 text-[0.875rem] text-maroon">Something went wrong. Please try again, or write to {site.contact.email}.</p>}
    </div>
  );
}

function Progress({ step }: { step: number }) {
  return (
    <ol className="grid grid-cols-5 gap-2" aria-label="Progress">
      {steps.map((s, i) => (
        <li key={s} aria-current={i === step ? "step" : undefined} className="flex flex-col gap-2">
          <span className={cn("h-px transition-colors duration-500", i <= step ? "bg-saffron" : "bg-line")} />
          <span className={cn("text-[0.6875rem] uppercase tracking-[0.18em]", i === step ? "text-ink font-medium" : "text-ink-mute")}>{s}</span>
        </li>
      ))}
    </ol>
  );
}

function Err({ msg }: { msg?: string }) {
  return msg ? <p role="alert" className="mt-2 text-[0.8125rem] text-maroon">{msg}</p> : null;
}

function StepTitle({ title, line }: { title: string; line: string }) {
  return (
    <div className="mb-8">
      <h2 className="display-md">{title}</h2>
      <p className="mt-2 text-ink-soft">{line}</p>
    </div>
  );
}

type StepProps = { data: PlannerData; set: <K extends keyof PlannerData>(k: K, v: PlannerData[K]) => void; errors: Errors };

function StepWhen({ data, set, errors }: StepProps) {
  return (
    <div>
      <StepTitle title="When would you like to arrive?" line="Spring and autumn are the celebrated seasons. Winter is cold, clear and quiet." />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <span className="field-label">Dates</span>
          <div className="flex gap-2">
            {(["approximate", "exact"] as const).map((m) => (
              <Chip key={m} active={data.dateMode === m} onClick={() => set("dateMode", m)}>{m === "exact" ? "Exact dates" : "Approximate"}</Chip>
            ))}
          </div>
          <div className="mt-5">
            {data.dateMode === "exact" ? (
              <label>
                <span className="field-label">Arrival date</span>
                <input type="date" className="field" value={data.arrivalDate} onChange={(e) => set("arrivalDate", e.target.value)} />
                <Err msg={errors.arrivalDate} />
              </label>
            ) : (
              <label>
                <span className="field-label">Arrival month</span>
                <select className="field" value={data.arrivalMonth} onChange={(e) => set("arrivalMonth", e.target.value)}>
                  <option value="">Choose a month</option>
                  {planner.months.map((m) => <option key={m}>{m}</option>)}
                </select>
                <Err msg={errors.arrivalMonth} />
              </label>
            )}
          </div>
        </div>
        <div>
          <label>
            <span className="field-label">Length of stay: {data.nights} nights</span>
            <input
              type="range"
              min={planner.minNights}
              max={planner.maxNights}
              value={data.nights}
              onChange={(e) => set("nights", Number(e.target.value))}
              className="w-full accent-maroon"
              aria-valuemin={planner.minNights}
              aria-valuemax={planner.maxNights}
              aria-valuenow={data.nights}
            />
            <div className="flex justify-between text-[0.75rem] text-ink-mute"><span>{planner.minNights}</span><span>{planner.maxNights}</span></div>
            <Err msg={errors.nights} />
          </label>
          <div className="mt-6 space-y-3">
            <Toggle checked={data.flexibleForFestival} onChange={(v) => set("flexibleForFestival", v)} label="I can shift my dates to match a festival" />
          </div>
          <div className="mt-6">
            <span className="field-label">Bhutan and you</span>
            <div className="flex gap-2">
              <Chip active={data.experienceLevel === "first-time"} onClick={() => set("experienceLevel", "first-time")}>First time in Bhutan</Chip>
              <Chip active={data.experienceLevel === "experienced"} onClick={() => set("experienceLevel", "experienced")}>I have been before</Chip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepWhat({ data, set, errors }: StepProps) {
  const toggle = (id: string) => {
    const has = data.journeyTypes.includes(id);
    set("journeyTypes", has ? data.journeyTypes.filter((t) => t !== id) : [...data.journeyTypes, id]);
  };
  return (
    <div>
      <StepTitle title="What kind of journey?" line="Choose one or several. We will shape the route around them." />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {journeyCardOptions.map((o) => {
          const active = data.journeyTypes.includes(o.id);
          const im = images[o.image];
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => toggle(o.id)}
              aria-pressed={active}
              className={cn("group relative aspect-[4/5] overflow-hidden text-left text-white outline-none ring-saffron focus-visible:ring-2", active && "ring-2 ring-maroon")}
            >
              <Image src={im.src} alt="" fill sizes="(min-width: 768px) 25vw, 50vw" className={cn("object-cover transition-transform duration-700 group-hover:scale-105", !active && "grayscale-[30%]")} />
              <div className={cn("absolute inset-0 bg-gradient-to-t from-ink/80 to-ink/10 transition-opacity", active ? "opacity-90" : "opacity-70")} />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display text-[1.125rem] leading-tight md:text-[1.25rem]">{o.id}</p>
                <p className="mt-1 text-[0.75rem] text-white/75">{o.line}</p>
              </div>
              <span className={cn("absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full border border-white/70 text-[0.75rem] transition-colors", active && "bg-maroon border-maroon")} aria-hidden="true">
                {active ? "✓" : ""}
              </span>
            </button>
          );
        })}
      </div>
      <Err msg={errors.journeyTypes} />
      {data.journeyTypes.includes("Not sure yet") && (
        <label className="mt-6 block">
          <span className="field-label">What draws you to Bhutan?</span>
          <textarea className="field" rows={3} value={data.journeyNotes} onChange={(e) => set("journeyNotes", e.target.value)} placeholder="Mountains, monasteries, a festival you read about…" />
        </label>
      )}
    </div>
  );
}

function StepBudget({ data, set }: Omit<StepProps, "errors">) {
  return (
    <div>
      <StepTitle title="How would you like to travel?" line="Approximate per-person, per-day figures, all-in: guide, driver, meals, entries, and the Sustainable Development Fee." />
      <div className="grid gap-4 md:grid-cols-4">
        {planner.budgetTiers.map((t) => {
          const active = data.budget === t.id;
          return (
            <button key={t.id} type="button" onClick={() => set("budget", t.id)} aria-pressed={active}
              className={cn("flex flex-col items-start border p-6 text-left transition-colors", active ? "border-maroon bg-white" : "border-line hover:border-line-strong")}>
              <span className="eyebrow">{t.label}</span>
              <span className="mt-3 font-display text-[2rem] leading-none">
                From <Price usd={t.perPersonPerDayUSD} />
              </span>
              <span className="mt-1 text-[0.6875rem] uppercase tracking-[0.14em] text-pine">per person · day · SDF included</span>
              <span className="mt-3 text-[0.875rem] text-ink-soft">{t.line}</span>
            </button>
          );
        })}
        <button type="button" onClick={() => set("budget", "unsure")} aria-pressed={data.budget === "unsure"}
          className={cn("flex flex-col items-start border p-6 text-left transition-colors", data.budget === "unsure" ? "border-maroon bg-white" : "border-line hover:border-line-strong")}>
          <span className="eyebrow">Not sure yet</span>
          <span className="mt-3 font-display text-[1.5rem] leading-tight">Help me decide</span>
          <span className="mt-3 text-[0.875rem] text-ink-soft">We will suggest a tier once we know the route and season.</span>
        </button>
      </div>
      <p className="mt-6 text-[0.8125rem] text-ink-mute">
        Figures include the SDF of <Price usd={fees.sdf.adultPerNightUSD} approx={false} /> per adult per night and the one-off <Price usd={fees.visa.feeUSD} approx={false} /> visa fee. Fees verified as of {fees.verifiedOn}; verify at bhutan.travel.
      </p>
    </div>
  );
}

function StepWho({ data, set, errors, sdf }: StepProps & { sdf: ReturnType<typeof estimateSdf> }) {
  const setChildren = (n: number) => {
    const ages = [...data.childAges];
    while (ages.length < n) ages.push(8);
    set("childAges", ages.slice(0, n));
  };
  const toggleAddOn = (id: string) => set("addOns", data.addOns.includes(id) ? data.addOns.filter((a) => a !== id) : [...data.addOns, id]);
  return (
    <div>
      <StepTitle title="Who is travelling?" line="Children and Indian nationals pay a different Sustainable Development Fee, so this shapes the price." />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Counter label="Adults" value={data.adults} min={1} max={16} onChange={(v) => set("adults", v)} />
            <Counter label="Children (under 18)" value={data.childAges.length} min={0} max={8} onChange={setChildren} />
          </div>
          <Err msg={errors.adults} />
          {data.childAges.length > 0 && (
            <div>
              <span className="field-label">Children’s ages at travel</span>
              <div className="flex flex-wrap gap-3">
                {data.childAges.map((age, i) => (
                  <label key={i} className="w-20">
                    <span className="sr-only">Child {i + 1} age</span>
                    <input type="number" min={0} max={17} className="field" value={Number.isNaN(age) ? "" : age}
                      onChange={(e) => { const ages = [...data.childAges]; ages[i] = e.target.value === "" ? NaN : Number(e.target.value); set("childAges", ages); }} />
                  </label>
                ))}
              </div>
              <Err msg={errors.childAges} />
              <p className="mt-2 text-[0.8125rem] text-ink-mute">Under {fees.sdf.childFreeUnderAge}: no SDF. Ages {fees.sdf.childFreeUnderAge}–{fees.sdf.childRateMaxAge}: half rate. Verify at bhutan.travel.</p>
            </div>
          )}
          <label className="block">
            <span className="field-label">Nationality</span>
            <input className="field" value={data.nationality} onChange={(e) => { set("nationality", e.target.value); if (/india/i.test(e.target.value)) set("indianNational", true); }} placeholder="e.g. British, Australian, Indian" />
            <Err msg={errors.nationality} />
          </label>
          <Toggle checked={data.indianNational} onChange={(v) => set("indianNational", v)} label="One or more travellers are Indian nationals" />
          {data.indianNational && <p className="text-[0.8125rem] text-ink-mute">{fees.indianNationals.note}</p>}
        </div>
        <div className="space-y-6">
          <div>
            <span className="field-label">Add-ons</span>
            <div className="space-y-3">
              {addOnOptions.map((a) => (
                <label key={a.id} className={cn("flex cursor-pointer gap-3 border p-4 transition-colors", data.addOns.includes(a.id) ? "border-maroon bg-white" : "border-line")}>
                  <input type="checkbox" className="mt-1 accent-maroon" checked={data.addOns.includes(a.id)} onChange={() => toggleAddOn(a.id)} />
                  <span>
                    <span className="block text-[0.9375rem]">{a.label}</span>
                    <span className="block text-[0.8125rem] text-ink-mute">{a.line}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="border border-line bg-white p-5">
            <p className="eyebrow mb-2">Government fees for this party</p>
            <p className="font-display text-[1.75rem] leading-none"><Price usd={sdf.total} /></p>
            <p className="mt-1 text-[0.8125rem] text-ink-mute">
              SDF for {data.nights} nights{data.indianNational ? " (non-Indian travellers; Indian nationals pay the INR rate)" : ""}, plus visa fee per person. Always included in our prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepContact({ data, set, errors }: StepProps) {
  const toggleMethod = (m: string) => set("contactMethods", data.contactMethods.includes(m) ? data.contactMethods.filter((x) => x !== m) : [...data.contactMethods, m]);
  return (
    <div>
      <StepTitle title="Where shall we write to you?" line="One specialist replies within two working days with a first sketch of your journey." />
      <div className="grid gap-6 md:grid-cols-2">
        <label><span className="field-label">Name</span><input className="field" value={data.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" /><Err msg={errors.name} /></label>
        <label><span className="field-label">Email</span><input type="email" className="field" value={data.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" /><Err msg={errors.email} /></label>
        <div className="grid grid-cols-[6rem_1fr] gap-3">
          <label><span className="field-label">Code</span>
            <select className="field" value={data.phoneCode} onChange={(e) => set("phoneCode", e.target.value)}>{phoneCodes.map((c) => <option key={c}>{c}</option>)}</select>
          </label>
          <label><span className="field-label">Phone</span><input type="tel" className="field" value={data.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel-national" /><Err msg={errors.phone} /></label>
        </div>
        <div>
          <span className="field-label">Preferred contact</span>
          <div className="flex gap-2">
            {["Email", "Telephone"].map((m) => <Chip key={m} active={data.contactMethods.includes(m)} onClick={() => toggleMethod(m)}>{m}</Chip>)}
          </div>
          <Err msg={errors.contactMethods} />
        </div>
        <label className="md:col-span-2"><span className="field-label">Anything else</span>
          <textarea className="field" rows={3} value={data.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Occasions, mobility, diet, a festival you have your heart set on…" />
        </label>
      </div>
      <p className="mt-6 text-[0.8125rem] text-ink-mute">We keep your details only to plan this journey. No lists, no noise.</p>
    </div>
  );
}

function Confirmation({ data, onClose }: { data: PlannerData; onClose?: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="py-10 text-center">
      <p className="eyebrow mb-4">Received</p>
      <h2 className="display-lg">Thank you, {data.name.split(" ")[0]}.</h2>
      <p className="mx-auto mt-5 max-w-md text-ink-soft">
        Your specialist will write to you at {data.email} within two working days with a first sketch of your {data.nights}-night journey.
        Until then, the kingdom keeps its own time.
      </p>
      <div className="mx-auto mt-8 h-px w-16 bg-saffron" />
      {onClose && <button onClick={onClose} className="btn btn-outline mt-8">Close</button>}
    </motion.div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" aria-pressed={active} onClick={onClick}
      className={cn("rounded-full border px-4 py-2 text-[0.8125rem] transition-colors", active ? "border-maroon bg-maroon text-white" : "border-line-strong text-ink-soft hover:border-ink")}>
      {children}
    </button>
  );
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-[0.9375rem]">
      <span role="switch" aria-checked={checked} tabIndex={0} onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); onChange(!checked); } }}
        onClick={() => onChange(!checked)} className={cn("relative h-5 w-9 rounded-full transition-colors", checked ? "bg-maroon" : "bg-stone-dark")}>
        <span className={cn("absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform", checked ? "translate-x-4" : "translate-x-0.5")} />
      </span>
      {label}
    </label>
  );
}

function Counter({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void }) {
  return (
    <div>
      <span className="field-label">{label}</span>
      <div className="flex items-center justify-between border-b border-line-strong py-2">
        <button type="button" aria-label={`Fewer ${label}`} onClick={() => onChange(Math.max(min, value - 1))} className="grid h-8 w-8 place-items-center rounded-full border border-line-strong">−</button>
        <span className="font-display text-[1.5rem]">{value}</span>
        <button type="button" aria-label={`More ${label}`} onClick={() => onChange(Math.min(max, value + 1))} className="grid h-8 w-8 place-items-center rounded-full border border-line-strong">+</button>
      </div>
    </div>
  );
}
