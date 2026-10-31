import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { posts } from "@/data/posts";
import { getPostSource } from "@/lib/content";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CtaBand } from "@/components/shared/CtaBand";
import { ImageCard } from "@/components/ui/ImageCard";
import { formatDate } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";
import { site } from "@/config/site";

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPostSource((await params).slug);
  return post ? pageMeta({ title: post.meta.title, description: post.meta.excerpt, path: `/journal/${post.meta.slug}`, image: post.meta.hero.src }) : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPostSource((await params).slug);
  if (!post) notFound();
  const { meta, content } = post;
  const more = posts.filter((p) => p.slug !== meta.slug).slice(0, 3);
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: meta.title, datePublished: meta.date, image: meta.hero.src, author: { "@type": "Organization", name: site.name }, description: meta.excerpt };
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="container-x pt-32 md:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            <Breadcrumb items={[{ label: "Journal", href: "/journal" }, { label: meta.title }]} />
            <p className="eyebrow mb-4">{formatDate(meta.date)} · {meta.readingTime}</p>
            <h1 className="display-xl">{meta.title}</h1>
            <p className="mt-6 text-[1.125rem] text-ink-soft">{meta.excerpt}</p>
          </div>
          <div className="relative mt-12 aspect-[16/9] bg-stone"><Image src={meta.hero.src} alt={meta.hero.alt} fill priority sizes="100vw" className="object-cover" /></div>
        </header>
        <div className="container-x section-y-sm">
          <div className="prose-dzong mx-auto"><MDXRemote source={content} /></div>
          {meta.tags.length > 0 && <p className="mx-auto mt-10 max-w-[68ch] text-[0.75rem] uppercase tracking-[0.16em] text-ink-mute">{meta.tags.join(" · ")}</p>}
        </div>
      </article>
      <section className="section-y-sm bg-stone">
        <div className="container-x">
          <p className="eyebrow mb-8">Keep reading</p>
          <div className="grid gap-8 md:grid-cols-3">{more.map((p) => <ImageCard key={p.slug} href={`/journal/${p.slug}`} image={p.hero} eyebrow={formatDate(p.date)} title={p.title} cta="Read" />)}</div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
