/**
 * @file official-booking/page.tsx
 * @module nextjs-official-booking
 * @description Official booking page for Sri Janaki Mahal Trust.
 * @author BharatERP
 * @created 2026-02-27
 */

import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "Official Booking Sri Janaki Mahal Trust - Verified Contact",
  description:
    "Book rooms at Sri Janaki Mahal Trust Ayodhya through official channels only. Call or WhatsApp +91 7759925612 for verified booking confirmation. Avoid scams.",
  path: "/official-booking",
});

const PAGE_URL = `${BUSINESS_INFO.website}/official-booking/`;

export default function OfficialBookingPage() {
  const faqs = [
    {
      question: "How do I book officially?",
      answer: `Call ${BUSINESS_INFO.phone} or WhatsApp using the buttons on this page. Our team confirms availability and shares booking details.`,
    },
    {
      question: "Is there an online booking form?",
      answer:
        "We confirm bookings via phone and WhatsApp for your security. This helps avoid fake listings and ensures direct verification.",
    },
    {
      question: "Can I book from any city in India?",
      answer:
        "Yes. Devotees from Delhi, Mumbai, Kolkata, Bangalore, Hyderabad, Pune, or any city can call/WhatsApp for verified confirmation.",
    },
    {
      question: "What information do I need to book?",
      answer:
        "Have your travel dates, group size, and room preference (AC/Non-AC) ready. We will confirm availability and share tariff details.",
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Official Booking"
      h1TopLabel="Verified Booking"
      h1={
        <>
          Official Booking
          <span className="block text-amber-700">Sri Janaki Mahal Trust</span>
        </>
      }
      intro={
        <>
          Book your stay at Sri Janaki Mahal Trust through <strong>official channels only</strong>. Use the call or
          WhatsApp buttons below for verified confirmation. Avoid fake listings and third-party portals.
        </>
      }
      knownAs={[
        "Sri Janaki Mahal official booking",
        "Janaki Mahal Trust official booking",
        "Shri Janki Mahal Trust booking",
        "Sri Janki Mahal Ayodhya booking",
      ]}
      sections={[
        {
          title: "Booking Steps",
          body: (
            <>
              <ol className="list-decimal list-inside space-y-2">
                <li>Call or WhatsApp the official number on this page.</li>
                <li>Share your travel dates and group size.</li>
                <li>Confirm room type (AC/Non-AC) and tariff.</li>
                <li>Receive booking confirmation and check-in details.</li>
              </ol>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
