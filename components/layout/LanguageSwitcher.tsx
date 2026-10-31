"use client";
// i18n-skip-strings

import { usePathname } from "next/navigation";
import { locale } from "@/lib/locale";
import { LOCALES, LOCALE_LABELS, localePath } from "@/lib/i18n-paths";
import { cn } from "@/lib/utils";

/** EN · FR · DE · ES. Plain links to the same page in each language; no automatic redirects. */
const NAV_LABEL = { en: "Language", fr: "Langue", de: "Sprache", es: "Idioma" } as const;

export function LanguageSwitcher({ light, className }: { light?: boolean; className?: string }) {
  const pathname = usePathname() || "/";
  return (
    <nav aria-label={NAV_LABEL[locale]} className={cn("flex items-center text-[0.6875rem] font-medium uppercase tracking-[0.18em]", light ? "text-white" : "text-ink", className)}>
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="px-1 opacity-50">·</span>}
          {l === locale ? (
            <span aria-current="true" lang={l} title={LOCALE_LABELS[l]} className="border-b border-current">{l.toUpperCase()}</span>
          ) : (
            <a href={localePath(pathname, l)} hrefLang={l} lang={l} title={LOCALE_LABELS[l]} className="opacity-70 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron">
              {l.toUpperCase()}
            </a>
          )}
        </span>
      ))}
    </nav>
  );
}
