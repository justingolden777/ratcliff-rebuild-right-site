import type { MetadataRoute } from "next";

import { serviceAreas, services } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

const LAST_MODIFIED = "2026-03-19";

const coreRoutes = [
  "/",
  "/services",
  "/service-areas",
  "/about",
  "/portfolio",
  "/testimonials",
  "/contact",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const core = coreRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: LAST_MODIFIED,
  }));

  const serviceRoutes = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: LAST_MODIFIED,
  }));

  const areaRoutes = serviceAreas.map((area) => ({
    url: absoluteUrl(`/service-areas/${area.slug}`),
    lastModified: LAST_MODIFIED,
  }));

  return [...core, ...serviceRoutes, ...areaRoutes];
}
