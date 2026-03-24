"use client";

import ScrollReveal from "./ScrollReveal";

export default function WhyThisModelExists() {
  return (
    <section id="model" className="bg-warm-black py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <ScrollReveal>
          <p className="label mb-16 text-center">Why This Model Exists</p>
        </ScrollReveal>

        <div className="space-y-10 sm:space-y-14">
          <ScrollReveal delay={1}>
            <p className="font-serif text-3xl font-medium leading-tight text-text-on-dark sm:text-4xl lg:text-5xl">
              Advice is abundant.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="gold-rule" />
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="font-serif text-3xl font-medium leading-tight text-text-on-dark sm:text-4xl lg:text-5xl">
              Execution is scarce.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="gold-rule" />
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <p className="max-w-lg font-serif text-xl leading-relaxed text-muted-dark sm:text-2xl">
              And most people offering help aren&rsquo;t financially accountable
              for outcomes.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <p className="max-w-lg font-sans text-lg font-medium leading-relaxed text-text-on-dark sm:text-xl">
              So we operate. We don&rsquo;t advise. And we only earn when
              results prove it.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
