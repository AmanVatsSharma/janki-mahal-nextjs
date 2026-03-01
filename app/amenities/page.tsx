/**
 * @file amenities/page.tsx
 * @module nextjs-amenities
 * @description Amenities and facilities page for Sri Janaki Mahal Trust.
 * @author BharatERP
 * @created 2026-02-27
 */

import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "Sri Janaki Mahal Trust Amenities - Meals, Facilities",
  description:
    "Amenities at Sri Janaki Mahal Trust Ayodhya: all meals included, hot water, AC/Non-AC rooms, 24/7 support. Near Ram Mandir. Call +91 9893563047.",
  path: "/amenities",
});

const PAGE_URL = `${BUSINESS_INFO.website}/amenities/`;

export default function AmenitiesPage() {
  const faqs = [
    {
      question: "Are meals included in the stay?",
      answer: "Yes. All room tariffs include breakfast, lunch, and dinner. Vegetarian meals are served.",
    },
    {
      question: "Do you have AC rooms?",
      answer: "Yes. We offer both AC and Non-AC rooms. AC rooms are available at a higher tariff.",
    },
    {
      question: "Is hot water available?",
      answer: "Yes. Hot water is available for all guests.",
    },
    {
      question: "How far is Sri Janaki Mahal from Ram Mandir?",
      answer: "We are located in Karsewakpuram, within walking distance of Ram Mandir.",
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Amenities"
      h1TopLabel="Facilities"
      h1={
        <>
          Amenities & Facilities
          <span className="block text-amber-700">Sri Janaki Mahal Trust</span>
        </>
      }
      intro={
        <>
          Comfortable accommodation with <strong>all meals included</strong>, hot water, AC/Non-AC rooms, and 24/7
          support. A spiritual environment near Ram Mandir in Ayodhya.
        </>
      }
      knownAs={[
        "Sri Janaki Mahal Trust amenities",
        "Janaki Mahal facilities",
        "Sri Janki Mahal meals included",
        "Janaki Mahal Trust Ayodhya facilities",
      ]}
      sections={[
        {
          title: "What We Offer",
          body: (
            <>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>All meals included (breakfast, lunch, dinner)</li>
                <li>AC and Non-AC room options</li>
                <li>Hot water</li>
                <li>24/7 customer support</li>
                <li>Spiritual environment</li>
                <li>Near Ram Mandir</li>
                <li>Safe and secure premises</li>
              </ul>
              <p>
                Located at {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}. Ideal for pilgrims and
                families visiting Ayodhya.
              </p>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
