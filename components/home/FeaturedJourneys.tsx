import { journeys } from "@/data/journeys";
import { regionLabels } from "@/data/types";
import { ImageCard } from "@/components/ui/ImageCard";
import { SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { PriceLine } from "@/components/ui/Price";

export function FeaturedJourneys() {
  const featured = journeys.filter((j) => j.featured).slice(0, 3);
  return (
    <section className="section-y-sm">
      <div className="container-x">
        <SectionHeader eyebrow="Featured journeys" title="Three ways into the kingdom." link={{ href: "/journeys", label: "All journeys" }} />
        <Stagger className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {featured.map((j) => (
            <StaggerItem key={j.slug}>
              <ImageCard
                href={`/journeys/${j.slug}`}
                image={j.card}
                eyebrow={`${j.regions.map((r) => regionLabels[r]).join(" · ")} · ${j.nights} nights`}
                title={j.name}
                line={j.tagline}
                meta={<PriceLine usd={j.priceFromUSD} unit="per person" sdfIncluded={j.sdfIncluded} visaIncluded={j.visaIncluded} />}
                cta="View journey"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
