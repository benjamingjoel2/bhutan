export type PlannerData = {
  // Step 1 — When
  arrivalDate: string; // yyyy-mm-dd or yyyy-mm (approximate)
  arrivalMonth: string;
  nights: number;
  dateMode: "exact" | "approximate";
  flexibleForFestival: boolean;
  experienceLevel: "first-time" | "experienced";
  // Step 2 — What
  journeyTypes: string[];
  journeyNotes: string;
  // Step 3 — Budget
  budget: "comfort" | "premium" | "ultra" | "unsure";
  // Step 4 — Who
  adults: number;
  childAges: number[];
  nationality: string;
  indianNational: boolean;
  addOns: string[];
  // Step 5 — Contact
  name: string;
  email: string;
  phoneCode: string;
  phone: string;
  contactMethods: string[];
  notes: string;
  // meta
  source?: { journeySlug?: string; festival?: string };
};

export const emptyPlanner: PlannerData = {
  arrivalDate: "",
  arrivalMonth: "",
  nights: 7,
  dateMode: "approximate",
  flexibleForFestival: false,
  experienceLevel: "first-time",
  journeyTypes: [],
  journeyNotes: "",
  budget: "unsure",
  adults: 2,
  childAges: [],
  nationality: "",
  indianNational: false,
  addOns: [],
  name: "",
  email: "",
  phoneCode: "+1",
  phone: "",
  contactMethods: ["Email"],
  notes: "",
};

export const addOnOptions = [
  { id: "flights", label: "International flights into Paro", line: "We can book Druk Air or Bhutan Airlines sectors with your journey." },
  { id: "insurance", label: "Travel insurance information", line: "Guidance on cover that includes altitude and helicopter evacuation." },
  { id: "gear", label: "Trekking gear", line: "Sleeping bags, poles and down jackets available to hire." },
];

export const journeyCardOptions = [
  { id: "Classic western Bhutan", line: "Paro, Thimphu, Punakha", image: "tigersNest" },
  { id: "Western and central Bhutan", line: "Add Phobjikha, Trongsa and Bumthang", image: "highValley" },
  { id: "Festival journey", line: "Built around a tshechu", image: "monasteryPeaks" },
  { id: "Trekking expedition", line: "Druk Path to Snowman", image: "hikerRidge" },
  { id: "Luxury lodge circuit", line: "The finest lodge in each valley", image: "lodgeRoom" },
  { id: "Wellness and meditation", line: "Stillness, hot stone baths, retreat", image: "yogaMist" },
  { id: "Bhutan + Nepal or India", line: "Two kingdoms, or Bhutan with Rajasthan", image: "kathmanduStupa" },
  { id: "Not sure yet", line: "Tell us what draws you", image: "mistyRidges" },
] as const;

export const phoneCodes = ["+1", "+44", "+61", "+65", "+91", "+49", "+33", "+34", "+39", "+31", "+41", "+46", "+47", "+45", "+64", "+81", "+82", "+86", "+852", "+971", "+975", "+977"];
