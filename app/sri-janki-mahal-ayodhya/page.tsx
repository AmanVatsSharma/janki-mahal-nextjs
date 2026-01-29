import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { generateMetadata as generateBaseMetadata } from "../../lib/metadata";
import { BUSINESS_INFO, CONTACT_LINKS } from "../../lib/constants";

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

function buildBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BUSINESS_INFO.website}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sri / Shri Janki Mahal Ayodhya",
        item: PAGE_URL,
      },
    ],
  };
}

function buildFaqJsonLd() {
  const faqs: Array<{ question: string; answer: string }> = [
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
      question: "What documents are required at check-in?",
      answer:
        "A valid government-issued ID is required at check-in for all guests, as per standard lodging rules.",
    },
    {
      question: "How can I avoid fake listings for Sri/Shri Janki Mahal Ayodhya?",
      answer:
        "Always book via the official phone/WhatsApp details on this website. If you see alternate contacts elsewhere, verify by contacting us directly through this site.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

function buildWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Sri / Shri Janki Mahal Ayodhya - Official Booking (Sri Janaki Mahal Trust)",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${BUSINESS_INFO.website}/#website`,
    },
    about: {
      "@type": "LodgingBusiness",
      "@id": `${BUSINESS_INFO.website}/#lodgingbusiness`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${BUSINESS_INFO.website}/og.jpg`,
    },
  };
}

export default function SriJankiMahalAyodhyaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [buildWebPageJsonLd(), buildBreadcrumbJsonLd(), buildFaqJsonLd()],
  };

  return (
    <>
      {/* Page-level structured data to complement the global graph in app/layout.tsx */}
      <Script
        id="sri-janki-mahal-ayodhya-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-[#faf8f3] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-700">
              Official information page
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
              Sri / Shri Janki Mahal Ayodhya
              <span className="block text-amber-700">
                (Sri Janaki Mahal Trust)
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              If you searched for <strong>Sri Janki Mahal</strong>,{" "}
              <strong>Sri Janaki Mahal</strong>, or <strong>Shri Janki Mahal Ayodhya</strong>,
              you’re in the right place. This page helps devotees reach the verified
              accommodation and book safely using official contact details.
            </p>
          </header>

          <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Book verified rooms (Call / WhatsApp)
            </h2>
            <p className="text-gray-700 mb-6">
              For availability, tariffs, and booking confirmation, contact us directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_LINKS.phone}
                className="flex-1 px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors text-center"
                aria-label={`Call ${BUSINESS_INFO.phone} for official booking`}
              >
                Call: {BUSINESS_INFO.phone}
              </a>
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors text-center"
                aria-label="WhatsApp for official booking"
              >
                WhatsApp Booking
              </a>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Known by many names (same place)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pilgrims often use different spellings on Google. These commonly searched
              variations all point to the same verified accommodation:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="bg-amber-50 rounded-lg px-4 py-3">Sri Janaki Mahal</li>
              <li className="bg-amber-50 rounded-lg px-4 py-3">Sri Janki Mahal</li>
              <li className="bg-amber-50 rounded-lg px-4 py-3">Shri Janki Mahal Ayodhya</li>
              <li className="bg-amber-50 rounded-lg px-4 py-3">Janaki Mahal Trust Ayodhya</li>
              <li className="bg-amber-50 rounded-lg px-4 py-3">Sri Janaki Mahal Trust</li>
              <li className="bg-amber-50 rounded-lg px-4 py-3">Sri Janki Mahal Trust</li>
            </ul>
            <p className="mt-5 text-sm text-gray-600">
              Tip: Always use the contact buttons on this website to avoid confusion with
              unofficial listings.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Location in Ayodhya
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sri Janaki Mahal Trust is located in Ayodhya and is convenient for
                  devotees visiting Ram Mandir and other spiritual sites.
                </p>
                <p className="text-gray-800 font-semibold">Address</p>
                <p className="text-gray-700">
                  {BUSINESS_INFO.address.street}
                  <br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}{" "}
                  {BUSINESS_INFO.address.postalCode}
                  <br />
                  {BUSINESS_INFO.address.country}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-800 font-semibold mb-2">Quick links</p>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-amber-700 hover:underline" href="/about/">
                      About Sri Janaki Mahal Trust
                    </Link>
                  </li>
                  <li>
                    <Link className="text-amber-700 hover:underline" href="/#rooms">
                      View rooms & pricing (on home page)
                    </Link>
                  </li>
                  <li>
                    <Link className="text-amber-700 hover:underline" href="/#contact">
                      Contact section
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              FAQs (Sri/Shri Janki/Janaki Mahal Ayodhya)
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Is Sri Janki Mahal the same as Sri Janaki Mahal Trust?
                </h3>
                <p className="text-gray-700">
                  Yes. The difference is spelling; devotees use both “Janki” and “Janaki”
                  and both “Sri” and “Shri”.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  What is the official booking contact?
                </h3>
                <p className="text-gray-700">
                  Call <strong>{BUSINESS_INFO.phone}</strong> or use the WhatsApp button on
                  this page for official support.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Do you provide AC and Non-AC rooms?
                </h3>
                <p className="text-gray-700">
                  Yes—multiple room categories are available. See the Rooms section on the
                  home page for current categories and tariffs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  How can I avoid fake listings?
                </h3>
                <p className="text-gray-700">
                  Book only via the official buttons on this website. If you receive
                  messages from other numbers, verify by contacting us directly using the
                  contact details shown here.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

