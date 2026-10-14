import { experiences } from "@/data/experiences";
import { OverlayCard } from "@/components/ui/ImageCard";
import { SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function ExperiencesMosaic() {
  const featured = experiences.filter((e) => e.featured).slice(0, 5);
  const [lead, ...rest] = featured;
  if (!lead) return null;
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeader eyebrow="Experiences" title="Days you will still be describing years from now." link={{ href: "/experiences", label: "All experiences" }} />
        <Reveal className="mt-10 grid gap-4 md:grid-cols-2">
          <OverlayCard href={`/experiences/${lead.slug}`} image={lead.hero} eyebrow={lead.when} title={lead.name} line={lead.tagline} ratio="4/5" sizes="(min-width: 768px) 50vw, 100vw" />
          <div className="grid grid-cols-2 gap-4">
            {rest.map((e) => (
              <OverlayCard key={e.slug} href={`/experiences/${e.slug}`} image={e.card} title={e.name} ratio="1/1" sizes="(min-width: 768px) 25vw, 50vw" titleClass="display-sm" />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
