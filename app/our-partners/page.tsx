import { images } from "@/data/images";
import { site, fees } from "@/config/site";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Our Bhutanese partners", description: "Dzong House journeys are delivered on the ground with a licensed Bhutanese tour operator and licensed local guides, drivers and trekking crews.", path: "/our-partners" });

const roles = [
  { title: "Licensed partner operator", body: `${site.partner.name} (licence no. ${site.partner.licence}) holds the tour operator licence required to bring visitors into Bhutan, secures your visa and permits, and pays the Sustainable Development Fee on your behalf.` },
  { title: "Licensed guides", body: "Every journey has a licensed Bhutanese guide, certified by the Department of Tourism. They are with you from the airport to the departure gate, and they are the reason Bhutan makes sense." },
  { title: "Drivers", body: "Careful, unhurried drivers who know every bend of the lateral road and every roadside stall worth stopping at." },
  { title: "Trekking crews", body: "Licensed trekking guides, cooks, horsemen and yak herders, required by regulation on every trek and indispensable above four thousand metres." },
];

export default function PartnersPage() {
  return (
    <main id="main" data-hero="true">
      <PageHero image={images.hikersGroup} eyebrow="Our Bhutanese partners" title="Delivered on the ground by people who were born here." intro="Bhutan requires every visitor to travel with a licensed Bhutanese tour operator and a licensed guide. We would not want it any other way." />
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
          <Reveal className="mt-16 border border-line bg-white p-8 md:p-12">
            <p className="eyebrow mb-3">Partner details</p>
            <p className="font-display text-[1.75rem]">{site.partner.name}</p>
            <p className="mt-2 text-ink-soft">Licensed Bhutanese tour operator · Licence no. {site.partner.licence}</p>
            <p className="mt-4 text-[0.8125rem] text-ink-mute">{site.partner.note} Source: {fees.sourceUrl}</p>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
