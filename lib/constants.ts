// Business constants for Sri Janaki Mahal Trust

export const BUSINESS_INFO = {
  name: "Sri Janaki Mahal Trust",
  legalName: "Sri Janaki Mahal Trust",
  description: "Spiritual Dharmshala in Ayodhya offering comfortable accommodation near Ram Mandir",
  tagline: "A Sacred Sanctuary in the Heart of Ayodhya",
  email: "vedpragyabharat@gmail.com",
  phone: "+91 8460839199",
  whatsapp: "+91 8460839199",
  // IMPORTANT (SEO): This must always be the *current* canonical domain. All canonicals,
  // sitemaps, structured data URLs, OG image URLs should ultimately derive from this field.
  website: "https://www.srijanakimahaltrustofficial.com",
  address: {
    street: "Vasudev Gath, Karsewakpuram",
    city: "Ayodhya",
    state: "Uttar Pradesh",
    postalCode: "224123",
    country: "India",
    coordinates: {
      latitude: 26.8039286,
      longitude: 82.2109433,
    },
  },
  foundingDate: "2020",
  hours: {
    checkIn: "24 Hours",
    checkOut: "24 Hours",
    officeHours: "6:00 AM - 10:00 PM",
    emergency: "24/7 available",
  },
  social: {
    whatsapp: "https://wa.me/918460839199",
    // Optional (SEO/entity): add your Google Business Profile share URL here when available.
    // Example: "https://g.page/r/<PLACE_ID>/review" or the GBP profile URL.
    googleBusinessProfile: "",
  },
} as const;

export const CONTACT_LINKS = {
  phone: `tel:${BUSINESS_INFO.phone}`,
  whatsapp: `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`,
  email: `mailto:${BUSINESS_INFO.email}`,
  bookingWhatsApp: `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hello%20Sri%20Janaki%20Mahal%2C%20I%20would%20like%20to%20book%20a%20room`,
} as const;

export const GOOGLE_ANALYTICS = {
  measurementId: "AW-17664529026",
  conversionId: "AW-17664529026/Zkz9CLjxg7AbELP8qedB",
} as const;

export const SEO_DEFAULTS = {
  siteName: BUSINESS_INFO.name,
  defaultTitle: `${BUSINESS_INFO.name} - Spiritual Dharmshala in Ayodhya`,
  defaultDescription: "Sri Janaki Mahal - Spiritual Dharmshala in Ayodhya. Book your sacred stay with comfortable rooms and warm hospitality.",
  ogImage: `${BUSINESS_INFO.website}/og.jpg`,
  twitterHandle: "@srijanakimahal",
  locale: "en_IN",
} as const;
