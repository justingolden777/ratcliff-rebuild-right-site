import { faqItems, serviceAreas, services, siteConfig, testimonials } from "@/content/site";
import type { FAQItem } from "@/types/site";
import { absoluteUrl } from "@/lib/utils";

// TODO: Replace with the actual business street address and ZIP code
const BUSINESS_ADDRESS = {
  streetAddress: "",       // e.g. "123 Main St"
  postalCode: "37311",     // Cleveland, TN ZIP
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Contractor"],
    "@id": `${siteConfig.domain}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.domain,
    logo: absoluteUrl("/brand/logo.png"),
    image: [
      absoluteUrl("/brand/logo.png"),
      absoluteUrl("/portfolio/siding-1.jpg"),
      absoluteUrl("/portfolio/accent-wall-1.jpg"),
    ],
    description: siteConfig.description,
    slogan: "Rebuild done right",
    telephone: "+14238277804",
    sameAs: [siteConfig.facebookUrl],
    address: {
      "@type": "PostalAddress",
      ...(BUSINESS_ADDRESS.streetAddress ? { streetAddress: BUSINESS_ADDRESS.streetAddress } : {}),
      addressLocality: "Cleveland",
      addressRegion: "TN",
      postalCode: BUSINESS_ADDRESS.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.1595,
      longitude: -84.8766,
    },
    // TODO: Update hours to match actual business availability
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
    areaServed: serviceAreas.map((area) => area.city),
    knowsAbout: services.map((service) => service.name),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(testimonials.length),
      bestRating: "5",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+14238277804",
        areaServed: serviceAreas.map((area) => area.city),
      },
    ],
  };
}

export function getFaqSchema(items: FAQItem[] = faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(crumbs: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.href),
    })),
  };
}
