import Image from "next/image";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/destinations";
import { getJourney, journeys } from "@/data/journeys";
import { getTrek } from "@/data/treks";
import { getStay } from "@/data/stays";
import { festivals } from "@/data/festivals";
import { regionLabels } from "@/data/types";
import { PageHero } from "@/components/shared/PageHero";
import { SubNav } from "@/components/shared/SubNav";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CtaBand } from "@/components/shared/CtaBand";
import { EnquireButton } from "@/components/shared/EnquireButton";
import { FaqList } from "@/components/shared/FaqList";
import { JourneyCard, StayCard } from "@/components/shared/Cards";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const generateStaticParams = () => destinations.map((d) => ({ slug: d.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const d = getDestination((await params).slug);
  if (!d) return {};
  return pageMeta({ title: `${d.name} · ${regionLabels[d.region]}`, description: d.tagline, path: `/destinations/${d.slug}`, image: d.hero.src });
}

const subnav = [
  { id: "overview", label: "Overview" },
  { id: "best-time", label: "Best time" },
  { id: "highlights", label: "Highlights" },
  { id: "dzongs", label: "Dzongs & temples" },
  { id: "stays", label: "Stays" },
  { id: "journeys", label: "Journeys" },
  { id: "faq", label: "FAQ" },
];

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const d = getDestination((await params).slug);
  if (!d) notFound();
  const related = d.journeys.map((s) => getJourney(s) ?? getTrek(s)).filter(Boolean);
  const fallback = related.length ? related : journeys.filter((j) => j.destinations.includes(d.slug)).slice(0, 3);
  const stays = d.stays.map(getStay).filter(Boolean);
  const localFestivals = festivals.filter((f) => f.destination === d.slug);

  return (
    <main id="main" data-hero="true">
      <PageHero image={d.hero} eyebrow={regionLabels[d.region]} title={d.name} intro={d.tagline} size="lg">
        <div className="mt-4"><Breadcrumb light items={[{ label: "Destinations", href: "/destinations" }, { label: regionLabels[d.region], href: `/destinations#${d.region}` }, { label: d.name }]} /></div>
      </PageHero>
      <SubNav items={subnav} cta={<EnquireButton size="sm" prefill={{ journeyType: d.region === "western" ? "Classic western Bhutan" : "Western and central Bhutan" }}>Plan a journey here</EnquireButton>} />

      {/* Overview */}
      <section id="overview" className="section-y scroll-mt-32">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">Overview</p>
            <p className="display-md">{d.overview[0]}</p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
            {d.overview.slice(1).map((p, i) => <p key={i}>{p}</p>)}
          </Reveal>
        </div>
        <div className="container-x mt-14">
          <dl className="grid grid-cols-2 gap-6 border-y border-line py-8 md:grid-cols-4">
            <Fact label="Altitude" value={`${d.altitudeM.toLocaleString()} m`} />
            <Fact label="From Paro" value={d.driveFromParo} />
            <Fact label="Best months" value={d.bestMonths.join(", ")} />
            <Fact label="Region" value={regionLabels[d.region]} />
          </dl>
        </div>
      </section>

      {/* Best time */}
      <section id="best-time" className="section-y-sm scroll-mt-32 bg-stone">
        <div className="container-x">
          <SectionHeader eyebrow="Best time to visit" title="Four seasons, two of them famous." intro="Spring and autumn are peak. Monsoon is green and quiet. Winter is cold, clear and empty." size="md" />
          <Stagger className="mt-10 grid gap-6 md:grid-cols-4">
            {d.seasons.map((s) => (
              <StaggerItem key={s.name} className="border-t border-line-strong pt-5">
                <div className="flex items-center justify-between">
                  <h3 className="display-sm">{s.name}</h3>
                  <span className="flex gap-1" aria-label={`${s.rating} of 3`}>
                    {[1, 2, 3].map((n) => <span key={n} className={cn("h-1.5 w-1.5 rounded-full", n <= s.rating ? "bg-maroon" : "bg-stone-dark")} />)}
                  </span>
                </div>
                <p className="eyebrow mt-1 text-ink-mute">{s.months}</p>
                <p className="mt-3 text-[0.9375rem] text-ink-soft">{s.summary}</p>
              </StaggerItem>
            ))}
          </Stagger>
          {localFestivals.length > 0 && (
            <p className="mt-8 text-[0.9375rem] text-ink-soft">
              Festivals here: {localFestivals.map((f, i) => <span key={f.slug}>{i > 0 && ", "}<Link href={`/festivals#${f.slug}`} className="underline underline-offset-4">{f.name}</Link> ({f.month})</span>)}. Dates follow the lunar calendar; verify yearly.
            </p>
          )}
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="section-y scroll-mt-32">
        <div className="container-x">
          <SectionHeader eyebrow="Highlights" title={`What ${d.name} does better than anywhere.`} size="md" />
          <Stagger className="mt-10 grid gap-8 md:grid-cols-3">
            {d.highlights.map((h) => (
              <StaggerItem key={h.title}>
                <div className="relative aspect-[3/2] img-zoom bg-stone"><Image src={h.image.src} alt={h.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /></div>
                <h3 className="display-sm mt-5">{h.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-ink-soft">{h.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Dzongs & temples */}
      <section id="dzongs" className="section-y scroll-mt-32 bg-whitewash-deep">
        <div className="container-x">
          <SectionHeader eyebrow="Dzongs & temples" title="Whitewashed walls, red roofs, and the people still inside them." size="md" />
          <div className="mt-12 space-y-16">
            {d.dzongs.map((z, i) => (
              <Reveal key={z.name} className={cn("grid items-center gap-8 md:grid-cols-2 md:gap-14", i % 2 === 1 && "md:[&>*:first-child]:order-2")}>
                <div className="relative aspect-[4/3] img-zoom bg-stone"><Image src={z.image.src} alt={z.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></div>
                <div>
                  <h3 className="display-md">{z.name}</h3>
                  <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-soft">{z.body}</p>
                  <p className="mt-4 text-[0.8125rem] text-ink-mute">Long sleeves and trousers in the dzong; no photography inside shrine rooms.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stays */}
      {stays.length > 0 && (
        <section id="stays" className="section-y scroll-mt-32">
          <div className="container-x">
            <SectionHeader eyebrow="Stays" title={`Where to sleep in ${d.name}.`} intro="Placeholder names until partner agreements are signed. Prices per person per night, SDF included." size="md" />
            <Stagger className="mt-10 grid gap-8 md:grid-cols-3">
              {stays.map((s) => <StaggerItem key={s!.slug}><StayCard s={s!} /></StaggerItem>)}
            </Stagger>
          </div>
        </section>
      )}

      {/* Journeys */}
      <section id="journeys" className="section-y scroll-mt-32 bg-stone">
        <div className="container-x">
          <SectionHeader eyebrow="Journeys" title={`Journeys that pass through ${d.name}.`} link={{ href: "/journeys", label: "All journeys" }} size="md" />
          <Stagger className="mt-10 grid gap-8 md:grid-cols-3">
            {fallback.slice(0, 3).map((j) => <StaggerItem key={j!.slug}><JourneyCard j={j!} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y scroll-mt-32">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="eyebrow mb-4">Questions</p><h2 className="display-md">Before you go.</h2></div>
          <div className="lg:col-span-8"><FaqList faqs={d.faqs} /></div>
        </div>
      </section>

      <CtaBand title={`Build a journey around ${d.name}.`} image={d.card} prefill={{ journeyType: d.region === "western" ? "Classic western Bhutan" : "Western and central Bhutan" }} />
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow text-ink-mute">{label}</dt>
      <dd className="mt-2 font-display text-[1.375rem] leading-tight">{value}</dd>
    </div>
  );
}
