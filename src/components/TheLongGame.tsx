"use client";

import ScrollReveal from "./ScrollReveal";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n2)'/%3E%3C/svg%3E\")";

export default function TheLongGame() {
  return (
    <section
      id="constitution"
      className="relative overflow-hidden bg-ink px-6 py-[clamp(80px,15vh,170px)] text-white sm:px-10 lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: NOISE }}
      />
      <div
        className="pointer-events-none absolute h-[900px] w-[900px]"
        style={{
          bottom: "-30%",
          right: "-5%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06), transparent 62%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="eyebrow-on-dark">The Long Game</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="mt-[clamp(30px,5vh,52px)] max-w-[22ch] font-display text-[clamp(30px,4.6vw,62px)] font-bold leading-[1.08] tracking-[-0.03em]">
            We&rsquo;re not just scaling companies.{" "}
            <span className="text-gray">
              We&rsquo;re building something that compounds beyond any single
              exit.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="mt-[clamp(28px,4vh,40px)] max-w-[60ch] font-body text-[clamp(17px,1.4vw,20px)] leading-[1.6] text-body-dark">
            The Constitution is our operating system: what we believe about
            business, growth, and human cooperation. If you think in decades,
            it&rsquo;s worth reading.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <a
            href="/constitution"
            className="group mt-[clamp(32px,4vh,44px)] inline-flex items-center gap-2 border-b border-ink-line pb-1 font-body text-base font-semibold text-white transition-all hover:border-white"
          >
            Read the Constitution
            <span className="text-gray transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
