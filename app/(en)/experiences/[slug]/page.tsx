import { notFound } from "next/navigation";
import { experiences, getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/shared/ExperienceDetail";
import { pageMeta } from "@/lib/seo";

export const generateStaticParams = () => experiences.map((e) => ({ slug: e.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const e = getExperience((await params).slug);
  return e ? pageMeta({ title: e.name, description: e.tagline, path: `/experiences/${e.slug}`, image: e.hero.src }) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const e = getExperience((await params).slug);
  if (!e) notFound();
  return <ExperienceDetail e={e} kind="experience" siblings={experiences} />;
}
