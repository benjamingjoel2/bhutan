import { LegalDoc } from "@/components/shared/LegalDoc";
import { privacy } from "@/data/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Privacy Policy", description: "How Dzong House collects, uses and protects your personal information.", path: "/privacy" });

export default function Page() {
  return <LegalDoc doc={privacy} />;
}
