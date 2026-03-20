import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { ServiceCarousel } from "@/components/service-carousel";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Siding, Roofing & Exterior Remodeling Services - Cleveland, TN",
  description:
    "Explore siding, exterior remodels, storm damage and insurance work, roofing, accent walls, painting, additions, repairs, and remodeling services in Cleveland, TN.",
  path: "/services",
  keywords: ["roofing contractor Cleveland TN", "siding contractor in Cleveland TN", "home renovation Cleveland TN", "exterior remodeling Cleveland TN"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Renovation and repair work built for real properties"
        description="Siding, roofing, storm damage, accent walls, remodeling, and more. Scoped clearly, built right, and backed by an owner who stays on the job."
        centered
      />

      {/* Service carousel */}
      <section className="border-b border-white/10 py-10 sm:py-12">
        <div className="container-shell">
          <p className="eyebrow mb-6 text-center">What We Build</p>
          <ServiceCarousel services={services} />
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Full Lineup"
            title="A full service lineup that supports upgrades, restoration, and repair"
            description="Whether the job is a full exterior update or a smaller repair, the work is scoped clearly, explained plainly, and built to last."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-zinc-900/70">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="surface-panel p-6 sm:p-8">
              <p className="eyebrow">How It Works</p>
              <h2 className="mt-3 font-heading text-5xl leading-[0.95] text-white">
                Walk the project, scope the work, build it right
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                Every job starts with a real site walkthrough, not a phone
                estimate or a one-size-fits-all quote. Chris reviews the
                property, talks through the priorities, and builds a scope that
                fits the actual conditions on site.
              </p>
              <div className="mt-6">
                <Link href="/about" className="button-secondary">
                  Learn About Our Process
                </Link>
              </div>
            </article>
            <article className="surface-panel p-6 sm:p-8">
              <p className="eyebrow">What to Expect</p>
              <h2 className="mt-3 font-heading text-5xl leading-[0.95] text-white">
                Clear scope before work starts
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-zinc-200">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>On-site estimate with the owner present</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>Materials, priorities, and timeline discussed up front</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>Direct communication from estimate through project close</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>Final walkthrough before the job is considered finished</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Get Started"
        title="Need help choosing the right service or scope?"
        description="Book a free estimate and get straightforward guidance on siding, roofing, storm damage repairs, accent walls, additions, and broader remodeling work."
      />
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
      ])} />
    </>
  );
}
