import { LegalDoc } from "@/components/shared/LegalDoc";
import { cookies } from "@/data/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Cookie Policy", description: "The cookies and browser storage used on the Dzong House website, and how to control them.", path: "/cookies" });

export default function Page() {
  return <LegalDoc doc={cookies} />;
}
