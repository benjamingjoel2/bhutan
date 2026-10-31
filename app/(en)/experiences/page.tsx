import { experiences } from "@/data/experiences";
import { images } from "@/data/images";
import { PageHero } from "@/components/shared/PageHero";
import { ExperienceCard } from "@/components/shared/Cards";
import { CtaBand } from "@/components/shared/CtaBand";
import { OverlayCard } from "@/components/ui/ImageCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Experiences", description: "The Tiger's Nest hike, tshechu festivals, black-necked crane season, farmhouse stays, archery, weaving, photography, honeymoons and family journeys in Bhutan.", path: "/experiences" });

export default function ExperiencesPage() {
  const [lead, second, ...rest] = experiences;
  return (
    <main id="main" data-hero="true">
      <PageHero image={images.tigersNest} eyebrow="Experiences" title="Days you will still be describing years from now." intro="Some are famous. Some happen only if you know whom to ask. All of them can be woven into any journey." />
      <section className="section-y-sm">
        <div className="container-x">
          <Reveal className="grid gap-4 md:grid-cols-2">
            <OverlayCard href={`/experiences/${lead.slug}`} image={lead.hero} eyebrow={lead.when} title={lead.name} line={lead.tagline} ratio="4/5" sizes="(min-width: 768px) 50vw, 100vw" />
            <OverlayCard href={`/experiences/${second.slug}`} image={second.hero} eyebrow={second.when} title={second.name} line={second.tagline} ratio="4/5" sizes="(min-width: 768px) 50vw, 100vw" />
          </Reveal>
          <SectionHeader className="mt-20" eyebrow="All experiences" title="Choose what draws you." size="md" />
          <Stagger className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {rest.map((e) => <StaggerItem key={e.slug}><ExperienceCard e={e} sizes="(min-width: 1024px) 25vw, 50vw" /></StaggerItem>)}
          </Stagger>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
