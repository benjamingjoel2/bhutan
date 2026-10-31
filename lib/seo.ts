import type { Metadata } from "next";
import { site } from "@/config/site";
import { languageAlternates, localePath } from "@/lib/i18n-paths";
import { locale } from "@/lib/locale";

/** `path` is the page's own URL (already in its language, e.g. "/fr/about"). */
export function pageMeta({ title, description, path: rawPath, image }: { title: string; description: string; path: string; image?: string }): Metadata {
  const path = localePath(rawPath, locale);
  return {
    title,
    description,
    alternates: { canonical: path, languages: languageAlternates(path) },
    openGraph: { title: `${title} · ${site.name}`, description, url: path, images: image ? [{ url: image }] : undefined, type: "website" },
    twitter: { card: "summary_large_image", title: `${title} · ${site.name}`, description, images: image ? [image] : undefined },
  };
}
