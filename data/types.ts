/** Shared content types. All prices are base USD. */

export type Region = "western" | "central" | "eastern";
export const regionLabels: Record<Region, string> = {
  western: "Western valleys",
  central: "Central heartland",
  eastern: "Remote & eastern Bhutan",
};

export type ImageRef = { src: string; alt: string; credit?: string };

export type Season = {
  name: "Spring" | "Monsoon" | "Autumn" | "Winter";
  months: string;
  summary: string;
  rating: 1 | 2 | 3; // 3 = peak
};

export type Faq = { id: string; question: string; answer: string; category: string; verify?: boolean };

export type Destination = {
  slug: string;
  name: string;
  region: Region;
  tagline: string;
  overview: string[]; // paragraphs
  altitudeM: number;
  driveFromParo: string;
  bestMonths: string[];
  seasons: Season[];
  highlights: { title: string; body: string; image: ImageRef }[];
  dzongs: { name: string; body: string; image: ImageRef }[];
  stays: string[]; // stay slugs
  journeys: string[]; // journey slugs
  faqs: Faq[];
  hero: ImageRef;
  card: ImageRef;
  featured?: boolean;
};

export type JourneyKind =
  | "classic-western"
  | "western-central"
  | "festival"
  | "trek"
  | "lodge-circuit"
  | "wellness"
  | "bhutan-plus";

export type BudgetTier = "comfort" | "premium" | "ultra";

export type ItineraryDay = { day: number; title: string; body: string; stay?: string; destination?: string };

export type Journey = {
  slug: string;
  name: string;
  kind: JourneyKind;
  regions: Region[];
  destinations: string[];
  nights: number;
  budgetTier: BudgetTier;
  priceFromUSD: number; // per person, sharing, all-in
  sdfIncluded: boolean;
  visaIncluded: boolean;
  tagline: string;
  summary: string;
  festival?: string; // festival slug
  wellness?: boolean;
  bestMonths: string[];
  days: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  pricing: { tier: BudgetTier; label: string; perPersonUSD: number; note: string }[];
  stays: string[];
  hero: ImageRef;
  card: ImageRef;
  featured?: boolean;
};

export type Trek = Omit<Journey, "kind"> & {
  kind: "trek";
  daysCount: number;
  maxAltitudeM: number;
  difficulty: "Moderate" | "Challenging" | "Strenuous" | "Extreme";
  fitnessAdvice: string[];
  campsOrLodges: string;
};

export type Festival = {
  slug: string;
  name: string;
  valley: string;
  destination: string; // destination slug
  month: string;
  typicalDates: string; // placeholder, verify yearly
  whatHappens: string;
  etiquette: string[];
  journeys: string[];
  image: ImageRef;
  upcomingLabel?: string;
};

export type StayType = "Lodge" | "Boutique hotel" | "Heritage farmhouse" | "Wellness retreat";

export type Stay = {
  slug: string;
  name: string; // PLACEHOLDER — no real hotel names until partner agreements exist
  type: StayType;
  valley: string;
  destination: string;
  priceFromUSD: number; // per person per night, all-in
  sdfIncluded: boolean;
  tagline: string;
  description: string[];
  features: string[];
  images: ImageRef[];
  journeys: string[];
  placeholder: true;
};

export type Experience = {
  slug: string;
  name: string;
  tagline: string;
  body: string[];
  where: string[]; // destination slugs
  when: string;
  duration: string;
  journeys: string[];
  hero: ImageRef;
  card: ImageRef;
  featured?: boolean;
};

export type WellnessExperience = Experience & { pillar: string; ritual: string[] };

export type Offer = {
  slug: string;
  name: string;
  kind: "stay-longer" | "seasonal";
  tagline: string;
  body: string;
  terms: string[];
  validUntil: string;
  journeys: string[];
  image: ImageRef;
  placeholder: true;
};

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  hero: ImageRef;
  tags: string[];
};
