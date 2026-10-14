import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/config/site";
import { CurrencyProvider } from "@/lib/currency";
import { UiProvider } from "@/lib/ui";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PlannerModal } from "@/components/planner/PlannerModal";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, locale: "en_GB" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#F6F2EA", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Fonts stand-ins for the reference's licensed serif/grotesk pairing (App Router root layout loads site-wide) */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CurrencyProvider>
          <UiProvider>
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
              Skip to content
            </a>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
            <SearchOverlay />
            <PlannerModal />
          </UiProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
