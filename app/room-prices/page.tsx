/**
 * @file room-prices/page.tsx
 * @module nextjs-room-prices
 * @description Room prices and tariffs page for Sri Janaki Mahal Trust.
 * @author BharatERP
 * @created 2026-02-27
 */

import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "Sri Janaki Mahal Trust Room Prices - AC & Non-AC Tariffs",
  description:
    "Room prices at Sri Janaki Mahal Trust Ayodhya. AC and Non-AC rooms from ₹1,250. All meals included. Call +91 9893563047 for current tariffs.",
  path: "/room-prices",
});

const PAGE_URL = `${BUSINESS_INFO.website}/room-prices/`;

export default function RoomPricesPage() {
  const faqs = [
    {
      question: "What is the price range for rooms?",
      answer:
        "Room tariffs range from approximately ₹1,250 to ₹4,150 depending on room type (2-bed, 3-bed, 4-bed) and AC/Non-AC. All meals are included.",
    },
    {
      question: "Are meals included in the room price?",
      answer: "Yes. All room tariffs include breakfast, lunch, and dinner.",
    },
    {
      question: "Do you have AC rooms?",
      answer: "Yes. We offer both AC and Non-AC rooms. AC rooms are priced higher than Non-AC.",
    },
    {
      question: "How do I get the latest tariff?",
      answer: `Call ${BUSINESS_INFO.phone} or WhatsApp for current room prices and availability.`,
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Room Prices"
      h1TopLabel="Tariffs"
      h1={
        <>
          Room Prices
          <span className="block text-amber-700">Sri Janaki Mahal Trust Ayodhya</span>
        </>
      }
      intro={
        <>
          Transparent room tariffs at Sri Janaki Mahal Trust. <strong>All meals included</strong>. AC and Non-AC
          options for 2-bed, 3-bed, and 4-bed rooms. Contact us for current availability.
        </>
      }
      knownAs={[
        "Sri Janaki Mahal Trust room prices",
        "Janaki Mahal Ayodhya tariff",
        "Sri Janki Mahal room rates",
        "Janaki Mahal Trust pricing",
      ]}
      sections={[
        {
          title: "Tariff Overview",
          body: (
            <>
              <p className="mb-4">
                Our room tariffs typically range from ₹1,250 (2-bed Non-AC) to ₹4,150 (Deluxe). All prices include
                breakfast, lunch, and dinner. Contact us for exact rates and availability.
              </p>
              <p>
                We offer 2-bed, 3-bed, and 4-bed rooms in both AC and Non-AC categories. Group and family bookings
                are welcome.
              </p>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
