import { destinations } from "@/data/destinations";
import { journeys } from "@/data/journeys";
import { treks } from "@/data/treks";
import { experiences } from "@/data/experiences";
import { wellnessExperiences } from "@/data/wellness";
import { stays } from "@/data/stays";
import { festivals } from "@/data/festivals";
import { posts } from "@/data/posts";
import { regionLabels } from "@/data/types";

export type SearchItem = { type: string; title: string; href: string; line?: string; keywords: string[] };

export const searchIndex: SearchItem[] = [
  ...destinations.map((d) => ({ type: "Destination", title: d.name, href: `/destinations/${d.slug}`, line: d.tagline, keywords: [regionLabels[d.region], ...d.dzongs.map((z) => z.name)] })),
  ...journeys.map((j) => ({ type: "Journey", title: j.name, href: `/journeys/${j.slug}`, line: j.tagline, keywords: [j.kind, ...j.destinations] })),
  ...treks.map((t) => ({ type: "Trek", title: t.name, href: `/treks/${t.slug}`, line: t.tagline, keywords: ["trek", "trekking", t.difficulty] })),
  ...experiences.map((e) => ({ type: "Experience", title: e.name, href: `/experiences/${e.slug}`, line: e.tagline, keywords: e.where })),
  ...wellnessExperiences.map((w) => ({ type: "Wellness", title: w.name, href: `/wellness/${w.slug}`, line: w.tagline, keywords: ["wellness", w.pillar] })),
  ...stays.map((s) => ({ type: "Stay", title: s.name, href: `/stays/${s.slug}`, line: s.tagline, keywords: [s.type, s.valley] })),
  ...festivals.map((f) => ({ type: "Festival", title: f.name, href: `/festivals#${f.slug}`, line: `${f.valley} · ${f.month}`, keywords: ["festival", "tshechu", f.valley] })),
  ...posts.map((p) => ({ type: "Journal", title: p.title, href: `/journal/${p.slug}`, line: p.excerpt, keywords: p.tags })),
  { type: "Page", title: "Plan your journey", href: "/plan-your-journey", keywords: ["planner", "enquire", "book"] },
  { type: "Page", title: "FAQ", href: "/faq", keywords: ["visa", "sdf", "fee", "questions"] },
  { type: "Page", title: "Offers", href: "/offers", keywords: ["offer", "deal"] },
  { type: "Page", title: "Contact", href: "/contact", keywords: ["email", "whatsapp", "phone"] },
];
