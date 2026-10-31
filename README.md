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
| `data/*.ts` | Typed content: destinations, journeys, treks, festivals, stays, experiences, wellness, offers, FAQs, posts. Pages are generated from these, so a CMS can replace them later |
| `data/images.ts` | Placeholder image pool (Unsplash). Swap `src` values for real photography; keys stay the same |
| `content/journal/*.mdx` | Journal posts (frontmatter + markdown) |
| `app/` | Routes. `app/api/plan` receives trip-planner submissions, `app/api/contact` and `app/api/newsletter` the other forms |
| `components/layout` | Header, mega-menu, Plan-your-journey bar, footer, search overlay |
| `components/planner` | Five-step trip planner (modal and `/plan-your-journey`) |
| `docs/reference-map.md` | Section-by-section layout map the site was built from |

## Languages (English, French, German, Spanish)

English pages live at the root (`/about`), the others under `/fr`, `/de` and `/es` (`/fr/about`). Every page is pre-rendered in all four languages, with no translation library in the browser.

- **Source of truth is English.** The routes are in `app/(en)/`; components, data, config and lib are shared as before.
- **Translations** are in `i18n/fr.json`, `i18n/de.json` and `i18n/es.json`, keyed by the English text. `{0}`, `{1}` stand for the dynamic parts of a sentence.
- **`npm run build` / `npm run dev`** first run `scripts/i18n.mjs`, which writes a translated copy of the English tree to `app/fr|de|es/` and `i18n/gen/` (both git-ignored). Internal links get the language prefix automatically. The build **fails if a visible English string has no translation**, and lists the strings.
- **To change copy:** edit the English text as usual, run `npm run i18n`, and add the strings it reports to the three JSON files. (`node scripts/i18n.mjs --missing` writes them to `i18n/missing.json`.)
- **Journal posts** are translated as whole files in `content/i18n/<lang>/journal/`, with the same file names as `content/journal/`.
- The header (desktop) and the mobile menu show **EN · FR · DE · ES**. Each link goes to the same page in the other language, and there is no automatic redirect by browser language. `<html lang>`, canonical and `hreflang` alternates (with `x-default` = English) are set on every page, and the sitemap lists all four languages.

## Before launch

- Have a lawyer review the Privacy Policy, Booking Terms and Cookie Policy (`app/privacy`, `app/terms`, `app/cookies`). Update the Cookie Policy if analytics or other storage is added.
- The business address is Thimphu TechPark (`site.contact.address`); confirm the workspace arrangement before launch.
- By owner decision the site shows no phone numbers, WhatsApp, social links, licence numbers, team bios or testimonials. Keep it that way.
- **Verify every visa, fee and regulation detail against https://www.bhutan.travel**, then update `fees.verifiedOn` and `fees.validUntil`. All prices on the site read from these values.
- Festival dates follow the lunar calendar: confirm yearly in `data/festivals.ts`.
- Stays and offers are placeholders and are labelled as such on the site.
- Currency rates in `config/site.ts` are static placeholders; wire a rates feed if needed.
- Add hero footage and set `media.heroLoop` / `media.heroFull` in `config/site.ts`.
- Connect the TODOs in `app/api/*/route.ts` to email and CRM. Submissions are currently logged to the server console (Vercel function logs).
- Make sure `dzonghouse@tourground.com` receives mail (a user or alias on the tourground.com Google Workspace).

## Hosting

- Vercel project `dzong-house` (team benjamin-sevo), production domain **https://dzonghouse.tourground.com**.
- `tourground.com` is registered at GoDaddy but its DNS is on Vercel (ns1/ns2.vercel-dns.com), so subdomains are managed in Vercel, not GoDaddy.
- DNS records for this brand: `dzonghouse` ALIAS to Vercel, MX `smtp.google.com`, SPF `v=spf1 include:_spf.google.com ~all` (same pattern as the other brands).
- The canonical URL defaults to the domain above; override with `NEXT_PUBLIC_SITE_URL` if it changes.

## Performance notes

- Images go through the Next.js image optimizer (AVIF/WebP at the exact width needed, cached for a month). It produced about a third of the bytes of Unsplash's own AVIF at phone widths. `data/images.ts` points the optimizer at a 2400px JPEG master.
- Fonts are self-hosted from `app/fonts/` via `next/font/local`; nothing is fetched from Google at runtime.
- Scroll reveals never hide on-screen content (see `components/layout/RevealObserver.tsx`).
- Search, the trip planner, the mobile menu and the mega-menu are code-split and load when idle or on first use.
