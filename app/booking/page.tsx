/**
 * @file booking/page.tsx
 * @module nextjs-booking
 * @description Room booking page for Sri Janaki Mahal Trust.
 * @author BharatERP
 * @created 2026-02-27
 */

import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "Book Rooms at Sri Janaki Mahal Trust Ayodhya - Official",
  description:
    "Book AC and Non-AC rooms at Sri Janaki Mahal Trust Ayodhya. All meals included. Call or WhatsApp +91 7759925612 for availability and confirmation.",
  path: "/booking",
});

const PAGE_URL = `${BUSINESS_INFO.website}/booking/`;

export default function BookingPage() {
  const faqs = [
    {
      question: "How do I book a room?",
      answer: `Call ${BUSINESS_INFO.phone} or WhatsApp to check availability and confirm your booking. We will share tariff and check-in details.`,
    },
    {
      question: "What room types are available?",
      answer:
        "We offer 2-bed, 3-bed, and 4-bed rooms in both AC and Non-AC options. Deluxe rooms are also available.",
    },
    {
      question: "Are meals included?",
      answer: "Yes. All room tariffs include breakfast, lunch, and dinner.",
    },
    {
      question: "Can I book in advance?",
      answer: "Yes. We recommend advance booking, especially during festivals and peak seasons.",
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Room Booking"
      h1TopLabel="Book Your Stay"
      h1={
        <>
          Room Booking
          <span className="block text-amber-700">Sri Janaki Mahal Trust Ayodhya</span>
        </>
      }
      intro={
        <>
          Book your stay at Sri Janaki Mahal Trust. We offer comfortable AC and Non-AC rooms near Ram Mandir with{" "}
          <strong>all meals included</strong>. Use the official contact buttons for verified booking.
        </>
      }
      knownAs={[
        "Sri Janaki Mahal Trust booking",
        "Janaki Mahal Ayodhya room booking",
        "Sri Janki Mahal booking",
        "book janaki mahal trust",
      ]}
      sections={[
        {
          title: "Room Options",
          body: (
            <>
              <p className="mb-4">
                We offer 2-bed, 3-bed, and 4-bed rooms in AC and Non-AC categories. All rooms include meals. Contact us
                for current tariffs and availability.
              </p>
              <p>
                Located in Karsewakpuram, Ayodhya, within walking distance of Ram Mandir. Ideal for pilgrims and
                families.
              </p>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
