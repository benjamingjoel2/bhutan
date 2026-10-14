"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useUi } from "@/lib/ui";
import { PlannerForm } from "./PlannerForm";

export function PlannerModal() {
  const { plannerOpen, closePlanner, plannerPrefill } = useUi();
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (plannerOpen) panel.current?.focus();
  }, [plannerOpen]);

  return (
    <AnimatePresence>
      {plannerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/50 backdrop-blur-sm md:items-center md:p-6"
          onMouseDown={(e) => { if (e.target === e.currentTarget) closePlanner(); }}
        >
          <motion.div
            ref={panel}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Plan your journey"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden bg-whitewash outline-none md:max-h-[90vh]"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-4 md:px-10">
              <p className="eyebrow">Plan your journey</p>
              <button onClick={closePlanner} className="text-[0.6875rem] uppercase tracking-[0.18em] font-medium">
                Close <span className="ml-2 hidden rounded border border-line-strong px-1.5 py-0.5 text-[0.5625rem] md:inline">Esc</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6 md:px-10">
              <PlannerForm prefill={plannerPrefill} onClose={closePlanner} compact />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
