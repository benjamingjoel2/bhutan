import { images } from "@/data/images";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Our story", description: "Why Dzong House is named after a fortress, and how we work with one dedicated specialist and a Bhutanese partner operator.", path: "/about" });

const principles = [
  { title: "One specialist", body: "The person who answers your first message plans your journey, briefs your guide, and is reachable on the day you fly home." },
  { title: "Bhutanese on the ground", body: "Every journey is delivered with our Bhutanese partner operator and Bhutanese guides. This is the law, and also the point." },
  { title: "Fewer, longer journeys", body: "We take a small number of travellers each season so that each one is properly looked after. Bhutan asks the same of the world." },
];

export default function AboutPage() {
  return (
    <main id="main" data-hero="true">
      <PageHero image={images.peaksAboveClouds} eyebrow="Our story" title="Guardians at the door." size="lg" />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5"><p className="display-md">For four centuries Bhutan&rsquo;s dzongs have done two things at once: kept the kingdom&rsquo;s faith and government safe, and opened their courtyards to everyone at festival time.</p></Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
            <p>We named ourselves after them because that is the job. We stand at the door: we open Bhutan to a small number of thoughtful travellers, and we look after every detail once they are inside.</p>
            <p>Bhutan chose &ldquo;high value, low volume&rdquo; tourism long before the phrase was fashionable. The Sustainable Development Fee keeps visitor numbers gentle and pays for free healthcare, free education and the forests. We think it is the best thing about travelling here, and we build every journey around it rather than around it as an obstacle.</p>
            <p>Every journey is tailor-made, planned by one dedicated specialist, and delivered on the ground with our Bhutanese partner operator and local guides, from the first message to the day you fly home.</p>
          </Reveal>
        </div>
      </section>
      <section className="section-y-sm bg-stone">
        <div className="container-x">
          <Stagger className="grid gap-10 md:grid-cols-3">
            {principles.map((p, i) => (
              <StaggerItem key={p.title} className="border-t border-line-strong pt-6">
                <span className="font-display text-[2.5rem] leading-none text-maroon">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-sm mt-4">{p.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-ink-soft">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="section-y">
        <div className="container-x flex flex-wrap gap-8"><TextLink href="/our-partners">Our Bhutanese partners</TextLink><TextLink href="/responsible-travel">Responsible travel</TextLink></div>
      </section>
      <CtaBand />
    </main>
  );
}
