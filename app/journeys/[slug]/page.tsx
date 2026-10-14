import { notFound } from "next/navigation";
import { journeys, getJourney } from "@/data/journeys";
import { JourneyDetail } from "@/components/shared/JourneyDetail";
import { pageMeta } from "@/lib/seo";

export const generateStaticParams = () => journeys.map((j) => ({ slug: j.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const j = getJourney((await params).slug);
  if (!j) return {};
  return pageMeta({ title: `${j.name} · ${j.nights} nights`, description: j.tagline, path: `/journeys/${j.slug}`, image: j.hero.src });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const j = getJourney((await params).slug);
  if (!j) notFound();
  return <JourneyDetail j={j} />;
}
