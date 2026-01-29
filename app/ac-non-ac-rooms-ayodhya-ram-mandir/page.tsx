import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "AC & Non-AC Rooms in Ayodhya Near Ram Mandir - Sri Janaki Mahal Trust",
  description:
    "Compare AC vs Non-AC rooms in Ayodhya near Ram Mandir. Sri Janaki Mahal Trust offers multiple room categories with verified booking via call/WhatsApp.",
  path: "/ac-non-ac-rooms-ayodhya-ram-mandir",
});

const PAGE_URL = `${BUSINESS_INFO.website}/ac-non-ac-rooms-ayodhya-ram-mandir/`;

export default function AcNonAcRoomsAyodhyaRamMandirPage() {
  const faqs = [
    {
      question: "Do you offer both AC and Non-AC rooms?",
      answer:
        "Yes. We offer room categories that include AC and Non-AC options, depending on availability and season.",
    },
    {
      question: "Which is better in Ayodhya: AC or Non-AC?",
      answer:
        "It depends on season and personal comfort. During warmer months, AC rooms may be preferred; during cooler months, Non-AC can be sufficient for many pilgrims.",
    },
    {
      question: "How do I check availability and tariffs?",
      answer:
        `Call ${BUSINESS_INFO.phone} or WhatsApp from this site to get current availability, pricing, and booking confirmation.`,
    },
    {
      question: "Are meals included with the room tariff?",
      answer:
        "Our pricing is transparent and the inclusions are mentioned on the Rooms section of the website. Contact us if you need clarification for your dates.",
    },
    {
      question: "Is this near Ram Mandir in Ayodhya?",
      answer:
        "We are located in Ayodhya and are convenient for pilgrims visiting Ram Mandir and other major sites. Ask on WhatsApp for directions for your arrival time.",
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="AC & Non-AC Rooms Ayodhya"
      h1={
        <>
          AC & Non-AC Rooms in Ayodhya
          <span className="block text-amber-700">Near Ram Mandir (Sri Janaki Mahal Trust)</span>
        </>
      }
      intro={
        <>
          If you’re deciding between <strong>AC</strong> and <strong>Non-AC</strong> rooms in Ayodhya near Ram Mandir, this guide explains what to consider and how to book verified rooms directly with Sri Janaki Mahal Trust.
        </>
      }
      knownAs={[
        "AC rooms Ayodhya near Ram Mandir",
        "Non-AC rooms Ayodhya Ram Mandir",
        "Sri Janaki Mahal rooms",
        "Sri Janki Mahal rooms",
      ]}
      sections={[
        {
          title: "AC vs Non-AC: what pilgrims usually consider",
          body: (
            <>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Season:</span> summer dates often favor AC; winter dates may not require it.</li>
                <li><span className="font-semibold">Budget:</span> Non-AC can be more budget-friendly for longer stays.</li>
                <li><span className="font-semibold">Group size:</span> choose the room size that fits your family/group comfortably.</li>
              </ul>
              <p className="mt-4">
                For the best option for your dates, contact us directly and we’ll guide you based on availability.
              </p>
            </>
          ),
        },
        {
          title: "Verified booking steps",
          body: (
            <>
              <ol className="list-decimal list-inside space-y-2">
                <li>Call/WhatsApp to check availability for your dates.</li>
                <li>Confirm room type (AC/Non-AC) and group size.</li>
                <li>Receive confirmation details and arrival guidance.</li>
              </ol>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}

