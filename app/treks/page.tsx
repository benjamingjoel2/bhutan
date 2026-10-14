import { treks } from "@/data/treks";
import { images } from "@/data/images";
import { PageHero } from "@/components/shared/PageHero";
import { JourneyCard } from "@/components/shared/Cards";
import { CtaBand } from "@/components/shared/CtaBand";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Treks", description: "Four Bhutan treks from the three-day Bumthang cultural trek to the 25-day Snowman, with days, maximum altitude, difficulty, best months and fitness advice. Licensed trekking guide and support team included.", path: "/treks" });

export default function TreksPage() {
  return (
    <main id="main" data-hero="true">
      <PageHero image={images.hikerRidge} eyebrow="Treks" title="Above the valleys, the kingdom keeps walking." intro="Four routes, from a long weekend above Paro to one of the hardest walks in the Himalaya. A licensed trekking guide and full support team come with every one, by regulation and by preference." />
      <section className="section-y-sm">
        <div className="container-x">
          <div className="grid gap-6 border-y border-line py-8 md:grid-cols-4">
            {treks.map((t) => (
              <div key={t.slug}>
                <p className="eyebrow text-ink-mute">{t.name}</p>
                <p className="mt-2 font-display text-[1.375rem] leading-tight">{t.daysCount} days · {t.maxAltitudeM.toLocaleString()} m</p>
                <p className="text-[0.8125rem] text-ink-soft">{t.difficulty} · {t.bestMonths.join(", ")}</p>
              </div>
            ))}
          </div>
          <SectionHeader className="mt-16" eyebrow="The routes" title="Choose your altitude." size="md" />
          <Stagger className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-8">
            {treks.map((t) => <StaggerItem key={t.slug}><JourneyCard j={t} sizes="(min-width: 768px) 50vw, 100vw" /></StaggerItem>)}
          </Stagger>
          <p className="mt-10 max-w-2xl text-[0.9375rem] text-ink-soft">All treks in Bhutan require a licensed trekking guide and support team (cook, horsemen, pack animals). We also recommend two acclimatisation nights in Paro or Thimphu before any route above 4,000 m. Verify current trekking regulations at bhutan.travel.</p>
        </div>
      </section>
      <CtaBand title="Tell us how far you want to walk." prefill={{ journeyType: "Trekking expedition" }} image={images.starryPeaks} />
    </main>
  );
}
