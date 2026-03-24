"use client";

interface HeroProps {
  onApplyClick: () => void;
}

export default function Hero({ onApplyClick }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-cream">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-12">
        {/* Left: Copy */}
        <div className="flex flex-col justify-center px-6 pt-28 pb-16 lg:col-span-7 lg:px-12 lg:pt-0 lg:pb-0">
          <div className="hero-stagger max-w-xl">
            <div className="gold-rule mb-8" />
            <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-warm-black sm:text-5xl lg:text-6xl">
              We scale proven businesses by betting our own capital, teams, and
              systems.
            </h1>
            <p className="mt-6 font-serif text-xl leading-relaxed text-muted-light sm:text-2xl">
              We only win when you do.
            </p>
            <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-muted-light">
              No fees. No retainers. We embed our operators and systems in
              exchange for equity we earn through the growth we create together.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={onApplyClick}
                className="inline-flex items-center justify-center rounded-sm bg-warm-black px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-cream transition-all hover:bg-warm-black-light"
              >
                See if you qualify
              </button>
              <a
                href="#model"
                className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-text-on-light/70 transition-colors hover:text-text-on-light"
              >
                How the partnership works
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Dark panel */}
        <div className="relative flex flex-col justify-center bg-warm-black px-6 py-16 lg:col-span-5 lg:px-12 lg:py-0">
          {/* Subtle texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="hero-stagger relative">
            <p className="label mb-12">The Partnership</p>

            <div className="space-y-10">
              <div>
                <span className="font-serif text-6xl font-light tracking-tight text-gold sm:text-7xl lg:text-8xl">
                  $150M+
                </span>
                <p className="mt-2 font-sans text-sm font-medium tracking-wide text-muted-dark">
                  In combined founder career revenue
                </p>
              </div>

              <div>
                <span className="font-serif text-6xl font-light tracking-tight text-gold sm:text-7xl lg:text-8xl">
                  5
                </span>
                <p className="mt-2 font-sans text-sm font-medium tracking-wide text-muted-dark">
                  Operators with exits
                </p>
              </div>
            </div>

            <div className="gold-rule my-12" />

            <p className="max-w-sm font-serif text-lg leading-relaxed text-text-on-dark/80 italic">
              We built this because we needed it
              ourselves. It didn&rsquo;t exist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
