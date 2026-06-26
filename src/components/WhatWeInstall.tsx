"use client";

import ScrollReveal from "./ScrollReveal";

const systems = [
  {
    n: "01",
    title: "Performance Marketing",
    body: "We start here on every partnership. Paid media is the fastest signal on whether a business can profitably scale. The data we generate shapes everything we do next.",
  },
  {
    n: "02",
    title: "Operations & Bottleneck Removal",
    body: "Every company hits a different wall: hiring, fulfillment, supply chain, manufacturing. We identify the specific constraint and build around it. No fixed playbook.",
  },
  {
    n: "03",
    title: "Financial Architecture",
    body: "Before we scale anything, we model the unit economics. Contribution margin, payback periods, cash flow gaps. We run these numbers like we own equity in the outcome, because we do.",
  },
  {
    n: "04",
    title: "Embedded Execution",
    body: "We do not send recommendations. We send operators who work inside your business, own deliverables, and are accountable to the projections we made at the start.",
  },
];

export default function WhatWeInstall() {
  return (
    <section className="bg-stone px-6 py-[clamp(72px,12vh,140px)] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal>
          <div className="flex flex-wrap items-baseline justify-between gap-6 border-b border-stone-line pb-[22px]">
            <p className="eyebrow">What We Install</p>
            <p className="font-body text-sm font-medium text-label">
              Four systems, in order
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-[clamp(36px,5vh,52px)] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {systems.map((s, i) => (
            <ScrollReveal key={s.n} delay={Math.min(5, i + 1)}>
              <div className="group h-full rounded-lg border border-card-line bg-card p-[clamp(28px,3vw,40px)] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 hover:border-[#dad5cf] hover:shadow-[0_28px_56px_-28px_rgba(17,17,17,0.22)]">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[clamp(30px,3.4vw,44px)] font-extrabold tracking-[-0.04em] text-ink">
                    {s.n}
                  </span>
                  <span className="text-[24px] text-gray">·</span>
                </div>
                <h3 className="mt-[18px] mb-3 font-display text-[clamp(19px,1.6vw,23px)] font-bold tracking-[-0.02em] text-ink">
                  {s.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.6] text-text-muted">
                  {s.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
