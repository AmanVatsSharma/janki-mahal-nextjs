import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

/**
 * SEO landing page intent:
 * Capture high-intent queries such as:
 * - "sri janki mahal"
 * - "sri janaki mahal"
 * - "shri janki mahal ayodhya"
 * while keeping content natural, helpful, and non-spammy.
 */

export const metadata: Metadata = generateBaseMetadata({
  title: "Sri / Shri Janki Mahal Ayodhya (Sri Janaki Mahal Trust) - Official Booking & Contact",
  description:
    "Looking for Sri/Shri Janki Mahal Ayodhya? Sri Janaki Mahal Trust is the verified accommodation near Ram Mandir. Call/WhatsApp for official booking, room tariffs, and confirmation.",
  path: "/sri-janki-mahal-ayodhya",
});

const PAGE_URL = `${BUSINESS_INFO.website}/sri-janki-mahal-ayodhya/`;

export default function SriJankiMahalAyodhyaPage() {
  const faqs = [
    {
      question: "Is Sri Janki Mahal the same as Sri Janaki Mahal Trust?",
      answer:
        "Yes. Many pilgrims search using different spellings (Sri/Shri, Janki/Janaki). On this website, these variations refer to the same verified accommodation: Sri Janaki Mahal Trust in Ayodhya.",
    },
    {
      question: "How do I book rooms for Sri/Shri Janki Mahal Ayodhya?",
      answer:
        `To book, call ${BUSINESS_INFO.phone} or message us on WhatsApp. Our team confirms availability and shares booking details for a smooth check-in experience.`,
    },
    {
      question: "Where is Sri Janaki Mahal Trust located in Ayodhya?",
      answer: `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.postalCode}, ${BUSINESS_INFO.address.country}.`,
    },
    {
      question: "Is Sri Janaki Mahal Trust near Ram Mandir?",
      answer:
        "Yes, we are located in Ayodhya near major pilgrimage sites including Ram Mandir, making it convenient for devotees and families.",
    },
    {
      question: "Do room prices include meals?",
      answer:
        "Yes—our room tariffs are transparent and include meals as mentioned on the Rooms section of this website.",
    },
    {
      question: "Do you offer AC and Non-AC rooms?",
      answer:
        "Yes. We offer multiple room categories including AC and Non-AC options for different budgets and group sizes.",
    },
    {
      question: "How can I avoid fake listings for Sri/Shri Janki Mahal Ayodhya?",
      answer:
        "Always book via the official phone/WhatsApp details on this website. If you see alternate contacts elsewhere, verify by contacting us directly through this site.",
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Sri / Shri Janki Mahal Ayodhya"
      h1={
        <>
          Sri / Shri Janki Mahal Ayodhya
          <span className="block text-amber-700">(Sri Janaki Mahal Trust)</span>
        </>
      }
      intro={
        <>
          If you searched for <strong>Sri Janki Mahal</strong>,{" "}
          <strong>Sri Janaki Mahal</strong>, or <strong>Shri Janki Mahal Ayodhya</strong>, you’re in the right place. This page helps devotees reach the verified accommodation and book safely using official contact details.
        </>
      }
      knownAs={[
        "Sri Janaki Mahal",
        "Sri Janki Mahal",
        "Shri Janki Mahal Ayodhya",
        "Janaki Mahal Trust Ayodhya",
        "Sri Janaki Mahal Trust",
        "Sri Janki Mahal Trust",
      ]}
      sections={[
        {
          title: "Location in Ayodhya",
          body: (
            <>
              <p className="mb-4">
                Sri Janaki Mahal Trust is located in Ayodhya and is convenient for devotees visiting Ram Mandir and other spiritual sites.
              </p>
              <p className="text-gray-800 font-semibold">Address</p>
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

