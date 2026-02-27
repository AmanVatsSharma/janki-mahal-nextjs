/**
 * @file gallery/page.tsx
 * @module nextjs-gallery
 * @description Gallery page for Sri Janaki Mahal Trust.
 * @author BharatERP
 * @created 2026-02-27
 */

import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";

export const metadata: Metadata = generateBaseMetadata({
  title: "Gallery - Sri Janaki Mahal Trust Ayodhya",
  description:
    "Photos of Sri Janaki Mahal Trust - rooms, facilities, and spiritual environment in Ayodhya near Ram Mandir. Book at +91 7759925612.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Gallery
            <span className="block text-amber-700">Sri Janaki Mahal Trust</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our accommodation, rooms, and spiritual environment in Ayodhya near Ram Mandir.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">View Our Spaces</h2>
          <p className="text-gray-700 mb-6">
            Sri Janaki Mahal Trust offers comfortable rooms with all meals included. Visit our homepage to see room
            photos and facility images.
          </p>
          <Link
            href="/#rooms"
            className="inline-block px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors"
          >
            View Rooms on Homepage
          </Link>
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
