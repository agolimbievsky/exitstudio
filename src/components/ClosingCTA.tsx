"use client";

import ScrollReveal from "./ScrollReveal";

interface ClosingCTAProps {
  onApplyClick: () => void;
}

export default function ClosingCTA({ onApplyClick }: ClosingCTAProps) {
  return (
    <section id="apply" className="bg-cream py-28 sm:py-36 lg:py-48">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <ScrollReveal>
          <div className="gold-rule mx-auto mb-12" />
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-warm-black sm:text-5xl lg:text-6xl">
            Ready to find out if we&rsquo;re a fit?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="mx-auto mt-8 max-w-lg font-sans text-base leading-relaxed text-muted-light">
            The application takes five minutes. We review every submission
            personally. If there&rsquo;s a fit, you&rsquo;ll hear from us
            within three business days. If not, we&rsquo;ll tell you why. You
            deserve a real answer.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="mt-10">
            <button
              onClick={onApplyClick}
              className="inline-flex items-center justify-center rounded-sm border border-warm-black bg-warm-black px-9 py-4 font-sans text-sm font-medium tracking-wide text-cream transition-all hover:border-gold hover:bg-gold hover:text-warm-black"
            >
              See if you qualify
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
