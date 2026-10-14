"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialBlock() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % testimonials.length), 7000);
    return () => window.clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <section className="section-y bg-stone">
      <div className="container-x mx-auto max-w-4xl text-center">
        <p className="eyebrow mb-8">Words from travellers <span className="text-ink-mute">· placeholder testimonials</span></p>
        <div className="relative min-h-[11rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote key={t.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.6 }}>
              <p className="font-display text-[1.75rem] italic leading-snug md:text-[2.25rem]">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 text-[0.8125rem] uppercase tracking-[0.18em] text-ink-mute">{t.name} · {t.country}</footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-1" role="tablist" aria-label="Testimonials">
          {testimonials.map((x, n) => (
            <button key={x.id} type="button" role="tab" aria-selected={n === i} aria-label={`Testimonial ${n + 1}`} onClick={() => setI(n)} className="grid h-6 w-6 place-items-center">
              <span className={cn("h-1.5 w-1.5 rounded-full transition-colors", n === i ? "bg-maroon" : "bg-ink-mute/40")} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
