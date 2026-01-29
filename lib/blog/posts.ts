import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: "Booking" | "AyodhyaGuide" | "Rooms" | "Safety";
  published: string; // ISO date string for sorting and sitemap
  content: ReactNode;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-book-sri-janaki-mahal-trust-ayodhya",
    title: "How to book Sri Janaki Mahal Trust in Ayodhya (verified steps)",
    description:
      "A simple, verified booking process for Sri Janaki Mahal Trust in Ayodhya—what details to share, how confirmation works, and how to avoid confusion with spelling variants.",
    category: "Booking",
    published: "2026-01-29",
    content: (
      <>
        <p>
          Many pilgrims search for the same accommodation using different spellings:
          <strong> Sri/Shri</strong> and <strong>Janki/Janaki</strong>. This guide explains a clean,
          verified booking flow so you can confirm your stay without confusion.
        </p>

        <h2>Step 1: Contact via official call/WhatsApp</h2>
        <p>
          Use the contact buttons on our website to call or WhatsApp. This ensures you are using the
          verified channel and reduces the risk of fake listings.
        </p>

        <h2>Step 2: Share the key booking details</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Check-in date and check-out date</li>
          <li>Number of guests (adults/children)</li>
          <li>Preferred room type (AC / Non-AC) and group size</li>
          <li>Any special needs (senior citizens, late arrival, etc.)</li>
        </ul>

        <h2>Step 3: Confirm availability + tariff</h2>
        <p>
          After we confirm availability, we share booking confirmation details and arrival guidance.
          For transparent pricing, you can also review the Rooms section on the home page.
        </p>

        <h2>Step 4: Save the verified contact for travel-day support</h2>
        <p>
          Once booked, keep the verified contact saved on your phone. It helps in case your train/flight
          timing shifts or you need directions on arrival.
        </p>

        <h2>Related pages</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a className="text-amber-700 hover:underline" href="/verified-booking-sri-janki-mahal/">
              Verified booking (anti-fraud checklist)
            </a>
          </li>
          <li>
            <a className="text-amber-700 hover:underline" href="/sri-janki-mahal-ayodhya/">
              Sri/Shri Janki/Janaki Mahal Ayodhya (official info)
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "best-stay-near-ram-mandir-ayodhya-checklist",
    title: "Best places to stay near Ram Mandir: a pilgrim-friendly checklist",
    description:
      "What to check before booking your stay near Ram Mandir in Ayodhya—location, booking verification, inclusions, and practical tips for devotees.",
    category: "AyodhyaGuide",
    published: "2026-01-29",
    content: (
      <>
        <p>
          When you search “stay near Ram Mandir Ayodhya”, you’ll find many options. The best choice is the one
          that matches your travel dates, group size, and comfort needs—while also being easy to verify.
        </p>

        <h2>1) Verify booking channels</h2>
        <p>
          Always confirm via official call/WhatsApp from the website you trust. If you see alternate numbers elsewhere,
          verify before paying.
        </p>

        <h2>2) Check room categories for your group size</h2>
        <p>
          Families and groups often need different room sizes. Ask clearly about bed capacity and what’s included.
        </p>

        <h2>3) Consider AC vs Non-AC by season</h2>
        <p>
          Ayodhya climate varies by month. For summer dates, AC is often preferred. For cooler months, Non-AC may be comfortable.
        </p>

        <h2>4) Look for clarity on inclusions</h2>
        <p>
          A meals-included stay can simplify your trip. Make sure inclusions and timings are explained clearly.
        </p>

        <h2>Helpful pages</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a className="text-amber-700 hover:underline" href="/dharmshala-near-ram-mandir-ayodhya/">
              Dharmshala near Ram Mandir Ayodhya
            </a>
          </li>
          <li>
            <a className="text-amber-700 hover:underline" href="/ac-non-ac-rooms-ayodhya-ram-mandir/">
              AC vs Non-AC rooms near Ram Mandir
            </a>
          </li>
          <li>
            <a className="text-amber-700 hover:underline" href="/meals-included-stay-ayodhya/">
              Meals included stay in Ayodhya
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "ac-vs-non-ac-rooms-ayodhya-season-guide",
    title: "AC vs Non-AC rooms in Ayodhya: what pilgrims prefer by season",
    description:
      "A simple decision guide for choosing AC vs Non-AC rooms in Ayodhya near Ram Mandir, with comfort and budget considerations.",
    category: "Rooms",
    published: "2026-01-29",
    content: (
      <>
        <p>
          Choosing between AC and Non-AC is mostly about season and comfort. If you’re traveling with senior citizens or children,
          your comfort preference may be different.
        </p>

        <h2>When AC rooms are usually preferred</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Warmer months or hot afternoons</li>
          <li>Guests sensitive to heat</li>
          <li>When you want consistent indoor comfort</li>
        </ul>

        <h2>When Non-AC rooms are a great fit</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Cooler months</li>
          <li>Budget-focused trips</li>
          <li>Short stays where AC isn’t necessary</li>
        </ul>

        <h2>Book the right option for your dates</h2>
        <p>
          The best way is to share your dates and group size and confirm availability. For the official AC/Non-AC options, see:
        </p>
        <p>
          <a className="text-amber-700 hover:underline" href="/ac-non-ac-rooms-ayodhya-ram-mandir/">
            AC & Non-AC rooms in Ayodhya (official info)
          </a>
        </p>
      </>
    ),
  },
  {
    slug: "meals-included-stay-ayodhya-what-to-expect",
    title: "Meals included stay in Ayodhya: what to expect (and why it helps)",
    description:
      "Why meals-included stays are popular for pilgrims in Ayodhya—how it saves time, keeps budgets predictable, and simplifies darshan days.",
    category: "AyodhyaGuide",
    published: "2026-01-29",
    content: (
      <>
        <p>
          A meals-included stay can make your Ayodhya trip easier—especially if your days are packed with darshan and temple visits.
        </p>

        <h2>Why pilgrims like meals-included stays</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Less planning during busy temple schedules</li>
          <li>Predictable costs (helps families budget)</li>
          <li>Convenient for senior citizens</li>
        </ul>

        <h2>What to confirm during booking</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Meal timings (especially on early/late arrival days)</li>
          <li>Any special dietary needs</li>
          <li>Inclusions shown in the Rooms section</li>
        </ul>

        <p className="mt-4">
          See also:{" "}
          <a className="text-amber-700 hover:underline" href="/meals-included-stay-ayodhya/">
            Meals included stay in Ayodhya (official info)
          </a>
          .
        </p>
      </>
    ),
  },
  {
    slug: "avoid-fake-bookings-ayodhya-verified-contact-checklist",
    title: "Avoid fake bookings in Ayodhya: a verified contact checklist",
    description:
      "A practical checklist to avoid scams and fake listings when booking accommodation in Ayodhya—how to verify contact numbers and confirm bookings safely.",
    category: "Safety",
    published: "2026-01-29",
    content: (
      <>
        <p>
          During peak seasons, fake listings can cause confusion. The simplest protection is to always book via verified contact details on the official website.
        </p>

        <h2>Quick verification checklist</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Use the call/WhatsApp buttons on the website you trust.</li>
          <li>Confirm dates, number of guests, and room type clearly.</li>
          <li>If you receive messages from another number, cross-check by calling the verified number.</li>
          <li>Save the verified contact so you can re-check later.</li>
        </ol>

        <p className="mt-4">
          For our official verification page, visit:{" "}
          <a className="text-amber-700 hover:underline" href="/verified-booking-sri-janki-mahal/">
            Verified booking Sri/Shri Janki/Janaki Mahal (official)
          </a>
          .
        </p>
      </>
    ),
  },
  {
    slug: "ayodhya-trip-stay-tips-for-pilgrims",
    title: "Ayodhya trip stay tips for pilgrims: simple planning advice",
    description:
      "A practical Ayodhya planning guide for pilgrims: choosing dates, booking early, what to keep handy on travel day, and how to keep your stay smooth near Ram Mandir.",
    category: "AyodhyaGuide",
    published: "2026-01-29",
    content: (
      <>
        <p>
          A calm trip is usually the result of simple planning: confirm your stay early, keep your contact saved, and plan your arrival time.
        </p>

        <h2>Book early for peak dates</h2>
        <p>
          Festival periods and weekends can fill quickly. If you know your travel dates, confirm availability early via call/WhatsApp.
        </p>

        <h2>Keep these details handy</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Check-in/out dates and your ID</li>
          <li>Saved verified contact number</li>
          <li>Arrival timing (train/flight) and any delays</li>
        </ul>

        <h2>Use these pages for quick help</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a className="text-amber-700 hover:underline" href="/dharmshala-near-ram-mandir-ayodhya/">
              Dharmshala near Ram Mandir Ayodhya
            </a>
          </li>
          <li>
            <a className="text-amber-700 hover:underline" href="/sri-janki-mahal-ayodhya/">
              Sri/Shri Janki/Janaki Mahal Ayodhya
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

