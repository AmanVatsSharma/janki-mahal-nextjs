import HeroSection from "../components/HeroSection";
import AboutJanakiMahal from "../components/AboutJanakiMahal";
import RoomsSection from "../components/RoomsSection";
import AmenitiesSection from "../components/AmenitiesSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Script from "next/script";
import { BUSINESS_INFO } from "../lib/constants";

export default function Home() {
  const homeUrl = `${BUSINESS_INFO.website}/`;

  // Home page-specific structured data (kept separate from the global graph in app/layout.tsx).
  const homepageWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${homeUrl}#webpage`,
    url: homeUrl,
    name: "Sri Janaki Mahal Trust - Spiritual Dharmshala in Ayodhya",
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

  return (
    <>
      <Script
        id="homepage-webpage-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageWebPageJsonLd) }}
      />

      <main className="min-h-screen">
        <HeroSection />
        <AboutJanakiMahal />
        <RoomsSection />
        <AmenitiesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
}