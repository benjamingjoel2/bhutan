"use client";

import { AnimatePresence } from "framer-motion";
import { navigation } from "@/config/site";
import { MegaMenu } from "./MegaMenu";

/** Mega-menu panel with its enter/exit animation. Code-split from the header. */
export default function MegaMenuLayer({ active, onEnter, onLeave, onClose }: { active: string | null; onEnter: (label: string) => void; onLeave: () => void; onClose: () => void }) {
  const group = active ? navigation.find((g) => g.label === active) : undefined;
  return (
    <AnimatePresence>
      {group && (
        <div key={group.label} onMouseEnter={() => onEnter(group.label)} onMouseLeave={onLeave} className="hidden lg:block">
          <MegaMenu id={`mega-${group.label}`} group={group} onClose={onClose} />
        </div>
      )}
    </AnimatePresence>
  );
}
