import { PageHero } from "@/components/shared/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Privacy Policy", description: "How Dzong House collects, uses and protects your personal information.", path: "/privacy" });

export default function Page() {
  return (
    <main id="main">
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="container-x pb-24">
        <div className="prose-dzong legal">
          <p>{"Last updated: 30 October 2026."}</p>
          <p>{"This policy explains what personal information Dzong House collects when you use dzonghouse.tourground.com or contact us, why we collect it, and the choices you have. Dzong House plans tailor-made journeys in Bhutan; everything starts with an enquiry, so most of what we hold is what you choose to tell us about your trip."}</p>
          <h2>{"Who we are"}</h2>
          <p>{"Dzong House is responsible for your personal information (the \"controller\"). You can reach us at "}<a href="mailto:dzonghouse@tourground.com">dzonghouse@tourground.com</a>{" or by post at Thimphu TechPark, Gepja Zur Lam, Wangchhu Taba, Babesa, Thimphu 11001, Bhutan."}</p>
          <h2>{"What we collect"}</h2>
          <ul>
            <li>{"Details you give us in an enquiry, the trip planner or the contact form: your name, email address and optional phone number; your travel dates, length of stay, number and ages of travellers, nationality, interests, budget and anything else you add in the trip planner; your email address if you sign up for our letters."}</li>
            <li>{"Anything you tell us while we plan your journey, such as passport names, dates of birth, dietary needs, mobility or health information relevant to the trip, and the names of the people travelling with you. Share health details only if you want us to take them into account."}</li>
            <li>{"Messages and emails you send us, and our replies."}</li>
            <li>{"Basic technical information that every website receives, such as your IP address, browser type and the pages requested, kept in our hosting provider's server logs for security and troubleshooting."}</li>
          </ul>
          <p>{"We do not ask for or store payment card details on this website."}</p>
          <h2>{"How we use it and our legal basis"}</h2>
          <ul>
            <li>{"To answer your enquiry and plan, quote and arrange your journey (steps taken at your request before a contract, and performing that contract)."}</li>
            <li>{"To pass the details needed to deliver your journey to the hotels, guides, drivers, airlines and local partners involved (performing the contract)."}</li>
            <li>{"To keep records of bookings and correspondence, and to meet legal, tax and accounting obligations (legal obligation)."}</li>
            <li>{"To keep the website secure and working, and to understand which pages are useful (our legitimate interests)."}</li>
            <li>{"To send occasional travel news, only if you have asked for it. You can unsubscribe at any time with the link in each message or by emailing us (consent)."}</li>
          </ul>
          <h2>{"Who we share it with"}</h2>
          <p>{"We never sell your personal information. We share it only where needed:"}</p>
          <ul>
            <li>{"With the suppliers who deliver your journey (accommodation, guides, drivers, transport and activity providers), who may be located in Bhutan or other countries on your route."}</li>
            <li>{"With service providers who run parts of our business for us, under contracts that protect your information: Vercel (website hosting and image delivery); our email provider, for the messages we exchange with you."}</li>
            <li>{"With authorities, insurers or advisers where the law requires it or to establish or defend legal claims."}</li>
          </ul>
          <h2>{"International transfers"}</h2>
          <p>{"Planning travel in Bhutan means some of your information will be processed outside the country you live in, including by suppliers in the destination and by service providers whose servers are abroad. Where data protection law requires it, we use appropriate safeguards such as standard contractual clauses, or the transfer is necessary to deliver the journey you asked for."}</p>
          <h2>{"How long we keep it"}</h2>
          <p>{"Enquiries that do not lead to a booking are deleted within two years of our last contact. Booking records are kept for as long as tax and accounting law requires, normally up to seven years after your journey. Newsletter details are kept until you unsubscribe. Server logs are kept for a short period by our hosting provider."}</p>
          <h2>{"Your rights"}</h2>
          <p>{"Depending on where you live, you may have the right to access the personal information we hold about you, to have it corrected or deleted, to restrict or object to how we use it, to ask for a copy in a portable format, and to withdraw consent at any time. To use any of these rights, email "}<a href="mailto:dzonghouse@tourground.com">dzonghouse@tourground.com</a>{". We will reply within one month. You can also complain to the data protection authority where you live; we would appreciate the chance to put things right first."}</p>
          <h2>{"Cookies and similar storage"}</h2>
          <p>{"Our Cookie Policy lists exactly what this website stores on your device and why."}</p>
          <h2>{"Security"}</h2>
          <p>{"The website is served only over an encrypted connection (HTTPS). Access to enquiries is limited to the people who plan your journey. No method of transmission or storage is completely secure, but we take reasonable steps to protect your information."}</p>
          <h2>{"Children"}</h2>
          <p>{"This website is not aimed at children. We hold information about children only when a parent or guardian gives it to us to plan a family journey."}</p>
          <h2>{"Changes to this policy"}</h2>
          <p>{"We may update this policy from time to time. The date at the top shows when it last changed."}</p>
        </div>
      </section>
    </main>
  );
}
