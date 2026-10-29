"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useUi } from "@/lib/ui";

/**
 * Overlays are code-split: their JavaScript (and the search index, which pulls in
 * every destination, journey and post) is fetched in the background once the page
 * is idle, and mounted only after first use. Nothing here blocks the first paint.
 */
const SearchOverlay = dynamic(() => import("./SearchOverlay").then((m) => m.SearchOverlay), { ssr: false });
const PlannerModal = dynamic(() => import("@/components/planner/PlannerModal").then((m) => m.PlannerModal), { ssr: false });
const MobileMenu = dynamic(() => import("./MobileMenu").then((m) => m.MobileMenu), { ssr: false });

const preload = () => {
  void import("./SearchOverlay");
  void import("@/components/planner/PlannerModal");
  void import("./MobileMenu");
};

export function LazyOverlays() {
  const { searchOpen, plannerOpen, menuOpen } = useUi();
  const [used, setUsed] = useState({ search: false, planner: false, menu: false });

  useEffect(() => {
    setUsed((u) => ({ search: u.search || searchOpen, planner: u.planner || plannerOpen, menu: u.menu || menuOpen }));
  }, [searchOpen, plannerOpen, menuOpen]);

  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(preload, { timeout: 4000 });
    else window.setTimeout(preload, 2500);
  }, []);

  return (
    <>
      {used.search && <SearchOverlay />}
      {used.planner && <PlannerModal />}
      {used.menu && <MobileMenu />}
    </>
  );
}
