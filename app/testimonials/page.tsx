import { testimonials } from "@/data/testimonials";
import { getJourney } from "@/data/journeys";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Testimonials", description: "Words from travellers who journeyed through Bhutan with Dzong House. Placeholder testimonials until launch.", path: "/testimonials" });

export default function TestimonialsPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Testimonials" title="In their words." intro="Placeholder testimonials, clearly marked, until real ones are collected after the first season." />
      <section className="pb-24">
        <div className="container-x">
          <Stagger className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => {
              const j = getJourney(t.journey);
              return (
                <StaggerItem key={t.id} className="flex h-full flex-col justify-between border border-line bg-white p-8 md:p-10">
                  <div>
                    <span className="mb-4 inline-block bg-saffron/25 px-2 py-0.5 text-[0.625rem] uppercase tracking-[0.18em]">Placeholder</span>
                    <p className="font-display text-[1.5rem] italic leading-snug">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <p className="mt-8 text-[0.75rem] uppercase tracking-[0.16em] text-ink-mute">{t.name} · {t.country}{j && <> · <Link href={`/journeys/${j.slug}`} className="text-maroon">{j.name}</Link></>}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
