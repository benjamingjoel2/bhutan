import Image from "next/image";
import { images } from "@/data/images";
import { fees, pricingCopy } from "@/config/site";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Price } from "@/components/ui/Price";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Button";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Responsible travel", description: "High value, low volume: how Bhutan's Sustainable Development Fee funds free healthcare, education and conservation, and how Dzong House travels lightly.", path: "/responsible-travel" });

const uses = [
  { title: "Free healthcare", body: "Every Bhutanese citizen receives free primary and hospital care. Your nights help keep it that way.", image: images.riceTerraces },
  { title: "Free education", body: "Schooling is free, including in the most remote valleys, where some children still walk hours to class.", image: images.hikersGroup },
  { title: "Conservation", body: "The constitution requires that at least sixty percent of the land stay forested. Bhutan absorbs more carbon than it emits.", image: images.valleyForest },
];

export default function ResponsibleTravelPage() {
  return (
    <main id="main" data-hero="true">
      <PageHero image={images.forestPath} eyebrow="Responsible travel" title="High value, low volume, by design." intro="Bhutan decided long ago that it would rather welcome fewer visitors well than many visitors badly. We agree, and we build every journey around it." size="lg" />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">The Sustainable Development Fee</p>
            <p className="font-display text-[3.5rem] leading-none"><Price usd={fees.sdf.adultPerNightUSD} approx={false} /></p>
            <p className="mt-2 text-[0.8125rem] uppercase tracking-[0.14em] text-pine">per adult · per night</p>
            <ul className="mt-6 space-y-2 text-[0.9375rem] text-ink-soft">
              <li>Children {fees.sdf.childFreeUnderAge}–{fees.sdf.childRateMaxAge}: <Price usd={fees.sdf.childPerNightUSD} approx={false} /> per night</li>
              <li>Children under {fees.sdf.childFreeUnderAge}: exempt</li>
              <li>Indian nationals: ₹{fees.sdf.indianNationalPerNightINR.toLocaleString()} per night</li>
              <li>Visa fee: <Price usd={fees.visa.feeUSD} approx={false} /> one-off</li>
            </ul>
            <p className="mt-6 text-[0.8125rem] text-ink-mute">{pricingCopy.feesVerified}. Valid until {fees.validUntil}. Verify against <a className="underline" href={fees.sourceUrl}>bhutan.travel</a> before launch.</p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
            <p>Every visitor pays the Sustainable Development Fee for every night in the kingdom. It is not a tax on travel so much as a contribution to the place that makes the travel worth doing.</p>
            <p>We include it in every price we show, labelled &ldquo;SDF included&rdquo;, so there are no surprises and no small print. When the rate changes, we change it in one place and every price on this site updates.</p>
            <TextLink href="/journal/what-the-sustainable-development-fee-pays-for">What the fee actually pays for</TextLink>
          </Reveal>
        </div>
      </section>
      <section className="section-y-sm bg-stone">
        <div className="container-x">
          <SectionHeader eyebrow="Where it goes" title="Three things your nights pay for." size="md" />
          <Stagger className="mt-10 grid gap-8 md:grid-cols-3">
            {uses.map((u) => (
              <StaggerItem key={u.title}>
                <div className="relative aspect-[3/2] img-zoom bg-stone-dark"><Image src={u.image.src} alt={u.image.alt} fill sizes="33vw" className="object-cover" /></div>
                <h3 className="display-sm mt-5">{u.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-ink-soft">{u.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="How we travel" title="Small promises, kept." size="md" />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {["Locally owned stays and family farmhouses wherever they suit the journey.", "Guides, drivers and crews paid fairly and directly by our partner operator.", "Refillable bottles and no single-use plastic on treks.", "Respect for dress codes, photography rules and sacred sites, briefed before you land.", "Slow routes with fewer drives and more nights in each valley.", "Carbon guidance on flights, and honest advice about when not to come."].map((t) => (
              <li key={t} className="flex gap-4 border-t border-line pt-4 text-[1rem] text-ink-soft"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" />{t}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
