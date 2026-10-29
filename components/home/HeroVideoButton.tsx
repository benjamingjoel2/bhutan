"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { media } from "@/config/site";
import { images } from "@/data/images";

/** "Play full video" control and its modal. The only client code in the hero. */
export function HeroVideoButton() {
  const [open, setOpen] = useState(false);
  const poster = images.peaksAboveClouds;
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <button onClick={() => setOpen(true)} className="btn btn-ghost">
        <span className="grid h-5 w-5 place-items-center rounded-full border border-current" aria-hidden="true">
          <svg viewBox="0 0 10 10" className="ml-px h-2 w-2 fill-current"><path d="M2 1l7 4-7 4z" /></svg>
        </span>
        Play full video
      </button>
      {open && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4" role="dialog" aria-modal="true" aria-label="Full video" onClick={() => setOpen(false)}>
          <button className="absolute right-6 top-6 text-[0.6875rem] uppercase tracking-[0.18em] text-white" onClick={() => setOpen(false)}>Close</button>
          <div className="aspect-video w-full max-w-5xl bg-black text-white" onClick={(e) => e.stopPropagation()}>
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
        </div>
      )}
    </>
  );
}
