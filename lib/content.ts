import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { images, type ImageKey } from "@/data/images";
import { posts as postMeta } from "@/data/posts";
import { locale } from "@/lib/locale";

// English posts live in content/journal, translations in content/i18n/<locale>/journal.
const dir = locale === "en" ? path.join(process.cwd(), "content", "journal") : path.join(process.cwd(), "content", "i18n", locale, "journal");

export function getPostSource(slug: string) {
  const file = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { content, data } = matter(raw);
  const meta = postMeta.find((p) => p.slug === slug);
  const heroKey = (data.heroKey as ImageKey) ?? "mistyRidges";
  return {
    content,
    meta: {
      slug,
      title: (data.title as string) ?? meta?.title ?? slug,
      excerpt: (data.excerpt as string) ?? meta?.excerpt ?? "",
      date: (data.date as string) ?? meta?.date ?? "",
      readingTime: (data.readingTime as string) ?? meta?.readingTime ?? "",
      tags: (data.tags as string[]) ?? meta?.tags ?? [],
      hero: meta?.hero ?? images[heroKey] ?? images.mistyRidges,
    },
  };
}

export const postSlugs = () => fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
