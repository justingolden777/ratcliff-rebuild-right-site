import type { MetadataRoute } from "next";

import { serviceAreas, services } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

const LAST_MODIFIED = new Date("2026-03-18");

const coreRoutes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1.0 },
  { path: "/services", priority: 0.9 },
  { path: "/service-areas", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/testimonials", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
  { path: "/faq", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const core = coreRoutes.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified: LAST_MODIFIED,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority,
  }));

  const serviceRoutes = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const areaRoutes = serviceAreas.map((area) => ({
    url: absoluteUrl(`/service-areas/${area.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...core, ...serviceRoutes, ...areaRoutes];
}
