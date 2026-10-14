"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { NavGroup } from "@/config/site";
import { images } from "@/data/images";
import { Arrow } from "@/components/ui/Button";

export function MegaMenu({ group, onClose, id }: { group: NavGroup; onClose: () => void; id: string }) {
  const feature = images[group.feature.image];
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-full border-t border-line bg-whitewash shadow-[0_30px_60px_-30px_rgba(31,26,23,0.35)]"
      role="region"
      aria-label={`${group.label} menu`}
    >
      <div className="container-x grid grid-cols-12 gap-8 py-10">
        <div className="col-span-8 grid gap-10" style={{ gridTemplateColumns: `repeat(${Math.max(group.columns.length, 2)}, minmax(0, 1fr))` }}>
          {group.columns.map((col, i) => (
            <div key={i}>
              {col.title && <p className="eyebrow mb-4 text-ink-mute">{col.title}</p>}
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} onClick={onClose} className="font-display text-[1.375rem] leading-tight text-ink link-underline hover:text-maroon transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-full mt-2 flex items-center gap-6 border-t border-line pt-6">
            <Link href={group.href} onClick={onClose} className="inline-flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.18em] font-medium text-maroon link-underline">
              View all {group.label.toLowerCase()} <Arrow />
            </Link>
          </div>
        </div>
        <Link href={group.feature.href} onClick={onClose} className="group col-span-4 block">
          <div className="relative aspect-[4/3] img-zoom bg-stone">
            <Image src={feature.src} alt={feature.alt} fill sizes="400px" className="object-cover" />
          </div>
          <p className="eyebrow mt-4 mb-1">Featured</p>
          <p className="display-sm">{group.feature.title}</p>
          <p className="mt-1 text-[0.9375rem] text-ink-soft">{group.feature.line}</p>
        </Link>
      </div>
    </motion.div>
  );
}
