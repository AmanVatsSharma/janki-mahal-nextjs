/**
 * @file HeroSection.tsx
 * @module nextjs-home
 * @description High-converting hero section with primary Call CTA and secondary WhatsApp CTA for Sri Janaki Mahal Trust.
 * @author BharatERP
 * @created 2026-02-27
 */

import Image from "next/image";
import { BUSINESS_INFO, CONTACT_LINKS } from "../lib/constants";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sri-janaki-mahal/IMG-20251017-WA0022.jpg"
          alt="Sri Janaki Mahal Trust - Spiritual Dharmshala in Ayodhya with beautiful architecture and peaceful courtyard"
          fill
          priority
          className="object-cover filter brightness-110 contrast-125 saturate-125"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        {/* Trust Badge */}
        <div className="mb-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-rose-600 text-white px-5 py-2.5 shadow-lg" aria-label="Sri Janaki Mahal Trust">
            <span className="text-sm md:text-base font-extrabold uppercase tracking-wider">Sri Janaki Mahal Trust</span>
          </div>
        </div>
        {/* Top Banner: Online Room Booking Advance */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-rose-600 text-white px-4 py-2 shadow-lg" aria-label="Online Room Booking Advance">
            <span className="text-xs font-bold uppercase tracking-wider">Online Room Booking Advance</span>
          </div>
        </div>
        <div className="mb-6 inline-block">
          <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">Welcome to Ayodhya</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-shadow-sm">
          Book Your Sacred Stay at <span className="text-amber-400">Sri Janaki Mahal Trust</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience divine hospitality in the spiritual heart of Ayodhya. Comfortable rooms, warm service, and sacred ambiance await you.
        </p>

        {/* High-converting CTAs: Primary (Call) + Secondary (WhatsApp) */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-2">
          {/* Primary CTA: Call Now to Book - larger, more prominent */}
          <a
            id="hero-call"
            href={CONTACT_LINKS.phone}
            className="group w-full max-w-sm sm:w-auto px-7 py-4 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold hover:from-amber-500 hover:to-amber-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-600/40 transition-all duration-300 inline-flex flex-col items-center justify-center gap-0.5 text-base sm:text-lg shadow-xl border-2 border-amber-500/50 min-h-[48px]"
            aria-label={`Call ${BUSINESS_INFO.phone} to book verified rooms`}
          >
            <span className="inline-flex items-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now to Book</span>
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-amber-200/90">24/7 Available</span>
          </a>

          {/* Secondary CTA: Book via WhatsApp */}
          <a
            id="hero-whatsapp"
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full max-w-sm sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold hover:from-[#20bd5a] hover:to-[#0f7a6e] hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 inline-flex flex-col items-center justify-center gap-0.5 text-sm shadow-lg border border-green-400/50 animate-pulse-ring min-h-[48px]"
            aria-label="Book via WhatsApp for instant reply"
          >
            <span className="inline-flex items-center gap-2">
              <svg className="w-5 h-5 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.192-1.048 1.007-1.954 2.14-2.625 3.646-.735 1.7-1.14 3.6-.788 5.629.793 4.811 4.823 8.52 9.617 8.52 1.214 0 2.389-.184 3.514-.547 1.265-.41 2.439-1.04 3.466-1.872 1.048-.87 1.954-1.956 2.625-3.462.735-1.7 1.14-3.6.788-5.629-.793-4.811-4.823-8.52-9.617-8.52z" />
              </svg>
              <span>Book via WhatsApp</span>
            </span>
            <span className="text-xs font-medium text-green-100/90">Instant reply</span>
          </a>
        </div>

        <p className="mt-6 text-sm sm:text-base text-gray-200/90 max-w-2xl mx-auto leading-relaxed">
          Verified accommodation in <strong>Karsewakpuram, Ayodhya</strong> near <strong>Ram Mandir</strong>. For official bookings, call or WhatsApp <span className="font-semibold">{BUSINESS_INFO.phone}</span>.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-amber-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
