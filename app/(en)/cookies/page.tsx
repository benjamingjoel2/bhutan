import { PageHero } from "@/components/shared/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Cookie Policy", description: "The cookies and browser storage used on the Dzong House website, and how to control them.", path: "/cookies" });

export default function Page() {
  return (
    <main id="main">
      <PageHero eyebrow="Legal" title="Cookie Policy" />
      <section className="container-x pb-24">
        <div className="prose-dzong legal">
          <p>{"Last updated: 30 October 2026."}</p>
          <p>{"This policy explains the cookies and similar technologies (such as your browser's local storage) used on dzonghouse.tourground.com."}</p>
          <h2>{"What we use"}</h2>
          <p>{"This website uses only the following. None of them is used for advertising, and none tracks you across other websites."}</p>
          <ul>
            <li>{"Trip planner progress (Local storage): Remembers the answers you have entered in the trip planner so you can come back and finish it. It is deleted when you send the enquiry. Kept: until you send the enquiry or clear your browser data."}</li>
            <li>{"Currency choice (Local storage): Remembers the currency you chose for showing prices. Kept: until you change it or clear your browser data."}</li>
          </ul>
          <p>{"We do not use analytics, advertising or social media cookies."}</p>
          <h2>{"Strictly necessary storage and consent"}</h2>
          <p>{"Storage that only makes a feature you are using work (for example remembering the answers you have already given in the trip planner, or your chosen currency) is strictly necessary and does not need consent. It stays on your device and is not sent to us unless you submit a form. If we ever add analytics or other non-essential cookies, we will ask for your consent first and update this page."}</p>
          <h2>{"Third-party content"}</h2>
          <p>{"Some parts of the website are delivered by other companies: Vercel (website hosting and image delivery); our email provider, for the messages we exchange with you. They receive the technical information any website request includes (such as your IP address) but this website does not let them set cookies on your device."}</p>
          <h2>{"How to withdraw consent or remove storage"}</h2>
          <p>{"You can delete cookies and local storage for this website at any time in your browser settings (usually under Privacy, Site data or Cookies), and you can set your browser to block them. If you clear it, the trip planner will simply start again from the first step."}</p>
          <h2>{"Questions"}</h2>
          <p>{"Email "}<a href="mailto:dzonghouse@tourground.com">dzonghouse@tourground.com</a>{" or write to Dzong House, Thimphu TechPark, Gepja Zur Lam, Wangchhu Taba, Babesa, Thimphu 11001, Bhutan."}</p>
        </div>
      </section>
    </main>
  );
}
