/**
 * @file FloatingCallButton.tsx
 * @module nextjs-global
 * @description Floating call button for quick booking. Call-only, no WhatsApp.
 * @author BharatERP
 * @created 2025-03-02
 */

"use client";

import { CONTACT_LINKS } from "../lib/constants";

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href={CONTACT_LINKS.phone}
        className="relative flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-ring"
        aria-label="Call to book verified rooms at Sri Janaki Mahal Trust"
      >
        {/* Pulse Ring Animation */}
        <div className="absolute inset-0 rounded-full bg-amber-600 animate-ping opacity-75" />

        {/* Call Icon */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-amber-600 to-amber-700">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>

        {/* Text Label (shown on hover) */}
        <div className="hidden group-hover:block bg-white text-amber-700 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap mr-2">
          <span className="text-sm font-semibold">Call to book verified rooms</span>
          <div className="text-xs text-gray-500">24/7 available</div>
        </div>
      </a>
    </div>
  );
}
