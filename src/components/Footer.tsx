"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  // Mirror the nav: link to the page you are not currently on.
  const secondary =
    pathname === "/constitution"
      ? { href: "/", label: "Home" }
      : { href: "/constitution", label: "Constitution" };

  return (
    <footer className="border-t border-ink-line bg-ink px-6 py-[clamp(40px,6vh,56px)] text-white sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-5">
        <Link
          href="/"
          className="font-display text-[22px] font-bold leading-none tracking-[-0.03em] text-white"
        >
          Exit<span className="text-gray">·</span>Studio
        </Link>
        <div className="flex flex-wrap items-center gap-x-[clamp(20px,3vw,36px)] gap-y-3">
          <Link
            href={secondary.href}
            className="font-body text-sm font-medium text-muted-dark transition-colors hover:text-white"
          >
            {secondary.label}
          </Link>
          <span className="font-body text-[13px] text-[#6B7177]">
            © 2026 ExitStudio. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
