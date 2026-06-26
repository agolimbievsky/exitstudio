"use client";

import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

export default function Stats() {
  return (
    <section className="bg-card px-6 py-[clamp(72px,12vh,140px)] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal>
          <p className="eyebrow">The Partnership</p>
        </ScrollReveal>

        <div className="mt-[clamp(40px,6vh,68px)] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-start gap-x-[clamp(48px,8vw,120px)] gap-y-[clamp(40px,6vh,64px)]">
          <ScrollReveal>
            <div>
              <div className="whitespace-nowrap font-display text-[clamp(50px,7.2vw,104px)] font-bold leading-[0.9] tracking-[-0.045em] text-ink">
                <CountUp target={150} prefix="$" suffix="M+" />
              </div>
              <div className="mt-5 font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-label">
                In combined founder career revenue
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div>
              <div className="whitespace-nowrap font-display text-[clamp(50px,7.2vw,104px)] font-bold leading-[0.9] tracking-[-0.045em] text-ink">
                <CountUp target={5} />
                <span className="ml-[0.08em] text-gray">·</span>
              </div>
              <div className="mt-5 font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-label">
                Operators with exits
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2}>
          <div className="mt-[clamp(44px,6vh,72px)] border-t border-card-line pt-[clamp(32px,4vh,48px)]">
            <p className="max-w-[30ch] font-display text-[clamp(22px,2.4vw,32px)] font-semibold leading-[1.26] tracking-[-0.025em] text-ink">
              We built this because we needed it ourselves. It didn&rsquo;t
              exist<span className="text-gray">.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
