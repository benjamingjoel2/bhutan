import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { destinations } from "@/data/destinations";
import { journeys } from "@/data/journeys";
import { treks } from "@/data/treks";
import { experiences } from "@/data/experiences";
import { wellnessExperiences } from "@/data/wellness";
import { stays } from "@/data/stays";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/destinations", "/journeys", "/treks", "/wellness", "/experiences", "/festivals", "/offers", "/about", "/our-partners", "/responsible-travel", "/testimonials", "/faq", "/contact", "/journal", "/plan-your-journey"];
  const dynamic = [
    ...destinations.map((d) => `/destinations/${d.slug}`),
    ...journeys.map((j) => `/journeys/${j.slug}`),
    ...treks.map((t) => `/treks/${t.slug}`),
    ...experiences.map((e) => `/experiences/${e.slug}`),
    ...wellnessExperiences.map((w) => `/wellness/${w.slug}`),
    ...stays.map((s) => `/stays/${s.slug}`),
    ...posts.map((p) => `/journal/${p.slug}`),
  ];
  return [...staticPaths, ...dynamic].map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
