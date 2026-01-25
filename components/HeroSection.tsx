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

        {/* Call and WhatsApp buttons - stacked horizontally on all screens */}
        <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
          {/* Call button with phone number */}
          <a
            id="hero-call"
            href={CONTACT_LINKS.phone}
            className="px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
            aria-label={`Call ${BUSINESS_INFO.phone}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">Call</span>
            <span>{BUSINESS_INFO.phone}</span>
          </a>
          
          {/* WhatsApp button */}
          <a
            id="hero-whatsapp"
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.192-1.048 1.007-1.954 2.14-2.625 3.646-.735 1.7-1.14 3.6-.788 5.629.793 4.811 4.823 8.52 9.617 8.52 1.214 0 2.389-.184 3.514-.547 1.265-.41 2.439-1.04 3.466-1.872 1.048-.87 1.954-1.956 2.625-3.462.735-1.7 1.14-3.6.788-5.629-.793-4.811-4.823-8.52-9.617-8.52z" />
            </svg>
            WhatsApp
          </a>
        </div>

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
