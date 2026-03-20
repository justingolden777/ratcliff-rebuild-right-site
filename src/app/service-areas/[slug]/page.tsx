import { notFound } from "next/navigation";
import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { serviceAreas, services, siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return {};

  return createPageMetadata({
    title: `Remodeling & Exterior Contractor in ${area.city}`,
    description: `Ratcliff Rebuild Right LLC provides siding, roofing, storm damage repair, exterior remodeling, and accent wall work in ${area.city}. Family-owned, licensed, insured, free estimates.`,
    path: `/service-areas/${area.slug}`,
    keywords: [
      `contractor in ${area.city}`,
      `siding contractor ${area.city}`,
      `remodeling ${area.city}`,
      `roofing contractor ${area.city}`,
      `storm damage repair ${area.city}`,
    ],
  });
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const featuredServices = services.filter((s) => s.featured).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title={`Remodeling & Exterior Contractor in ${area.city}`}
        description={area.summary}
        actions={[
          { label: siteConfig.primaryCtaLabel, href: siteConfig.primaryCtaHref, variant: "primary" },
          { label: "Call Now", href: siteConfig.phoneHref, variant: "secondary" },
        ]}
      >
        <div className="space-y-4">
          <p className="eyebrow">Common Work in This Area</p>
          <ul className="space-y-3">
            {area.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
              >
                <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                <span className="text-sm leading-7 text-zinc-200">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageHero>

      <section className="border-b border-white/10 py-12 sm:py-16">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-white/10 bg-zinc-900/60 px-8 py-8 sm:px-10 sm:py-10">
            <p className="text-base leading-8 text-zinc-300 sm:text-lg">
              {area.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What We Build"
            title={`Services available in ${area.city}`}
            description="From exterior protection and storm damage work to interior upgrades and custom feature walls, Ratcliff Rebuild Right LLC handles the full scope."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="button-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-zinc-900/70">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="surface-panel p-6 sm:p-8">
              <p className="eyebrow">Why Choose Ratcliff</p>
              <h2 className="mt-3 font-heading text-5xl leading-[0.95] text-white">
                Family-owned, licensed, and directly involved
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                Chris Ratcliff leads every job in the field and stays involved
                from estimate to final walkthrough. Properties in {area.city}{" "}
                and the surrounding area get the same communication, planning,
                and workmanship standard every time.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-zinc-200">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>Licensed and insured for residential and commercial projects</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>Free on-site estimates, no remote quotes</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>Warranty-backed work and direct owner communication</span>
                </li>
              </ul>
            </article>

            <article className="surface-panel p-6 sm:p-8">
              <p className="eyebrow">Full Service Area</p>
              <h2 className="mt-3 font-heading text-5xl leading-[0.95] text-white">
                Other communities we serve
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                In addition to {area.city}, Ratcliff Rebuild Right LLC works across
                Southeast Tennessee. Browse all service area pages for city-specific
                project details.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-zinc-300">
                {serviceAreas
                  .filter((a) => a.slug !== area.slug)
                  .slice(0, 8)
                  .map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/service-areas/${a.slug}`}
                        className="text-orange-300 hover:text-orange-200 transition-colors"
                      >
                        {a.city}
                      </Link>
                    </li>
                  ))}
              </ul>
              <div className="mt-6">
                <Link href="/service-areas" className="button-secondary">
                  View All Service Areas
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={`Serving ${area.city}`}
        title={`Need a contractor in ${area.city}?`}
        description={`Book a free estimate for siding, roofing, storm damage repair, exterior remodeling, or accent wall work in ${area.city} and nearby areas.`}
      />

      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Service Areas", href: "/service-areas" },
        { name: area.city, href: `/service-areas/${area.slug}` },
      ])} />
    </>
  );
}
