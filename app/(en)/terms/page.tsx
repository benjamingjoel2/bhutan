import { PageHero } from "@/components/shared/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Booking Terms", description: "The terms that apply to tailor-made Bhutan journeys planned and arranged by Dzong House.", path: "/terms" });

export default function Page() {
  return (
    <main id="main">
      <PageHero eyebrow="Legal" title="Booking Terms" />
      <section className="container-x pb-24">
        <div className="prose-dzong legal">
          <p>{"Last updated: 30 October 2026."}</p>
          <p>{"These booking terms apply to every journey planned and arranged by Dzong House (\"we\", \"us\"). Please read them before you confirm a booking. When we refer to \"you\" we mean everyone named on the booking; the person who makes the booking accepts these terms on behalf of all of them."}</p>
          <h2>{"1. How we work"}</h2>
          <p>{"Dzong House plans tailor-made journeys in Bhutan. Nothing is booked automatically on this website. You send us an enquiry; we reply with ideas and, when you are ready, a written proposal (\"quote\") for your journey. An enquiry or a quote does not commit you or us to anything."}</p>
          <h2>{"2. Quotes"}</h2>
          <p>{"Each quote sets out the itinerary, what is included and what is not, the price and how long it remains valid. Prices depend on availability, exchange rates, fuel costs and government taxes and fees, so a quote can change until the booking is confirmed. Any price shown on this website is a guide (a \"from\" price) and not an offer."}</p>
          <h2>{"3. Making a booking"}</h2>
          <p>{"To book, you accept the quote in writing and pay the deposit stated in it. Your booking is confirmed when we have received the deposit and sent you a written confirmation. At that point a contract exists between you and us on these terms and the details in the confirmation."}</p>
          <h2>{"4. Deposits and paying the balance"}</h2>
          <p>{"The deposit amount and the date the balance is due are stated in your quote and confirmation. Some elements, such as domestic flights, permits, festival-period hotels or special-access visits, may need to be paid in full when booked; your quote will say so. If the balance is not paid by the due date, we may treat the booking as cancelled by you and apply the cancellation charges below."}</p>
          <h2>{"5. Changes you ask for"}</h2>
          <p>{"We will do our best to make any change you request after confirmation, but we cannot guarantee it. Changes may carry the costs charged by our suppliers plus a reasonable administration charge, which we will tell you before going ahead. Changing the travel dates or reducing the number of travellers may be treated as a cancellation of the original arrangements."}</p>
          <h2>{"6. If you cancel"}</h2>
          <p>{"You can cancel at any time by telling us in writing. The charges that apply depend on how close to departure you cancel and on the terms of the suppliers involved; they are set out in your quote and confirmation. Deposits and any elements already paid in full may be non-refundable. We strongly recommend insurance that covers cancellation (see section 9)."}</p>
          <h2>{"7. If we change or cancel"}</h2>
          <p>{"Tailor-made travel occasionally needs to change: a hotel closes, a flight schedule moves, a road is closed or a festival date shifts. If we have to make a significant change before departure, we will tell you as soon as possible and offer you the choice of accepting the change, taking a comparable alternative, or cancelling for a full refund of the money you have paid us. We will not cancel your journey after confirmation except for reasons beyond our control or if you have not paid what is due. Once you are travelling, guides and local partners may adjust the day's plan for your safety, the weather or local conditions."}</p>
          <h2>{"8. Events beyond our control"}</h2>
          <p>{"We are not responsible for changes, delays or failures caused by events beyond our control that could not have been avoided even with all reasonable care, such as war, civil unrest, natural disaster, epidemic, extreme weather, airline or government action, or the closure of a site or border. Where such an event forces us to cancel before departure, we will refund the money you have paid us, less any costs we cannot recover from suppliers, which we will show you."}</p>
          <h2>{"9. Travel insurance"}</h2>
          <p>{"Comprehensive travel insurance is a condition of booking. It must cover cancellation, medical treatment, emergency evacuation and repatriation, and any activities in your itinerary (for example trekking at altitude). Please send us the policy details before you travel."}</p>
          <h2>{"10. Passports, visas and health"}</h2>
          <p>{"You are responsible for having a valid passport, any visas or entry permits, and meeting the health and vaccination requirements of every country on your journey, including any transit countries. We will give you the general information we have and help with the arrangements where the destination requires it, but the requirements are set by governments and can change, so please check them with the relevant embassy and with your doctor before you travel. Tell us before booking about any medical condition or disability that may affect your journey so that we can plan around it."}</p>
          <h2>{"11. Your responsibilities while travelling"}</h2>
          <p>{"Please follow the reasonable instructions of your guides and local partners, respect local laws and customs, and look after your belongings and documents. We may end the journey of anyone whose behaviour puts others at risk or causes serious disruption, without a refund."}</p>
          <h2>{"12. Our responsibility to you"}</h2>
          <p>{"We will plan and arrange your journey with reasonable skill and care, using suppliers we believe to be reputable. Hotels, transport companies, airlines and activity providers are independent businesses and their own terms and the law of the country where they operate also apply to their services. We are not liable for any failure that is due to you, to a third party unconnected with the services we arranged, or to events beyond our control (section 8). Where we are liable, our liability is limited to the extent permitted by law and, except for death or personal injury caused by our negligence, will not exceed the total price of your booking. Nothing in these terms limits any rights you have under consumer law that cannot be excluded."}</p>
          <h2>{"13. Complaints"}</h2>
          <p>{"If something is not right while you are travelling, tell your guide or local contact and us straight away so that we can try to fix it there and then. If it cannot be resolved, write to us at "}<a href="mailto:dzonghouse@tourground.com">dzonghouse@tourground.com</a>{" within 28 days of your return and we will reply in full. Problems not reported at the time can be much harder to put right."}</p>
          <h2>{"14. Your information"}</h2>
          <p>{"We use your personal information as described in our Privacy Policy, including passing it to the suppliers who deliver your journey."}</p>
          <h2>{"15. Governing law"}</h2>
          <p>{"These terms are governed by the law of the country in which Dzong House is established, and the courts of that country have jurisdiction. If you are a consumer, this does not take away the protection of the mandatory laws of the country where you live, or your right to bring a claim there."}</p>
          <h2>{"Contact"}</h2>
          <p>{"Dzong House, Thimphu TechPark, Gepja Zur Lam, Wangchhu Taba, Babesa, Thimphu 11001, Bhutan. Email "}<a href="mailto:dzonghouse@tourground.com">dzonghouse@tourground.com</a>{"."}</p>
        </div>
      </section>
    </main>
  );
}
