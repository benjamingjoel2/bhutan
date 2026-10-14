import Image from "next/image";
import type { Experience, WellnessExperience } from "@/data/types";
import { getDestination } from "@/data/destinations";
import { getJourney } from "@/data/journeys";
import { getTrek } from "@/data/treks";
import { PageHero } from "./PageHero";
import { Breadcrumb } from "./Breadcrumb";
import { CtaBand } from "./CtaBand";
import { EnquireButton } from "./EnquireButton";
import { JourneyCard, ExperienceCard } from "./Cards";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
import Link from "next/link";

export function ExperienceDetail({ e, kind, siblings }: { e: Experience | WellnessExperience; kind: "experience" | "wellness"; siblings: (Experience | WellnessExperience)[] }) {
  const base = kind === "wellness" ? "/wellness" : "/experiences";
  const related = e.journeys.map((s) => getJourney(s) ?? getTrek(s)).filter(Boolean);
  const where = e.where.map(getDestination).filter(Boolean);
  const ritual = "ritual" in e ? e.ritual : null;
  const prefill = { journeyType: kind === "wellness" ? "Wellness and meditation" : undefined };
  return (
    <main id="main" data-hero="true">
      <PageHero image={e.hero} eyebrow={"pillar" in e ? `Wellness · ${e.pillar}` : "Experience"} title={e.name} intro={e.tagline} size="lg">
        <div className="mt-4"><Breadcrumb light items={[{ label: kind === "wellness" ? "Wellness" : "Experiences", href: base }, { label: e.name }]} /></div>
      </PageHero>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-6 lg:col-span-7">
            <p className="display-md">{e.body[0]}</p>
            {e.body.slice(1).map((p, i) => <p key={i} className="text-[1.0625rem] leading-relaxed text-ink-soft">{p}</p>)}
          </Reveal>
          <aside className="lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-line border-y border-line">
              <div className="py-4"><dt className="eyebrow text-ink-mute">Where</dt><dd className="mt-1 text-[0.9375rem]">{where.length ? where.map((d, i) => <span key={d!.slug}>{i > 0 && ", "}<Link href={`/destinations/${d!.slug}`} className="underline underline-offset-4">{d!.name}</Link></span>) : "Across the kingdom"}</dd></div>
              <div className="py-4"><dt className="eyebrow text-ink-mute">When</dt><dd className="mt-1 text-[0.9375rem]">{e.when}</dd></div>
              <div className="py-4"><dt className="eyebrow text-ink-mute">Duration</dt><dd className="mt-1 text-[0.9375rem]">{e.duration}</dd></div>
            </dl>
            <EnquireButton prefill={prefill} className="mt-6 w-full">Add this to a journey</EnquireButton>
          </aside>
        </div>
      </section>

      {ritual && (
        <section className="section-y-sm bg-stone">
          <div className="container-x">
            <SectionHeader eyebrow="The ritual" title="How it unfolds." size="md" />
            <ol className="mt-10 grid gap-8 md:grid-cols-4">
              {ritual.map((r, i) => (
                <li key={i} className="border-t border-line-strong pt-5">
                  <span className="font-display text-[2.5rem] leading-none text-maroon">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-[0.9375rem] text-ink-soft">{r}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="section-y-sm">
        <div className="container-x">
          <Reveal className="relative aspect-[16/7] img-zoom bg-stone"><Image src={e.card.src} alt={e.card.alt} fill sizes="100vw" className="object-cover" /></Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y-sm">
          <div className="container-x">
            <SectionHeader eyebrow="Journeys" title="Journeys that include this." size="md" />
            <Stagger className="mt-10 grid gap-8 md:grid-cols-3">
              {related.slice(0, 3).map((j) => <StaggerItem key={j!.slug}><JourneyCard j={j!} /></StaggerItem>)}
            </Stagger>
          </div>
        </section>
      )}

      <section className="section-y-sm bg-whitewash-deep">
        <div className="container-x">
          <SectionHeader eyebrow="More" title={kind === "wellness" ? "Other ways to restore." : "Other experiences."} size="md" link={{ href: base, label: "See all" }} />
          <Stagger className="mt-10 grid gap-8 md:grid-cols-3">
            {siblings.filter((s) => s.slug !== e.slug).slice(0, 3).map((s) => <StaggerItem key={s.slug}><ExperienceCard e={s} base={base} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>

      <CtaBand prefill={prefill} image={e.card} />
    </main>
  );
}
