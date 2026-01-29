import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "Meals Included Stay in Ayodhya - Sri Janaki Mahal Trust (Official Booking)",
  description:
    "Searching meals included stay in Ayodhya near Ram Mandir? Sri Janaki Mahal Trust offers transparent room booking with meal inclusions as listed on the site. Call/WhatsApp for verification.",
  path: "/meals-included-stay-ayodhya",
});

const PAGE_URL = `${BUSINESS_INFO.website}/meals-included-stay-ayodhya/`;

export default function MealsIncludedStayAyodhyaPage() {
  const faqs = [
    {
      question: "Do you provide meals with the room booking?",
      answer:
        "Yes. Meal inclusions are part of our transparent pricing as mentioned on the Rooms section of this website.",
    },
    {
      question: "What meals are included?",
      answer:
        "Typically, breakfast, lunch, and dinner are included as described on the site. For timings and special requirements, please contact us during booking.",
    },
    {
      question: "How do I book a meals-included stay in Ayodhya?",
      answer:
        `Call ${BUSINESS_INFO.phone} or WhatsApp via this site for availability and confirmation.`,
    },
    {
      question: "Is this suitable for pilgrims visiting Ram Mandir?",
      answer:
        "Yes. A meals-included stay is convenient for devotees who want to focus on darshan and avoid daily food planning.",
    },
    {
      question: "Can I get guidance for my arrival and check-in?",
      answer:
        "Yes. Once you contact us, we share arrival guidance and check-in details for a smooth stay.",
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Meals Included Stay Ayodhya"
      h1={
        <>
          Meals Included Stay in Ayodhya
          <span className="block text-amber-700">(Sri Janaki Mahal Trust)</span>
        </>
      }
      intro={
        <>
          Many devotees prefer a <strong>meals-included stay</strong> in Ayodhya to keep travel simple. Sri Janaki Mahal Trust provides transparent booking and clear inclusions—contact us directly for availability and confirmation.
        </>
      }
      knownAs={[
        "Meals included stay Ayodhya",
        "Ayodhya stay with meals near Ram Mandir",
        "Sri Janaki Mahal meals included",
        "Sri Janki Mahal Ayodhya meals",
      ]}
      sections={[
        {
          title: "Why meals included matters for pilgrims",
          body: (
            <>
              <ul className="list-disc list-inside space-y-2">
                <li>Less coordination during darshan-heavy days</li>
                <li>Predictable budgeting (transparent inclusions)</li>
                <li>Helpful for families and senior travelers</li>
              </ul>
              <p className="mt-4">
                For exact inclusions and meal timings for your dates, please confirm on call/WhatsApp.
              </p>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}

