/**
 * @file official/page.tsx
 * @module nextjs-official
 * @description Official verification page for Sri Janaki Mahal Trust.
 * @author BharatERP
 * @created 2026-02-27
 */

import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "Sri Janaki Mahal Trust Ayodhya - Official Website | Verified Hotel",
  description:
    "Official website of Sri Janaki Mahal Trust - Registered charitable trust providing comfortable hotel accommodation in Ayodhya near Ram Mandir. Verified business. Official booking: +91 7759925612",
  path: "/official",
});

const PAGE_URL = `${BUSINESS_INFO.website}/official/`;

export default function OfficialPage() {
  const faqs = [
    {
      question: "Is this the official Sri Janaki Mahal Trust website?",
      answer:
        "Yes. This is the only official website of Sri Janaki Mahal Trust. Always verify the URL: www.srijanakimahaltrustofficial.com",
    },
    {
      question: "What is the official contact number?",
      answer: `The official contact number is ${BUSINESS_INFO.phone}. Use this for verified bookings and assistance.`,
    },
    {
      question: "How do I avoid fake listings?",
      answer:
        "Always book through this website or the official phone/WhatsApp. Never pay via random links or third-party portals.",
    },
    {
      question: "Is Sri Janaki Mahal Trust a registered trust?",
      answer:
        "Yes. Sri Janaki Mahal Trust is a registered charitable trust providing accommodation in Ayodhya near Ram Mandir.",
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Official Verification"
      h1TopLabel="Official Website"
      h1={
        <>
          Sri Janaki Mahal Trust Ayodhya
          <span className="block text-amber-700">Official Website</span>
        </>
      }
      intro={
        <>
          Registered Charitable Trust • Verified Business • Official Booking Channels Only. Whether you search for{" "}
          <strong>Janaki Mahal Trust official booking</strong>, <strong>Sri Janki Mahal Trust Ayodhya</strong>, or{" "}
          <strong>Shri Janki Mahal Trust verified contact</strong>, all authentic paths lead here.
        </>
      }
      knownAs={[
        "Sri Janaki Mahal Trust Ayodhya official",
        "Sri Janaki Mahal Trust official website",
        "official Sri Janaki Mahal Trust",
        "Sri Janaki Mahal Trust verified",
        "janaki mahal trust official booking",
        "shri janki mahal trust verification",
      ]}
      sections={[
        {
          title: "Official Contact Details",
          body: (
            <>
              <p className="mb-4">
                <strong>Phone/WhatsApp:</strong>{" "}
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-amber-700 hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="mb-4">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-amber-700 hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </p>
              <p>
                <strong>Address:</strong> {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city},{" "}
                {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postalCode}, {BUSINESS_INFO.address.country}
              </p>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
