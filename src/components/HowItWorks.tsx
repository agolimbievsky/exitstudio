"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "We learn your business",
    description:
      "A focused discovery process. We look at your numbers, your team, your bottlenecks, and your goals. No cost, no commitment. We will tell you within a week whether there is a viable partnership.",
  },
  {
    number: "02",
    title: "We propose a structure",
    description:
      "Every deal is different. Equity, revenue share, or a combination: we design a structure that makes our incentives identical to yours. We do not take a cut of what you already built. We earn from what we build together.",
  },
  {
    number: "03",
    title: "We embed and operate",
    description:
      "Our operators work inside your business. Not on a call once a week. In your systems, alongside your team, running the functions we have agreed to own.",
  },
  {
    number: "04",
    title: "We grow it together",
    description:
      "We stay active partners through every phase: scaling revenue, building the team, and positioning for the outcome that fits your vision. We do not install and disappear. We grow with you.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-warm-black py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <p className="label mb-16">How the Partnership Works</p>
        </ScrollReveal>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {steps.map((step) => (
            <ScrollReveal key={step.number}>
              <div>
                <span className="font-serif text-4xl font-light text-gold lg:text-5xl">
                  {step.number}
                </span>
                <div className="gold-rule my-6" />
                <h3 className="font-serif text-xl font-semibold text-text-on-dark lg:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 font-sans text-base leading-relaxed text-muted-dark">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
