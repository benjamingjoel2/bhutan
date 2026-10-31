import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { display, displayItalic, body } from "./fonts";

export const metadata: Metadata = { title: "Not found · Dzong House" };

/** Shown for URLs that match no page in any language. */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${display.variable} ${displayItalic.variable} ${body.variable}`}>
      <body>
        <main id="main" className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
          <p className="eyebrow mb-4">Not found</p>
          <h1 className="display-lg">This path leads nowhere, which in Bhutan is rare.</h1>
          <Link href="/" className="btn btn-outline mt-8">Return home</Link>
        </main>
      </body>
    </html>
  );
}
