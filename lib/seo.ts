import type { Metadata } from "next";
import { site } from "@/config/site";

export function pageMeta({ title, description, path, image }: { title: string; description: string; path: string; image?: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} · ${site.name}`, description, url: path, images: image ? [{ url: image }] : undefined, type: "website" },
    twitter: { card: "summary_large_image", title: `${title} · ${site.name}`, description, images: image ? [image] : undefined },
  };
}
