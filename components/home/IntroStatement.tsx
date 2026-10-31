import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";

export function IntroStatement() {
  return (
    <section className="section-y">
      <Reveal className="container-x mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-6">Dzong House</p>
        <h2 className="display-lg">Guardians at the door.</h2>
        <p className="mx-auto mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-soft md:text-[1.125rem]">
          Named for the whitewashed fortress-monasteries that have kept Bhutan&rsquo;s faith, culture and government for centuries,
          we open the kingdom to a small number of thoughtful travellers and look after every detail inside. One dedicated specialist.
          A Bhutanese partner operator and local guides. From the first message to the day you fly home.
        </p>
        <div className="mt-8"><TextLink href="/about">Our story</TextLink></div>
      </Reveal>
    </section>
  );
}
