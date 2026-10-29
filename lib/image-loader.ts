"use client";

/**
 * next/image loader that asks the image's own CDN for the right size and format,
 * instead of routing every image through Vercel's optimizer. Unsplash (imgix)
 * returns AVIF/WebP with `auto=format`, from a global cache that is always warm.
 * Local files (e.g. /images/foo.jpg) are returned as-is.
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    // Cap quality at 68: visually identical for photography, noticeably smaller files.
    url.searchParams.set("q", String(Math.min(quality ?? 68, 68)));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    return url.toString();
  }
  return src;
}
