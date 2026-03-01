// Business constants for Sri Janaki Mahal Trust

export const BUSINESS_INFO = {
  name: "Sri Janaki Mahal Trust",
  legalName: "Sri Janaki Mahal Trust",
  description: "Spiritual Dharmshala in Ayodhya offering comfortable accommodation near Ram Mandir",
  tagline: "A Sacred Sanctuary in the Heart of Ayodhya",
  email: "srijanakimahaltrustofficial@gmail.com",
  phone: "+91 9893563047",
  whatsapp: "+91 9893563047",
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
    whatsapp: "https://wa.me/919893563047",
    // Google Business Profile / Maps listing URL (for schema sameAs + local SEO)
    googleBusinessProfile: "https://www.google.com/maps?cid=13157769449180505616",
  },
} as const;

export const CONTACT_LINKS = {
  phone: `tel:${BUSINESS_INFO.phone}`,
  whatsapp: `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`,
  email: `mailto:${BUSINESS_INFO.email}`,
  bookingWhatsApp: `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hello%20Sri%20Janaki%20Mahal%2C%20I%20would%20like%20to%20book%20a%20room`,
} as const;

export const GOOGLE_ANALYTICS = {
  measurementId: "AW-17922029438",
  conversionId: "AW-17922029438/Zkz9CLjxg7AbELP8qedB",
} as const;

export const SEO_DEFAULTS = {
  siteName: BUSINESS_INFO.name,
  defaultTitle: "Sri Janaki Mahal Trust - Official Online Booking Sri Janki Mahal Trust Official Contact Number Shri Janki Mahal Trust Booking",
  defaultDescription: "Sri Janaki Mahal - Spiritual Dharmshala in Ayodhya. Book your sacred stay with comfortable rooms and warm hospitality.",
  ogImage: `${BUSINESS_INFO.website}/og.jpg`,
  twitterHandle: "@srijanakimahal",
  locale: "en_IN",
} as const;
