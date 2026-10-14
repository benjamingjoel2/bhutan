import { PageHero } from "@/components/shared/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Terms", description: "Terms policy for Dzong House. Placeholder pending legal review.", path: "/terms" });

export default function Page() {
  return (
    <main id="main">
      <PageHero eyebrow="Legal" title="Terms" intro="Placeholder. This page will hold the final Terms policy once it has been reviewed by counsel." />
      <section className="container-x pb-24"><div className="prose-dzong"><p>TODO: insert the reviewed Terms text here.</p></div></section>
    </main>
  );
}
