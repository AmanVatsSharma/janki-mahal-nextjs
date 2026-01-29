import { BUSINESS_INFO } from "../constants";

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  item: string;
};

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

export function buildFaqPage(faqs: FaqItem[]) {
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

export function buildWebPage({
  url,
  name,
  imageUrl,
}: {
  url: string;
  name: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
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
      url: imageUrl ?? `${BUSINESS_INFO.website}/og.jpg`,
    },
  };
}

export function buildGraph(nodes: unknown[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

