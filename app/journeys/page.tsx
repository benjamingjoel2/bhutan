import { Suspense } from "react";
import { journeys } from "@/data/journeys";
import { images } from "@/data/images";
import { PageHero } from "@/components/shared/PageHero";
import { JourneyFilters } from "@/components/shared/JourneyFilters";
import { CtaBand } from "@/components/shared/CtaBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Journeys", description: "Tailor-made Bhutan journeys from seven to thirty nights: classic western valleys, central heartland, festivals, lodge circuits, wellness, and Bhutan with Nepal or India. Every price includes the SDF and visa fee.", path: "/journeys" });

export default function JourneysPage() {
  return (
    <main id="main" data-hero="true">
      <PageHero image={images.valleyForest} eyebrow="Journeys" title="Every journey begins as a conversation." intro="These are starting points, not fixed products. Each one has been travelled by us and is reshaped around you: pace, season, interests, and how far east you want to go." />
      <section className="section-y-sm">
        <div className="container-x">
          <Suspense><JourneyFilters journeys={journeys} /></Suspense>
          <p className="mt-10 text-[0.8125rem] text-ink-mute">Prices are per person sharing, all-in, and include the Sustainable Development Fee and visa fee. Looking for a trek? See <a href="/treks" className="underline underline-offset-4">treks</a>.</p>
        </div>
      </section>
      <CtaBand title="Nothing quite right? Good. We prefer to start from a blank page." />
    </main>
  );
}
