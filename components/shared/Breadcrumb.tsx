import Link from "next/link";

export function Breadcrumb({ items, light }: { items: { label: string; href?: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-5 text-[0.6875rem] uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-ink-mute"}`}>
      <ol className="flex flex-wrap gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            {it.href ? <Link href={it.href} className="hover:underline">{it.label}</Link> : <span aria-current="page">{it.label}</span>}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
