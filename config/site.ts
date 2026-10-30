/**
 * Single source of truth for brand, colours, currencies, contact details,
 * fees and navigation. Everything a visitor sees as "brand identity" lives here.
 */

export const site = {
  name: "Dzong House",
  tagline: "Tailor-made journeys through the Kingdom of Bhutan",
  description:
    "Dzong House opens Bhutan to a small number of thoughtful travellers. One dedicated specialist, a Bhutanese partner operator and local guides, from the first message to the day you fly home.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dzonghouse.tourground.com",
  locale: "en",
  contact: {
    email: "dzonghouse@tourground.com",
    /** Business address: Thimphu TechPark (https://thimphutechpark.bt), the city's technology park and shared workspace. */
    address: "Thimphu TechPark, Gepja Zur Lam, Wangchhu Taba, Babesa, Thimphu 11001, Bhutan",
    addressParts: { street: "Thimphu TechPark, Gepja Zur Lam, Wangchhu Taba, Babesa", locality: "Thimphu", postalCode: "11001", country: "BT" },
  },
} as const;

/** Hero media. Leave the paths empty until real footage exists; the poster image shows instead. */
export const media = {
  heroLoop: "", // e.g. "/video/hero.mp4" — short muted loop, dawn over a dzong
  heroFull: "", // e.g. "/video/hero-full.mp4" or an embed URL for "Play full video"
} as const;

/** Brand palette — mirrored as CSS variables in app/globals.css */
export const colors = {
  whitewash: "#F6F2EA",
  stone: "#E7DFD2",
  stoneDark: "#CFC3B1",
  ink: "#1F1A17",
  maroon: "#6B1F2A",
  maroonDeep: "#4E141C",
  saffron: "#D99A2B",
  saffronLight: "#E8B860",
  pine: "#2F4A3B",
  pineDeep: "#1F3328",
} as const;

/** All prices in data are base USD. Rates are placeholders; replace with a live feed later. */
export const currencies = {
  base: "USD",
  options: [
    { code: "USD", symbol: "$", rate: 1, label: "US Dollar" },
    { code: "EUR", symbol: "€", rate: 0.92, label: "Euro" },
    { code: "GBP", symbol: "£", rate: 0.78, label: "British Pound" },
    { code: "AUD", symbol: "A$", rate: 1.52, label: "Australian Dollar" },
    { code: "SGD", symbol: "S$", rate: 1.34, label: "Singapore Dollar" },
    { code: "INR", symbol: "₹", rate: 84, label: "Indian Rupee" },
  ],
  ratesAsOf: "2026-10-01",
} as const;

export type CurrencyCode = (typeof currencies.options)[number]["code"];

/**
 * Government fees. Keep these in one place and update them together.
 * VERIFY every value against the source URL before launch — they change.
 */
export const fees = {
  sourceUrl: "https://www.bhutan.travel",
  verifiedOn: "2026-10-14",
  validUntil: "2027-08-31",
  sdf: {
    adultPerNightUSD: 100,
    childPerNightUSD: 50, // ages 6–11; under 6 exempt
    childFreeUnderAge: 6,
    childRateMaxAge: 11,
    indianNationalPerNightINR: 1200, // Indian nationals pay in INR; verify
    note: "Sustainable Development Fee, charged per person per night. Funds free healthcare, education and conservation in Bhutan.",
  },
  visa: {
    feeUSD: 40,
    note: "One-off visa fee for most nationalities. Indian nationals use a permit instead of a visa. Verify current rules.",
  },
  indianNationals: {
    note: "Indian nationals do not need a visa but require an entry permit and pay the SDF at the INR rate. Verify at bhutan.travel.",
  },
} as const;

export const pricingCopy = {
  sdfIncluded: "SDF included",
  sdfExcluded: "SDF not included",
  visaIncluded: "Visa fee included",
  visaExcluded: "Visa fee not included",
  perPersonPerNight: "per person · night",
  perPerson: "per person",
  feesVerified: `Fees verified as of ${fees.verifiedOn}`,
} as const;

import type { ImageKey } from "@/data/images";

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = {
  label: string;
  href: string;
  columns: { title?: string; links: NavLink[] }[];
  feature: { title: string; line: string; href: string; image: ImageKey };
};

export const navigation: NavGroup[] = [
  {
    label: "Destinations",
    href: "/destinations",
    columns: [
      {
        title: "Western valleys",
        links: [
          { label: "Paro", href: "/destinations/paro" },
          { label: "Thimphu", href: "/destinations/thimphu" },
          { label: "Haa", href: "/destinations/haa" },
        ],
      },
      {
        title: "Central heartland",
        links: [
          { label: "Punakha", href: "/destinations/punakha" },
          { label: "Phobjikha & Gangtey", href: "/destinations/phobjikha" },
          { label: "Wangdue Phodrang", href: "/destinations/wangdue-phodrang" },
          { label: "Trongsa", href: "/destinations/trongsa" },
          { label: "Bumthang", href: "/destinations/bumthang" },
        ],
      },
      {
        title: "Remote & eastern Bhutan",
        links: [
          { label: "Trashigang", href: "/destinations/trashigang" },
          { label: "Mongar", href: "/destinations/mongar" },
          { label: "Laya", href: "/destinations/laya" },
          { label: "Lunana", href: "/destinations/lunana" },
        ],
      },
    ],
    feature: {
      title: "Punakha",
      line: "Where two rivers meet beneath the kingdom's most beautiful dzong.",
      href: "/destinations/punakha",
      image: "riverDawn",
    },
  },
  {
    label: "Journeys",
    href: "/journeys",
    columns: [
      {
        links: [
          { label: "Classic western Bhutan", href: "/journeys/classic-western-bhutan" },
          { label: "Western and central Bhutan", href: "/journeys/western-and-central-bhutan" },
          { label: "Festival journeys", href: "/journeys?kind=festival" },
          { label: "Treks", href: "/treks" },
        ],
      },
      {
        links: [
          { label: "Lodge circuits", href: "/journeys/luxury-lodge-circuit" },
          { label: "Wellness journeys", href: "/journeys?kind=wellness" },
          { label: "Bhutan + Nepal or India", href: "/journeys/bhutan-and-nepal" },
          { label: "All journeys", href: "/journeys" },
        ],
      },
    ],
    feature: {
      title: "Luxury lodge circuit",
      line: "Five valleys, five lodges, one unhurried arc across the kingdom.",
      href: "/journeys/luxury-lodge-circuit",
      image: "monasteryPeaks",
    },
  },
  {
    label: "Wellness",
    href: "/wellness",
    columns: [
      {
        links: [
          { label: "Meditation and monastery stays", href: "/wellness/meditation-and-monastery-stays" },
          { label: "Hot stone baths", href: "/wellness/hot-stone-baths" },
          { label: "Traditional medicine", href: "/wellness/traditional-medicine" },
          { label: "Mindful hikes", href: "/wellness/mindful-hikes" },
          { label: "Wellness retreats", href: "/wellness/wellness-retreats" },
        ],
      },
    ],
    feature: {
      title: "Slow down at altitude",
      line: "Bhutan measures its wealth in happiness. Spend a week learning how.",
      href: "/wellness",
      image: "yogaMist",
    },
  },
  {
    label: "Experiences",
    href: "/experiences",
    columns: [
      {
        links: [
          { label: "Tiger's Nest hike", href: "/experiences/tigers-nest-hike" },
          { label: "Tshechu festivals", href: "/experiences/tshechu-festivals" },
          { label: "Black-necked crane season", href: "/experiences/black-necked-crane-season" },
          { label: "Farmhouse stays", href: "/experiences/farmhouse-stays" },
          { label: "Archery", href: "/experiences/archery" },
        ],
      },
      {
        links: [
          { label: "Textiles and weaving", href: "/experiences/textiles-and-weaving" },
          { label: "Photography", href: "/experiences/photography" },
          { label: "Honeymoons", href: "/experiences/honeymoons" },
          { label: "Family journeys", href: "/experiences/family-journeys" },
          { label: "All experiences", href: "/experiences" },
        ],
      },
    ],
    feature: {
      title: "Tiger's Nest",
      line: "Three hours up, one lifetime of remembering.",
      href: "/experiences/tigers-nest-hike",
      image: "tigersNest",
    },
  },
  {
    label: "About",
    href: "/about",
    columns: [
      {
        links: [
          { label: "Our story", href: "/about" },
          { label: "Our Bhutanese partners", href: "/our-partners" },
          { label: "Responsible travel", href: "/responsible-travel" },
        ],
      },
      {
        links: [
          { label: "FAQ", href: "/faq" },
          { label: "Contact", href: "/contact" },
          { label: "Journal", href: "/journal" },
        ],
      },
    ],
    feature: {
      title: "Guardians at the door",
      line: "Why we named ourselves after a fortress.",
      href: "/about",
      image: "peaksAboveClouds",
    },
  },
];

export const footerColumns = [
  {
    title: "Destinations",
    links: [
      { label: "Paro", href: "/destinations/paro" },
      { label: "Thimphu", href: "/destinations/thimphu" },
      { label: "Punakha", href: "/destinations/punakha" },
      { label: "Bumthang", href: "/destinations/bumthang" },
      { label: "All destinations", href: "/destinations" },
    ],
  },
  {
    title: "Journeys",
    links: [
      { label: "All journeys", href: "/journeys" },
      { label: "Treks", href: "/treks" },
      { label: "Festivals", href: "/festivals" },
      { label: "Wellness", href: "/wellness" },
      { label: "Offers", href: "/offers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Our partners", href: "/our-partners" },
      { label: "Responsible travel", href: "/responsible-travel" },
      { label: "Journal", href: "/journal" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Booking Terms", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export const planner = {
  minNights: 3,
  maxNights: 30,
  defaultNights: 7,
  journeyTypes: [
    "Classic western Bhutan",
    "Western and central Bhutan",
    "Festival journey",
    "Trekking expedition",
    "Luxury lodge circuit",
    "Wellness and meditation",
    "Bhutan + Nepal or India",
    "Not sure yet",
  ],
  budgetTiers: [
    { id: "comfort", label: "Comfort", perPersonPerDayUSD: 350, line: "Warm three-star hotels, private guide and driver, all meals." },
    { id: "premium", label: "Premium", perPersonPerDayUSD: 650, line: "Boutique hotels and heritage lodges, upgraded dining, private experiences." },
    { id: "ultra", label: "Ultra luxury", perPersonPerDayUSD: 1400, line: "The finest lodges in every valley, helicopter transfers where useful." },
  ],
  months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
} as const;
