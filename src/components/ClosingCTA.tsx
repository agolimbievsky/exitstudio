"use client";

import ScrollReveal from "./ScrollReveal";

interface ClosingCTAProps {
  onApplyClick: () => void;
}

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n3)'/%3E%3C/svg%3E\")";

export default function ClosingCTA({ onApplyClick }: ClosingCTAProps) {
  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-ink px-6 py-[clamp(88px,16vh,190px)] text-white sm:px-10 lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: NOISE }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[760px] text-center">
        <ScrollReveal>
          <p className="eyebrow-on-dark">Apply</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="mt-[clamp(24px,4vh,38px)] font-display text-[clamp(32px,5.2vw,68px)] font-bold leading-[1.04] tracking-[-0.03em]">
            Ready to find out if we&rsquo;re a fit
            <span className="text-gray">?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="mx-auto mt-[clamp(24px,4vh,34px)] max-w-[56ch] font-body text-[clamp(16px,1.3vw,19px)] leading-[1.62] text-body-dark">
            The application takes five minutes. We review every submission
            personally. If there&rsquo;s a fit, you&rsquo;ll hear from us within
            three business days. If not, we&rsquo;ll tell you why. You deserve a
            real answer.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="mt-[clamp(32px,5vh,46px)]">
            <button
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 rounded-md bg-white px-[34px] py-[17px] font-body text-base font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-stone"
            >
              See if you qualify
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
