"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavigationProps {
  onApplyClick: () => void;
  // dark: the page sits on an ink (#111) background at the top (e.g. Constitution).
  //   Nav starts transparent-on-dark and flips to the stone bar once scrolled.
  dark?: boolean;
}

function Wordmark({ light }: { light: boolean }) {
  return (
    <span
      className={`font-display text-[22px] font-bold leading-none tracking-[-0.03em] transition-colors duration-300 ${
        light ? "text-white" : "text-ink"
      }`}
    >
      Exit<span className="text-gray">·</span>Studio
    </span>
  );
}

export default function Navigation({ onApplyClick, dark }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // On the Constitution page the secondary link points home; elsewhere it
  // points to the Constitution. Avoids a dead self-link in the nav.
  const onConstitution = pathname === "/constitution";
  const secondary = onConstitution
    ? { href: "/", label: "Home" }
    : { href: "/constitution", label: "Constitution" };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On a dark page, nav content is light until the user scrolls and the bar fills in.
  const onDark = !!dark && !scrolled;

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-40 border-b transition-colors duration-300 ${
        onDark
          ? "border-ink-line bg-ink/[0.78] backdrop-blur-[14px]"
          : "border-stone-line bg-stone/[0.82] backdrop-blur-[14px]"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-6 py-4 sm:px-10 lg:px-20">
        <Link href="/" aria-label="ExitStudio home">
          <Wordmark light={onDark} />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          <Link
            href={secondary.href}
            className={`font-body text-[15px] font-medium transition-colors ${
              onDark
                ? "text-muted-dark hover:text-white"
                : "text-ink/80 hover:text-ink"
            }`}
          >
            {secondary.label}
          </Link>
          <button
            onClick={onApplyClick}
            className={`rounded-md px-5 py-2.5 font-body text-sm font-semibold transition-all ${
              onDark
                ? "bg-white text-ink hover:bg-stone hover:-translate-y-px"
                : "bg-ink text-white hover:bg-ink-hover hover:-translate-y-px"
            }`}
          >
            Apply
          </button>
        </div>
      </div>
    </nav>
  );
}
