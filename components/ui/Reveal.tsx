import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll reveal markers. These render plain server HTML that is visible from the first
 * paint. components/layout/RevealObserver.tsx fades in only the items that start below
 * the fold, so nothing on screen ever waits for JavaScript. See `.reveal` in globals.css.
 */
type Props = {
  children: ReactNode;
  /** Kept for API compatibility; stagger timing comes from RevealObserver. */
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "figure";
  once?: boolean;
};

export function Reveal({ children, className, as: Tag = "div" }: Props) {
  return <Tag className={cn("reveal", className)}>{children}</Tag>;
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("stagger", className)}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
