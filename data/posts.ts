import type { PostMeta } from "./types";
import { img } from "./images";

/** Post bodies live in content/journal/<slug>.mdx; this is the metadata index. */
export const posts: PostMeta[] = [
  {
    slug: "the-best-of-bhutan",
    title: "The best of Bhutan: what to see on a first journey",
    excerpt:
      "Dzongs, a cliffside monastery, a festival courtyard and a valley of cranes. How we would spend a first ten days in the kingdom, and why we would not rush any of it.",
    date: "2026-09-18",
    readingTime: "7 min",
    hero: img("monasteryPeaks", "A dzong and whitewashed stupa beneath Himalayan snow peaks"),
    tags: ["Planning", "Destinations", "First visit"],
  },
  {
    slug: "how-to-hike-to-tigers-nest",
    title: "How to hike to the Tiger's Nest",
    excerpt:
      "Start early, go slowly, leave the camera at the door. A practical guide to the 900-metre climb to Taktsang, from the first switchback to the last butter lamp.",
    date: "2026-08-21",
    readingTime: "6 min",
    hero: img("tigersNest", "Taktsang monastery clinging to its cliff above the Paro valley"),
    tags: ["Hiking", "Paro", "Practical"],
  },
  {
    slug: "bhutans-festival-calendar-explained",
    title: "Bhutan's festival calendar, explained",
    excerpt:
      "Why the dates move, what a tshechu is for, how to read a cham dance and what to do when the thongdrel is unfurled at dawn. A guide to the kingdom's festivals and their etiquette.",
    date: "2026-07-10",
    readingTime: "8 min",
    hero: img("peaksAboveClouds", "Snow peaks above a sea of cloud at sunset, festival season in the high valleys"),
    tags: ["Festivals", "Culture", "Planning"],
  },
  {
    slug: "what-the-sustainable-development-fee-pays-for",
    title: "What the Sustainable Development Fee pays for",
    excerpt:
      "Free healthcare, free education, a constitution that guarantees forest cover and a country that absorbs more carbon than it emits. The SDF is not a tax on travel. It is the reason there is a Bhutan to travel to.",
    date: "2026-06-05",
    readingTime: "7 min",
    hero: img("valleyForest", "A glacial valley framed by pine forest and snow mountains, the forest the constitution protects"),
    tags: ["Responsible travel", "Entry & fees", "Conservation"],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
