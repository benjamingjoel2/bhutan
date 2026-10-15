# Dzong House — reference map (blueprint: sixsenses.com)

Status: written from knowledge of the reference's design system, not from a live crawl.
The reference's CDN blocks cloud addresses and the site is excluded from web archives, so
exact pixel values below are marked **(est.)** = estimated. Drop full-page screenshots into
`reference/` at any time and the side-by-side pass will correct them.

Conventions used throughout
- Container: max-width 1600px, side padding 16px mobile / 24px tablet / 40px desktop (reduced from the first build on request)
- Vertical rhythm: sections 96–128px apart on desktop, 64px on mobile (est.)
- Type: serif display (reference uses a light humanist serif) → **Cormorant Garamond** (Google Fonts);
  sans body (reference uses a geometric grotesk) → **Jost**. Eyebrows: sans, 11–12px, tracking 0.18em, uppercase.
- Display scale: h1 56–72px / h2 40–48px / h3 28–32px, weight 300–400, line-height 1.1 (est.)
- Body 16–17px, line-height 1.6–1.7, max-width 60ch.
- Buttons: pill or square outline, uppercase 12px tracked label, 1px border, fill on hover (300ms ease).
- Images: 3:2 landscape cards, 4:5 portrait cards, 16:9 or full-bleed bands. Hover: image scales 1.04 over 700ms.
- Motion: fade-up on scroll (opacity 0→1, translateY 24→0, 600ms, ease-out, staggered 80ms per card).
- Colour mapping (reference → Dzong House):
  - warm white page bg → `whitewash` #F6F2EA
  - light sand panels → `stone` #E7DFD2 / `stone-dark` #CFC3B1
  - charcoal text → `ink` #1F1A17
  - brand green accent → `pine` #2F4A3B
  - CTA / highlight → `maroon` #6B1F2A (links, buttons, active states)
  - sparing accent → `saffron` #D99A2B (eyebrows, progress indicator, hover underlines)
  - decorative motif: thin double-rule inspired by dzong window frames; prayer-flag 5-colour strip only in footer rule.

---

## 0. Global

### 0.1 Header (all pages)
| | Reference | Dzong House |
|---|---|---|
| Layout | Full-width bar, 3 zones: left (menu/search), centre logo, right utilities. 88px tall over hero, 64px when stuck (est.). Transparent over hero → solid page colour after 60px scroll, with bottom hairline. | Same. Left: primary nav links on desktop ≥1280px (Destinations, Journeys, Wellness, Experiences, About); hamburger below that. Centre: text logo "DZONG HOUSE" (serif, tracked, 22px) with small-caps "Bhutan" beneath. Right: currency switcher (USD ▾), search icon, "Plan your journey" button (maroon outline → fill). |
| Mega-menu | Opens on hover/click; full-width panel slides down 250ms; columns by region with property lists; feature image at right. | Same panel: Destinations → 3 region columns (Western valleys / Central heartland / Remote & eastern) + feature image card. Journeys → 7 links + feature. Wellness → 5 links + feature. Experiences → 9 links in 2 columns + feature. About → 8 links. Panel closes on mouse-leave, Esc, or route change. Mobile: full-screen drawer, accordion groups. |
| Search | Icon opens full-screen overlay; input autofocus; results list; Esc closes. | Same. Searches destinations, journeys, experiences, stays, posts from /data. |
| Currency | Language/currency select in utilities. | USD, EUR, GBP, AUD, SGD, INR; persisted in localStorage; context converts every price. |

### 0.2 Booking bar → "Plan your journey" bar
Reference: a white strip anchored at the bottom of the hero, 4 fields + button; on scroll past the hero it detaches and sticks under the header as a compact strip; on mobile it collapses to a single "Book" button pinned to the bottom.
Dzong House: identical behaviour. Fields: Arrival month · Nights · Travellers · Journey type · **Begin** (maroon). "Begin" opens the trip-planner modal pre-filled; on /plan-your-journey the same values pre-fill the page form.

### 0.3 Floating WhatsApp
Reference has a chat bubble bottom-right. Ours: pine circle, white WhatsApp glyph, `wa.me/[NUMBER]` from config, 56px, 24px from edges, appears after 300px scroll.

### 0.4 Footer
Reference: light sand band; row 1 = newsletter (heading + email field + button) left, social icons right; row 2 = 4 link columns; row 3 = logo, legal links, copyright, parent-brand line.
Dzong House: row 1 = "Letters from the kingdom" newsletter + socials; row 2 = Destinations · Journeys · Company · Contact (email, phone, WhatsApp); row 3 = prayer-flag hairline, "Operated on the ground with [PARTNER NAME], licensed Bhutanese tour operator, licence no. [LICENCE]", legal links (Privacy, Terms, Cookies), © Dzong House.

---

## 1. Homepage `/`
| # | Reference section | Layout (est.) | Dzong House content |
|---|---|---|---|
| 1 | Hero video | 100vh full-bleed muted loop; dark 25% gradient; centred serif h1 (64px) + short line; "Play full video" ghost button bottom-left with play glyph; booking bar bottom. | Video placeholder (dawn over Punakha Dzong). Line: "The kingdom opens its doors slowly. We hold them for you." Play full video → modal. Plan your journey bar. |
| 2 | Intro statement | Centred, max 720px, eyebrow + h2 serif 44px + 2-line body + text link; padding 128px. | Eyebrow "Dzong House" · "Guardians at the door." · promise copy · "Our story →". |
| 3 | Featured destinations | Eyebrow + h2 left; 3-up grid of 3:2 cards (gap 24px), image, place name serif 24px, region eyebrow, one line, arrow link; hover zoom. Arrows/pager at right on desktop (carousel). | Featured journeys: Classic western Bhutan · Festival journey · Lodge circuit. |
| 4 | Wellness band | 50/50 split, image left (4:5), text right on sand panel; h2 + body + outline button. | "Slow down at altitude." → /wellness. |
| 5 | Values trio | 3 columns, icon-less, small 1:1 image, h3 serif 26px, body 15px, text link. | Wellness · Culture · Responsible travel (where the SDF goes: healthcare, education, conservation). |
| 6 | What's new / openings | Horizontal carousel of 4:5 cards, eyebrow "New", title, date line, link. | Festival calendar: valley · month · "Plan around this festival". Note: dates follow the lunar calendar; verify yearly. |
| 7 | Offers | Dark/pine band, 2–3 cards per view, title, terms line, "View offer". | "Stay longer" + 2 seasonal offers, flagged placeholders. |
| 8 | Experiences | Mosaic: 1 large 4:5 + 4 small 1:1 (desktop), stacked on mobile. | Tiger's Nest hike, tshechus, cranes, farmhouse stay, archery. |
| 9 | Journeys / residences block | Full-bleed 16:9 image, centred text overlay, button. | Lodge circuit: "We arrange your guide, driver, routes, and every detail in between." |
| 10 | Stays | 4-up grid, 3:2 image, name, type eyebrow, "From $X per person · night", SDF included badge. | 4 placeholder stays. |
| 11 | Testimonial | Centred quote serif 32px italic, name/country, 1 at a time with dots. | Placeholder-marked testimonial. |
| 12 | Journal | 3-up 3:2 cards, date eyebrow, title, excerpt. | 3 latest posts. |
| 13 | Newsletter | Sand band, h2 + input + button inline. | "Letters from the kingdom". |

## 2. Destination page `/destinations/[slug]` (reference: property page)
1. Hero 80vh image, place name h1, region eyebrow, sub-nav sticky strip (Overview · Best time · Highlights · Dzongs & temples · Stays · Journeys · FAQ).
2. Overview: 2-col, intro serif 32px left, body right; quick facts strip (altitude, drive from Paro, best months).
3. Best time to visit: 4 season cards (spring, monsoon, autumn, winter).
4. Highlights: 3-up cards.
5. Dzongs & temples: alternating image/text list.
6. Stays: 3-up stay cards with from-price.
7. Related journeys: carousel.
8. FAQ accordion.
9. CTA band → planner.
`/destinations` index: hero + region-grouped grid.

## 3. Journeys `/journeys`, `/journeys/[slug]` (reference: experiences/offers listing + detail)
Index: hero band, sticky filter bar (Region, Duration, Budget, Festival, Wellness), 3-up cards with nights, from-price (SDF included), region.
Detail: hero; summary strip (nights, regions, budget tier, best months); day-by-day accordion timeline; inclusions/exclusions two columns; pricing table per tier with SDF/visa statement; map placeholder; related stays; enquire CTA.

## 4. Treks `/treks`, `/treks/[slug]`
Same as journeys with stats strip (days, max altitude, difficulty, best months), fitness advice panel, licensed-guide notice.

## 5. Wellness `/wellness`, `/wellness/[slug]` (reference: wellness section)
Hero, philosophy statement, 5 pillars grid, detail pages with ritual description, where offered, linked journeys.

## 6. Festivals `/festivals`
Hero, month-sorted calendar table/cards: name, valley, typical month, what happens, etiquette, linked journeys; lunar-calendar notice.

## 7. Experiences `/experiences`, `/experiences/[slug]` — grid + detail (hero, body, where, when, linked journeys).
## 8. Offers `/offers` — card list, each flagged placeholder, terms.
## 9. Stays `/stays/[slug]` — hero, intro, type, valley, from-price, gallery grid, linked journeys.
## 10. About cluster — `/about` (story, timeline), `/our-partners` (partner operator + licence placeholder, guides), `/responsible-travel` (SDF explainer, GNH), `/testimonials`, `/faq` (accordion, "Fees verified as of"), `/contact` (form + details + map placeholder).
## 11. Journal `/journal`, `/journal/[slug]` — MDX, 4 posts.
## 12. Planner `/plan-your-journey` + modal — 5 steps, progress bar (saffron), localStorage, API route.

---

## Folder structure
```
app/            routes (App Router), api/plan/route.ts
components/     layout/ (Header, MegaMenu, Footer, SearchOverlay, PlanBar, WhatsAppButton)
                home/   (Hero, IntroStatement, FeaturedJourneys, WellnessBand, ValuesTrio,
                         FestivalCarousel, OffersBand, ExperiencesMosaic, JourneyBand,
                         StaysGrid, Testimonial, JournalPreview, NewsletterBand)
                planner/ (PlannerModal, PlannerForm, steps/Step1..5, Progress, Confirmation)
                ui/     (Button, Eyebrow, Heading, Card, Price, Accordion, Reveal, Section)
config/site.ts  brand, colours, currencies, contact, fees, navigation
data/           destinations, experiences, journeys, treks, festivals, stays, wellness,
                offers, testimonials, faqs, posts (MDX in content/journal)
lib/            currency.tsx, pricing.ts, search.ts, seo.ts
docs/           this map
```

## Data types (abridged)
Destination { slug, name, region, tagline, overview, altitudeM, driveFromParo, bestMonths, seasons[], highlights[], dzongs[], stays[], journeys[], faqs[], images }
Journey { slug, name, kind, regions[], nights, budgetTier, priceFromUSD, sdfIncluded, visaIncluded, festival?, wellness?, days[{day,title,body,stay}], inclusions[], exclusions[], bestMonths, images }
Trek { ...Journey, maxAltitudeM, difficulty, fitnessAdvice }
Festival { slug, name, valley, destination, month, typicalDates, whatHappens, etiquette, journeys[] }
Stay { slug, name, type, valley, destination, priceFromUSD, perPersonPerNight, sdfIncluded, images }
WellnessExperience, Experience, Offer{flagged}, Testimonial{placeholder}, Faq, Post.
