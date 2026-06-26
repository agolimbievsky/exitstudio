"use client";

import Link from "next/link";
import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ApplicationModal from "./ApplicationModal";
import ScrollReveal from "./ScrollReveal";

const NOISE = (id: string) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='${id}'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23${id})'/%3E%3C/svg%3E")`;

const coreCodes = [
  {
    label: "Core Code I",
    title: "Truth",
    paras: [
      "We view business not as an end in itself, but as a laboratory to study the universal systems that govern human progress.",
      "Truth is how information is validated, communicated, and preserved. In business, this is marketing and data, the feedback loop between value created and value received.",
      "Our mission is to decode the universal laws of these systems. By perfecting them, we create a framework that can scale indefinitely.",
    ],
  },
  {
    label: "Core Code II",
    title: "Money",
    paras: [
      "Money is the mechanism for storing and exchanging value. It is the fuel that proves a truth is sustainable.",
      "Without it, even the most brilliant insight dies in obscurity. With it deployed wisely, a single idea can reshape entire industries.",
    ],
  },
  {
    label: "Core Code III",
    title: "Team",
    paras: [
      "Team is how humans organize, collaborate, and incentivize one another to achieve things they cannot do alone.",
      "The right structure turns a group of individuals into a force multiplier. The wrong one turns brilliance into bureaucracy.",
    ],
  },
];

const thinkers = [
  { name: "Adam Smith", text: "Studied incentives and self-interest as invisible systems." },
  { name: "Jim Collins", text: "Examined what endures when leadership changes and cycles turn." },
  { name: "Ray Dalio", text: "Codified principles for decision-making under uncertainty." },
];

function Bullet({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3.5">
      <span className="h-[7px] w-[7px] flex-none -translate-y-0.5 rounded-full bg-gray" />
      <p className="font-body text-[clamp(15px,1.2vw,17px)] leading-[1.58] text-muted-dark">
        <span className="font-semibold text-white">{label}:</span> {children}
      </p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#2e2e2e] px-4 py-2 font-body text-sm text-[#cfd3d7]">
      {children}
    </span>
  );
}

export default function ConstitutionClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navigation onApplyClick={() => setModalOpen(true)} dark />

      <main className="bg-ink text-white">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-ink px-6 pt-32 pb-[clamp(56px,9vh,100px)] sm:px-10 lg:px-20 lg:pt-44">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{ backgroundImage: NOISE("cn") }}
          />
          <div
            className="pointer-events-none absolute left-1/2 h-[1100px] w-[1100px] -translate-x-1/2"
            style={{
              top: "-30%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.07), transparent 62%)",
            }}
          />
          <div className="relative mx-auto max-w-[1000px]">
            <ScrollReveal>
              <p className="eyebrow-on-dark">ExitStudio</p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h1 className="mt-[clamp(26px,4vh,46px)] font-display text-[clamp(40px,7vw,100px)] font-bold leading-[1.0] tracking-[-0.035em]">
                The Constitution
                <br />
                &amp; The Long Game<span className="es-dot" aria-hidden="true" />
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="mt-[clamp(34px,5vh,52px)] max-w-[24ch] font-display text-[clamp(22px,2.6vw,34px)] font-semibold leading-[1.22] tracking-[-0.02em] text-white">
                We are not building a portfolio. We are building an engine to
                propel humanity for the next 1,000 years.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="bg-ink px-6 pt-[clamp(24px,4vh,40px)] pb-[clamp(72px,12vh,130px)] sm:px-10 lg:px-20">
          <div className="mx-auto flex max-w-[760px] flex-col gap-[clamp(22px,3.5vh,32px)]">
            <ScrollReveal>
              <p className="font-body text-[clamp(17px,1.5vw,21px)] leading-[1.64] text-body-dark">
                Most organizations, whether companies, governments, or
                religions, eventually fail because they become rigid. They start
                by liberating people but end up stifling them to protect the
                status quo.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="font-body text-[clamp(17px,1.5vw,21px)] leading-[1.64] text-body-dark">
                We believe it is possible to build an organization that lasts for
                a millennium without holding humanity back. We are not here to
                predict the future, because human bias always gets it wrong. We
                are here to uncover the future.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="font-display text-[clamp(20px,2vw,27px)] font-semibold leading-[1.36] tracking-[-0.02em] text-white">
                We are building a Living Constitution: an operating system for
                human cooperation that evolves, learns, and improves with every
                generation.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Three Core Codes (stone) ── */}
        <section className="bg-stone px-6 py-[clamp(72px,12vh,140px)] text-ink sm:px-10 lg:px-20">
          <div className="mx-auto max-w-[1180px]">
            <ScrollReveal>
              <div className="flex flex-wrap items-baseline justify-between gap-6 border-b border-stone-line pb-[22px]">
                <p className="eyebrow">The Core Code</p>
                <p className="font-body text-sm font-medium text-gray">
                  Three principles govern everything we do
                </p>
              </div>
            </ScrollReveal>
            <div className="mt-[clamp(36px,5vh,52px)] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
              {coreCodes.map((c, i) => (
                <ScrollReveal key={c.title} delay={Math.min(5, i + 1)}>
                  <div className="h-full rounded-lg border border-card-line bg-card p-[clamp(30px,3vw,44px)] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 hover:border-[#dad5cf] hover:shadow-[0_28px_56px_-28px_rgba(17,17,17,0.2)]">
                    <div className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-label">
                      {c.label}
                    </div>
                    <h3 className="mt-3.5 mb-[18px] font-display text-[clamp(26px,2.8vw,38px)] font-bold tracking-[-0.03em] text-ink">
                      {c.title}
                      <span className="text-gray">·</span>
                    </h3>
                    {c.paras.map((p, j) => (
                      <p
                        key={j}
                        className="mb-3.5 font-body text-[15px] leading-[1.62] text-text-muted last:mb-0"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Approach 01-04 (ink) ── */}
        <section className="bg-ink px-6 py-[clamp(72px,12vh,140px)] sm:px-10 lg:px-20">
          <div className="mx-auto max-w-[1000px]">
            <ScrollReveal>
              <div className="mb-[clamp(46px,7vh,84px)] max-w-[760px]">
                <p className="eyebrow-on-dark">The Approach</p>
                <h2 className="mt-[clamp(20px,3vh,30px)] mb-[18px] max-w-[22ch] font-display text-[clamp(26px,3.6vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
                  How we pursue these truths in the world
                  <span className="text-gray">.</span>
                </h2>
                <p className="max-w-[60ch] font-body text-[clamp(15px,1.3vw,18px)] leading-[1.62] text-muted-dark">
                  The Core Code names what we are looking for. This is the method
                  by which we find it, earn it, and put it to work.
                </p>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-[clamp(56px,9vh,100px)]">
              {/* 01 - Canvassing Humanity */}
              <ScrollReveal>
                <div className="grid grid-cols-[clamp(50px,7vw,110px)_1fr] items-start gap-x-[clamp(20px,3vw,48px)]">
                  <div className="font-display text-[clamp(30px,3.2vw,46px)] font-extrabold leading-none tracking-[-0.04em] text-gray">
                    01
                  </div>
                  <div>
                    <h2 className="mb-[22px] font-display text-[clamp(26px,3.4vw,46px)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
                      Canvassing Humanity
                    </h2>
                    <p className="mb-[26px] max-w-[62ch] font-body text-[clamp(16px,1.4vw,19px)] leading-[1.62] text-body-dark">
                      To find universal truths, we cannot look at just one
                      industry. We must look everywhere.
                    </p>
                    <div className="flex flex-col gap-4">
                      <Bullet label="The Method">
                        We will acquire and partner with 100 diverse companies
                        over 10 years.
                      </Bullet>
                      <Bullet label="The Diversity">
                        We don&rsquo;t niche down. We want the tutoring company,
                        the pet product manufacturer, the high-tech cooling
                        invention, and the CPG brand.
                      </Bullet>
                      <Bullet label="The Goal">
                        By solving Team and Money problems across wildly
                        different industries, we triangulate the String Theory of
                        business: the patterns that work universally.
                      </Bullet>
                      <Bullet label="The Result">
                        Each company is a beachhead, a data point that helps us
                        refine the Operating System.
                      </Bullet>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* 02 - Earned Access */}
              <ScrollReveal>
                <div className="grid grid-cols-[clamp(50px,7vw,110px)_1fr] items-start gap-x-[clamp(20px,3vw,48px)] border-t border-ink-line pt-[clamp(40px,7vh,80px)]">
                  <div className="font-display text-[clamp(30px,3.2vw,46px)] font-extrabold leading-none tracking-[-0.04em] text-gray">
                    02
                  </div>
                  <div>
                    <h2 className="mb-[22px] font-display text-[clamp(26px,3.4vw,46px)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
                      Earned Access
                    </h2>
                    <p className="mb-[26px] max-w-[62ch] font-body text-[clamp(16px,1.4vw,19px)] leading-[1.62] text-body-dark">
                      We do not buy our way in. We earn our way in.
                    </p>
                    <div className="flex flex-col gap-4">
                      <Bullet label="Performance Ops">
                        We are a Performance Operations company. We install our
                        systems (marketing, finance, culture) into chaotic
                        businesses to make them profitable.
                      </Bullet>
                      <Bullet label="Earned Equity">
                        We grow the pie, then earn our slice of it. When we
                        deploy our own capital, it is fuel for that growth, not a
                        check that buys a passive stake. We earn our equity
                        through the value we add, not the money we put in.
                      </Bullet>
                    </div>
                    <p className="mt-[26px] max-w-[62ch] font-body text-[clamp(15px,1.2vw,17px)] leading-[1.6] text-muted-dark">
                      We are looking for partners who are not just looking for a
                      job, but a life&rsquo;s work. People willing to commit with
                      reckless abandon to a vision that will outlive them.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* 03 - The Moment */}
              <ScrollReveal>
                <div className="grid grid-cols-[clamp(50px,7vw,110px)_1fr] items-start gap-x-[clamp(20px,3vw,48px)] border-t border-ink-line pt-[clamp(40px,7vh,80px)]">
                  <div className="font-display text-[clamp(30px,3.2vw,46px)] font-extrabold leading-none tracking-[-0.04em] text-gray">
                    03
                  </div>
                  <div>
                    <h2 className="mb-[22px] font-display text-[clamp(26px,3.4vw,46px)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
                      The Moment
                    </h2>
                    <p className="mb-[22px] max-w-[62ch] font-body text-[clamp(16px,1.4vw,19px)] leading-[1.62] text-body-dark">
                      Great systems are not invented in isolation. They are
                      discovered slowly, across generations. For centuries,
                      thinkers and builders have explored the same underlying
                      question from different angles: How do humans coordinate at
                      scale?
                    </p>
                    <div className="mb-[26px] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-px overflow-hidden rounded-lg border border-ink-line bg-ink-line">
                      {thinkers.map((t) => (
                        <div key={t.name} className="bg-ink p-[clamp(22px,2.4vw,30px)]">
                          <div className="mb-2.5 font-display text-[clamp(17px,1.5vw,20px)] font-bold tracking-[-0.02em] text-white">
                            {t.name}
                          </div>
                          <p className="font-body text-sm leading-[1.55] text-muted-dark">
                            {t.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="mb-[22px] max-w-[62ch] font-body text-[clamp(15px,1.2vw,17px)] leading-[1.62] text-muted-dark">
                      Each sought something universal: mechanics that persist
                      regardless of era, industry, or individual. None of them
                      were wrong. None of them were complete. What they all lacked
                      was deployment at scale.
                    </p>
                    <p className="mb-[22px] max-w-[62ch] font-body text-[clamp(15px,1.2vw,17px)] leading-[1.62] text-muted-dark">
                      For the first time, we are building on the shoulders of
                      these frameworks inside a technological landscape that can
                      learn, adapt, and compound in real time.
                    </p>
                    <p className="mb-[22px] max-w-[48ch] font-display text-[clamp(18px,1.8vw,24px)] font-semibold leading-[1.34] tracking-[-0.02em] text-white">
                      Artificial intelligence is not the insight. It is the
                      amplifier.
                    </p>
                    <div className="mb-[26px] flex flex-wrap gap-2.5">
                      <Pill>Observe truth faster</Pill>
                      <Pill>Adapt incentives dynamically</Pill>
                      <Pill>Share learning across many contexts simultaneously</Pill>
                    </div>
                    <p className="mb-[22px] max-w-[62ch] font-body text-[clamp(15px,1.2vw,17px)] leading-[1.62] text-muted-dark">
                      What once lived in books, philosophies, and isolated
                      organizations can now live as living infrastructure. This is
                      why now matters. Not because the ideas are new, but because
                      the conditions finally exist to apply them continuously,
                      across many systems, without freezing them into dogma.
                    </p>
                    <div className="mb-[26px] flex flex-wrap gap-2.5">
                      <Pill>Learns instead of ossifies</Pill>
                      <Pill>Adapts instead of dictates</Pill>
                      <Pill>Compounds insight instead of protecting ideology</Pill>
                    </div>
                    <p className="max-w-[62ch] font-body text-[clamp(15px,1.2vw,17px)] font-medium leading-[1.62] text-white">
                      That combination has never existed before. That is why
                      ExitStudio exists now.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* 04 - The Nervous System Promise */}
              <ScrollReveal>
                <div className="grid grid-cols-[clamp(50px,7vw,110px)_1fr] items-start gap-x-[clamp(20px,3vw,48px)] border-t border-ink-line pt-[clamp(40px,7vh,80px)]">
                  <div className="font-display text-[clamp(30px,3.2vw,46px)] font-extrabold leading-none tracking-[-0.04em] text-gray">
                    04
                  </div>
                  <div>
                    <h2 className="mb-[22px] font-display text-[clamp(26px,3.4vw,46px)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
                      The Nervous System Promise
                    </h2>
                    <p className="mb-6 max-w-[42ch] font-display text-[clamp(18px,1.9vw,26px)] font-semibold leading-[1.32] tracking-[-0.02em] text-white">
                      We are not a hammer looking for a nail. We are a nervous
                      system looking for a body.
                    </p>
                    <p className="mb-[22px] max-w-[62ch] font-body text-[clamp(15px,1.2vw,17px)] leading-[1.62] text-muted-dark">
                      When we integrate with a company, we don&rsquo;t just fix
                      their ads or their books. We install a conscience and a
                      nervous system that forces the business to face The Truth,
                      optimize The Money, and empower The Team.
                    </p>
                    <p className="max-w-[62ch] font-body text-[clamp(15px,1.2vw,17px)] leading-[1.62] text-muted-dark">
                      We are building the infrastructure for the next generation
                      to stand on our shoulders and see further than we ever
                      could.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── CTA (stone) ── */}
        <section className="bg-stone px-6 py-[clamp(80px,14vh,170px)] text-ink sm:px-10 lg:px-20">
          <ScrollReveal>
            <div className="mx-auto max-w-[720px] text-center">
              <div className="font-display text-[clamp(26px,3.4vw,44px)] font-bold leading-[1.12] tracking-[-0.03em] text-ink">
                If you read this far, you already know
                <span className="text-gray">.</span>
              </div>
              <p className="mx-auto mt-[clamp(24px,4vh,32px)] max-w-[58ch] font-body text-[clamp(16px,1.3vw,19px)] leading-[1.62] text-text-muted">
                The Constitution describes how we think. The partnership is how
                we put it to work. If you are running a business that deserves
                this kind of infrastructure, and you want partners with real skin
                in the outcome, apply below.
              </p>
              <div className="mt-[clamp(32px,5vh,44px)] flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-md bg-ink px-8 py-4 font-body text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-hover"
                >
                  Apply to partner with ExitStudio
                </button>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 border-b border-transparent pb-[3px] font-body text-base font-semibold text-ink transition-all hover:border-ink"
                >
                  Return to the main site
                  <span className="text-gray transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
      <ApplicationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
