"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "What does the deal structure actually look like?",
    a: "Every partnership is different. Typically, we earn equity through performance milestones, a revenue share on growth above your baseline, or a structured combination of both. When growth calls for it, we also invest our own capital directly to fund things like inventory, hiring, and paid media. We never take a cut of what you built before we arrived. We will propose something clear and specific in our first conversation.",
  },
  {
    q: "Do you invest cash, or just operators?",
    a: "Both. For most of our history we earned purely through embedded operators and systems. Now we also deploy direct capital when it accelerates growth: funding inventory, hiring, paid media, or whatever the specific bottleneck requires. The capital comes with the same operators and the same accountability. We are partners putting money and people behind the same projections, not a fund writing a check and waiting.",
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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-card px-6 py-[clamp(72px,12vh,140px)] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1000px]">
        <ScrollReveal>
          <h2 className="mb-[clamp(36px,5vh,56px)] max-w-[20ch] font-display text-[clamp(26px,3.6vw,46px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
            The questions you&rsquo;re likely already asking.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-t border-card-line last:border-b">
                  <button
                    className="flex w-full items-center justify-between gap-6 py-[clamp(22px,3vh,30px)] text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="font-display text-[clamp(17px,1.7vw,23px)] font-semibold tracking-[-0.01em] text-ink">
                      {faq.q}
                    </span>
                    <span
                      className={`flex-none font-body text-[28px] font-light leading-none text-gray transition-transform duration-[400ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-[550ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[74ch] pb-[30px] font-body text-[clamp(15px,1.2vw,17px)] leading-[1.64] text-text-muted">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
