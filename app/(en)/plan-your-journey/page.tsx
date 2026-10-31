import type { Metadata } from "next";
import { Suspense } from "react";
import { PlannerPage } from "@/components/planner/PlannerPage";

export const metadata: Metadata = {
  title: "Plan your journey",
  description: "Five short steps. One specialist replies within two working days with a first sketch of your tailor-made Bhutan journey.",
  alternates: { canonical: "/plan-your-journey" },
};

export default function Page() {
  return (
    <main id="main" className="pt-24 md:pt-32">
      <section className="container-x pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Plan your journey</p>
          <h1 className="display-lg">Tell us a little. We will shape the rest.</h1>
          <p className="mt-5 text-[1.0625rem] text-ink-soft">
            Five short steps. Your progress is saved on this device, so you can come back to it. Nothing is booked, and nothing is charged.
          </p>
        </div>
        <div className="mt-12 max-w-5xl border-t border-line pt-10">
          <Suspense>
            <PlannerPage />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
