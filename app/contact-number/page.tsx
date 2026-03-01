/**
 * @file contact-number/page.tsx
 * @module nextjs-contact-number
 * @description Official contact number page for Sri Janaki Mahal Trust.
 * @author BharatERP
 * @created 2026-02-27
 */

import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO, CONTACT_LINKS } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "Sri Janaki Mahal Trust Official Contact Number - Call/WhatsApp",
  description:
    "Official contact number for Sri Janaki Mahal Trust (Janaki Mahal Trust, Sri Janki Mahal Trust Ayodhya). Call or WhatsApp +91 9893563047 for verified bookings.",
  path: "/contact-number",
});

const PAGE_URL = `${BUSINESS_INFO.website}/contact-number/`;

export default function ContactNumberPage() {
  const faqs = [
    {
      question: "What is the official contact number of Janaki Mahal Trust?",
      answer: `The official contact number for Sri Janaki Mahal Trust is ${BUSINESS_INFO.phone}. Use this number for verified bookings and assistance.`,
    },
    {
      question: "Can I WhatsApp for booking?",
      answer: `Yes. WhatsApp ${BUSINESS_INFO.phone} for booking confirmation. We respond within 24 hours.`,
    },
    {
      question: "What is the official email?",
      answer: `The official email is ${BUSINESS_INFO.email}. Use it for inquiries and booking requests.`,
    },
    {
      question: "Is the number available 24/7?",
      answer: "Yes. Our helpline is available 24/7 for booking and support.",
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Official Contact Number"
      h1TopLabel="Official Contact"
      h1={
        <>
          Sri Janaki Mahal Trust
          <span className="block text-amber-700">Official Contact Number</span>
        </>
      }
      intro={
        <>
          The <strong>only official contact</strong> for Sri Janaki Mahal Trust (Janaki Mahal Trust, Sri Janki Mahal
          Trust Ayodhya, Shri Janki Mahal Trust). Call or WhatsApp for verified bookings.
        </>
      }
      knownAs={[
        "Janaki Mahal Trust official contact number",
        "Sri Janki Mahal Trust contact",
        "Shri Janki Mahal Trust phone number",
        "Janaki Mahal Ayodhya contact",
      ]}
      sections={[
        {
          title: "Contact Details",
          body: (
            <>
              <div className="space-y-4">
                <p>
                  <strong>Phone / WhatsApp:</strong>{" "}
                  <a href={CONTACT_LINKS.phone} className="text-amber-700 hover:underline font-semibold">
                    {BUSINESS_INFO.phone}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-amber-700 hover:underline">
                    {BUSINESS_INFO.email}
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city},{" "}
                  {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postalCode}
                </p>
              </div>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
