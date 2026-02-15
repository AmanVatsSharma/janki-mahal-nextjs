import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByLang } from "../../../lib/blog/posts";
import { generateMetadata as generateBaseMetadata } from "../../../lib/metadata";

export const metadata: Metadata = generateBaseMetadata({
  title: "ब्लॉग और गाइड",
  description:
    "अयोध्या यात्रियों के लिए उपयोगी गाइड: बुकिंग सुझाव, रूम चुनने की जानकारी और यात्रा योजना संबंधी ब्लॉग।",
  path: "/hi/blog",
});

export const dynamic = "force-static";

export default function HindiBlogIndexPage() {
  const posts = getPostsByLang("hi");

  return (
    <main className="min-h-screen bg-[#faf8f3] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-700">
            भक्तों के लिए गाइड
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">ब्लॉग और गाइड</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            अयोध्या यात्रा, सुरक्षित बुकिंग और ठहरने की योजना से जुड़े उपयोगी लेख।
          </p>
        </header>

        <section className="grid gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-2">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-semibold">
                  {post.category}
                </span>
                <span>{post.published}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                <Link className="hover:text-amber-700 transition-colors" href={`/hi/blog/${post.slug}/`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <Link className="text-amber-700 font-semibold hover:underline" href={`/hi/blog/${post.slug}/`}>
                पूरा लेख पढ़ें →
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
