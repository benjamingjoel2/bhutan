import Link from "next/link";
import type { Journey, Trek } from "@/data/types";
import { regionLabels } from "@/data/types";
import { getStay } from "@/data/stays";
import { getDestination } from "@/data/destinations";
import { getFestival } from "@/data/festivals";
import { fees, pricingCopy } from "@/config/site";
import { PageHero } from "./PageHero";
import { SubNav } from "./SubNav";
import { Breadcrumb } from "./Breadcrumb";
import { CtaBand } from "./CtaBand";
import { EnquireButton } from "./EnquireButton";
import { StayCard } from "./Cards";
import { Accordion } from "@/components/ui/Accordion";
import { Price } from "@/components/ui/Price";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const kindLabel: Record<string, string> = {
  "classic-western": "Classic western Bhutan", "western-central": "Western and central Bhutan", festival: "Festival journey", trek: "Trekking expedition",
  "lodge-circuit": "Luxury lodge circuit", wellness: "Wellness and meditation", "bhutan-plus": "Bhutan + Nepal or India",
};

export function JourneyDetail({ j, trek }: { j: Journey | Trek; trek?: Trek }) {
  const isTrek = !!trek;
  const base = isTrek ? "/treks" : "/journeys";
  const stays = Array.from(new Set(j.stays)).map(getStay).filter(Boolean);
  const festival = j.festival ? getFestival(j.festival) : undefined;
  const prefill = { journeySlug: j.slug, journeyType: kindLabel[j.kind], nights: j.nights, festival: j.festival };
  const subnav = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Day by day" },
    { id: "inclusions", label: "Inclusions" },
    { id: "pricing", label: "Pricing" },
    { id: "map", label: "Map" },
    ...(stays.length ? [{ id: "stays", label: "Stays" }] : []),
  ];

  return (
    <main id="main" data-hero="true">
      <PageHero image={j.hero} eyebrow={`${kindLabel[j.kind]} · ${j.nights} nights`} title={j.name} intro={j.tagline} size="lg">
        <div className="mt-4"><Breadcrumb light items={[{ label: isTrek ? "Treks" : "Journeys", href: base }, { label: j.name }]} /></div>
      </PageHero>
      <SubNav items={subnav} cta={<EnquireButton size="sm" prefill={prefill}>Enquire</EnquireButton>} />

      <section id="overview" className="section-y scroll-mt-32">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-4">Overview</p>
            <p className="display-md">{j.summary}</p>
            {festival && (
              <p className="mt-6 text-[0.9375rem] text-ink-soft">
                Built around <Link href={`/festivals#${festival.slug}`} className="underline underline-offset-4">{festival.name}</Link> in {festival.valley} ({festival.month}). Festival dates follow the lunar calendar and are confirmed yearly; we hold your dates flexible until they are.
              </p>
            )}
          </Reveal>
          <aside className="lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-line border-y border-line">
              <Row label="Nights" value={`${j.nights}`} />
              <Row label="Regions" value={j.regions.map((r) => regionLabels[r]).join(", ")} />
              <Row label="Best months" value={j.bestMonths.join(", ")} />
              {trek && <Row label="Trekking days" value={`${trek.daysCount}`} />}
              {trek && <Row label="Max altitude" value={`${trek.maxAltitudeM.toLocaleString()} m`} />}
              {trek && <Row label="Difficulty" value={trek.difficulty} />}
              <Row label="From" value={<><Price usd={j.priceFromUSD} /> {pricingCopy.perPerson}</>} sub={`${j.sdfIncluded ? pricingCopy.sdfIncluded : pricingCopy.sdfExcluded} · ${j.visaIncluded ? pricingCopy.visaIncluded : pricingCopy.visaExcluded}`} />
            </dl>
            <EnquireButton prefill={prefill} className="mt-6 w-full">Plan this journey</EnquireButton>
          </aside>
        </div>
      </section>

      {trek && (
        <section className="section-y-sm bg-stone">
          <div className="container-x grid gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Fitness and altitude</p>
              <ul className="space-y-3 text-[1rem] text-ink-soft">
                {trek.fitnessAdvice.map((a, i) => <li key={i} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-maroon" />{a}</li>)}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Camps and support</p>
              <p className="text-[1rem] text-ink-soft">{trek.campsOrLodges}</p>
              <p className="mt-4 border-l-2 border-saffron pl-4 text-[0.9375rem] text-ink">A licensed trekking guide and a full support team (cook, horsemen, pack animals) are required by regulation for every trek in Bhutan. We arrange all of it.</p>
            </div>
          </div>
        </section>
      )}

      <section id="itinerary" className="section-y scroll-mt-32">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="eyebrow mb-4">Day by day</p><h2 className="display-md">{j.days.length} days, loosely held.</h2><p className="mt-4 text-ink-soft">Every day can bend. This is the shape we would start from.</p></div>
          <div className="lg:col-span-8">
            <Accordion
              defaultOpen={`day-1`}
              items={j.days.map((d) => {
                const dest = d.destination ? getDestination(d.destination) : undefined;
                const stay = d.stay ? getStay(d.stay) : undefined;
                return {
                  id: `day-${d.day}`,
                  meta: `Day ${d.day}${dest ? ` · ${dest.name}` : ""}`,
                  title: d.title,
                  body: (
                    <div>
                      <p>{d.body}</p>
                      {stay && <p className="mt-3 text-[0.875rem] text-ink-mute">Stay: <Link href={`/stays/${stay.slug}`} className="underline underline-offset-4">{stay.name}</Link> <span className="text-maroon">· placeholder name</span></p>}
                    </div>
                  ),
                };
              })}
            />
          </div>
        </div>
      </section>

      <section id="inclusions" className="section-y scroll-mt-32 bg-whitewash-deep">
        <div className="container-x">
          <SectionHeader eyebrow="Inclusions" title="What is in the price, and what is not." size="md" />
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <List title="Included" items={j.inclusions} tone="pine" />
            <List title="Not included" items={j.exclusions} tone="mute" />
          </div>
        </div>
      </section>

      <section id="pricing" className="section-y scroll-mt-32">
        <div className="container-x">
          <SectionHeader eyebrow="Pricing" title="Per person, sharing, all-in." intro={`Every figure below includes the Sustainable Development Fee (${fees.sdf.adultPerNightUSD} USD per adult per night) and the ${fees.visa.feeUSD} USD visa fee. ${pricingCopy.feesVerified}.`} size="md" />
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {j.pricing.map((p) => (
              <StaggerItem key={p.tier} className={cn("border p-7", p.tier === j.budgetTier ? "border-maroon bg-white" : "border-line")}>
                <p className="eyebrow">{p.label}</p>
                <p className="mt-4 font-display text-[2.5rem] leading-none"><Price usd={p.perPersonUSD} /></p>
                <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.14em] text-pine">per person · {j.nights} nights · SDF included · visa fee included</p>
                <p className="mt-4 text-[0.9375rem] text-ink-soft">{p.note}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-6 text-[0.8125rem] text-ink-mute">Prices shown in your selected currency are approximate conversions from USD. Children and Indian nationals pay a different SDF; we adjust the quote accordingly. Verify fees at {fees.sourceUrl}.</p>
        </div>
      </section>

      <section id="map" className="section-y-sm scroll-mt-32 bg-stone">
        <div className="container-x">
          <SectionHeader eyebrow="Route" title="Where the road goes." size="md" />
          <div className="relative mt-8 aspect-[16/7] overflow-hidden border border-line-strong bg-whitewash">
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="eyebrow text-ink-mute">Map placeholder</p>
                <p className="mt-3 font-display text-[1.5rem]">{j.destinations.map((s) => getDestination(s)?.name ?? s).join(" → ")}</p>
                <p className="mt-2 text-[0.8125rem] text-ink-mute">An interactive route map (Mapbox / Google Maps) slots in here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {stays.length > 0 && (
        <section id="stays" className="section-y scroll-mt-32">
          <div className="container-x">
            <SectionHeader eyebrow="Stays on this journey" title="Where you will sleep." intro="Placeholder names until partner agreements are signed." size="md" />
            <Stagger className="mt-10 grid gap-8 md:grid-cols-3">
              {stays.slice(0, 6).map((s) => <StaggerItem key={s!.slug}><StayCard s={s!} /></StaggerItem>)}
            </Stagger>
          </div>
        </section>
      )}

      <CtaBand title={`Begin ${j.name.toLowerCase().startsWith("the") ? j.name : `the ${j.name}`}.`} line="Tell us when and who. We reply with a first sketch within two working days." prefill={prefill} image={j.card} />
    </main>
  );
}

function Row({ label, value, sub }: { label: string; value: React.ReactNode; sub?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3">
      <dt className="eyebrow text-ink-mute">{label}</dt>
      <dd className="text-right text-[0.9375rem]">{value}{sub && <span className="block text-[0.625rem] uppercase tracking-[0.14em] text-pine">{sub}</span>}</dd>
    </div>
  );
}

function List({ title, items, tone }: { title: string; items: string[]; tone: "pine" | "mute" }) {
  return (
    <div>
      <p className="eyebrow mb-5">{title}</p>
      <ul className="divide-y divide-line border-y border-line">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 py-3 text-[0.9375rem] text-ink-soft">
            <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", tone === "pine" ? "bg-pine" : "bg-stone-dark")} aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
