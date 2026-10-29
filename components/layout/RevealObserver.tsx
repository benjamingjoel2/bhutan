"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One shared IntersectionObserver for every `.reveal` element (see components/ui/Reveal.tsx).
 * Only elements that are below the fold when the page hydrates are hidden and then
 * faded in; anything already on screen stays put. Re-scans after client navigation.
 */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.remove("reveal-pending");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    const scan = () => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>(".reveal:not([data-reveal])").forEach((el) => {
        el.dataset.reveal = "1";
        if (el.getBoundingClientRect().top < vh) return; // on screen: never hide
        const parent = el.parentElement;
        if (parent?.classList.contains("stagger")) {
          const i = Array.prototype.indexOf.call(parent.children, el) % 4;
          el.style.setProperty("--reveal-delay", `${i * 90}ms`);
        }
        el.classList.add("reveal-pending");
        io.observe(el);
      });
    };

    scan();
    const t = window.setTimeout(scan, 400); // catch late-mounted sections
    return () => { window.clearTimeout(t); io.disconnect(); };
  }, [pathname]);
  return null;
}
