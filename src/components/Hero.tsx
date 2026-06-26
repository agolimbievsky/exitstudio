"use client";

import ScrollReveal from "./ScrollReveal";

interface HeroProps {
  onApplyClick: () => void;
}

const principles = [
  { label: "How we're paid", value: "Only from the growth we create." },
  { label: "How we invest", value: "Embedded operators and direct capital." },
  { label: "How we win", value: "We only win when you do." },
];

export default function Hero({ onApplyClick }: HeroProps) {
  return (
    <section
      id="top"
      className="bg-stone px-6 pt-32 pb-16 sm:px-10 lg:px-20 lg:pt-40 lg:pb-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal>
          <p className="eyebrow">Operator-Led Growth</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h1 className="mt-7 max-w-[17ch] font-display text-[clamp(38px,5.8vw,86px)] font-bold leading-[1.0] tracking-[-0.035em] text-ink text-balance lg:mt-11">
            We scale proven businesses by betting our own capital, teams, and
            systems<span className="es-dot" aria-hidden="true" />
          </h1>
        </ScrollReveal>

        <div className="mt-9 flex flex-wrap items-start gap-x-[clamp(28px,5vw,72px)] gap-y-8 lg:mt-13">
          <div className="max-w-[580px] flex-1 basis-[340px]">
            <ScrollReveal delay={2}>
              <p className="font-display text-[clamp(22px,2.4vw,30px)] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
                We only win when you do.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <p className="mt-[18px] max-w-[48ch] font-body text-[clamp(16px,1.2vw,18px)] leading-[1.62] text-text-muted">
                No fees. No retainers. We invest our own capital, embed our
                operators and systems, and earn based entirely on the growth we
                create together.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onApplyClick}
                  className="inline-flex items-center gap-2 rounded-md bg-ink px-[26px] py-[15px] font-body text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-hover"
                >
                  See if you qualify
                </button>
                <a
                  href="#how-it-works"
                  className="group inline-flex items-center gap-2 border-b border-transparent pb-[3px] font-body text-[15px] font-semibold text-ink transition-all hover:border-ink"
                >
                  How the partnership works
                  <span className="text-gray transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Principles strip */}
        <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-[clamp(28px,4vw,60px)] gap-y-8 border-t border-stone-line pt-9 lg:mt-24">
          {principles.map((p, i) => (
            <ScrollReveal key={p.label} delay={Math.min(5, i + 3)}>
              <div>
                <div className="mb-3.5 flex items-center gap-2.5 font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-label">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-gray" />
                  {p.label}
                </div>
                <div className="font-display text-[clamp(17px,1.5vw,21px)] font-semibold leading-[1.3] tracking-[-0.02em] text-ink">
                  {p.value}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
