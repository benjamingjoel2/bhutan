# Dzong House

Marketing site for Dzong House, tailor-made Bhutan journeys. Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint
```

## Where things live

| Path | What |
|---|---|
| `config/site.ts` | Brand name, colours, currencies and rates, contact details, partner operator, **government fees (SDF, child and Indian rates, visa fee, valid-until, source URL)**, navigation, planner options, hero media paths |
| `data/*.ts` | Typed content: destinations, journeys, treks, festivals, stays, experiences, wellness, offers, testimonials, FAQs, posts. Pages are generated from these, so a CMS can replace them later |
| `data/images.ts` | Placeholder image pool (Unsplash). Swap `src` values for real photography; keys stay the same |
| `content/journal/*.mdx` | Journal posts (frontmatter + markdown) |
| `app/` | Routes. `app/api/plan` receives trip-planner submissions, `app/api/contact` and `app/api/newsletter` the other forms |
| `components/layout` | Header, mega-menu, Plan-your-journey bar, footer, search overlay, WhatsApp button |
| `components/planner` | Five-step trip planner (modal and `/plan-your-journey`) |
| `docs/reference-map.md` | Section-by-section layout map the site was built from |

## Before launch

- Replace every `[EMAIL]`, `[PHONE]`, `[NUMBER]`, `[PARTNER NAME]`, `[LICENCE NUMBER]` in `config/site.ts`.
- **Verify every visa, fee and regulation detail against https://www.bhutan.travel**, then update `fees.verifiedOn` and `fees.validUntil`. All prices on the site read from these values.
- Festival dates follow the lunar calendar: confirm yearly in `data/festivals.ts`.
- Stays, offers, testimonials and team bios are placeholders and are labelled as such on the site.
- Currency rates in `config/site.ts` are static placeholders; wire a rates feed if needed.
- Add hero footage and set `media.heroLoop` / `media.heroFull` in `config/site.ts`.
- Connect the TODOs in `app/api/*/route.ts` to email and CRM. Submissions are currently logged to the server console (Vercel function logs).
- Set `NEXT_PUBLIC_SITE_URL` to the production domain for canonical URLs and the sitemap.
