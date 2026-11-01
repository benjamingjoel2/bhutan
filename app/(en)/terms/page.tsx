import { LegalDoc } from "@/components/shared/LegalDoc";
import { terms } from "@/data/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Booking Terms", description: "The terms that apply to tailor-made Bhutan journeys planned and arranged by Dzong House.", path: "/terms" });

export default function Page() {
  return <LegalDoc doc={terms} />;
}
