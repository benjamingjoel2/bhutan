"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { festivals } from "@/data/festivals";
import { SectionHeader } from "@/components/ui/Section";
import { useUi } from "@/lib/ui";
import { Reveal } from "@/components/ui/Reveal";

export function FestivalCarousel() {
  const { openPlanner } = useUi();
  const track = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * (track.current.clientWidth * 0.8), behavior: "smooth" });

  return (
    <section className="section-y-sm">
      <div className="container-x">
        <SectionHeader
          eyebrow="Upcoming"
          title="The festival calendar."
          intro="Tshechus follow the lunar calendar, so dates shift each year. Those below are typical months; we confirm exact dates as the Royal Government publishes them."
          link={{ href: "/festivals", label: "Full calendar" }}
        />
      </div>
      <Reveal className="relative mt-10">
        <div ref={track} className="carousel-track scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto">
          {festivals.map((f) => (
            <article key={f.slug} className="w-[78vw] shrink-0 snap-start sm:w-[48vw] md:w-[34vw] lg:w-[24vw]">
              <Link href={`/festivals#${f.slug}`} className="group block">
                <div className="relative aspect-[4/5] img-zoom bg-stone">
                  <Image src={f.image.src} alt={f.image.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                  <span className="absolute left-4 top-4 bg-whitewash px-3 py-1 text-[0.625rem] uppercase tracking-[0.18em] text-ink">{f.month}</span>
                </div>
                <p className="eyebrow mt-5 mb-1 text-ink-mute">{f.valley}</p>
                <h3 className="display-sm">{f.name}</h3>
              </Link>
              <p className="mt-2 line-clamp-2 text-[0.875rem] text-ink-soft">{f.whatHappens}</p>
              <button onClick={() => openPlanner({ festival: f.slug, journeyType: "Festival journey", month: f.month.split("/")[0].trim() })} className="mt-3 text-[0.6875rem] uppercase tracking-[0.18em] font-medium text-maroon link-underline">
                Plan around this festival
              </button>
            </article>
          ))}
        </div>
        <div className="container-x mt-6 flex items-center justify-between">
          <p className="text-[0.75rem] text-ink-mute">Dates are placeholders to verify yearly against the official calendar.</p>
          <div className="hidden gap-2 md:flex">
            <button onClick={() => scrollBy(-1)} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-line-strong transition-colors hover:bg-ink hover:text-whitewash">←</button>
            <button onClick={() => scrollBy(1)} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-line-strong transition-colors hover:bg-ink hover:text-whitewash">→</button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
