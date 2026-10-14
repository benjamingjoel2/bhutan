import Image from "next/image";
import { images } from "@/data/images";
import type { ImageRef } from "@/data/types";
import type { PlannerPrefill } from "@/lib/ui";
import { EnquireButton } from "./EnquireButton";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand({
  eyebrow = "Begin",
  title = "Tell us a little. We will shape the rest.",
  line = "One specialist, one conversation, and a first sketch of your journey within two working days.",
  prefill,
  image = images.mistyRidges,
  button = "Plan your journey",
}: {
  eyebrow?: string;
  title?: string;
  line?: string;
  prefill?: PlannerPrefill;
  image?: ImageRef;
  button?: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-center bg-ink text-white">
      <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
      <Reveal className="container-x relative py-24 text-center">
        <p className="eyebrow mb-5 text-saffron">{eyebrow}</p>
        <h2 className="display-lg mx-auto max-w-3xl text-white">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-white/85">{line}</p>
        <div className="mt-8"><EnquireButton prefill={prefill} variant="ghost">{button}</EnquireButton></div>
      </Reveal>
    </section>
  );
}
