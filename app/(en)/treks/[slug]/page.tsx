import { notFound } from "next/navigation";
import { treks, getTrek } from "@/data/treks";
import { JourneyDetail } from "@/components/shared/JourneyDetail";
import { pageMeta } from "@/lib/seo";

export const generateStaticParams = () => treks.map((t) => ({ slug: t.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTrek((await params).slug);
  if (!t) return {};
  return pageMeta({ title: `${t.name} · ${t.daysCount} days · ${t.maxAltitudeM} m`, description: t.tagline, path: `/treks/${t.slug}`, image: t.hero.src });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTrek((await params).slug);
  if (!t) notFound();
  return <JourneyDetail j={t} trek={t} />;
}
