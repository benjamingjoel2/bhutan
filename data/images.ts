/**
 * Placeholder image pool. Every entry is an Unsplash photo used as a stand-in until
 * Dzong House has its own photography. Keys describe the role the image plays on the site,
 * alt text describes what is actually in the frame. Replace freely; keep the keys.
 */
import type { ImageRef } from "./types";

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const images = {
  tigersNest: { src: u("1578556881786-851d4b79cb73"), alt: "Taktsang, the Tiger's Nest monastery, clinging to a cliff above the Paro valley" },
  monasteryPeaks: { src: u("1544735716-392fe2489ffa"), alt: "A Himalayan monastery and stupa beneath snow peaks" },
  riverDawn: { src: u("1553856622-d1b352e9a211"), alt: "Dawn light over a still river, a lone figure wading" },
  peaksAboveClouds: { src: u("1506905925346-21bda4d32df4"), alt: "Snow peaks rising above a sea of cloud at sunset" },
  valleyForest: { src: u("1464822759023-fed622ff2c3b"), alt: "A glacial valley framed by pine forest and snow mountains" },
  nightPeaks: { src: u("1519681393784-d120267933ba"), alt: "The Milky Way above a mountain ridge" },
  pinkPeaks: { src: u("1585409677983-0f6c41ca9c3b"), alt: "Alpenglow on high Himalayan peaks" },
  greenRidge: { src: u("1470071459604-3b5ec3a7fe05"), alt: "Sunset over a green ridge and a winding road" },
  forestPath: { src: u("1441974231531-c6227db76b6e"), alt: "Soft light through an old pine forest" },
  alpineLake: { src: u("1476514525535-07fb3b4ae5f1"), alt: "A wooden boat on a turquoise alpine lake" },
  mistyRidges: { src: u("1534067783941-51c9c23ecefd"), alt: "Layered mountain ridges in morning mist" },
  starryPeaks: { src: u("1536431311719-398b6704d4cc"), alt: "Stars over snow-covered peaks at night" },
  riceTerraces: { src: u("1555400038-63f5ba517a47"), alt: "Terraced rice paddies in a green valley" },
  riceAerial: { src: u("1559628233-100c798642d4"), alt: "Rice terraces seen from above" },
  highValley: { src: u("1593181629936-11c609b8db9b"), alt: "A broad Himalayan valley with snow on the peaks" },
  hikerRidge: { src: u("1519904981063-b0cf448d479e"), alt: "A hiker standing on a misty mountain ridge" },
  yogaMist: { src: u("1545389336-cf090694435e"), alt: "A person in tree pose facing a mist-filled valley" },
  lodgeRoom: { src: u("1496417263034-38ec4f0b665a"), alt: "A quiet lodge bedroom with warm lamplight" },
  hikersGroup: { src: u("1539635278303-d4002c07eae3"), alt: "A family of hikers consulting a map in the mountains" },
  forestRoad: { src: u("1572276596237-5db2c3e16c5d"), alt: "A road through autumn forest" },
  gorge: { src: u("1531168556467-80aace0d0144"), alt: "A mossy river gorge" },
  armsOpen: { src: u("1545652985-5edd365b12eb"), alt: "A traveller with arms open before snow mountains" },
  kathmanduStupa: { src: u("1605640840605-14ac1855827b"), alt: "The great stupa of Boudhanath in Kathmandu" },
  nepalRitual: { src: u("1627894483216-2138af692e32"), alt: "Evening fire ritual on a riverbank in Nepal" },
  tajMahal: { src: u("1548013146-72479768bada"), alt: "The Taj Mahal seen through an archway" },
} satisfies Record<string, ImageRef>;

export type ImageKey = keyof typeof images;
export const img = (key: ImageKey, alt?: string): ImageRef => ({ ...images[key], ...(alt ? { alt } : {}) });
