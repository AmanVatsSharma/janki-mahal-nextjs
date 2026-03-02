/**
 * @file layout.tsx
 * @module blog
 * @description Blog layout wrapper with About Sansthan banner at top.
 * @author BharatERP
 * @created 2025-03-02
 */

import BlogAboutSansthan from "../../components/BlogAboutSansthan";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <BlogAboutSansthan lang="en" />
      </div>
      {children}
    </>
  );
}
