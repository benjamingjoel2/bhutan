import { posts } from "@/data/posts";
import { ImageCard } from "@/components/ui/ImageCard";
import { SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { formatDate } from "@/lib/utils";

export function JournalPreview() {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeader eyebrow="Journal" title="Notes from the kingdom." link={{ href: "/journal", label: "All posts" }} />
        <Stagger className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {latest.map((p) => (
            <StaggerItem key={p.slug}>
              <ImageCard href={`/journal/${p.slug}`} image={p.hero} eyebrow={`${formatDate(p.date)} · ${p.readingTime}`} title={p.title} line={p.excerpt} cta="Read" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
