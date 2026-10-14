import type { Faq } from "./types";
import { fees } from "@/config/site";

const verifyLine = `Verify against ${fees.sourceUrl} before launch.`;

export const faqCategories = ["Entry & fees", "Planning", "On the ground", "Practical"] as const;

export const faqs: Faq[] = [
  {
    id: "visa-and-operator",
    category: "Entry & fees",
    question: "Do I need a visa, and can I travel to Bhutan independently?",
    answer: `Most nationalities need a visa, which is arranged in advance through a licensed Bhutanese tour operator and issued electronically before you fly; you cannot obtain one on arrival without that pre-approval. Independent travel in the usual sense is not possible: your journey is booked, guided and operated through a licensed operator, which is exactly what Dzong House and our Bhutanese partner do for you. Indian nationals do not need a visa but require an entry permit. ${verifyLine}`,
    verify: true,
  },
  {
    id: "sdf",
    category: "Entry & fees",
    question: "What is the Sustainable Development Fee and how much is it?",
    answer: `The Sustainable Development Fee (SDF) is charged by the Royal Government of Bhutan per person per night and funds free healthcare, free education and conservation across the kingdom. It is currently US$${fees.sdf.adultPerNightUSD} per adult per night. Children aged ${fees.sdf.childFreeUnderAge} to ${fees.sdf.childRateMaxAge} pay US$${fees.sdf.childPerNightUSD} per night and children under ${fees.sdf.childFreeUnderAge} are exempt. Indian nationals pay a separate rate of INR ${fees.sdf.indianNationalPerNightINR} per person per night. Every Dzong House journey price includes the SDF, and we think of it as the reason Bhutan is still Bhutan: high value, low volume, and a landscape that stays intact. Fees verified as of ${fees.verifiedOn}. ${verifyLine}`,
    verify: true,
  },
  {
    id: "visa-fee",
    category: "Entry & fees",
    question: "Is there a visa fee on top of the SDF?",
    answer: `Yes. A one-off visa fee of US$${fees.visa.feeUSD} per person applies for most nationalities and is paid when the visa is processed. Dzong House journey prices include the visa fee alongside the SDF, so the price you see is the price you pay. Indian nationals use an entry permit rather than a visa; permit rules differ. ${verifyLine}`,
    verify: true,
  },
  {
    id: "licensed-guide",
    category: "Entry & fees",
    question: "Do I have to travel with a guide?",
    answer: `A licensed Bhutanese guide is required for all travel outside Thimphu and Paro, and treks require a licensed trekking guide and support team. In practice this is a gift rather than a restriction: your guide is a translator of the country, carries the monument permits, knows which courtyard faces the morning sun and which farmhouse will have the stove lit. Every Dzong House journey is private, with your own guide and driver throughout. ${verifyLine}`,
    verify: true,
  },
  {
    id: "flying-to-paro",
    category: "Planning",
    question: "How do I get to Bhutan?",
    answer:
      "Almost everyone flies into Paro, which has Bhutan's only international airport. Two carriers serve it, Druk Air and Bhutan Airlines, with connections from Delhi, Kathmandu, Bangkok, Singapore, Kolkata, Bagdogra and a few other cities. The approach between the mountains is one of the great landings in the world and can only be flown by sight in daylight, so flights are occasionally delayed by weather, especially in the monsoon. We build a buffer into every itinerary and recommend an overnight at your connecting city rather than a tight same-day connection. Overland entry via Phuentsholing from India is also possible with the right permits.",
  },
  {
    id: "best-time",
    category: "Planning",
    question: "When is the best time to visit Bhutan?",
    answer:
      "Spring, roughly March to May, brings rhododendrons on the passes, mild days and the Paro tshechu. Autumn, roughly September to November, has the clearest skies, the harvest and the great Thimphu festival; it is the most popular season and lodges fill early. Winter is cold but bright, with empty dzongs, low lodge rates and the black-necked cranes in Phobjikha. The monsoon, June to August, is green and quiet but wet, with cloud on the peaks and occasional road disruption; it is the season for the Haa summer festival and for travellers who do not mind rain.",
  },
  {
    id: "festival-dates",
    category: "Planning",
    question: "When are the festivals, and why do the dates change?",
    answer:
      "Tshechus are held on or around the tenth day of a lunar month, so their Gregorian dates shift every year, usually by a few weeks. Paro tshechu falls in March or April, Thimphu tshechu in September or October, Punakha drubchen and tshechu in February or March, Jambay Lhakhang drup in October or November. The Royal Government publishes the year's calendar in advance and we confirm every date before you book flights. Treat any dates on this site as typical rather than fixed: verify yearly.",
  },
  {
    id: "altitude-and-fitness",
    category: "Planning",
    question: "How high is Bhutan, and how fit do I need to be?",
    answer:
      "Most of the places you will stay sit between 1,200 m (Punakha) and 3,000 m (Phobjikha); Paro is around 2,200 m and Thimphu around 2,320 m. At these heights most travellers feel nothing more than a little breathlessness on stairs, and we pace the first two days gently. The Tiger's Nest hike climbs about 900 m and takes most people three to four hours up; a reasonable walker can do it, and a pony can carry you partway. Treks go much higher, to 4,200 m on the Druk Path and far beyond on the Snowman, and require proper acclimatisation and fitness. Tell us about any heart or lung conditions when we plan.",
  },
  {
    id: "dress-code",
    category: "On the ground",
    question: "Is there a dress code for dzongs and temples?",
    answer:
      "Yes. Long sleeves and long trousers or skirts are required inside dzongs and temples, and hats are removed at the gate. Shoes come off before entering any shrine room; slip-on shoes and clean socks make this easy. Avoid very bright or revealing clothing and keep voices low. Your guide will tell you when to walk clockwise, which doors you may enter and when to offer a small note at an altar. Bhutanese wear their national dress to visit a dzong and will quietly appreciate your effort.",
    verify: true,
  },
  {
    id: "photography-rules",
    category: "On the ground",
    question: "Can I take photographs inside temples?",
    answer:
      "No. Photography is forbidden inside temples, shrine rooms and the inner sanctums of dzongs, and your guide will ask you to put cameras and phones away before entering. Courtyards, exteriors and the landscape around them are usually fine, and festival dances in the open courtyard can generally be photographed from a respectful distance without flash. Always ask before photographing people, especially monks and elders. At the Tiger's Nest, bags, cameras and phones are left at the entrance.",
    verify: true,
  },
  {
    id: "money",
    category: "Practical",
    question: "What currency is used, and can I pay by card?",
    answer:
      "Bhutan's currency is the ngultrum (BTN), pegged to the Indian rupee; Indian rupees in smaller denominations are widely accepted. Your journey is paid in full before you arrive, so you need cash only for personal purchases, tips and drinks. Bring US dollars or rupees to change on arrival. ATMs exist in Thimphu, Paro and larger towns but are unreliable with foreign cards, and card terminals in shops are inconsistent outside the better hotels. Carry more cash than you think you need once you leave the western valleys.",
    verify: true,
  },
  {
    id: "tipping",
    category: "Practical",
    question: "Should I tip my guide and driver?",
    answer:
      "Tipping is not traditional in Bhutan but has become customary for guides and drivers, and it is genuinely appreciated. As a guide, think of around US$15–25 per day for your guide and US$8–15 per day for your driver, given as a single envelope at the end of the journey; more if they have been exceptional, which is often. For treks, allow for the cook and horsemen as well. Small tips at farmhouses and for hot stone bath attendants are welcome. We will give you a note with suggested amounts before you travel.",
  },
  {
    id: "connectivity",
    category: "Practical",
    question: "Will I have phone signal and wifi?",
    answer:
      "Better than you might expect. A local SIM from Bhutan Telecom or TashiCell can be bought at Paro airport or in town with your passport, and 4G covers most of the western and central valleys; your guide will help. Wifi is standard in hotels and lodges and reasonable in Thimphu and Paro, slower in Bumthang and the east, and absent on treks. Many of our travellers choose to leave the phone in the bag for a week. Bhutan is a good place for it.",
  },
  {
    id: "what-to-pack",
    category: "Practical",
    question: "What should I pack?",
    answer:
      "Layers: mornings and evenings are cold at altitude in every season, and the sun is strong at midday. Pack a warm fleece or down jacket, a waterproof shell, comfortable walking shoes already broken in, and long sleeves and long trousers or a long skirt for dzongs and temples. Add slip-on shoes for temple visits, a hat and sunscreen, a small daypack for the Tiger's Nest, a refillable water bottle, any personal medication and a universal adaptor (Bhutan uses Indian-style sockets at 230V). For winter and treks we send a longer list.",
  },
];
