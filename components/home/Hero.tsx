"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PlanBar } from "@/components/layout/PlanBar";
import { images } from "@/data/images";
import { media } from "@/config/site";

/**
 * Full-bleed video hero. The <video> sources are placeholders — drop
 * /public/video/hero.mp4 (dawn over a dzong) and it plays; until then the poster image shows.
 */
export function Hero() {
  const [playing, setPlaying] = useState(false);
  const poster = images.peaksAboveClouds;
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end bg-ink text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={poster.src} alt={poster.alt} fill priority sizes="100vw" className="object-cover" />
        {media.heroLoop && (
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={poster.src} aria-hidden="true">
            <source src={media.heroLoop} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/60" aria-hidden="true" />
      </div>

      <div className="container-x relative flex flex-1 flex-col justify-center pb-12 pt-32 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-6 text-saffron"
        >
          Tailor-made journeys through Bhutan
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="display-xl max-w-3xl text-white"
        >
          The kingdom opens its doors slowly.<br className="hidden md:block" /> We hold them for you.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10"
        >
          <button onClick={() => setPlaying(true)} className="btn btn-ghost">
            <span className="grid h-5 w-5 place-items-center rounded-full border border-current" aria-hidden="true">
              <svg viewBox="0 0 10 10" className="ml-px h-2 w-2 fill-current"><path d="M2 1l7 4-7 4z" /></svg>
            </span>
            Play full video
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="container-x relative pb-6 md:pb-10"
      >
        <PlanBar variant="hero" />
      </motion.div>

      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Full video"
            onClick={() => setPlaying(false)}
          >
            <button className="absolute right-6 top-6 text-[0.6875rem] uppercase tracking-[0.18em] text-white" onClick={() => setPlaying(false)}>Close</button>
            <div className="aspect-video w-full max-w-5xl bg-black" onClick={(e) => e.stopPropagation()}>
              {media.heroFull ? (
                <video className="h-full w-full" controls autoPlay poster={poster.src}>
                  <source src={media.heroFull} type="video/mp4" />
                </video>
              ) : (
                <div className="relative h-full w-full">
                  <Image src={poster.src} alt={poster.alt} fill sizes="100vw" className="object-cover opacity-50" />
                  <div className="absolute inset-0 grid place-items-center text-center">
                    <div>
                      <p className="eyebrow text-saffron">Video placeholder</p>
                      <p className="mt-3 font-display text-[1.75rem]">Dawn over a dzong, prayer flags on a mountain pass.</p>
                      <p className="mt-2 text-[0.8125rem] text-white/70">Set media.heroFull in config/site.ts to play the full film here.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
