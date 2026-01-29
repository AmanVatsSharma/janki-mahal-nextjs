import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "Verified Booking Sri / Shri Janki Mahal (Ayodhya) - Official Contact",
  description:
    "Need verified booking for Sri/Shri Janki Mahal in Ayodhya? Use the official Sri Janaki Mahal Trust call/WhatsApp buttons on this site to avoid fake listings and confirm your stay.",
  path: "/verified-booking-sri-janki-mahal",
});

const PAGE_URL = `${BUSINESS_INFO.website}/verified-booking-sri-janki-mahal/`;

export default function VerifiedBookingSriJankiMahalPage() {
  const faqs = [
    {
      question: "Why do people search for ‘verified booking Sri Janki Mahal’?",
      answer:
        "Because there can be confusing listings and spelling variations online. Verified booking means you confirm directly with the official accommodation contact shown on the website.",
    },
    {
      question: "What is the official booking method?",
      answer:
        `Call ${BUSINESS_INFO.phone} or WhatsApp using the buttons on this page to confirm availability and booking details.`,
    },
    {
      question: "Is Sri Janki Mahal the same as Sri Janaki Mahal Trust?",
      answer:
        "Yes. Many pilgrims use Janki/Janaki and Sri/Shri interchangeably. This website represents Sri Janaki Mahal Trust in Ayodhya.",
    },
    {
      question: "How do I verify a message claiming to be from the trust?",
      answer:
        "Cross-check the contact by calling the official number shown on this site. If the message is from a different number, verify before making any payment.",
    },
    {
      question: "Can I get help with directions and check-in timing?",
      answer:
        "Yes. After booking confirmation, we can share arrival guidance and check-in information for your travel plan.",
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Verified Booking Sri Janki Mahal"
      h1={
        <>
          Verified Booking: Sri / Shri Janki Mahal (Ayodhya)
          <span className="block text-amber-700">(Sri Janaki Mahal Trust)</span>
        </>
      }
      intro={
        <>
          If you want <strong>verified booking</strong> for Sri/Shri Janki/Janaki Mahal in Ayodhya, the safest approach is direct confirmation using the official call/WhatsApp buttons on this website.
        </>
      }
      knownAs={[
        "Verified booking Sri Janki Mahal",
        "Sri Janaki Mahal official booking",
        "Shri Janki Mahal Ayodhya verified contact",
        "Janaki Mahal Trust official contact",
      ]}
      sections={[
        {
          title: "Simple verification checklist (anti-fraud)",
          body: (
            <>
              <ol className="list-decimal list-inside space-y-2">
                <li>Use only the call/WhatsApp buttons on this website.</li>
                <li>Confirm your dates, group size, and room type.</li>
                <li>Save the verified contact for follow-ups and arrival guidance.</li>
              </ol>
              <p className="mt-4">
                If you saw another contact elsewhere, verify with us directly before proceeding.
              </p>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}

