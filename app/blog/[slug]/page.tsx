import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "../../../lib/blog/posts";
import { generateMetadata as generateBaseMetadata } from "../../../lib/metadata";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return generateBaseMetadata({
      title: "Blog Post",
      description: "Blog post not found.",
      path: `/blog/${params.slug}`,
      noIndex: true,
    });
  }

  return generateBaseMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#faf8f3] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link className="text-amber-700 font-semibold hover:underline" href="/blog/">
            ← Back to Blog
          </Link>
        </div>

        <article className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
            <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-semibold">
              {post.category}
            </span>
            <span>{post.published}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-700 text-lg mb-8">{post.description}</p>

          <div className="prose prose-gray max-w-none">
            {post.content}
          </div>

          <hr className="my-10 border-gray-200" />

          <div className="bg-amber-50 rounded-xl p-5">
            <p className="text-gray-900 font-semibold mb-2">Quick booking help</p>
            <p className="text-gray-700 mb-3">
              For verified booking and availability, use the contact buttons on our home page.
            </p>
            <Link className="text-amber-700 font-semibold hover:underline" href="/#contact">
              Go to Contact →
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

