"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    n: "01",
    title: "We learn your business",
    body: "A focused discovery process. We look at your numbers, your team, your bottlenecks, and your goals. No cost, no commitment. We will tell you within a week whether there is a viable partnership.",
  },
  {
    n: "02",
    title: "We propose a structure",
    body: "Every deal is different. Equity, revenue share, direct capital investment, or a combination: we design a structure that makes our incentives identical to yours. We do not take a cut of what you already built. We earn from what we build together.",
  },
  {
    n: "03",
    title: "We embed and invest",
    body: "Our operators work inside your business. Not on a call once a week. In your systems, alongside your team, running the functions we have agreed to own. When growth needs fuel, we deploy our own capital next to that work.",
  },
  {
    n: "04",
    title: "We grow it together",
    body: "We stay active partners through every phase: scaling revenue, building the team, and positioning for the outcome that fits your vision. We do not install and disappear. We grow with you.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-card px-6 py-[clamp(72px,12vh,140px)] sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal>
          <p className="eyebrow mb-[clamp(36px,5vh,56px)]">
            How the Partnership Works
          </p>
        </ScrollReveal>

        <div className="border-t border-card-line">
          {steps.map((s) => (
            <ScrollReveal key={s.n}>
              <div className="grid grid-cols-[clamp(54px,8vw,120px)_1fr] items-start gap-x-[clamp(20px,3vw,48px)] rounded-lg border-b border-card-line px-[clamp(8px,1.5vw,24px)] py-[clamp(28px,4vh,48px)] transition-colors duration-300 hover:bg-stone">
                <div className="font-display text-[clamp(28px,3.2vw,46px)] font-bold leading-none tracking-[-0.04em] text-label">
                  {s.n}
                </div>
                <div>
                  <h3 className="mb-3 font-display text-[clamp(21px,2vw,28px)] font-bold tracking-[-0.02em] text-ink">
                    {s.title}
                  </h3>
                  <p className="max-w-[62ch] font-body text-[clamp(15px,1.15vw,17px)] leading-[1.62] text-text-muted">
                    {s.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
