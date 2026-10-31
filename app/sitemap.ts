import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { LOCALES, localePath, languageAlternates } from "@/lib/i18n-paths";
import { destinations } from "@/data/destinations";
import { journeys } from "@/data/journeys";
import { treks } from "@/data/treks";
import { experiences } from "@/data/experiences";
import { wellnessExperiences } from "@/data/wellness";
import { stays } from "@/data/stays";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/destinations", "/journeys", "/treks", "/wellness", "/experiences", "/festivals", "/offers", "/about", "/our-partners", "/responsible-travel", "/faq", "/contact", "/journal", "/plan-your-journey"];
  const dynamic = [
    ...destinations.map((d) => `/destinations/${d.slug}`),
    ...journeys.map((j) => `/journeys/${j.slug}`),
    ...treks.map((t) => `/treks/${t.slug}`),
    ...experiences.map((e) => `/experiences/${e.slug}`),
    ...wellnessExperiences.map((w) => `/wellness/${w.slug}`),
    ...stays.map((s) => `/stays/${s.slug}`),
    ...posts.map((p) => `/journal/${p.slug}`),
  ];
  const abs = (p: string) => `${site.url}${p === "/" ? "" : p}`;
  return [...staticPaths, ...dynamic].flatMap((p) =>
    LOCALES.map((l) => ({
      url: abs(localePath(p || "/", l)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
      alternates: { languages: Object.fromEntries(Object.entries(languageAlternates(p || "/")).map(([k, v]) => [k, abs(v)])) },
    })),
  );
}
