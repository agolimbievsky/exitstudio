"use client";

import ScrollReveal from "./ScrollReveal";

export default function TheLongGame() {
  return (
    <section
      id="constitution"
      className="bg-warm-black py-28 sm:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <ScrollReveal>
          <p className="label mb-10">The Long Game</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="font-serif text-3xl font-medium leading-snug text-text-on-dark sm:text-4xl lg:text-5xl">
            We&rsquo;re not just scaling companies.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-snug text-text-on-dark sm:text-4xl lg:text-5xl">
            We&rsquo;re building something that compounds beyond any single
            exit.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <p className="mx-auto mt-10 max-w-xl font-sans text-base leading-relaxed text-muted-dark">
            The Constitution is our operating system: what we believe about
            business, growth, and human cooperation. If you think in decades,
            it&rsquo;s worth reading.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="mx-auto mt-10 mb-0">
            <a
              href="/constitution"
              className="group inline-flex items-center gap-3 font-serif text-lg text-gold transition-colors hover:text-gold-light"
            >
              Read the Constitution
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
