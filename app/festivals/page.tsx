import Image from "next/image";
import Link from "next/link";
import { festivals } from "@/data/festivals";
import { getJourney } from "@/data/journeys";
import { images } from "@/data/images";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { EnquireButton } from "@/components/shared/EnquireButton";
import { Reveal } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Festival calendar", description: "Bhutan's major tshechus and festivals by valley and typical month: what happens, how to behave, and journeys built around them. Dates follow the lunar calendar and are verified yearly.", path: "/festivals" });

export default function FestivalsPage() {
  return (
    <main id="main" data-hero="true">
      <PageHero image={images.monasteryPeaks} eyebrow="Festivals" title="When the courtyards fill with masked dancers." intro="Tshechus honour Guru Rinpoche and are held in dzongs and temples across the kingdom. They follow the lunar calendar, so the dates below are typical months. We confirm exact dates each year as they are published." />
      <div className="border-y border-line bg-saffron/15">
        <p className="container-x py-4 text-[0.875rem] text-ink">Dates are placeholders and shift every year with the lunar calendar. Verify against https://www.bhutan.travel before booking flights.</p>
      </div>
      <section className="section-y-sm">
        <div className="container-x">
          {/* Calendar table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line-strong text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute">
                  <th className="py-3 pr-4 font-medium">Typical month</th><th className="py-3 pr-4 font-medium">Festival</th><th className="py-3 pr-4 font-medium">Valley</th><th className="py-3 font-medium"><span className="sr-only">Plan</span></th>
                </tr>
              </thead>
              <tbody>
                {festivals.map((f) => (
                  <tr key={f.slug} className="border-b border-line">
                    <td className="py-4 pr-4 font-display text-[1.25rem]">{f.month}</td>
                    <td className="py-4 pr-4"><a href={`#${f.slug}`} className="text-[1rem] hover:text-maroon">{f.name}</a></td>
                    <td className="py-4 pr-4 text-ink-soft">{f.valley}</td>
                    <td className="py-4 text-right"><EnquireButton variant="outline" size="sm" prefill={{ festival: f.slug, journeyType: "Festival journey", month: f.month.split(/[\/ ]/)[0] }}>Plan around this</EnquireButton></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="pb-16 md:pb-24">
        <div className="container-x space-y-20 md:space-y-28">
          {festivals.map((f, i) => {
            const linked = f.journeys.map(getJourney).filter(Boolean);
            return (
              <Reveal key={f.slug} as="article" className="grid scroll-mt-32 items-start gap-8 md:grid-cols-2 md:gap-14">
                <div id={f.slug} className={`relative aspect-[4/5] img-zoom bg-stone ${i % 2 ? "md:order-2" : ""}`}>
                  <Image src={f.image.src} alt={f.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="md:py-8">
                  <p className="eyebrow mb-3">{f.month} · {f.valley}</p>
                  <h2 className="display-lg">{f.name}</h2>
                  <p className="mt-2 text-[0.8125rem] text-ink-mute">{f.typicalDates}</p>
                  <h3 className="eyebrow mt-8 mb-2 text-ink-mute">What happens</h3>
                  <p className="text-[1.0625rem] leading-relaxed text-ink-soft">{f.whatHappens}</p>
                  <h3 className="eyebrow mt-8 mb-3 text-ink-mute">Etiquette</h3>
                  <ul className="space-y-2 text-[0.9375rem] text-ink-soft">
                    {f.etiquette.map((e, n) => <li key={n} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-maroon" />{e}</li>)}
                  </ul>
                  {linked.length > 0 && (
                    <p className="mt-8 text-[0.9375rem]">Linked journeys: {linked.map((j, n) => <span key={j!.slug}>{n > 0 && ", "}<Link href={`/journeys/${j!.slug}`} className="text-maroon underline underline-offset-4">{j!.name}</Link></span>)}</p>
                  )}
                  <div className="mt-8"><EnquireButton prefill={{ festival: f.slug, journeyType: "Festival journey", month: f.month.split(/[\/ ]/)[0] }}>Plan around this festival</EnquireButton></div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CtaBand title="Tell us which festival. We will hold the dates." prefill={{ journeyType: "Festival journey" }} />
    </main>
  );
}
