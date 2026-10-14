import Image from "next/image";
import { images } from "@/data/images";
import { TextLink } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const values = [
  {
    eyebrow: "Wellness",
    title: "Restore, at the pace of the valleys.",
    body: "Hot stone baths, monastery mornings, mindful hikes and traditional medicine, woven into any journey or made the whole point of one.",
    href: "/wellness",
    cta: "Wellness journeys",
    image: images.forestPath,
  },
  {
    eyebrow: "Culture",
    title: "A living Buddhist kingdom.",
    body: "Dzongs still house monks and ministers. Festivals still fill courtyards. Your guide was born here, and introduces you properly.",
    href: "/experiences",
    cta: "Cultural experiences",
    image: images.monasteryPeaks,
  },
  {
    eyebrow: "Responsible travel",
    title: "High value, low volume, by design.",
    body: "Every night in Bhutan carries a Sustainable Development Fee. It pays for free healthcare, free education and the forests that cover most of the country. We include it in every price.",
    href: "/responsible-travel",
    cta: "Where the fee goes",
    image: images.riceTerraces,
  },
];

export function ValuesTrio() {
  return (
    <section className="section-y">
      <div className="container-x">
        <Stagger className="grid gap-12 md:grid-cols-3 md:gap-8">
          {values.map((v) => (
            <StaggerItem key={v.eyebrow}>
              <div className="relative mb-6 aspect-square w-28 overflow-hidden rounded-full bg-stone md:w-32">
                <Image src={v.image.src} alt={v.image.alt} fill sizes="160px" className="object-cover" />
              </div>
              <p className="eyebrow mb-3">{v.eyebrow}</p>
              <h3 className="display-md">{v.title}</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">{v.body}</p>
              <div className="mt-5"><TextLink href={v.href}>{v.cta}</TextLink></div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
