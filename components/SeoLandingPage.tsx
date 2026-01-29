import type { ReactNode } from "react";
import Script from "next/script";
import Link from "next/link";
import { BUSINESS_INFO, CONTACT_LINKS } from "../lib/constants";
import SeoFaq, { type SeoFaqItem } from "./SeoFaq";
import { buildBreadcrumbList, buildFaqPage, buildGraph, buildWebPage } from "../lib/seo/jsonld";

export type SeoLandingSection = {
  title: string;
  body: ReactNode;
};

export default function SeoLandingPage(props: {
  pageUrl: string;
  breadcrumbName: string;
  h1TopLabel?: string;
  h1: ReactNode;
  intro: ReactNode;
  sections: SeoLandingSection[];
  faqs: SeoFaqItem[];
  knownAs?: string[];
}) {
  const {
    pageUrl,
    breadcrumbName,
    h1TopLabel = "Official information page",
    h1,
    intro,
    sections,
    faqs,
    knownAs = [],
  } = props;

  const jsonLd = buildGraph([
    buildWebPage({
      url: pageUrl,
      name: typeof h1 === "string" ? h1 : `${breadcrumbName} - ${BUSINESS_INFO.name}`,
    }),
    buildBreadcrumbList([
      { name: "Home", item: `${BUSINESS_INFO.website}/` },
      { name: breadcrumbName, item: pageUrl },
    ]),
    buildFaqPage(faqs),
  ]);

  return (
    <>
      {/* Page-level structured data to complement global graph in app/layout.tsx */}
      <Script
        id={`seo-landing-jsonld-${breadcrumbName.replace(/\W+/g, "-").toLowerCase()}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#faf8f3] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-700">
              {h1TopLabel}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
              {h1}
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {intro}
            </p>
          </header>

          {/* Verified booking CTA */}
          <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Book verified rooms (Call / WhatsApp)
            </h2>
            <p className="text-gray-700 mb-6">
              For availability, tariffs, and booking confirmation, contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_LINKS.phone}
                className="flex-1 px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors text-center"
                aria-label={`Call ${BUSINESS_INFO.phone} for official booking`}
              >
                Call: {BUSINESS_INFO.phone}
              </a>
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors text-center"
                aria-label="WhatsApp for official booking"
              >
                WhatsApp Booking
              </a>
            </div>
          </section>

          {/* Known-by variants */}
          {knownAs.length > 0 ? (
            <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Known by many names (same place)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pilgrims often use different spellings on Google. These variations point to the same verified accommodation:
                <span className="font-semibold"> {BUSINESS_INFO.name}</span>.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
                {knownAs.map((v) => (
                  <li key={v} className="bg-amber-50 rounded-lg px-4 py-3">
                    {v}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-gray-600">
                Tip: Always use the contact buttons on this website to avoid confusion with unofficial listings.
              </p>
            </section>
          ) : null}

          {/* Main content sections */}
          {sections.map((s) => (
            <section key={s.title} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h2>
              <div className="text-gray-700 leading-relaxed">{s.body}</div>
            </section>
          ))}

          {/* Internal links box */}
          <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick links</h2>
            <ul className="space-y-2">
              <li>
                <Link className="text-amber-700 hover:underline" href="/about/">
                  About Sri Janaki Mahal Trust
                </Link>
              </li>
              <li>
                <Link className="text-amber-700 hover:underline" href="/#rooms">
                  View rooms & pricing (home page)
                </Link>
              </li>
              <li>
                <Link className="text-amber-700 hover:underline" href="/#contact">
                  Contact section
                </Link>
              </li>
              <li>
                <Link className="text-amber-700 hover:underline" href="/blog/">
                  Blog & guides
                </Link>
              </li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h2>
            <SeoFaq items={faqs} />
          </section>
        </div>
      </main>
    </>
  );
}

