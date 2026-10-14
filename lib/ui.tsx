"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type PlannerPrefill = {
  month?: string;
  nights?: number;
  travelers?: number;
  journeyType?: string;
  journeySlug?: string;
  festival?: string;
};

type Ui = {
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  plannerOpen: boolean;
  plannerPrefill: PlannerPrefill;
  openPlanner: (prefill?: PlannerPrefill) => void;
  closePlanner: () => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
};

const UiContext = createContext<Ui | null>(null);

export function UiProvider({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [plannerPrefill, setPlannerPrefill] = useState<PlannerPrefill>({});
  const [menuOpen, setMenuOpen] = useState(false);

  const openSearch = useCallback(() => { setMenuOpen(false); setSearchOpen(true); }, []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);
  const openPlanner = useCallback((prefill: PlannerPrefill = {}) => {
    setPlannerPrefill(prefill);
    setMenuOpen(false);
    setSearchOpen(false);
    setPlannerOpen(true);
  }, []);
  const closePlanner = useCallback(() => setPlannerOpen(false), []);

  // Lock scroll when any overlay is open
  useEffect(() => {
    const locked = searchOpen || plannerOpen || menuOpen;
    document.documentElement.style.overflow = locked ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [searchOpen, plannerOpen, menuOpen]);

  // Global Esc closes everything
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setSearchOpen(false); setPlannerOpen(false); setMenuOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const value = useMemo<Ui>(() => ({
    searchOpen, openSearch, closeSearch, plannerOpen, plannerPrefill, openPlanner, closePlanner, menuOpen, setMenuOpen,
  }), [searchOpen, openSearch, closeSearch, plannerOpen, plannerPrefill, openPlanner, closePlanner, menuOpen]);

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be used within UiProvider");
  return ctx;
}
