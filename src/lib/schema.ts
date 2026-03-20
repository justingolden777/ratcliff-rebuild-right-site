import {
  faqItems,
  serviceAreas,
  services,
  siteConfig,
  testimonials,
} from "@/content/site";
import type { FAQItem, Service } from "@/types/site";
import { absoluteUrl } from "@/lib/utils";

const LOCAL_BUSINESS_ID = `${siteConfig.domain}/#localbusiness`;
const WEBSITE_ID = `${siteConfig.domain}/#website`;
const CONTACT_URL = `${siteConfig.domain}/contact`;
const SERVICE_AREA_CITIES = serviceAreas.map((area) => area.city);

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Contractor"],
    "@id": LOCAL_BUSINESS_ID,
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
      addressLocality: "Cleveland",
      addressRegion: "TN",
      postalCode: "37311",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.1595,
      longitude: -84.8766,
    },
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
    areaServed: SERVICE_AREA_CITIES,
    knowsAbout: services.map((service) => service.name),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: testimonials.length,
      bestRating: 5,
      worstRating: 1,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+14238277804",
        areaServed: SERVICE_AREA_CITIES,
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.domain,
    name: siteConfig.name,
    description:
      "Remodeling and exterior contracting in Cleveland, TN and surrounding Southeast Tennessee communities.",
    publisher: {
      "@id": LOCAL_BUSINESS_ID,
    },
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.domain}/about#owner`,
    name: "Chris Ratcliff",
    jobTitle: "Owner",
    worksFor: {
      "@id": LOCAL_BUSINESS_ID,
    },
    url: `${siteConfig.domain}/about`,
    sameAs: [siteConfig.facebookUrl],
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

export function getServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.domain}/services/${service.slug}#service`,
    name: service.schemaName,
    description: service.schemaDescription,
    url: `${siteConfig.domain}/services/${service.slug}`,
    serviceType: service.schemaServiceType,
    provider: {
      "@id": LOCAL_BUSINESS_ID,
    },
    areaServed: SERVICE_AREA_CITIES,
    offers: {
      "@type": "Offer",
      url: CONTACT_URL,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Free estimates available. Price varies by project scope.",
      },
    },
  };
}

export function getReviewGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": testimonials.map((testimonial) => ({
      "@type": "Review",
      itemReviewed: {
        "@id": LOCAL_BUSINESS_ID,
      },
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: testimonial.quote,
      publisher: {
        "@id": LOCAL_BUSINESS_ID,
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
