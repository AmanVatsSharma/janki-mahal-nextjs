import type { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO } from "../../lib/constants";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = generateBaseMetadata({
  title: "Dharmshala Near Ram Mandir Ayodhya - Sri Janaki Mahal Trust",
  description:
    "Looking for a dharmshala near Ram Mandir in Ayodhya? Sri Janaki Mahal Trust offers a peaceful stay for pilgrims with direct verified booking via call/WhatsApp.",
  path: "/dharmshala-near-ram-mandir-ayodhya",
});

const PAGE_URL = `${BUSINESS_INFO.website}/dharmshala-near-ram-mandir-ayodhya/`;

export default function DharmshalaNearRamMandirAyodhyaPage() {
  const faqs = [
    {
      question: "Is Sri Janaki Mahal Trust a dharmshala near Ram Mandir in Ayodhya?",
      answer:
        "Yes. We host pilgrims in Ayodhya and provide a calm, devotional environment. Contact us for route guidance and booking confirmation.",
    },
    {
      question: "How do I book a dharmshala stay near Ram Mandir?",
      answer:
        `Call ${BUSINESS_INFO.phone} or WhatsApp us from this website to check availability and confirm your booking.`,
    },
    {
      question: "Is it suitable for families and senior citizens?",
      answer:
        "Yes. Families and senior citizens commonly stay with us. Share any needs during booking so we can guide you on the best room options.",
    },
    {
      question: "Do you have AC and Non-AC room options?",
      answer:
        "Yes. We provide multiple categories including AC and Non-AC rooms for different budgets and seasons.",
    },
    {
      question: "How can I avoid fake bookings claiming ‘near Ram Mandir dharmshala’?",
      answer:
        "Book only using the official phone/WhatsApp buttons on this site. If someone shares a different contact, verify by calling us directly.",
    },
  ];

  return (
    <SeoLandingPage
      pageUrl={PAGE_URL}
      breadcrumbName="Dharmshala Near Ram Mandir Ayodhya"
      h1={
        <>
          Dharmshala Near Ram Mandir, Ayodhya
          <span className="block text-amber-700">(Sri Janaki Mahal Trust)</span>
        </>
      }
      intro={
        <>
          If your goal is a peaceful, pilgrim-friendly stay near Ram Mandir, Sri Janaki Mahal Trust is a verified accommodation option in Ayodhya with direct booking support via call and WhatsApp.
        </>
      }
      knownAs={[
        "Dharmshala near Ram Mandir Ayodhya",
        "Sri Janaki Mahal Trust Ayodhya",
        "Sri Janki Mahal Ayodhya",
        "Janaki Mahal Trust Ayodhya",
      ]}
      sections={[
        {
          title: "Why pilgrims choose this location",
          body: (
            <>
              <p className="mb-4">
                Ayodhya stays during peak dates can be confusing. We keep booking direct and simple so devotees can focus on darshan and their journey.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Direct booking support (call/WhatsApp)</li>
                <li>Multiple room categories for groups and families</li>
                <li>Convenient access to Ayodhya’s key spiritual sites</li>
              </ul>
            </>
          ),
        },
        {
          title: "Address",
          body: (
            <>
              <p className="text-gray-800 font-semibold">{BUSINESS_INFO.name}</p>
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

