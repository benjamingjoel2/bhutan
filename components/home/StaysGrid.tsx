import { stays } from "@/data/stays";
import { ImageCard } from "@/components/ui/ImageCard";
import { SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { PriceLine } from "@/components/ui/Price";

export function StaysGrid() {
  const picks = stays.slice(0, 4);
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeader eyebrow="Stays" title="Lodges, boutique hotels, heritage farmhouses." intro="Placeholder names until partner agreements are signed. Every price is per person per night, all-in." link={{ href: "/destinations", label: "Stays by valley" }} />
        <Stagger className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {picks.map((s) => (
            <StaggerItem key={s.slug}>
              <ImageCard href={`/stays/${s.slug}`} image={s.images[0]} eyebrow={`${s.type} · ${s.valley}`} title={s.name} line={s.tagline} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" cta="View stay"
                meta={<PriceLine usd={s.priceFromUSD} unit="per person · night" sdfIncluded={s.sdfIncluded} />} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
