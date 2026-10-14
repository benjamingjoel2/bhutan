import Image from "next/image";
import Link from "next/link";
import { offers } from "@/data/offers";
import { getJourney } from "@/data/journeys";
import { images } from "@/data/images";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { EnquireButton } from "@/components/shared/EnquireButton";
import { Reveal } from "@/components/ui/Reveal";
import { formatDate } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Offers", description: "Stay longer in Bhutan, and seasonal journey offers for spring rhododendrons and winter crane season. Placeholder offers pending confirmation.", path: "/offers" });

export default function OffersPage() {
  return (
    <main id="main" data-hero="true">
      <PageHero image={images.pinkPeaks} eyebrow="Offers" title="Stay longer. Travel softer." intro="A few quiet reasons to give Bhutan a little more time, or to come in the months most visitors miss." />
      <div className="border-y border-line bg-saffron/15"><p className="container-x py-4 text-[0.875rem]">All offers on this page are placeholders pending confirmation with our partner operator and stays. Terms will be finalised before launch.</p></div>
      <section className="section-y-sm">
        <div className="container-x space-y-20">
          {offers.map((o, i) => (
            <Reveal key={o.slug} as="article" className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
              <div id={o.slug} className={`relative aspect-[3/2] scroll-mt-32 img-zoom bg-stone md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={o.image.src} alt={o.image.alt} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
                <span className="absolute left-4 top-4 bg-saffron px-3 py-1 text-[0.625rem] uppercase tracking-[0.18em]">Placeholder offer</span>
              </div>
              <div className="md:col-span-5">
                <p className="eyebrow mb-3">{o.kind === "stay-longer" ? "Stay longer" : "Seasonal"} · valid until {formatDate(o.validUntil)}</p>
                <h2 className="display-lg">{o.name}</h2>
                <p className="mt-3 font-display text-[1.375rem] text-ink-soft">{o.tagline}</p>
                <p className="mt-5 text-[1rem] leading-relaxed text-ink-soft">{o.body}</p>
                <details className="mt-6 border-t border-line pt-4">
                  <summary className="cursor-pointer text-[0.6875rem] uppercase tracking-[0.18em] font-medium">Terms</summary>
                  <ul className="mt-3 space-y-2 text-[0.875rem] text-ink-soft">{o.terms.map((t, n) => <li key={n}>· {t}</li>)}</ul>
                </details>
                {o.journeys.length > 0 && <p className="mt-5 text-[0.875rem] text-ink-mute">Applies to: {o.journeys.map(getJourney).filter(Boolean).map((j, n) => <span key={j!.slug}>{n > 0 && ", "}<Link href={`/journeys/${j!.slug}`} className="underline underline-offset-4">{j!.name}</Link></span>)}</p>}
                <div className="mt-7"><EnquireButton>Enquire about this offer</EnquireButton></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
