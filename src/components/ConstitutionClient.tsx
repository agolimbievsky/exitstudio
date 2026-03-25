"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ApplicationModal from "./ApplicationModal";
import ScrollReveal from "./ScrollReveal";

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function SectionNumber({
  numeral,
  prefix,
}: {
  numeral: string;
  prefix?: string;
}) {
  return (
    <div className="mb-6 flex items-baseline gap-4">
      {prefix && <span className="label label-on-light">{prefix}</span>}
      <span className="font-serif text-5xl font-light leading-none tracking-tight text-gold-dark lg:text-6xl">
        {numeral}
      </span>
    </div>
  );
}

function SectionBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl space-y-5 font-sans text-lg leading-relaxed text-text-on-light">
      {children}
    </div>
  );
}

function ItemList({
  items,
}: {
  items: { label: string; text: string }[];
}) {
  return (
    <ul className="mt-8 space-y-6">
      {items.map((item) => (
        <li key={item.label} className="flex gap-4">
          <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-dark" />
          <p className="font-sans text-lg leading-relaxed text-text-on-light">
            <span className="font-semibold text-warm-black">{item.label}:</span>{" "}
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

function DarkCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 border-l-2 border-gold/40 bg-warm-black/5 py-6 pl-8 pr-6 lg:pl-10">
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main page
───────────────────────────────────────────── */

export default function ConstitutionClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navigation onApplyClick={() => setModalOpen(true)} darkFull={true} />

      <main>
        {/* ── Hero ─────────────────────────────────── */}
        <section className="relative bg-warm-black pb-24 pt-40 lg:pb-32 lg:pt-48">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            }}
          />
          <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
            <div className="hero-stagger">
              <p className="label mb-8">ExitStudio</p>
              <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-text-on-dark sm:text-5xl lg:text-6xl xl:text-7xl">
                The Constitution
                <br />
                <span className="font-light text-muted-dark">&amp; The Long Game</span>
              </h1>
              <div className="gold-rule my-10" />
              <p className="max-w-2xl font-serif text-xl leading-relaxed text-text-on-dark/80 sm:text-2xl">
                We are not building a portfolio. We are building an engine to
                propel humanity for the next 1,000&nbsp;years.
              </p>
              <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-muted-dark">
                Most organizations, whether companies, governments, or religions,
                eventually fail because they become rigid. They start by
                liberating people but end up stifling them to protect the status
                quo.
              </p>
              <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-muted-dark">
                We believe it is possible to build an organization that lasts for
                a millennium without holding humanity back. We are not here to
                predict the future, because human bias always gets it wrong.{" "}
                <span className="text-text-on-dark">
                  We are here to uncover the future.
                </span>
              </p>
              <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-muted-dark">
                We are building a{" "}
                <span className="text-text-on-dark">Living Constitution</span>:
                an operating system for human cooperation that evolves, learns,
                and improves with every generation.
              </p>
            </div>
          </div>
        </section>

        {/* ── Core Code I: Truth (cream) ───────── */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <ScrollReveal>
              <div>
                <p className="mb-10 font-sans text-sm font-medium uppercase tracking-widest text-muted-light/70">
                  Three principles govern everything we do.
                </p>
                <SectionNumber numeral="I" prefix="Core Code" />
                <h2 className="mb-8 font-serif text-3xl font-semibold tracking-tight text-warm-black sm:text-4xl">
                  Truth
                </h2>
                <SectionBody>
                  <p>
                    We view business not as an end in itself, but as a
                    laboratory to study the universal systems that govern human
                    progress.
                  </p>
                  <p>
                    Truth is how information is validated, communicated, and
                    preserved. In business, this is marketing and data, the
                    feedback loop between value created and value received.
                  </p>
                  <p>
                    Our mission is to decode the universal laws of these
                    systems. By perfecting them, we create a framework that can
                    scale indefinitely.
                  </p>
                </SectionBody>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Core Code II: Money (dark) ────────── */}
        <section className="bg-warm-black py-24 lg:py-36">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <ScrollReveal>
              <div>
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="label">Core Code</span>
                  <span className="font-serif text-5xl font-light leading-none tracking-tight text-gold lg:text-6xl">
                    II
                  </span>
                </div>
                <h2 className="mb-8 font-serif text-3xl font-semibold tracking-tight text-text-on-dark sm:text-4xl">
                  Money
                </h2>
                <div className="max-w-2xl space-y-5 font-sans text-lg leading-relaxed text-text-on-dark/80">
                  <p>
                    Money is the mechanism for storing and exchanging value. It
                    is the fuel that proves a truth is sustainable.
                  </p>
                  <p>
                    Without it, even the most brilliant insight dies in
                    obscurity. With it deployed wisely, a single idea can
                    reshape entire industries.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Core Code III: Team (cream) ───────── */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <ScrollReveal>
              <div>
                <SectionNumber numeral="III" prefix="Core Code" />
                <h2 className="mb-8 font-serif text-3xl font-semibold tracking-tight text-warm-black sm:text-4xl">
                  Team
                </h2>
                <SectionBody>
                  <p>
                    Team is how humans organize, collaborate, and incentivize
                    one another to achieve things they cannot do alone.
                  </p>
                  <p>
                    The right structure turns a group of individuals into a
                    force multiplier. The wrong one turns brilliance into
                    bureaucracy.
                  </p>
                </SectionBody>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Section IV: Canvassing Humanity ───── */}
        <section className="bg-warm-black py-24 lg:py-36">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <ScrollReveal>
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-serif text-5xl font-light leading-none tracking-tight text-gold lg:text-6xl">
                  IV
                </span>
              </div>
              <h2 className="mb-8 font-serif text-3xl font-semibold tracking-tight text-text-on-dark sm:text-4xl">
                Canvassing Humanity
              </h2>
              <p className="max-w-2xl font-sans text-lg leading-relaxed text-muted-dark">
                To find universal truths, we cannot look at just one industry.
                We must look everywhere.
              </p>
              <ul className="mt-10 max-w-2xl space-y-7">
                {[
                  {
                    label: "The Method",
                    text: "We will acquire and partner with 100 diverse companies over 10 years.",
                  },
                  {
                    label: "The Diversity",
                    text: "We don't niche down. We want the tutoring company, the pet product manufacturer, the high-tech cooling invention, and the CPG brand.",
                  },
                  {
                    label: "The Goal",
                    text: "By solving Team and Money problems across wildly different industries, we triangulate the String Theory of business: the patterns that work universally.",
                  },
                  {
                    label: "The Result",
                    text: "Each company is a beachhead, a data point that helps us refine the Operating System.",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <p className="font-sans text-lg leading-relaxed text-text-on-dark/80">
                      <span className="font-semibold text-text-on-dark">
                        {item.label}:
                      </span>{" "}
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Section V: Earned Access ────────────── */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <ScrollReveal>
              <SectionNumber numeral="V" />
              <h2 className="mb-8 font-serif text-3xl font-semibold tracking-tight text-warm-black sm:text-4xl">
                Earned Access
              </h2>
              <SectionBody>
                <p className="font-medium text-warm-black">
                  We do not buy our way in. We earn our way in.
                </p>
              </SectionBody>
              <ItemList
                items={[
                  {
                    label: "Performance Ops",
                    text: "We are a Performance Operations company. We install our systems (marketing, finance, culture) into chaotic businesses to make them profitable.",
                  },
                  {
                    label: "Earned Equity",
                    text: "We grow the pie to buy our slice. We do not use cash to buy equity; we use growth to buy equity. The business must buy itself for us through the value we add.",
                  },
                ]}
              />
              <DarkCallout>
                <p className="font-serif text-xl leading-relaxed text-warm-black sm:text-2xl">
                  We are looking for partners who are not just looking for a job,
                  but a life&rsquo;s work. People willing to commit with reckless
                  abandon to a vision that will outlive them.
                </p>
              </DarkCallout>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Section VI: The Moment ──────────────── */}
        <section className="bg-warm-black py-24 lg:py-36">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <ScrollReveal>
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-serif text-5xl font-light leading-none tracking-tight text-gold lg:text-6xl">
                  VI
                </span>
              </div>
              <h2 className="mb-8 font-serif text-3xl font-semibold tracking-tight text-text-on-dark sm:text-4xl">
                The Moment
              </h2>

              <p className="max-w-2xl font-sans text-lg leading-relaxed text-muted-dark">
                Great systems are not invented in isolation. They are
                discovered slowly, across generations. For centuries, thinkers
                and builders have explored the same underlying question from
                different angles: How do humans coordinate at scale?
              </p>

              {/* Thinkers */}
              <div className="mt-12 max-w-2xl space-y-6 border-l border-gold/25 pl-8">
                {[
                  {
                    name: "Adam Smith",
                    contribution:
                      "studied incentives and self-interest as invisible systems.",
                  },
                  {
                    name: "Jim Collins",
                    contribution:
                      "examined what endures when leadership changes and cycles turn.",
                  },
                  {
                    name: "Ray Dalio",
                    contribution:
                      "codified principles for decision-making under uncertainty.",
                  },
                ].map((t) => (
                  <p
                    key={t.name}
                    className="font-sans text-lg leading-relaxed text-text-on-dark/80"
                  >
                    <span className="font-semibold text-text-on-dark">
                      {t.name}
                    </span>{" "}
                    {t.contribution}
                  </p>
                ))}
              </div>

              <p className="mt-10 max-w-2xl font-sans text-lg leading-relaxed text-muted-dark">
                Each sought something universal: mechanics that persist
                regardless of era, industry, or individual. None of them were
                wrong. None of them were complete.
              </p>
              <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-muted-dark">
                What they all lacked was deployment at scale.
              </p>
              <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-muted-dark">
                For the first time, we are building on the shoulders of these
                frameworks inside a technological landscape that can learn, adapt,
                and compound in real time.
              </p>

              <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed text-text-on-dark sm:text-2xl">
                Artificial intelligence is not the insight. It is the amplifier.
              </p>

              <ul className="mt-8 max-w-2xl space-y-3">
                {[
                  "Observe truth faster",
                  "Adapt incentives dynamically",
                  "Share learning across many contexts simultaneously",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2.5 h-1 w-4 flex-shrink-0 bg-gold/50" />
                    <span className="font-sans text-lg text-text-on-dark/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 max-w-2xl font-sans text-lg leading-relaxed text-muted-dark">
                What once lived in books, philosophies, and isolated organizations
                can now live as living infrastructure. This is why now matters.
                Not because the ideas are new, but because the conditions finally
                exist to apply them continuously, across many systems, without
                freezing them into dogma.
              </p>

              <ul className="mt-8 max-w-2xl space-y-3">
                {[
                  "Learns instead of ossifies",
                  "Adapts instead of dictates",
                  "Compounds insight instead of protecting ideology",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2.5 h-1 w-4 flex-shrink-0 bg-gold/50" />
                    <span className="font-sans text-lg text-text-on-dark/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 max-w-2xl font-serif text-xl leading-relaxed text-text-on-dark sm:text-2xl">
                That combination has never existed before. That is why Exit
                Studio exists now.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Section VII: The Nervous System Promise */}
        <section className="bg-cream py-24 lg:py-36">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <ScrollReveal>
              <SectionNumber numeral="VII" />
              <h2 className="mb-8 font-serif text-3xl font-semibold tracking-tight text-warm-black sm:text-4xl">
                The Nervous System Promise
              </h2>
              <SectionBody>
                <p className="font-medium text-warm-black">
                  We are not a hammer looking for a nail. We are a nervous system
                  looking for a body.
                </p>
                <p>
                  When we integrate with a company, we don&rsquo;t just fix their
                  ads or their books. We install a conscience and a nervous system
                  that forces the business to face The Truth, optimize The Money,
                  and empower The Team.
                </p>
                <p>
                  We are building the infrastructure for the next generation to
                  stand on our shoulders and see further than we ever could.
                </p>
              </SectionBody>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Closing CTA ─────────────────────────── */}
        <section className="bg-warm-black py-28 sm:py-36 lg:py-44">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
            <ScrollReveal>
              <div className="gold-rule mx-auto mb-12" />
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="font-serif text-3xl font-medium leading-snug text-text-on-dark sm:text-4xl lg:text-5xl">
                If you read this far, you already know.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-muted-dark">
                The Constitution describes how we think. The partnership is how
                we put it to work. If you are running a business that deserves
                this kind of infrastructure, and you want partners with real
                skin in the outcome, apply below.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-sm bg-cream px-9 py-4 font-sans text-base font-medium tracking-wide text-warm-black transition-all hover:bg-cream-dark"
                >
                  Apply to Partner with ExitStudio
                </button>
                <a
                  href="/"
                  className="group inline-flex items-center gap-2 font-sans text-base font-medium text-muted-dark transition-colors hover:text-text-on-dark"
                >
                  Return to the main site
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
      <ApplicationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
