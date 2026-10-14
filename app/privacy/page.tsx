import { PageHero } from "@/components/shared/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Privacy", description: "Privacy policy for Dzong House. Placeholder pending legal review.", path: "/privacy" });

export default function Page() {
  return (
    <main id="main">
      <PageHero eyebrow="Legal" title="Privacy" intro="Placeholder. This page will hold the final Privacy policy once it has been reviewed by counsel." />
      <section className="container-x pb-24"><div className="prose-dzong"><p>TODO: insert the reviewed Privacy text here.</p></div></section>
    </main>
  );
}
