import { site, whatsappHref } from "@/config/site";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { EnquireButton } from "@/components/shared/EnquireButton";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Contact", description: "Write, call or WhatsApp a Dzong House Bhutan specialist. One person replies, within two working days.", path: "/contact" });

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Contact" title="One person replies." intro="Write, call or send a WhatsApp message. Your specialist will answer within two working days, usually sooner." />
      <section className="pb-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <dl className="divide-y divide-line border-y border-line">
              <Row label="Email"><a href={`mailto:${site.contact.email}`} className="hover:text-maroon">{site.contact.email}</a></Row>
              <Row label="Telephone"><a href={site.contact.phoneHref} className="hover:text-maroon">{site.contact.phone}</a></Row>
              <Row label="WhatsApp"><a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:text-maroon">Message us</a></Row>
              <Row label="On the ground">{site.partner.name}, licence no. {site.partner.licence}</Row>
              <Row label="Where">{site.contact.address}</Row>
            </dl>
            <div className="mt-8 border border-line bg-white p-6">
              <p className="display-sm">Ready to plan?</p>
              <p className="mt-2 text-[0.9375rem] text-ink-soft">The trip planner takes five short steps and gives your specialist everything they need.</p>
              <EnquireButton className="mt-5">Plan your journey</EnquireButton>
            </div>
            <div className="mt-8 grid aspect-[4/3] place-items-center border border-line-strong bg-stone text-center">
              <div><p className="eyebrow text-ink-mute">Map placeholder</p><p className="mt-2 font-display text-[1.25rem]">Thimphu, Bhutan</p></div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7"><ContactForm /></div>
        </div>
      </section>
    </main>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="flex justify-between gap-6 py-4"><dt className="eyebrow text-ink-mute">{label}</dt><dd className="text-right text-[0.9375rem]">{children}</dd></div>;
}
