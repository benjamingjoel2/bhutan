import type { Journey, Stay, Trek, Experience, Destination } from "@/data/types";
import { regionLabels } from "@/data/types";
import { ImageCard } from "@/components/ui/ImageCard";
import { PriceLine } from "@/components/ui/Price";

export function JourneyCard({ j, sizes }: { j: Journey | Trek; sizes?: string }) {
  const isTrek = j.kind === "trek";
  return (
    <ImageCard
      href={isTrek ? `/treks/${j.slug}` : `/journeys/${j.slug}`}
      image={j.card}
      eyebrow={`${j.regions.map((r) => regionLabels[r]).join(" · ")} · ${j.nights} nights`}
      title={j.name}
      line={j.tagline}
      sizes={sizes}
      cta={isTrek ? "View trek" : "View journey"}
      meta={<PriceLine usd={j.priceFromUSD} unit="per person" sdfIncluded={j.sdfIncluded} visaIncluded={j.visaIncluded} />}
    />
  );
}

export function StayCard({ s, sizes }: { s: Stay; sizes?: string }) {
  return (
    <ImageCard href={`/stays/${s.slug}`} image={s.images[0]} eyebrow={`${s.type} · ${s.valley}`} title={s.name} line={s.tagline} sizes={sizes} cta="View stay"
      meta={<PriceLine usd={s.priceFromUSD} unit="per person · night" sdfIncluded={s.sdfIncluded} />} />
  );
}

export function ExperienceCard({ e, base = "/experiences", sizes }: { e: Experience; base?: string; sizes?: string }) {
  return <ImageCard href={`${base}/${e.slug}`} image={e.card} eyebrow={e.when} title={e.name} line={e.tagline} sizes={sizes} />;
}

export function DestinationCard({ d, sizes, ratio = "4/5" }: { d: Destination; sizes?: string; ratio?: "4/5" | "3/2" }) {
  return <ImageCard href={`/destinations/${d.slug}`} image={d.card} eyebrow={`${regionLabels[d.region]} · ${d.altitudeM.toLocaleString()} m`} title={d.name} line={d.tagline} sizes={sizes} ratio={ratio} cta="Explore" />;
}
