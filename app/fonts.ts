import localFont from "next/font/local";

/**
 * Self-hosted Google Fonts (OFL), served from our own domain with no render-blocking
 * stylesheet. Source: @fontsource-variable packages, Latin subset.
 * The two upright faces are preloaded; the italic (testimonial quotes only) is not,
 * so it never competes with the hero image for bandwidth.
 */
export const display = localFont({
  src: [{ path: "./fonts/cormorant-garamond-latin-wght-normal.woff2", style: "normal", weight: "300 700" }],
  variable: "--font-cormorant",
  display: "swap",
  fallback: ["Times New Roman", "Georgia", "serif"],
});

export const displayItalic = localFont({
  src: [{ path: "./fonts/cormorant-garamond-latin-wght-italic.woff2", style: "italic", weight: "300 700" }],
  variable: "--font-cormorant-italic",
  display: "swap",
  preload: false,
  fallback: ["Times New Roman", "Georgia", "serif"],
});

export const body = localFont({
  src: [{ path: "./fonts/jost-latin-wght-normal.woff2", style: "normal", weight: "100 900" }],
  variable: "--font-jost",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});
