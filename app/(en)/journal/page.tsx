import { posts } from "@/data/posts";
import { PageHero } from "@/components/shared/PageHero";
import { ImageCard, OverlayCard } from "@/components/ui/ImageCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { formatDate } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Journal", description: "Notes from the kingdom: Bhutan planning guides, festival calendars, the Tiger's Nest hike, and what the Sustainable Development Fee pays for.", path: "/journal" });

export default function JournalPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [lead, ...rest] = sorted;
  return (
    <main id="main">
      <PageHero eyebrow="Journal" title="Notes from the kingdom." intro="Planning guides, festival notes and the occasional long read." />
      <section className="pb-24">
        <div className="container-x">
          {lead && <Reveal><OverlayCard href={`/journal/${lead.slug}`} image={lead.hero} eyebrow={`${formatDate(lead.date)} · ${lead.readingTime}`} title={lead.title} line={lead.excerpt} ratio="16/9" sizes="100vw" titleClass="display-lg" /></Reveal>}
          <Stagger className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
            {rest.map((p) => <StaggerItem key={p.slug}><ImageCard href={`/journal/${p.slug}`} image={p.hero} eyebrow={`${formatDate(p.date)} · ${p.readingTime}`} title={p.title} line={p.excerpt} cta="Read" /></StaggerItem>)}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
