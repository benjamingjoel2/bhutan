import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { Reveal } from "@/components/ui/Reveal";

export function NewsletterBand() {
  return (
    <section className="section-y-sm bg-whitewash-deep">
      <Reveal className="container-x grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">Letters from the kingdom</p>
          <h2 className="display-md">A few lines, a few times a year.</h2>
        </div>
        <NewsletterForm />
      </Reveal>
    </section>
  );
}
