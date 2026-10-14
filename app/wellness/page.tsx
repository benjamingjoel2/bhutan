import Image from "next/image";
import { wellnessExperiences } from "@/data/wellness";
import { journeys } from "@/data/journeys";
import { images } from "@/data/images";
import { PageHero } from "@/components/shared/PageHero";
import { ExperienceCard, JourneyCard } from "@/components/shared/Cards";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Wellness", description: "Bhutan wellness journeys: meditation and monastery stays, hot stone baths, traditional medicine, mindful hikes and wellness retreats in a kingdom that measures its wealth in happiness.", path: "/wellness" });

export default function WellnessPage() {
  const wellnessJourneys = journeys.filter((j) => j.wellness || j.kind === "wellness");
  return (
    <main id="main" data-hero="true">
      <PageHero image={images.yogaMist} eyebrow="Wellness" title="Slow down at altitude." intro="A country that measures Gross National Happiness has a good deal to teach about rest. Five ways in, each led by Bhutanese practitioners." size="lg" />
      <section className="section-y">
        <Reveal className="container-x mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">Our approach</p>
          <p className="display-md">Nothing is invented for visitors. The baths, the prayers, the medicine and the walks are what Bhutanese families have done for centuries. We simply make the introductions, and leave room in the day for them to work.</p>
        </Reveal>
      </section>
      <section className="section-y-sm">
        <div className="container-x">
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {wellnessExperiences.map((w) => (
              <StaggerItem key={w.slug}>
                <p className="eyebrow mb-3 text-ink-mute">{w.pillar}</p>
                <ExperienceCard e={w} base="/wellness" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="section-y-sm">
        <div className="container-x grid items-stretch md:grid-cols-2">
          <Reveal className="relative aspect-[4/5] img-zoom bg-stone md:aspect-auto md:min-h-[560px]"><Image src={images.forestPath.src} alt={images.forestPath.alt} fill sizes="50vw" className="object-cover" /></Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center bg-pine px-8 py-14 text-white md:px-16">
            <p className="eyebrow mb-5 text-saffron-light">Gross National Happiness</p>
            <h2 className="display-lg text-white">A kingdom built around wellbeing.</h2>
            <p className="mt-6 max-w-md text-white/80">Since the 1970s Bhutan has weighed its decisions against psychological wellbeing, health, time use, culture and ecological resilience, not just income. You feel it in the pace of the roads and the length of the lunches.</p>
          </Reveal>
        </div>
      </section>
      {wellnessJourneys.length > 0 && (
        <section className="section-y-sm">
          <div className="container-x">
            <SectionHeader eyebrow="Wellness journeys" title="A whole journey given to rest." size="md" />
            <Stagger className="mt-10 grid gap-8 md:grid-cols-3">{wellnessJourneys.map((j) => <StaggerItem key={j.slug}><JourneyCard j={j} /></StaggerItem>)}</Stagger>
          </div>
        </section>
      )}
      <CtaBand title="Tell us what you need to put down." prefill={{ journeyType: "Wellness and meditation" }} image={images.alpineLake} />
    </main>
  );
}
