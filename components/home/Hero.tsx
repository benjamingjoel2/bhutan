import Image from "next/image";
import { PlanBar } from "@/components/layout/PlanBar";
import { images } from "@/data/images";
import { media } from "@/config/site";
import { HeroVideoButton } from "./HeroVideoButton";

/**
 * Full-bleed hero. Server-rendered: the image is preloaded and the headline is in the
 * HTML, so both paint before any JavaScript runs. Set media.heroLoop in config/site.ts
 * to play a muted loop over the poster.
 */
export function Hero() {
  const poster = images.peaksAboveClouds;
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end bg-ink text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={poster.src} alt={poster.alt} fill priority sizes="100vw" className="object-cover" />
        {media.heroLoop && (
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="none" aria-hidden="true">
            <source src={media.heroLoop} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/60" aria-hidden="true" />
      </div>

      <div className="container-x relative flex flex-1 flex-col justify-center pb-12 pt-32 md:pb-16">
        <p className="eyebrow rise-in mb-6 text-saffron">Tailor-made journeys through Bhutan</p>
        <h1 className="display-xl max-w-3xl text-white">
          The kingdom opens its doors slowly.<br className="hidden md:block" /> We hold them for you.
        </h1>
        <div className="rise-in mt-10" style={{ ["--rise-delay" as string]: "250ms" }}>
          <HeroVideoButton />
        </div>
      </div>

      <div className="rise-in container-x relative pb-6 md:pb-10" style={{ ["--rise-delay" as string]: "400ms" }}>
        <PlanBar variant="hero" />
      </div>
    </section>
  );
}
