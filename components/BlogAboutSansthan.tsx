/**
 * @file BlogAboutSansthan.tsx
 * @module blog
 * @description Compact "About Sansthan" banner for blog pages with Call and Go to Website CTAs.
 * @author BharatERP
 * @created 2025-03-02
 */

import Link from "next/link";
import { CONTACT_LINKS } from "../lib/constants";

const content = {
  en: {
    title: "Sri Janaki Mahal Trust",
    tagline: "A sacred dharmshala in Ayodhya, near Ram Mandir. Comfortable stay with warm hospitality.",
    call: "Call",
    goToWebsite: "Go to Website",
  },
  hi: {
    title: "श्री जानकी महल ट्रस्ट",
    tagline: "अयोध्या में राम मंदिर के निकट एक पवित्र धर्मशाला। आरामदायक ठहरने और गर्मजोशी से आतिथ्य।",
    call: "कॉल करें",
    goToWebsite: "वेबसाइट पर जाएं",
  },
} as const;

type Lang = "en" | "hi";

export default function BlogAboutSansthan({ lang = "en" }: { lang?: Lang }) {
  const t = content[lang];

  return (
    <section
      className="mb-8 rounded-2xl border border-amber-200/60 bg-linear-to-br from-amber-50 to-white p-4 sm:p-5 shadow-sm"
      aria-label={t.title}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
            {t.title}
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {t.tagline}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0">
          <a
            href={CONTACT_LINKS.phone}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {t.call}
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-amber-600 text-amber-700 text-sm font-semibold hover:bg-amber-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {t.goToWebsite}
          </Link>
        </div>
      </div>
    </section>
  );
}
