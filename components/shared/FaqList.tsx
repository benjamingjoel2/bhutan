import type { Faq } from "@/data/types";
import { Accordion } from "@/components/ui/Accordion";
import { fees, pricingCopy } from "@/config/site";

export function FaqList({ faqs, showVerified }: { faqs: Faq[]; showVerified?: boolean }) {
  return (
    <div>
      <Accordion
        items={faqs.map((f) => ({
          id: f.id,
          title: f.question,
          body: (
            <div>
              <p>{f.answer}</p>
              {f.verify && <p className="mt-3 text-[0.8125rem] text-ink-mute">Verify against <a href={fees.sourceUrl} className="underline" target="_blank" rel="noreferrer">bhutan.travel</a> before travelling. {pricingCopy.feesVerified}.</p>}
            </div>
          ),
        }))}
      />
      {showVerified && <p className="mt-6 text-[0.8125rem] text-ink-mute">{pricingCopy.feesVerified} · Source: {fees.sourceUrl}</p>}
    </div>
  );
}
