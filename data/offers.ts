import type { Offer } from "./types";
import { img } from "./images";

export const offers: Offer[] = [
  {
    slug: "stay-longer-tenth-night",
    name: "Stay longer: the tenth night is ours",
    kind: "stay-longer",
    tagline: "Nine nights in the kingdom, and we add the tenth.",
    body:
      "Bhutan asks for time, and rewards it. Book a private journey of nine nights or more and we cover the accommodation on your tenth night, so the last days are spent somewhere unhurried: a farmhouse in Bumthang, a lodge above the Phobjikha marsh, a final morning in Paro with nothing to do. This offer is a placeholder pending confirmation with our Bhutanese partner operator and participating stays; terms and value will be finalised before launch. The Sustainable Development Fee is charged by the Royal Government for every night, including the tenth, and remains payable. Verify against https://www.bhutan.travel before launch.",
    terms: [
      "Applies to private journeys of ten nights or more booked directly with Dzong House.",
      "The complimentary night covers room and board at a participating stay; the SDF, visa fee, guide and transport are charged as normal.",
      "Subject to availability and not combinable with other offers or festival-period surcharges.",
      "Placeholder offer: value and participating stays to be confirmed with our partner operator before launch.",
    ],
    validUntil: "2027-06-30",
    journeys: ["western-and-central-bhutan", "luxury-lodge-circuit", "bhutan-and-nepal", "bhutan-and-india"],
    image: img("valleyForest", "A glacial valley framed by pine forest and snow peaks, room for one more night"),
    placeholder: true,
  },
  {
    slug: "spring-rhododendron-journeys",
    name: "Spring rhododendron journeys",
    kind: "seasonal",
    tagline: "The passes turn red, pink and white. Come while they do.",
    body:
      "From late March to May the high roads over Dochula, Pele La and Yotong La pass through forests of rhododendron in flower, forty-six species, and the Paro tshechu fills the dzong courtyard with colour of a different kind. Our spring journeys add a botanist-led walk in the Lamperi rhododendron garden and a picnic at the passes to any western or central itinerary booked for travel in April or May. This offer is a placeholder pending confirmation with our partner operator; inclusions and any pricing adjustment will be finalised before launch. Festival dates follow the lunar calendar and must be verified yearly. Verify fees and regulations against https://www.bhutan.travel before launch.",
    terms: [
      "Valid for journeys of seven nights or more travelling between 1 April and 31 May.",
      "Includes a guided rhododendron walk and one picnic at a high pass, weather permitting.",
      "Festival-period hotel rates in Paro may apply during the Paro tshechu; dates verify yearly.",
      "Placeholder offer: inclusions to be confirmed before launch.",
    ],
    validUntil: "2027-05-31",
    journeys: ["classic-western-bhutan", "western-and-central-bhutan", "paro-tshechu-festival-journey"],
    image: img("pinkPeaks", "Alpenglow on high Himalayan peaks above the spring rhododendron forests"),
    placeholder: true,
  },
  {
    slug: "winter-crane-season",
    name: "Winter crane season",
    kind: "seasonal",
    tagline: "Clear skies, empty dzongs and the cranes in the Phobjikha marsh.",
    body:
      "Winter is Bhutan's quiet secret: the peaks stand sharp against a blue sky, the courtyards are nearly empty, and from November to February the black-necked cranes winter in the Phobjikha valley. Our winter journeys add two nights in Phobjikha with a local naturalist, a dawn visit to the crane roost and a hot stone bath at a heritage farmhouse, at lodge rates that are at their lowest of the year. This offer is a placeholder pending confirmation with our partner operator and the Phobjikha stays; the saving and inclusions will be finalised before launch. Verify fees and regulations against https://www.bhutan.travel before launch.",
    terms: [
      "Valid for journeys travelling between 15 November and 28 February that include two or more nights in Phobjikha.",
      "Includes a naturalist-guided crane walk and one hot stone bath per traveller.",
      "Phobjikha sits at roughly 3,000 m and winter nights fall well below freezing; warm layers are essential.",
      "Placeholder offer: saving and participating stays to be confirmed before launch.",
    ],
    validUntil: "2027-02-28",
    journeys: ["western-and-central-bhutan", "luxury-lodge-circuit", "wellness-and-meditation-retreat"],
    image: img("highValley", "The broad Phobjikha valley under winter snow, where the black-necked cranes roost"),
    placeholder: true,
  },
];

export const getOffer = (slug: string) => offers.find((o) => o.slug === slug);
