"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/config/site";
import { useUi } from "@/lib/ui";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

/**
 * Header behaviour (mirrors the reference):
 * - transparent over a hero (`transparent` prop set via data attribute on the page), white text
 * - after 60px of scroll: solid page colour, compact height, hairline
 * - mega-menu opens on hover / focus / click, closes on mouse leave, Esc, route change
 */
export function Header() {
  const pathname = usePathname();
  const { openSearch, openPlanner, setMenuOpen } = useUi();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [transparentPage, setTransparentPage] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pages with a full-bleed hero mark <main data-hero="true">
  useEffect(() => {
    setActive(null);
    const main = document.querySelector("main");
    setTransparentPage(main?.getAttribute("data-hero") === "true");
  }, [pathname]);

  const light = transparentPage && !scrolled && !active;

  const open = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setActive(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActive(null), 120);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,height] duration-300",
          light ? "bg-transparent text-white" : "bg-whitewash/95 text-ink backdrop-blur border-b border-line",
        )}
        onMouseLeave={scheduleClose}
      >
        <div className={cn("container-x grid grid-cols-[1fr_auto_1fr] items-center transition-[height] duration-300", scrolled ? "h-16" : "h-[72px] md:h-[88px]")}>
          {/* Left: nav (desktop) / hamburger (mobile) */}
          <div className="flex items-center gap-7">
            <button
              className="flex items-center gap-3 lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-3/4 bg-current" />
              </span>
              <span className="hidden text-[0.6875rem] uppercase tracking-[0.18em] font-medium sm:inline">Menu</span>
            </button>
            <nav className="hidden lg:block" aria-label="Primary">
              <ul className="flex items-center gap-7">
                {navigation.map((g) => {
                  const isActive = active === g.label;
                  return (
                    <li key={g.label} onMouseEnter={() => open(g.label)} onFocus={() => open(g.label)}>
                      <Link
                        href={g.href}
                        aria-expanded={isActive}
                        aria-controls={`mega-${g.label}`}
                        onClick={() => setActive(null)}
                        className={cn(
                          "relative py-2 text-[0.6875rem] uppercase tracking-[0.18em] font-medium transition-colors",
                          "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-current after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
                          isActive && "after:scale-x-100",
                        )}
                      >
                        {g.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Centre: logo */}
          <Logo light={light} compact={scrolled} />

          {/* Right: utilities */}
          <div className="flex items-center justify-end gap-5 md:gap-7">
            <CurrencySwitcher light={light} className="hidden sm:inline-flex" />
            <button onClick={openSearch} aria-label="Search" className="grid h-8 w-8 place-items-center">
              <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
                <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.2" />
                <path d="M13 13l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={() => openPlanner()}
              className={cn("btn hidden md:inline-flex !py-3 !px-5", light ? "btn-ghost" : "btn-primary")}
            >
              Plan your journey
            </button>
          </div>
        </div>

        <AnimatePresence>
          {active && (() => {
            const group = navigation.find((g) => g.label === active)!;
            return (
              <div key={group.label} onMouseEnter={() => open(group.label)} onMouseLeave={scheduleClose} className="hidden lg:block">
                <MegaMenu id={`mega-${group.label}`} group={group} onClose={() => setActive(null)} />
              </div>
            );
          })()}
        </AnimatePresence>
      </header>
      {/* Backdrop while mega-menu is open */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-40 hidden bg-ink/25 lg:block" aria-hidden="true" onMouseEnter={() => setActive(null)} />
        )}
      </AnimatePresence>
      <MobileMenu />
    </>
  );
}
