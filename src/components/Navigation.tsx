"use client";

import { useEffect, useState } from "react";

interface NavigationProps {
  onApplyClick: () => void;
  darkHero?: boolean;
}

export default function Navigation({ onApplyClick, darkHero }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = darkHero && !scrolled;

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
            className="font-serif text-xl font-semibold tracking-tight lg:text-2xl transition-colors duration-300 text-warm-black"
          >
            ExitStudio
          </a>

          <div className="flex items-center gap-8">
            <a
              href="/constitution"
              className={`font-sans text-sm font-medium transition-colors ${
                onDark
                  ? "text-text-on-light/70 hover:text-text-on-light lg:text-text-on-dark/70 lg:hover:text-text-on-dark"
                  : "text-text-on-light/70 hover:text-text-on-light"
              }`}
            >
              Constitution
            </a>
            <button
              onClick={onApplyClick}
              className="rounded-sm border border-gold/40 px-5 py-2 font-sans text-sm font-medium text-gold-dark transition-all hover:border-gold hover:bg-gold/5"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
