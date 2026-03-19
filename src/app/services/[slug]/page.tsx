import { notFound } from "next/navigation";
import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems, serviceAreas, services, siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";
import type { PortfolioCategory } from "@/types/site";

const servicePortfolioMap: Partial<Record<string, PortfolioCategory>> = {
  siding: "Siding and Trim",
  "exterior-remodels": "Exterior Remodels",
  "accent-walls": "Accent Walls / Feature Walls",
  "knotty-pine-ceilings": "Knotty Pine Ceilings",
  "interior-trim-and-feature-walls": "Interior Trim and Feature Walls",
};

const serviceTitleMap: Record<string, string> = {
  siding: "Siding Contractor in Cleveland, TN",
  "exterior-remodels": "Exterior Remodeling in Cleveland, TN",
  "storm-damage-and-insurance-work": "Storm Damage Repair in Cleveland, TN",
  roofing: "Roofing Contractor in Cleveland, TN",
  "accent-walls": "Accent Wall Installation in Cleveland, TN",
  "knotty-pine-ceilings": "Knotty Pine Ceilings in Cleveland, TN",
  "interior-trim-and-feature-walls": "Interior Trim & Feature Walls in Cleveland, TN",
  painting: "Painting Contractor in Cleveland, TN",
  "general-remodeling": "General Remodeling in Cleveland, TN",
  additions: "Home Additions in Cleveland, TN",
  repairs: "Home Repairs in Cleveland, TN",
  "consulting-and-estimates": "Free Estimates – Remodeling Contractor, Cleveland TN",
};

const serviceKeywordsMap: Record<string, string[]> = {
  siding: ["siding contractor Cleveland TN", "siding installation Cleveland TN", "siding replacement Cleveland TN"],
  "exterior-remodels": ["exterior remodeling Cleveland TN", "exterior contractor Cleveland TN", "home exterior upgrade Cleveland TN"],
  "storm-damage-and-insurance-work": ["storm damage repair Cleveland TN", "insurance claim contractor Cleveland TN", "hail damage repair Cleveland TN"],
  roofing: ["roofing contractor Cleveland TN", "roof repair Cleveland TN", "roofing company Cleveland TN"],
  "accent-walls": ["accent wall installer Cleveland TN", "custom accent wall Cleveland TN", "feature wall installation Cleveland TN"],
  "knotty-pine-ceilings": ["knotty pine ceiling Cleveland TN", "wood ceiling installation Cleveland TN"],
  "interior-trim-and-feature-walls": ["interior trim Cleveland TN", "feature wall installation Cleveland TN", "trim carpenter Cleveland TN"],
  painting: ["painting contractor Cleveland TN", "interior exterior painting Cleveland TN"],
  "general-remodeling": ["general contractor Cleveland TN", "home remodeling Cleveland TN", "remodeling company Cleveland TN"],
  additions: ["home addition Cleveland TN", "room addition contractor Cleveland TN"],
  repairs: ["home repair contractor Cleveland TN", "property repairs Cleveland TN"],
  "consulting-and-estimates": ["free estimate Cleveland TN contractor", "contractor consultation Cleveland TN"],
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const title = serviceTitleMap[service.slug] ?? `${service.name} in Cleveland, TN`;
  const description = `${service.shortDescription} Ratcliff Rebuild Right LLC serves Cleveland, TN and nearby communities. Licensed, insured, free estimates.`;

  return createPageMetadata({
    title,
    description,
    path: `/services/${service.slug}`,
    keywords: serviceKeywordsMap[service.slug] ?? [`${service.name.toLowerCase()} Cleveland TN`],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedCategory = servicePortfolioMap[service.slug];
  const relatedItems = relatedCategory
    ? portfolioItems.filter((item) => item.category === relatedCategory && !item.placeholder).slice(0, 3)
    : [];

  const pageTitle = serviceTitleMap[service.slug] ?? `${service.name} in Cleveland, TN`;

  const areaPreview = serviceAreas.slice(0, 5);

  return (
    <>
      <PageHero
        eyebrow={service.featured ? "Featured Service" : "Service"}
        title={pageTitle}
        description={service.shortDescription}
        actions={[
          { label: siteConfig.primaryCtaLabel, href: siteConfig.primaryCtaHref, variant: "primary" },
          { label: "Call Now", href: siteConfig.phoneHref, variant: "secondary" },
        ]}
      >
        <div className="space-y-4">
          <p className="eyebrow">What&apos;s Included</p>
          <ul className="space-y-3">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
              >
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                <span className="text-sm leading-6 text-zinc-200">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageHero>

      {service.longDescription && (
        <section className="border-b border-white/10 py-12 sm:py-16">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-white/10 bg-zinc-900/60 px-8 py-8 sm:px-10 sm:py-10">
              <p className="text-base leading-8 text-zinc-300 sm:text-lg">
                {service.longDescription}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="surface-panel p-6 sm:p-8">
              <p className="eyebrow">Why Ratcliff Rebuild Right</p>
              <h2 className="mt-3 font-heading text-5xl leading-[0.95] text-white">
                Owner-led work from estimate to finish
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                Chris Ratcliff stays involved on every job, from the initial site
                walk to the final walkthrough. No hand-offs to an unfamiliar crew,
                no gap between what was promised and what gets built.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-zinc-200">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>Licensed and insured for residential and commercial work</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>Free estimates, no commitment required to walk the site</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>Warranty-backed work with clear expectations set before start</span>
                </li>
              </ul>
            </article>

            <article className="surface-panel p-6 sm:p-8">
              <p className="eyebrow">Service Area</p>
              <h2 className="mt-3 font-heading text-5xl leading-[0.95] text-white">
                Serving Cleveland and nearby Tennessee communities
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                {service.name} work is available throughout the full service area,
                including{" "}
                {areaPreview.map((area, i) => (
                  <span key={area.slug}>
                    <Link href={`/service-areas/${area.slug}`} className="text-orange-300 hover:text-orange-200 transition-colors">
                      {area.city}
                    </Link>
                    {i < areaPreview.length - 1 ? ", " : ", and more"}
                  </span>
                ))}.
              </p>
              <div className="mt-6">
                <Link href="/service-areas" className="button-secondary">
                  View All Service Areas
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {relatedItems.length > 0 && (
        <section className="section-space border-y border-white/10 bg-zinc-900/70">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Real Projects"
              title={`Recent ${service.name.toLowerCase()} work from the gallery`}
              description="These photos show the level of finish and detail work behind recent projects in Cleveland and the surrounding area."
            />
            <div className="mt-10">
              <PortfolioGrid items={relatedItems} />
            </div>
            <div className="mt-8">
              <Link href="/portfolio" className="button-secondary">
                Browse Full Portfolio
              </Link>
            </div>
          </div>
        </section>
      )}

      <CtaBand
        eyebrow="Get Started"
        title={`Ready to talk about your ${service.name.toLowerCase()} project?`}
        description={`Book a free estimate to walk the site and get a practical next step for your ${service.name.toLowerCase()} project in Cleveland, Chattanooga, and the surrounding area.`}
      />

      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: service.name, href: `/services/${service.slug}` },
      ])} />
    </>
  );
}
