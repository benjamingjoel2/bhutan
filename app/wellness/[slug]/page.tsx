import { notFound } from "next/navigation";
import { wellnessExperiences, getWellness } from "@/data/wellness";
import { ExperienceDetail } from "@/components/shared/ExperienceDetail";
import { pageMeta } from "@/lib/seo";

export const generateStaticParams = () => wellnessExperiences.map((w) => ({ slug: w.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const w = getWellness((await params).slug);
  return w ? pageMeta({ title: `${w.name} · Wellness`, description: w.tagline, path: `/wellness/${w.slug}`, image: w.hero.src }) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const w = getWellness((await params).slug);
  if (!w) notFound();
  return <ExperienceDetail e={w} kind="wellness" siblings={wellnessExperiences} />;
}
