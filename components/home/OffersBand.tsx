import Image from "next/image";
import Link from "next/link";
import { offers } from "@/data/offers";
import { SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Button";

export function OffersBand() {
  return (
    <section className="section-y bg-pine text-white">
      <div className="container-x">
        <SectionHeader light eyebrow="Offers" title="Stay longer. Travel softer." link={{ href: "/offers", label: "All offers" }} />
        <Stagger className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {offers.map((o) => (
            <StaggerItem key={o.slug}>
              <Link href={`/offers#${o.slug}`} className="group block">
                <div className="relative aspect-[3/2] img-zoom bg-pine-deep">
                  <Image src={o.image.src} alt={o.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  <span className="absolute left-4 top-4 bg-saffron px-3 py-1 text-[0.625rem] uppercase tracking-[0.18em] text-ink">Placeholder offer</span>
                </div>
                <p className="eyebrow mt-5 mb-1 text-saffron-light">{o.kind === "stay-longer" ? "Stay longer" : "Seasonal"}</p>
                <h3 className="display-sm text-white">{o.name}</h3>
                <p className="mt-2 text-[0.9375rem] text-white/75">{o.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.18em] font-medium link-underline">View offer <Arrow /></span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
