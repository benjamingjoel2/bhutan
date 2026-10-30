import { images } from "@/data/images";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Our Bhutanese partners", description: "Dzong House journeys are delivered on the ground with a Bhutanese tour operator and local guides, drivers and trekking crews.", path: "/our-partners" });

const roles = [
  { title: "Partner operator", body: "Our Bhutanese partner operator brings you into the country, secures your visa and permits, and pays the Sustainable Development Fee on your behalf." },
  { title: "Guides", body: "Every journey has a Bhutanese guide, as the law requires. They are with you from the airport to the departure gate, and they are the reason Bhutan makes sense." },
  { title: "Drivers", body: "Careful, unhurried drivers who know every bend of the lateral road and every roadside stall worth stopping at." },
  { title: "Trekking crews", body: "Trekking guides, cooks, horsemen and yak herders, required by regulation on every trek and indispensable above four thousand metres." },
];

export default function PartnersPage() {
  return (
    <main id="main" data-hero="true">
      <PageHero image={images.hikersGroup} eyebrow="Our Bhutanese partners" title="Delivered on the ground by people who were born here." intro="Bhutan requires every visitor to travel with a Bhutanese tour operator and a guide. We would not want it any other way." />
      <section className="section-y">
        <div className="container-x">
          <Stagger className="grid gap-10 md:grid-cols-2">
            {roles.map((r) => (
              <StaggerItem key={r.title} className="border-t border-line-strong pt-6">
                <h2 className="display-md">{r.title}</h2>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-soft">{r.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
