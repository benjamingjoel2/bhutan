import { faqs, faqCategories } from "@/data/faqs";
import { fees, pricingCopy } from "@/config/site";
import { PageHero } from "@/components/shared/PageHero";
import { FaqList } from "@/components/shared/FaqList";
import { CtaBand } from "@/components/shared/CtaBand";
import { Price } from "@/components/ui/Price";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "FAQ", description: "Bhutan visas, the Sustainable Development Fee, licensed guides, flying into Paro, best time to visit, festival dates, altitude, dress code, photography, money, tipping, connectivity and packing.", path: "/faq" });

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow="FAQ" title="Before you go." intro="Visas, fees, guides, altitude, dress, and what to pack. If your question is not here, write to us." />
      <div className="container-x">
        <div className="flex flex-col gap-3 border-y border-line bg-white p-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.9375rem]">
            SDF <Price usd={fees.sdf.adultPerNightUSD} approx={false} /> per adult per night · child rate <Price usd={fees.sdf.childPerNightUSD} approx={false} /> · visa <Price usd={fees.visa.feeUSD} approx={false} />
          </p>
          <p className="text-[0.75rem] uppercase tracking-[0.16em] text-pine">{pricingCopy.feesVerified} · valid until {fees.validUntil}</p>
        </div>
      </div>
      <section className="section-y-sm">
        <div className="container-x space-y-16">
          {faqCategories.map((c) => {
            const list = faqs.filter((f) => f.category === c);
            if (!list.length) return null;
            return (
              <div key={c} className="grid gap-8 lg:grid-cols-12">
                <h2 className="display-md lg:col-span-4">{c}</h2>
                <div className="lg:col-span-8"><FaqList faqs={list} /></div>
              </div>
            );
          })}
          <p className="text-[0.8125rem] text-ink-mute">{pricingCopy.feesVerified}. Source: {fees.sourceUrl}. Every visa, fee and regulation detail must be verified against the official source before launch.</p>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
