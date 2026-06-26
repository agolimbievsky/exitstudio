"use client";

import ScrollReveal from "./ScrollReveal";

const callouts = [
  "We don't charge fees",
  "We invest our own capital",
  "We earn from upside",
];

export default function WhatWeActuallyDo() {
  return (
    <section className="bg-card px-6 py-[clamp(72px,12vh,140px)] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal>
          <p className="eyebrow">What We Actually Do</p>
        </ScrollReveal>

        <div className="mt-[clamp(36px,5vh,60px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(32px,5vw,80px)]">
          <ScrollReveal>
            <p className="font-display text-[clamp(24px,3vw,40px)] font-semibold leading-[1.18] tracking-[-0.025em] text-ink">
              We partner with companies that already have product-market fit and
              are bottlenecked by execution, systems, and scale.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div>
              <p className="mb-8 font-body text-[clamp(16px,1.2vw,18px)] leading-[1.62] text-text-muted">
                We invest our own capital and embed across marketing,
                operations, and growth with the goal of reaching $1M+ per month
                profitably, then we keep going. We stay active partners through
                every phase.
              </p>
              <div className="flex flex-wrap gap-x-[clamp(24px,4vw,56px)] gap-y-4 border-t border-card-line pt-7">
                {callouts.map((c) => (
                  <div
                    key={c}
                    className="font-display text-[clamp(18px,1.6vw,22px)] font-bold tracking-[-0.02em] text-ink"
                  >
                    {c}
                    <span className="text-gray">.</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
