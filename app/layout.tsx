import type { Metadata, Viewport } from "next";
import { preconnect } from "react-dom";
import "./globals.css";
import { site } from "@/config/site";
import { display, displayItalic, body } from "./fonts";
import { CurrencyProvider } from "@/lib/currency";
import { UiProvider } from "@/lib/ui";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LazyOverlays } from "@/components/layout/LazyOverlays";
import { RevealObserver } from "@/components/layout/RevealObserver";

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
  // Open the connection to the image CDN while the HTML is still parsing
  preconnect("https://images.unsplash.com", { crossOrigin: "anonymous" });
  return (
    <html lang="en" className={`${display.variable} ${displayItalic.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: site.name,
              url: site.url,
              email: site.contact.email,
              description: site.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: site.contact.addressParts.street,
                addressLocality: site.contact.addressParts.locality,
                postalCode: site.contact.addressParts.postalCode,
                addressCountry: site.contact.addressParts.country,
              },
            }),
          }}
        />
        <CurrencyProvider>
          <UiProvider>
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
              Skip to content
            </a>
            <Header />
            {children}
            <Footer />
            <LazyOverlays />
            <RevealObserver />
          </UiProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
