/**
 * Stays — PLACEHOLDER properties. No real hotel or lodge names until partner
 * agreements exist. Every entry is `placeholder: true`; names are descriptive generics.
 * priceFromUSD = per person per night, all-in, Sustainable Development Fee included.
 */
import type { Stay } from "./types";
import { img } from "./images";

export const stays: Stay[] = [
  {
    slug: "paro-valley-lodge",
    name: "Paro Valley Lodge",
    type: "Lodge",
    valley: "Paro",
    destination: "paro",
    priceFromUSD: 950,
    sdfIncluded: true,
    tagline: "Stone, pine and the Tiger's Nest in the window.",
    description: [
      "A lodge of local stone and timber set among the blue pines above the valley floor, where every suite faces the cliff that holds Taktsang. Mornings begin with the sound of the river and the first light on the monastery.",
      "Interiors borrow from the farmhouse: rammed-earth walls, hand-woven textiles, a bukhari stove laid each evening. The spa works with hot stone baths and Bhutanese herbs, and the kitchen with the farms you can see from your terrace.",
      "We use it as the opening and closing chapter of lodge-circuit journeys, with the Taktsang walk planned for your final morning.",
    ],
    features: ["Suites with valley-facing terraces", "Hot stone bath house", "Farm-to-table dining", "Private guided walks from the door", "Spa and meditation pavilion", "Airport transfers included"],
    images: [
      img("lodgeRoom", "A lamplit lodge suite in the Paro valley"),
      img("tigersNest", "The view towards Taktsang from the lodge"),
      img("forestPath", "Pine forest paths above the lodge"),
    ],
    journeys: ["luxury-lodge-circuit", "classic-western-bhutan", "paro-tshechu-festival-journey", "wellness-and-meditation-retreat"],
    placeholder: true,
  },
  {
    slug: "thimphu-boutique-house",
    name: "Thimphu Boutique House",
    type: "Boutique hotel",
    valley: "Thimphu",
    destination: "thimphu",
    priceFromUSD: 340,
    sdfIncluded: true,
    tagline: "A quiet house above the capital.",
    description: [
      "A small hotel of a dozen rooms on the hillside above Thimphu, close enough to walk down to the market and far enough that the city is a glow below you at night. Rooms are simple and warm, with painted woodwork and views of Tashichho Dzong.",
      "Breakfast is red rice porridge, eggs with ezay chilli relish and good coffee on the terrace. In the evenings the sitting room fills with the smell of the stove and the sound of guides planning the next day.",
    ],
    features: ["Twelve rooms with dzong or valley views", "Terrace breakfast", "Library and stove lounge", "Walking distance to the Memorial Chorten", "Laundry and luggage storage", "Local art and textiles throughout"],
    images: [
      img("lodgeRoom", "A warm, simply furnished room above Thimphu"),
      img("greenRidge", "Evening light over the Thimphu valley from the terrace"),
      img("peaksAboveClouds", "Peaks above the capital at dusk"),
    ],
    journeys: ["classic-western-bhutan", "western-and-central-bhutan", "thimphu-and-punakha-festival-journey", "bhutan-and-nepal", "bhutan-and-india"],
    placeholder: true,
  },
  {
    slug: "punakha-river-lodge",
    name: "Punakha River Lodge",
    type: "Lodge",
    valley: "Punakha",
    destination: "punakha",
    priceFromUSD: 880,
    sdfIncluded: true,
    tagline: "Tented suites on the bank of the Mo Chhu.",
    description: [
      "Set in rice terraces on the bank of the mother river, a short walk from the suspension bridge, the lodge is a scatter of canvas and timber suites with the sound of water beneath every bed. Punakha Dzong is a ten-minute drive downstream.",
      "Days are warm here even in winter. There is a pool among the paddies, a riverside deck for supper, and a bath house where the hot stones are heated on a fire of pine. The kitchen is proud of its Bhutanese menu and happy to make it mild.",
      "The lodge anchors the central stretch of the lodge circuit and our wellness retreat, with yoga on the deck at dawn.",
    ],
    features: ["Riverside tented suites", "Outdoor pool among the paddies", "Hot stone bath house", "Dawn yoga deck", "Private rafting from the lodge", "Bicycles for the valley lanes"],
    images: [
      img("riverDawn", "Dawn on the Mo Chhu beside the lodge"),
      img("riceTerraces", "Rice terraces surrounding the lodge"),
      img("lodgeRoom", "A tented suite at the river lodge"),
    ],
    journeys: ["luxury-lodge-circuit", "wellness-and-meditation-retreat", "thimphu-and-punakha-festival-journey", "western-and-central-bhutan"],
    placeholder: true,
  },
  {
    slug: "gangtey-farmhouse",
    name: "Gangtey Farmhouse",
    type: "Heritage farmhouse",
    valley: "Phobjikha",
    destination: "phobjikha",
    priceFromUSD: 230,
    sdfIncluded: true,
    tagline: "A family home on the edge of the crane marsh.",
    description: [
      "A three-storey farmhouse of rammed earth and carved timber below Gangtey Goemba, lived in by the same family for generations and opened to a handful of guests at a time. Rooms are on the upper floor, with thick blankets, painted ceilings and the altar room next door.",
      "Evenings are spent in the kitchen around the stove, with potato stew, buckwheat noodles and the family's own ara. The cranes call across the marsh at dawn, and the hot stone bath in the garden is lit on request.",
    ],
    features: ["Four guest rooms in a working farmhouse", "Kitchen suppers with the family", "Garden hot stone bath", "Walk to the crane marsh", "Morning butter tea and prayer at the altar room", "Shared bathrooms with hot water"],
    images: [
      img("lodgeRoom", "A guest room under painted beams in the farmhouse"),
      img("mistyRidges", "Mist over the Phobjikha marsh at dawn"),
      img("valleyForest", "The glacial valley around the farmhouse"),
    ],
    journeys: ["western-and-central-bhutan", "wellness-and-meditation-retreat"],
    placeholder: true,
  },
  {
    slug: "bumthang-heritage-farmhouse",
    name: "Bumthang Heritage Farmhouse",
    type: "Heritage farmhouse",
    valley: "Bumthang",
    destination: "bumthang",
    priceFromUSD: 220,
    sdfIncluded: true,
    tagline: "Buckwheat fields, blue pine and the oldest temples in the kingdom.",
    description: [
      "A restored farmhouse in the Chokhor valley, a short walk across the fields from Jambay Lhakhang, with guest rooms on the upper floor around a central stove room. The family farm buckwheat and apples; the dairy is a bicycle ride away.",
      "The house keeps its altar room and its ladder-steep stairs, softened with good mattresses, thick duvets and a bathroom with reliably hot water. Suppers are Bumthang classics: buckwheat pancakes, pork with radish, honey from the orchard.",
    ],
    features: ["Five guest rooms with en-suite bathrooms", "Stove room and altar room", "Bicycles for the temple loop", "Orchard and apple pressing in autumn", "Farmhouse suppers", "Hot stone bath in the barn"],
    images: [
      img("lodgeRoom", "A farmhouse guest room in the Chokhor valley"),
      img("highValley", "The broad valley of Bumthang beyond the fields"),
      img("forestPath", "Blue pine forest near the farmhouse"),
    ],
    journeys: ["western-and-central-bhutan", "luxury-lodge-circuit"],
    placeholder: true,
  },
  {
    slug: "haa-valley-retreat",
    name: "Haa Valley Retreat",
    type: "Wellness retreat",
    valley: "Haa",
    destination: "haa",
    priceFromUSD: 420,
    sdfIncluded: true,
    tagline: "Silence over the pass.",
    description: [
      "A small retreat of eight rooms on the forest edge above the Haa Chhu, built for stillness: no televisions, a meditation hall with the valley in its windows, and a programme of mindful walks, hot stone baths and consultations with a traditional medicine practitioner.",
      "Mornings begin with meditation led by a visiting monk from the valley's temples; afternoons are for walking the ridge above Chele La or the riverside lanes between Lhakhang Karpo and Nagpo. Food is light, local and mostly from the kitchen garden.",
      "The retreat is the heart of our wellness and meditation journey and a serene add-on to any western Bhutan itinerary.",
    ],
    features: ["Eight rooms facing the valley", "Meditation hall and daily guided sittings", "Hot stone bath house", "Traditional medicine consultations", "Guided ridge and river walks", "Kitchen-garden dining"],
    images: [
      img("yogaMist", "Morning practice above the mist-filled Haa valley"),
      img("lodgeRoom", "A quiet retreat room in Haa"),
      img("hikerRidge", "The ridge walk above the Chele La"),
    ],
    journeys: ["wellness-and-meditation-retreat", "classic-western-bhutan"],
    placeholder: true,
  },
  {
    slug: "trongsa-hillside-hotel",
    name: "Trongsa Hillside Hotel",
    type: "Boutique hotel",
    valley: "Trongsa",
    destination: "trongsa",
    priceFromUSD: 300,
    sdfIncluded: true,
    tagline: "The dzong across the gorge, from your bed.",
    description: [
      "A hillside hotel on the far side of the Mangde Chhu gorge from the great dzong, built so that every room looks straight across at it. At night the fortress is floodlit and seems to float above the river.",
      "Rooms are generous and warm, with traditional painted furniture and good showers; the restaurant serves Bhutanese and continental dishes and the staff know the museum opening hours better than the museum. The natural overnight on the road to Bumthang.",
    ],
    features: ["Twenty rooms with dzong views", "Restaurant and bar", "Terrace over the gorge", "Walking path to the dzong", "Luggage handling for the road east", "Reliable heating and hot water"],
    images: [
      img("monasteryPeaks", "Trongsa Dzong seen from the hotel terrace"),
      img("lodgeRoom", "A hillside room facing the gorge"),
      img("mistyRidges", "Morning mist in the Trongsa gorge"),
    ],
    journeys: ["western-and-central-bhutan", "luxury-lodge-circuit"],
    placeholder: true,
  },
  {
    slug: "phobjikha-wellness-lodge",
    name: "Phobjikha Wellness Lodge",
    type: "Wellness retreat",
    valley: "Phobjikha",
    destination: "phobjikha",
    priceFromUSD: 680,
    sdfIncluded: true,
    tagline: "A glass-fronted lodge above the crane valley.",
    description: [
      "A lodge of stone and glass on the ridge beside Gangtey Goemba, every suite with a wood stove and a wall of window onto the valley. In crane season the birds fly past at eye level each morning.",
      "The spa is the reason to stay: hot stone baths, Bhutanese herbal treatments, a heated indoor pool, and a meditation room shared with monks from the monastery next door. Walks on the valley trails leave from the terrace.",
      "It forms the high valley chapter of the lodge circuit and the stillest nights of our wellness retreat.",
    ],
    features: ["Suites with wood stoves and valley windows", "Spa with heated pool and hot stone baths", "Meditation room and monk-led sessions", "Crane observation at dawn", "Guided Gangtey trail walks", "Farmhouse dinner evenings"],
    images: [
      img("valleyForest", "The glacial valley of Phobjikha below the lodge"),
      img("lodgeRoom", "A lodge suite with its wood stove lit"),
      img("yogaMist", "Morning practice above the mist of the valley"),
    ],
    journeys: ["luxury-lodge-circuit", "wellness-and-meditation-retreat"],
    placeholder: true,
  },
];

export const getStay = (slug: string) => stays.find((s) => s.slug === slug);

export const staysByDestination = (destination: string) => stays.filter((s) => s.destination === destination);
