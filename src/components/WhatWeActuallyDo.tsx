"use client";

import ScrollReveal from "./ScrollReveal";

const disciplines = [
  {
    name: "Performance Marketing",
    description:
      "Campaign infrastructure built to convert at scale, not just drive traffic.",
  },
  {
    name: "Operational Systems",
    description:
      "Processes and tooling built to hold under real growth pressure and scale as the business does.",
  },
  {
    name: "Execution Teams",
    description:
      "Embedded operators, not consultants. We work inside the machine, not around it.",
  },
  {
    name: "Growth Playbooks",
    description:
      "Documented, repeatable systems your team owns and can build on indefinitely.",
  },
];

export default function WhatWeActuallyDo() {
  return (
    <section id="model" className="bg-cream py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <p className="label label-on-light mb-16">What We Actually Do</p>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: Descriptive text */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={1}>
              <p className="font-serif text-2xl leading-relaxed text-text-on-light sm:text-3xl">
                We partner with companies that already have product-market fit
                and are bottlenecked by execution, systems, and scale.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-muted-light">
                We embed across marketing, operations, and growth with the goal
                of reaching $1M+ per month profitably, then we keep going. We
                stay active partners through every phase.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Callout block */}
          <div className="lg:col-span-5 lg:col-start-8">
            <ScrollReveal delay={2}>
              <div className="border-l-2 border-gold/40 pl-8 lg:pl-10">
                <p className="font-serif text-3xl font-medium leading-snug text-warm-black sm:text-4xl">
                  We don&rsquo;t charge fees.
                </p>
                <p className="mt-4 font-serif text-3xl font-medium leading-snug text-warm-black sm:text-4xl">
                  We earn from upside.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* What we install — 4 disciplines */}
        <ScrollReveal>
          <div className="mt-24 border-t border-warm-black/10 pt-14 lg:mt-32">
            <p className="label label-on-light mb-10">What we install</p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {disciplines.map((d, i) => (
                <div key={d.name}>
                  <span className="font-serif text-lg font-medium text-warm-black lg:text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-sans text-base font-medium text-text-on-light">
                    {d.name}
                  </p>
                  <p className="mt-2 font-sans text-base leading-relaxed text-muted-light">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
