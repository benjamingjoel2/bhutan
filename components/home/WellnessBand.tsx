import Image from "next/image";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function WellnessBand() {
  const im = images.yogaMist;
  return (
    <section className="section-y-sm">
      <div className="container-x grid items-stretch md:grid-cols-2">
        <Reveal className="relative aspect-[4/5] img-zoom bg-stone md:aspect-auto md:min-h-[640px]">
          <Image src={im.src} alt={im.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col justify-center bg-stone px-8 py-14 md:px-16 lg:px-24">
          <p className="eyebrow mb-5">Wellness in Bhutan</p>
          <h2 className="display-lg">Slow down at altitude.</h2>
          <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
            Bhutan measures its wealth in happiness. Spend a week learning how: morning meditation with monks, river-stone baths
            heated over pine fires, long silent walks through rhododendron forest, and a traditional medicine consultation
            in Thimphu that begins with your pulse.
          </p>
          <div className="mt-8"><Button href="/wellness" variant="outline" arrow>Wellness journeys</Button></div>
        </Reveal>
      </div>
    </section>
  );
}
