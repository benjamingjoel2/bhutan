import Image from "next/image";
import Link from "next/link";
import type { ImageRef } from "@/data/types";
import { cn } from "@/lib/utils";
import { Arrow } from "./Button";

type Ratio = "3/2" | "4/5" | "1/1" | "16/9" | "4/3";
const ratios: Record<Ratio, string> = { "3/2": "aspect-[3/2]", "4/5": "aspect-[4/5]", "1/1": "aspect-square", "16/9": "aspect-[16/9]", "4/3": "aspect-[4/3]" };

export function ImageCard({
  href,
  image,
  eyebrow,
  title,
  line,
  meta,
  ratio = "3/2",
  className,
  sizes = "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw",
  cta = "Discover",
  children,
  priority,
}: {
  href: string;
  image: ImageRef;
  eyebrow?: string;
  title: string;
  line?: string;
  meta?: React.ReactNode;
  ratio?: Ratio;
  className?: string;
  sizes?: string;
  cta?: string;
  children?: React.ReactNode;
  priority?: boolean;
}) {
  return (
    <Link href={href} className={cn("group block", className)}>
      <div className={cn("relative img-zoom bg-stone", ratios[ratio])}>
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover" priority={priority} />
      </div>
      <div className="pt-5">
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h3 className="display-sm">{title}</h3>
        {line && <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{line}</p>}
        {meta && <div className="mt-3">{meta}</div>}
        {children}
        <span className="mt-4 inline-flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.18em] font-medium text-maroon link-underline">
          {cta} <Arrow />
        </span>
      </div>
    </Link>
  );
}

/** Image card with text overlaid on the image (used for experiences mosaic and mega-menu feature). */
export function OverlayCard({
  href,
  image,
  eyebrow,
  title,
  line,
  ratio = "4/5",
  className,
  sizes = "(min-width: 1280px) 33vw, 100vw",
  titleClass = "display-md",
}: {
  href: string;
  image: ImageRef;
  eyebrow?: string;
  title: string;
  line?: string;
  ratio?: Ratio;
  className?: string;
  sizes?: string;
  titleClass?: string;
}) {
  return (
    <Link href={href} className={cn("group relative block img-zoom bg-stone text-white", ratios[ratio], className)}>
      <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        {eyebrow && <p className="eyebrow mb-2 text-saffron">{eyebrow}</p>}
        <h3 className={cn(titleClass, "text-white")}>{title}</h3>
        {line && <p className="mt-2 max-w-sm text-[0.9375rem] text-white/80 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 md:block hidden">{line}</p>}
      </div>
    </Link>
  );
}
