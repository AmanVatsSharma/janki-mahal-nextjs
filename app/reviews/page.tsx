/**
 * @file reviews/page.tsx
 * @module nextjs-reviews
 * @description Reviews hub page for Sri Janaki Mahal Trust - links to Google Maps.
 * @author BharatERP
 * @created 2026-02-27
 */

import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";

const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=13157769449180505616";

export const metadata: Metadata = generateBaseMetadata({
  title: "Reviews - Sri Janaki Mahal Trust Ayodhya",
  description:
    "Read verified reviews of Sri Janaki Mahal Trust on Google. Share your experience after your stay. Official accommodation near Ram Mandir.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Reviews
            <span className="block text-amber-700">Sri Janaki Mahal Trust</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Read verified guest reviews on our Google Maps listing. Share your experience after your stay.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Read Reviews on Google</h2>
          <p className="text-gray-700 mb-6">
            Our verified reviews are available on Google Maps. Click below to read guest experiences and leave your
            own review after your stay.
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors"
          >
            Open on Google Maps
          </a>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Book Your Stay</h2>
          <p className="text-gray-700 mb-4">
            For availability and booking, contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors text-center"
            >
              Call: {BUSINESS_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors text-center"
            >
              WhatsApp Booking
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
