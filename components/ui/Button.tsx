import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "pine";
type Common = { variant?: Variant; className?: string; children: ReactNode; arrow?: boolean };
type AsLink = Common & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;
type AsButton = Common & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: AsLink | AsButton) {
  const { variant = "outline", className, children, arrow } = props;
  const cls = cn("btn", `btn-${variant}`, className);
  const inner = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );
  if (props.href) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { href, variant: _v, className: _c, children: _ch, arrow: _a, ...linkRest } = props;
    return (
      <Link href={href} className={cls} {...linkRest}>
        {inner}
      </Link>
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { href: _h, variant: _v, className: _c, children: _ch, arrow: _a, ...buttonRest } = props as AsButton;
  return (
    <button type="button" className={cls} {...buttonRest}>
      {inner}
    </button>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg className={cn("h-3 w-3", className)} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TextLink({ href, children, className, light }: { href: string; children: ReactNode; className?: string; light?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.18em] font-medium link-underline",
        light ? "text-white" : "text-maroon",
        className,
      )}
    >
      {children}
      <Arrow />
    </Link>
  );
}
