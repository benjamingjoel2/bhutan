import { destinations, destinationsByRegion } from "@/data/destinations";
import { images } from "@/data/images";
import { regionLabels, type Region } from "@/data/types";
import { PageHero } from "@/components/shared/PageHero";
import { DestinationCard } from "@/components/shared/Cards";
import { CtaBand } from "@/components/shared/CtaBand";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Destinations", description: `Twelve valleys and high places across Bhutan, from Paro's cliffside monastery to the glacial lakes of Lunana. ${destinations.length} destinations, three regions.`, path: "/destinations" });

const regionIntro: Record<Region, string> = {
  western: "The kingdom's front door: the only international airport, the capital, and the cliffside monastery everyone has seen a photograph of.",
  central: "Over the Dochula pass the valleys widen, the rivers slow and the dzongs grow older. This is where most first journeys end, and most second journeys begin.",
  eastern: "Two days' drive or a short flight from the west, and far fewer visitors. Weavers, yak herders, and villages that still measure distance in walking days.",
};

export default function DestinationsPage() {
  return (
    <main id="main" data-hero="true">
      <PageHero image={images.highValley} eyebrow="Destinations" title="Twelve valleys. Three regions. One slow road between them." intro="Bhutan is small on the map and large on the ground. Choose a region, then let the road decide the rest." />
      {(Object.keys(regionLabels) as Region[]).map((r) => (
        <section key={r} id={r} className="section-y-sm">
          <div className="container-x">
            <SectionHeader eyebrow={regionLabels[r]} title={regionLabels[r]} intro={regionIntro[r]} size="md" />
            <Stagger className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {destinationsByRegion[r].map((d) => (
                <StaggerItem key={d.slug}><DestinationCard d={d} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" /></StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ))}
      <CtaBand />
    </main>
  );
}
