"use client";

import { useEffect, useState } from "react";

interface NavigationProps {
  onApplyClick: () => void;
  // darkHero: split hero — cream left panel (logo), dark right panel (links at lg+).
  //   Only desktop nav-right items go light.
  darkHero?: boolean;
  // darkFull: fully dark hero — entire nav background is dark at all breakpoints.
  //   All nav items go light regardless of viewport width.
  darkFull?: boolean;
}

export default function Navigation({ onApplyClick, darkHero, darkFull }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Nav is over some dark context (either split or full) and hasn't scrolled yet.
  const onDark = (darkHero || darkFull) && !scrolled;
  // Logo only goes light when the ENTIRE background is dark (constitution page etc.)
  const logoLight = darkFull && !scrolled;
  // Links go light at all breakpoints on a fully dark page; only at lg+ on a split hero.
  const linksFullLight = darkFull && !scrolled;
  const linksSplitLight = darkHero && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-gold/15"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a
            href="/"
            className={`font-serif text-xl font-semibold tracking-tight lg:text-2xl transition-colors duration-300 ${
              logoLight ? "text-text-on-dark" : "text-warm-black"
            }`}
          >
            ExitStudio
          </a>

          <div className="flex items-center gap-8">
            <a
              href="/constitution"
              className={`font-sans text-sm font-medium transition-colors ${
                linksFullLight
                  ? "text-text-on-dark/70 hover:text-text-on-dark"
                  : linksSplitLight
                  ? "text-text-on-light/70 hover:text-text-on-light lg:text-text-on-dark/70 lg:hover:text-text-on-dark"
                  : "text-text-on-light/70 hover:text-text-on-light"
              }`}
            >
              Constitution
            </a>
            <button
              onClick={onApplyClick}
              className={`rounded-sm border px-5 py-2 font-sans text-sm font-medium transition-all ${
                onDark
                  ? "bg-gold border-gold text-warm-black hover:bg-gold-light hover:border-gold-light"
                  : "bg-warm-black border-warm-black text-cream hover:bg-gold hover:border-gold hover:text-warm-black"
              }`}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
