import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BLOG_POSTS } from "../../lib/blog/posts";

export const metadata: Metadata = generateBaseMetadata({
  title: "Blog & Guides",
  description:
    "Guides for Ayodhya pilgrims: verified booking tips, stay planning near Ram Mandir, AC vs Non-AC room guidance, and meals-included stay information.",
  path: "/blog",
});

export const dynamic = "force-static";

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.published.localeCompare(a.published));

  return (
    <main className="min-h-screen bg-[#faf8f3] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-700">
            Guides for pilgrims
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Blog & Guides
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Verified booking tips, Ayodhya planning advice, and room selection guides—written to help devotees book safely and travel smoothly.
          </p>
        </header>

        <section className="grid gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-2">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-semibold">
                  {p.category}
                </span>
                <span>{p.published}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                <Link className="hover:text-amber-700 transition-colors" href={`/blog/${p.slug}/`}>
                  {p.title}
                </Link>
              </h2>
              <p className="text-gray-700 mb-4">{p.description}</p>
              <Link className="text-amber-700 font-semibold hover:underline" href={`/blog/${p.slug}/`}>
                Read guide →
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

