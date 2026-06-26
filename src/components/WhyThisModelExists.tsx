"use client";

import ScrollReveal from "./ScrollReveal";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function WhyThisModelExists() {
  return (
    <section
      id="model"
      className="relative overflow-hidden bg-ink px-6 py-[clamp(80px,16vh,180px)] text-white sm:px-10 lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: NOISE }}
      />
      <div
        className="pointer-events-none absolute left-1/2 h-[1000px] w-[1000px] -translate-x-1/2"
        style={{
          top: "-25%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.07), transparent 62%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="eyebrow-on-dark">Why This Model Exists</p>
        </ScrollReveal>

        <div className="mt-[clamp(40px,7vh,80px)] font-display text-[clamp(38px,6.4vw,86px)] font-bold leading-[1.02] tracking-[-0.03em]">
          <ScrollReveal>
            <div>Advice is abundant.</div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="text-gray">Execution is scarce.</div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2}>
          <p className="mt-[clamp(36px,6vh,64px)] max-w-[58ch] font-body text-[clamp(18px,1.5vw,22px)] leading-[1.6] text-body-dark">
            And most people offering help aren&rsquo;t financially accountable
            for outcomes. So we operate. We don&rsquo;t advise. And we only earn
            when results prove it.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
