import Link from "next/link";
import { BUSINESS_INFO, CONTACT_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sri Janaki Mahal</h3>
            <p className="text-gray-400">
              A sacred dharmshala in Ayodhya, dedicated to providing pilgrims and spiritual seekers with sanctuary and warm hospitality amidst divinity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/#home" className="hover:text-amber-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-600 transition-colors">About Us</Link></li>
              <li><Link href="/#rooms" className="hover:text-amber-600 transition-colors">Rooms</Link></li>
              <li><Link href="/#gallery" className="hover:text-amber-600 transition-colors">Gallery</Link></li>
              <li><Link href="/verified-booking-sri-janki-mahal" className="hover:text-amber-600 transition-colors">Verified Booking</Link></li>
              <li><Link href="/blog" className="hover:text-amber-600 transition-colors">Blog</Link></li>
            </ul>

            <h3 className="text-xl font-bold mb-4 mt-8">Popular searches</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/sri-janki-mahal-ayodhya" className="hover:text-amber-600 transition-colors">Sri / Shri Janki Mahal Ayodhya</Link></li>
              <li><Link href="/janaki-mahal-trust-ayodhya" className="hover:text-amber-600 transition-colors">Janaki Mahal Trust Ayodhya</Link></li>
              <li><Link href="/dharmshala-near-ram-mandir-ayodhya" className="hover:text-amber-600 transition-colors">Dharmshala near Ram Mandir</Link></li>
              <li><Link href="/ac-non-ac-rooms-ayodhya-ram-mandir" className="hover:text-amber-600 transition-colors">AC & Non-AC rooms Ayodhya</Link></li>
              <li><Link href="/meals-included-stay-ayodhya" className="hover:text-amber-600 transition-colors">Meals included stay Ayodhya</Link></li>
            </ul>
            
            {/* Legal Links */}
            <h3 className="text-xl font-bold mb-4 mt-8">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-amber-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-amber-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cancellation-refund" className="hover:text-amber-600 transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={CONTACT_LINKS.phone} className="hover:text-amber-600 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT_LINKS.whatsapp} className="hover:text-amber-600 transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li>Ayodhya, Uttar Pradesh</li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Trust & Security</h3>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-500">🔒</span>
                <span className="text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🏛️</span>
                <span className="text-sm">Registered Trust</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐</span>
                <span className="text-sm">Guest Loved</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500">🕐</span>
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">&copy; 2025 Sri Janaki Mahal Trust. All rights reserved.</p>
            <p className="text-sm mb-2">
              Registered Charitable Trust | Vasudev Gath, Karsewakpuram, Ayodhya, UP 224123
            </p>
            <p className="text-sm">
              Created with <span className="text-red-500">❤</span> and devotion for spiritual seekers and pilgrims
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}