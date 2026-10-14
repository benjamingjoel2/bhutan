import Image from "next/image";
import { getJourney } from "@/data/journeys";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function JourneyBand() {
  const j = getJourney("luxury-lodge-circuit");
  const im = j?.hero ?? images.highValley;
  return (
    <section className="relative flex min-h-[80vh] items-center bg-ink text-white">
      <Image src={im.src} alt={im.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ink/45" aria-hidden="true" />
      <Reveal className="container-x relative py-28 text-center">
        <p className="eyebrow mb-5 text-saffron">Lodge circuit · {j?.nights ?? 10} nights</p>
        <h2 className="display-xl mx-auto max-w-4xl text-white">Five valleys. One unhurried arc.</h2>
        <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] text-white/85">
          We arrange your guide, driver, routes, and every detail in between. You arrange nothing but your gaze.
        </p>
        <div className="mt-9"><Button href={`/journeys/${j?.slug ?? "luxury-lodge-circuit"}`} variant="ghost" arrow>The lodge circuit</Button></div>
      </Reveal>
    </section>
  );
}
