import Image from "next/image";
import type { ImageRef } from "@/data/types";
import { cn } from "@/lib/utils";

/** Inner-page hero: 60–80vh image with eyebrow, title and optional intro, like the reference's property pages. */
export function PageHero({
  image,
  eyebrow,
  title,
  intro,
  size = "md",
  children,
  align = "left",
}: {
  image?: ImageRef;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  const heights = { sm: "min-h-[52vh]", md: "min-h-[68vh]", lg: "min-h-[82vh]" } as const;
  if (!image) {
    return (
      <section className={cn("container-x pt-32 pb-12 md:pt-40 md:pb-16", align === "center" && "text-center")}>
        <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="display-xl">{title}</h1>
          {intro && <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-soft md:text-[1.125rem]">{intro}</p>}
          {children}
        </div>
      </section>
    );
  }
  return (
    <section className={cn("relative flex flex-col justify-end bg-ink text-white", heights[size])}>
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/30" aria-hidden="true" />
      <div className={cn("container-x relative pb-14 pt-40 md:pb-20", align === "center" && "text-center")}>
        <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
          {eyebrow && <p className="eyebrow mb-4 text-saffron">{eyebrow}</p>}
          <h1 className="display-xl text-white">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/85 md:text-[1.125rem]">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
