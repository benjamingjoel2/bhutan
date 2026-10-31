import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { IntroStatement } from "@/components/home/IntroStatement";
import { FeaturedJourneys } from "@/components/home/FeaturedJourneys";
import { WellnessBand } from "@/components/home/WellnessBand";
import { ValuesTrio } from "@/components/home/ValuesTrio";
import { FestivalCarousel } from "@/components/home/FestivalCarousel";
import { OffersBand } from "@/components/home/OffersBand";
import { ExperiencesMosaic } from "@/components/home/ExperiencesMosaic";
import { JourneyBand } from "@/components/home/JourneyBand";
import { StaysGrid } from "@/components/home/StaysGrid";
import { JournalPreview } from "@/components/home/JournalPreview";
import { NewsletterBand } from "@/components/home/NewsletterBand";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `${site.name} · ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="main" data-hero="true">
      <Hero />
      <IntroStatement />
      <FeaturedJourneys />
      <WellnessBand />
      <ValuesTrio />
      <FestivalCarousel />
      <OffersBand />
      <ExperiencesMosaic />
      <JourneyBand />
      <StaysGrid />
      <JournalPreview />
      <NewsletterBand />
    </main>
  );
}
