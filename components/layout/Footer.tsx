import Link from "next/link";
import { footerColumns, legalLinks, site } from "@/config/site";
import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-stone text-ink">
      {/* Row 1: newsletter */}
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 md:items-end md:py-20">
        <div className="max-w-md">
          <p className="eyebrow mb-3">Letters from the kingdom</p>
          <h2 className="display-md">A few lines, a few times a year.</h2>
          <p className="mt-3 text-[0.9375rem] text-ink-soft">Festival dates as they are confirmed, new lodges, and the quiet months worth travelling in.</p>
          <NewsletterForm className="mt-6" />
        </div>
      </div>

      <div className="container-x hairline" />

      {/* Row 2: link columns + contact */}
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="eyebrow mb-5 text-ink-mute">{col.title}</p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-[0.9375rem] text-ink-soft transition-colors hover:text-maroon">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div>
          <p className="eyebrow mb-5 text-ink-mute">Contact</p>
          <ul className="space-y-3 text-[0.9375rem] text-ink-soft">
            <li><a href={`mailto:${site.contact.email}`} className="hover:text-maroon">{site.contact.email}</a></li>
            <li className="pt-2 text-ink-mute">{site.contact.address}</li>
          </ul>
          <Link href="/plan-your-journey" className="btn btn-outline mt-6">Plan your journey</Link>
        </div>
      </div>

      {/* Row 3: logo + legal */}
      <div className="container-x">
        <div className="flag-strip" aria-hidden="true" />
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <ul className="flex flex-wrap gap-5 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-mute">
            {legalLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-ink">{l.label}</Link></li>
            ))}
            <li>© {new Date().getFullYear()} {site.name}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
