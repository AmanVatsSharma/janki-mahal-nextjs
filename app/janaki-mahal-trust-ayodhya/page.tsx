import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "Janaki Mahal Trust Ayodhya - Sri Janaki Mahal Trust (Official Booking)",
  description:
    "Searching Janaki Mahal Trust Ayodhya? Reach Sri Janaki Mahal Trust (verified accommodation) for official room booking near Ram Mandir. Call/WhatsApp for confirmation.",
  path: "/janaki-mahal-trust-ayodhya",
});

const PAGE_URL = `${BUSINESS_INFO.website}/janaki-mahal-trust-ayodhya/`;

export default function JanakiMahalTrustAyodhyaPage() {
  const faqs = [
    {
      question: "Is Janaki Mahal Trust Ayodhya the same as Sri Janaki Mahal Trust?",
      answer:
        "Yes. Many devotees shorten the name to “Janaki Mahal Trust”. This page routes you to the official Sri Janaki Mahal Trust booking details.",
    },
    {
      question: "How do I book rooms at Janaki Mahal Trust Ayodhya?",
      answer:
        `Call ${BUSINESS_INFO.phone} or use WhatsApp on this website to confirm availability and receive booking guidance.`,
    },
    {
      question: "Where is Janaki Mahal Trust located?",
      answer: `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.postalCode}.`,
    },
    {
      question: "Is it suitable for families and pilgrims?",
      answer:
        "Yes. We host pilgrims and families visiting Ayodhya, with multiple room categories based on group size and comfort needs.",
    },
    {
      question: "How can I avoid fake ‘Janaki Mahal Trust’ contacts?",
      answer:
        "Use only the call/WhatsApp buttons on this website. If someone shares a different contact elsewhere, verify by calling us directly from here.",
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Janaki Mahal Trust Ayodhya"
      h1={
        <>
          Janaki Mahal Trust Ayodhya
          <span className="block text-amber-700">(Sri Janaki Mahal Trust)</span>
        </>
      }
      intro={
        <>
          People often search “<strong>Janaki Mahal Trust Ayodhya</strong>” when looking for a verified stay near Ram Mandir. This page clarifies the name and helps you reach the official Sri Janaki Mahal Trust booking support quickly.
        </>
      }
      knownAs={[
        "Janaki Mahal Trust Ayodhya",
        "Sri Janaki Mahal Trust",
        "Sri Janaki Mahal",
        "Sri Janki Mahal Trust",
        "Shri Janki Mahal Trust",
      ]}
      sections={[
        {
          title: "What you get (simple and transparent)",
          body: (
            <>
              <p className="mb-4">
                We focus on a peaceful, pilgrim-friendly stay in Ayodhya with clear pricing and direct booking support.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Multiple room categories (including AC and Non-AC)</li>
                <li>Convenient location for major spiritual sites in Ayodhya</li>
                <li>Direct contact for booking confirmation</li>
              </ul>
            </>
          ),
        },
        {
          title: "Address (Ayodhya)",
          body: (
            <>
              <p className="text-gray-800 font-semibold">Sri Janaki Mahal Trust</p>
              <p>
                {BUSINESS_INFO.address.street}
                <br />
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postalCode}
                <br />
                {BUSINESS_INFO.address.country}
              </p>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}

