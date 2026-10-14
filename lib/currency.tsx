"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { currencies, type CurrencyCode } from "@/config/site";

type Ctx = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  convert: (usd: number) => number;
  format: (usd: number, opts?: { round?: number; approx?: boolean }) => string;
  symbol: string;
};

const CurrencyContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "dzong-house:currency";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;
      if (saved && currencies.options.some((o) => o.code === saved)) setCurrencyState(saved);
    } catch {}
  }, []);

  const setCurrency = useCallback((c: CurrencyCode) => {
    setCurrencyState(c);
    try { window.localStorage.setItem(STORAGE_KEY, c); } catch {}
  }, []);

  const value = useMemo<Ctx>(() => {
    const opt = currencies.options.find((o) => o.code === currency) ?? currencies.options[0];
    const convert = (usd: number) => usd * opt.rate;
    const format: Ctx["format"] = (usd, opts) => {
      const n = convert(usd);
      const round = opts?.round ?? (opt.code === "INR" ? 100 : opt.code === "USD" ? 1 : 5);
      const rounded = Math.round(n / round) * round;
      const s = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(rounded);
      return `${opts?.approx && opt.code !== "USD" ? "≈ " : ""}${opt.symbol}${s}`;
    };
    return { currency, setCurrency, convert, format, symbol: opt.symbol };
  }, [currency, setCurrency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
