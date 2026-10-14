import Link from "next/link";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/** Text-based logo placeholder. Swap for an SVG wordmark later. */
export function Logo({ light, className, compact }: { light?: boolean; className?: string; compact?: boolean }) {
  return (
    <Link href="/" aria-label={`${site.name} — home`} className={cn("inline-flex flex-col items-center leading-none", light ? "text-white" : "text-ink", className)}>
      <span className={cn("font-display whitespace-nowrap tracking-[0.22em] md:tracking-[0.28em] uppercase transition-all duration-300", compact ? "text-[1rem] md:text-[1.05rem]" : "text-[1.125rem] md:text-[1.5rem]")}>
        Dzong House
      </span>
      <span className={cn("mt-1 text-[0.5rem] tracking-[0.42em] uppercase transition-all duration-300", light ? "text-white/70" : "text-ink-mute", compact && "opacity-0 h-0 mt-0 overflow-hidden")}>
        Bhutan
      </span>
    </Link>
  );
}
