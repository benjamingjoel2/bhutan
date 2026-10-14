/**
 * Festivals — sorted by month of year. Tshechu dates follow the Bhutanese lunar calendar
 * and shift each year; every `typicalDates` is a placeholder to verify yearly.
 */
import type { Festival } from "./types";
import { img } from "./images";

const VERIFY = "Verify against https://www.bhutan.travel before launch.";

export const festivals: Festival[] = [
  {
    slug: "punakha-drubchen-and-tshechu",
    name: "Punakha Drubchen and Tshechu",
    valley: "Punakha",
    destination: "punakha",
    month: "February / March",
    typicalDates: "Late February to early March, around five days in the courtyard of Punakha Dzong. Lunar calendar; verify yearly. " + VERIFY,
    whatHappens: "The Drubchen re-enacts the seventeenth-century defeat of Tibetan invaders: local militia in battle dress, the pazaps, storm the dzong courtyard with swords and shouts before the Zhabdrung's relic is carried in procession to the river. The Tshechu that follows brings three days of masked cham dances beneath the walls where the rivers meet, in the warmest valley in the kingdom and at the end of the monks' winter residence.",
    etiquette: [
      "Dress respectfully: long sleeves, long trousers or skirts, no hats inside the dzong. Many Bhutanese wear their finest gho and kira; a smart outfit is appreciated.",
      "Photography is welcome in the courtyard but never inside the temples or shrine rooms, and never with flash towards the dancers.",
      "Stay behind the rope line and let the atsaras, the clowns, tease you; they are part of the blessing.",
      "Arrive early with your guide for a seat on the steps; the courtyard fills by mid-morning.",
    ],
    journeys: ["thimphu-and-punakha-festival-journey", "classic-western-bhutan"],
    image: img("riverDawn", "The rivers meeting beneath Punakha Dzong at dawn"),
    upcomingLabel: "February · Punakha",
  },
  {
    slug: "paro-tshechu",
    name: "Paro Tshechu",
    valley: "Paro",
    destination: "paro",
    month: "March / April",
    typicalDates: "Five days in late March or early April, from the inner courtyard of Rinpung Dzong to the festival ground beside it. Lunar calendar; verify yearly. " + VERIFY,
    whatHappens: "Bhutan's best-known festival, held since the seventeenth century in honour of Guru Rinpoche. Monks and laymen in brocade and carved masks dance the cham: the Black Hat dance, the Dance of the Lords of the Cremation Grounds, the Judgement of the Dead. Before dawn on the final day a vast thongdrel of Guru Rinpoche is unfurled down the dzong wall and rolled away before the sun can touch it. Simply seeing it is said to cleanse the sins of a lifetime.",
    etiquette: [
      "Long sleeves, long trousers or skirts and no hats in the dzong. Remove shoes where locals do.",
      "No photography inside the shrine rooms; in the courtyard, keep cameras below the line of the dancers and never use flash.",
      "For the thongdrel, arrive by 4 am with your guide, keep your voice low and do not walk in front of those who are prostrating.",
      "Sit where your guide places you. The front rows are often reserved for monks and officials.",
    ],
    journeys: ["paro-tshechu-festival-journey", "classic-western-bhutan"],
    image: img("tigersNest", "The Paro valley, home of the Paro Tshechu"),
    upcomingLabel: "March · Paro",
  },
  {
    slug: "ura-yakchoe",
    name: "Ura Yakchoe",
    valley: "Ura, Bumthang",
    destination: "bumthang",
    month: "April / May",
    typicalDates: "Around five days in late April or early May at Ura Lhakhang in the Ura valley of Bumthang. Lunar calendar; verify yearly. " + VERIFY,
    whatHappens: "A village festival in one of the highest and most beautiful valleys in Bumthang, centred on a sacred relic kept by one Ura family and carried in procession to the temple, where it is displayed for the blessing of the valley. Cham dances fill the courtyard, the women of Ura wear their sheepskin shawls, and the whole village feasts. Small, local and very far from the crowds of Paro.",
    etiquette: [
      "Dress as you would for any temple: long sleeves, long trousers or skirts, no hats.",
      "This is a village festival, not a show. Ask before photographing people, and put the camera away during the relic blessing.",
      "Accept what you are offered, a cup of ara or a plate of buckwheat, and sit where the villagers invite you.",
    ],
    journeys: ["western-and-central-bhutan"],
    image: img("highValley", "The high Ura valley in Bumthang"),
    upcomingLabel: "April · Ura, Bumthang",
  },
  {
    slug: "haa-summer-festival",
    name: "Haa Summer Festival",
    valley: "Haa",
    destination: "haa",
    month: "July",
    typicalDates: "Two days in July in the Haa valley, usually near the Lhakhang Karpo grounds. Dates are set by the tourism authorities; verify yearly. " + VERIFY,
    whatHappens: "A celebration of the valley's nomadic and farming life rather than a religious tshechu: yak herders bring their animals down, there is archery and khuru darts, folk songs and dances, home-brewed ara and a long table of Haa dishes such as hoentay dumplings. Visitors can try the local sports, taste everything and walk out into the high pastures with the herders.",
    etiquette: [
      "Dress is relaxed for the outdoor events, but keep the temple rules for Lhakhang Karpo and Nagpo nearby: long sleeves, long trousers or skirts, no hats, no photography inside.",
      "Join in when invited, whether archery or a dance; declining politely is also fine.",
      "Summer is monsoon season: bring a waterproof layer and expect mud underfoot.",
    ],
    journeys: ["classic-western-bhutan", "wellness-and-meditation-retreat"],
    image: img("hikerRidge", "Ridge walking above the Haa valley"),
    upcomingLabel: "July · Haa",
  },
  {
    slug: "thimphu-tshechu",
    name: "Thimphu Tshechu",
    valley: "Thimphu",
    destination: "thimphu",
    month: "September / October",
    typicalDates: "Three days in late September or early October, preceded by the Thimphu Drubchen, at Tashichho Dzong and the Tendrel Thang festival ground. Lunar calendar; verify yearly. " + VERIFY,
    whatHappens: "The capital's great festival, the largest gathering in the kingdom, when thousands fill the ground beside Tashichho Dzong in their finest silks. Monks and lay dancers from the central monastic body perform the full cycle of cham over three days, with atsaras working the crowd, and the days end with picnics on the hillside. The Drubchen in the days before brings quieter, more esoteric dances inside the dzong.",
    etiquette: [
      "Long sleeves, long trousers or skirts, no hats; this is the royal dzong and dress is noticed. Many visitors hire a gho or kira for the day.",
      "No photography inside the dzong's temples; at the festival ground, no flash and no stepping onto the dance area for a better angle.",
      "Expect crowds. Keep valuables close, stay with your guide and be patient at the entrance security checks.",
      "Picnic like the locals: your guide can arrange a hamper for the grass above the ground.",
    ],
    journeys: ["thimphu-and-punakha-festival-journey", "classic-western-bhutan"],
    image: img("peaksAboveClouds", "Evening peaks above the Thimphu valley"),
    upcomingLabel: "September · Thimphu",
  },
  {
    slug: "jambay-lhakhang-drup",
    name: "Jambay Lhakhang Drup",
    valley: "Bumthang",
    destination: "bumthang",
    month: "October / November",
    typicalDates: "Four to five days in late October or early November at Jambay Lhakhang in the Chokhor valley of Bumthang. Lunar calendar; verify yearly. " + VERIFY,
    whatHappens: "One of the most atmospheric festivals in the country, held at a seventh-century temple. By day there are cham dances in the courtyard; on the first night comes the Mewang, when the crowd runs beneath a blazing gate of pine branches for purification, and later the Tercham, a sacred naked dance performed by masked men in the dark to bless the fields and the fertility of the valley.",
    etiquette: [
      "Long sleeves, long trousers or skirts, no hats, and no photography inside the temple at any time.",
      "The Tercham is a religious rite, not a spectacle: no photography or filming of the midnight dance, out of respect and by the temple's rule.",
      "The fire blessing is fast and crowded; follow your guide and keep loose clothing and scarves away from the flames.",
      "Nights in Bumthang are cold by late autumn. Bring a down jacket, hat and gloves for the evening events.",
    ],
    journeys: ["western-and-central-bhutan", "luxury-lodge-circuit"],
    image: img("nightPeaks", "The night sky over the mountains of Bumthang"),
    upcomingLabel: "October · Bumthang",
  },
  {
    slug: "black-necked-crane-festival",
    name: "Black-Necked Crane Festival",
    valley: "Phobjikha",
    destination: "phobjikha",
    month: "November",
    typicalDates: "11 November each year, a single day in the courtyard of Gangtey Goemba, coinciding with the birthday of the Fourth King. Fixed date; verify yearly. " + VERIFY,
    whatHappens: "A conservation festival rather than a tshechu, held since 1998 to welcome the cranes back to the valley. Schoolchildren in crane costumes perform the crane dance, there are masked dances, songs and environmental plays, and the valley's farmers sell potatoes, cheese and woven goods. The cranes themselves feed in the marsh below, and the morning before the festival is the best time to watch them.",
    etiquette: [
      "The festival is in the monastery courtyard: long sleeves, long trousers or skirts, no hats, no photography inside the temples.",
      "Keep well back from the crane feeding grounds and use binoculars or a long lens; the birds are easily disturbed.",
      "Phobjikha is at 3,000 metres and the day is cold. Dress in layers and bring something to sit on.",
    ],
    journeys: ["western-and-central-bhutan", "luxury-lodge-circuit", "wellness-and-meditation-retreat"],
    image: img("mistyRidges", "Mist lifting over the Phobjikha crane valley at dawn"),
    upcomingLabel: "November · Phobjikha",
  },
  {
    slug: "trashigang-tshechu",
    name: "Trashigang Tshechu",
    valley: "Trashigang",
    destination: "trashigang",
    month: "November / December",
    typicalDates: "Three to four days in late November or early December in the courtyard of Trashigang Dzong. Lunar calendar; verify yearly. " + VERIFY,
    whatHappens: "The great festival of the east, when the Brokpa herders of Merak and Sakteng walk down in their black yak-felt hats and red jackets to join the Sharchop farmers of the valley in the dzong's single courtyard. Cham dances by day, a thongdrel unfurled at dawn on the final morning, and a warmth and intimacy that the big western festivals no longer have. Very few foreign visitors.",
    etiquette: [
      "Long sleeves, long trousers or skirts, no hats, no photography inside the temples; the courtyard is small, so be especially careful not to block locals' view.",
      "Ask before photographing the Brokpa; many are happy to be photographed, but a word first is the eastern way.",
      "The dzong is reached by a steep path and the courtyard has little shade. Bring water and sun protection even in winter.",
    ],
    journeys: [],
    image: img("greenRidge", "Late light over the eastern ridges around Trashigang"),
    upcomingLabel: "November · Trashigang",
  },
];

export const getFestival = (slug: string) => festivals.find((f) => f.slug === slug);

export const festivalsByDestination = (destination: string) => festivals.filter((f) => f.destination === destination);
