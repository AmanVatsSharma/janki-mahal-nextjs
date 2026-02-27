/**
 * @file group-booking/page.tsx
 * @module nextjs-group-booking
 * @description Group booking page for Sri Janaki Mahal Trust.
 * @author BharatERP
 * @created 2026-02-27
 */

import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "Group Booking Sri Janaki Mahal Trust - Yatri Mandal",
  description:
    "Group booking at Sri Janaki Mahal Trust Ayodhya for yatri mandals and families. Multiple rooms, all meals included. Call +91 7759925612.",
  path: "/group-booking",
});

const PAGE_URL = `${BUSINESS_INFO.website}/group-booking/`;

export default function GroupBookingPage() {
  const faqs = [
    {
      question: "Do you accept group bookings?",
      answer: "Yes. We welcome yatri mandals, families, and group bookings. Contact us for availability and group rates.",
    },
    {
      question: "How many rooms can I book for a group?",
      answer:
        "We have multiple room types. Contact us with your group size and dates for availability and tariff details.",
    },
    {
      question: "Are meals included for group bookings?",
      answer: "Yes. All room tariffs include breakfast, lunch, and dinner for every guest.",
    },
    {
      question: "How do I book for a yatri mandal?",
      answer: `Call ${BUSINESS_INFO.phone} or WhatsApp with your group size, travel dates, and room requirements. We will confirm availability.`,
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Group Booking"
      h1TopLabel="Bulk Booking"
      h1={
        <>
          Group Booking
          <span className="block text-amber-700">Sri Janaki Mahal Trust Ayodhya</span>
        </>
      }
      intro={
        <>
          Book multiple rooms for <strong>yatri mandals</strong>, families, or groups at Sri Janaki Mahal Trust. All
          meals included. Contact us for group availability and tariffs.
        </>
      }
      knownAs={[
        "Sri Janaki Mahal group booking",
        "Janaki Mahal Trust yatri mandal",
        "Sri Janki Mahal bulk booking",
        "Janaki Mahal Ayodhya group stay",
      ]}
      sections={[
        {
          title: "Group Booking Process",
          body: (
            <>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Contact us with group size and travel dates.</li>
                <li>Share room requirements (AC/Non-AC, bed count).</li>
                <li>We confirm availability and share tariff.</li>
                <li>Complete booking and receive confirmation.</li>
              </ol>
              <p>
                We accommodate yatri mandals, family groups, and pilgrimage groups. All meals are included in the room
                tariff.
              </p>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
