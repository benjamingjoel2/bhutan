import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { stays, getStay } from "@/data/stays";
import { getDestination } from "@/data/destinations";
import { getJourney } from "@/data/journeys";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CtaBand } from "@/components/shared/CtaBand";
import { EnquireButton } from "@/components/shared/EnquireButton";
import { JourneyCard, StayCard } from "@/components/shared/Cards";
import { PriceLine } from "@/components/ui/Price";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

export const generateStaticParams = () => stays.map((s) => ({ slug: s.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const s = getStay((await params).slug);
  return s ? pageMeta({ title: `${s.name} · ${s.type}, ${s.valley}`, description: s.tagline, path: `/stays/${s.slug}`, image: s.images[0].src }) : {};
}

export default async function StayPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getStay((await params).slug);
  if (!s) notFound();
  const dest = getDestination(s.destination);
  const related = s.journeys.map(getJourney).filter(Boolean);
  const nearby = stays.filter((x) => x.slug !== s.slug).slice(0, 3);
  return (
    <main id="main" data-hero="true">
      <PageHero image={s.images[0]} eyebrow={`${s.type} · ${s.valley}`} title={s.name} intro={s.tagline} size="lg">
        <div className="mt-4"><Breadcrumb light items={[{ label: "Destinations", href: "/destinations" }, ...(dest ? [{ label: dest.name, href: `/destinations/${dest.slug}` }] : []), { label: s.name }]} /></div>
      </PageHero>
      <div className="bg-saffron/20 py-3 text-center text-[0.8125rem] text-ink">Placeholder stay. The name and details stand in for a partner property to be confirmed.</div>
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-6 lg:col-span-7">
            <p className="display-md">{s.description[0]}</p>
            {s.description.slice(1).map((p, i) => <p key={i} className="text-[1.0625rem] leading-relaxed text-ink-soft">{p}</p>)}
          </Reveal>
          <aside className="lg:col-span-4 lg:col-start-9">
            <PriceLine usd={s.priceFromUSD} unit="per person · night" sdfIncluded={s.sdfIncluded} className="border-y border-line py-5" />
            <ul className="mt-6 space-y-2 text-[0.9375rem] text-ink-soft">
              {s.features.map((f) => <li key={f} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-maroon" />{f}</li>)}
            </ul>
            {dest && <p className="mt-6 text-[0.875rem] text-ink-mute">In <Link href={`/destinations/${dest.slug}`} className="underline underline-offset-4">{dest.name}</Link>, {dest.altitudeM.toLocaleString()} m.</p>}
            <EnquireButton className="mt-6 w-full">Include this stay</EnquireButton>
          </aside>
        </div>
      </section>
      <section className="section-y-sm">
        <div className="container-x grid gap-4 md:grid-cols-3">
          {s.images.map((im, i) => (
            <Reveal key={i} delay={i * 0.08} className={`relative img-zoom bg-stone ${i === 0 ? "aspect-[4/5] md:col-span-2 md:aspect-auto md:row-span-2" : "aspect-[3/2]"}`}>
              <Image src={im.src} alt={im.alt} fill sizes={i === 0 ? "66vw" : "33vw"} className="object-cover" />
            </Reveal>
          ))}
        </div>
      </section>
      {related.length > 0 && (
        <section className="section-y-sm">
          <div className="container-x">
            <SectionHeader eyebrow="Journeys" title="Journeys that stay here." size="md" />
            <Stagger className="mt-10 grid gap-8 md:grid-cols-3">{related.slice(0, 3).map((j) => <StaggerItem key={j!.slug}><JourneyCard j={j!} /></StaggerItem>)}</Stagger>
          </div>
        </section>
      )}
      <section className="section-y-sm bg-stone">
        <div className="container-x">
          <SectionHeader eyebrow="More stays" title="Elsewhere in the kingdom." size="md" />
          <Stagger className="mt-10 grid gap-8 md:grid-cols-3">{nearby.map((x) => <StaggerItem key={x.slug}><StayCard s={x} /></StaggerItem>)}</Stagger>
        </div>
      </section>
      <CtaBand image={s.images[1] ?? s.images[0]} />
    </main>
  );
}
