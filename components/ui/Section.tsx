import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TextLink } from "./Button";

export function Eyebrow({ children, className, light }: { children: ReactNode; className?: string; light?: boolean }) {
  return <p className={cn("eyebrow", light && "text-saffron-light", className)}>{children}</p>;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  link,
  align = "left",
  className,
  light,
  size = "lg",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  link?: { href: string; label: string };
  align?: "left" | "center";
  className?: string;
  light?: boolean;
  size?: "lg" | "md";
}) {
  return (
    <div className={cn("flex flex-col gap-5 md:flex-row md:items-end md:justify-between", align === "center" && "md:flex-col md:items-center text-center", className)}>
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && <Eyebrow light={light} className="mb-4">{eyebrow}</Eyebrow>}
        <h2 className={cn(size === "lg" ? "display-lg" : "display-md", light && "text-white")}>{title}</h2>
        {intro && <p className={cn("mt-5 text-[1.0625rem] leading-relaxed", light ? "text-white/80" : "text-ink-soft")}>{intro}</p>}
      </div>
      {link && <TextLink href={link.href} light={light} className="shrink-0">{link.label}</TextLink>}
    </div>
  );
}

export function Section({ children, className, id, tone = "default" }: { children: ReactNode; className?: string; id?: string; tone?: "default" | "stone" | "pine" | "ink" | "white" }) {
  const tones = {
    default: "",
    stone: "bg-stone",
    pine: "bg-pine text-white",
    ink: "bg-ink text-white",
    white: "bg-white",
  } as const;
  return (
    <section id={id} className={cn("section-y", tones[tone], className)}>
      {children}
    </section>
  );
}
