import { PageHero } from "@/components/shared/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Cookies", description: "Cookies policy for Dzong House. Placeholder pending legal review.", path: "/cookies" });

export default function Page() {
  return (
    <main id="main">
      <PageHero eyebrow="Legal" title="Cookies" intro="Placeholder. This page will hold the final Cookies policy once it has been reviewed by counsel." />
      <section className="container-x pb-24"><div className="prose-dzong"><p>TODO: insert the reviewed Cookies text here.</p></div></section>
    </main>
  );
}
