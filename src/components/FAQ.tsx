"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "What does the deal structure actually look like?",
    a: "Every partnership is different. Typically, we earn equity through performance milestones, a revenue share on growth above your baseline, or a structured combination of both. We never take a cut of what you built before we arrived. We will propose something clear and specific in our first conversation.",
  },
  {
    q: "What do you need from me as a founder?",
    a: "Access and honesty. We need to understand your P&L, your team, and your constraints without filters. We are not here to take over. We are here to augment. Expect regular working sessions and real visibility into the parts of the business we are running.",
  },
  {
    q: "How long before I see results?",
    a: "Early indicators, including campaign performance and operational efficiency, typically shift within 30 to 60 days. Meaningful revenue impact is usually visible in 90 to 180 days. We will agree on specific metrics and milestones before we start.",
  },
  {
    q: "How many companies do you take on at once?",
    a: "We are intentionally selective. We take on 2 to 4 new partnerships per year, and our founding partners are directly involved in every company we work with. You will not be handed off to a junior team.",
  },
  {
    q: "What if it does not work out?",
    a: "We do not do long-term contracts. There are no retainers to cancel and no exit penalties. If we are not adding measurable value, you do not pay us. If the partnership winds down, we are only compensated for the growth that was actually earned and proven. Accountability runs both ways.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-cream py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <ScrollReveal>
          <p className="label label-on-light mb-16">Common Questions</p>
        </ScrollReveal>

        <div>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i}>
              <div className="border-t border-warm-black/10">
                <button
                  className="flex w-full items-start justify-between gap-6 py-7 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-serif text-xl font-medium text-warm-black sm:text-2xl">
                    {faq.q}
                  </span>
                  <span
                    className={`mt-1.5 flex-shrink-0 font-sans text-xl text-gold-dark transition-transform duration-200 ${
                      open === i ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === i ? "max-h-64 pb-7" : "max-h-0"
                  }`}
                >
                  <p className="font-sans text-base leading-relaxed text-muted-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-warm-black/10" />
        </div>
      </div>
    </section>
  );
}
