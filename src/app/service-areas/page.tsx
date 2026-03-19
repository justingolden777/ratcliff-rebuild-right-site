import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { serviceAreas } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Service Areas – Contractor Serving Southeast Tennessee",
  description:
    "Ratcliff Rebuild Right LLC serves Cleveland, Chattanooga, Ooltewah, Athens, Dayton, Charleston, Soddy-Daisy, Hixson, Apison, and McDonald, TN.",
  path: "/service-areas",
  keywords: ["remodeler near Cleveland TN", "Cleveland TN service area contractor", "Chattanooga exterior remodeling", "contractor Southeast Tennessee"],
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Areas we serve across Cleveland and nearby Tennessee communities"
        description="Cleveland is the main service area, with work also reaching Chattanooga, Ooltewah, Athens, Dayton, Charleston, Soddy-Daisy, Hixson, Apison, McDonald, and nearby communities."
      >
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
          <p className="eyebrow">Where We Work</p>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            From full siding jobs and roof repairs to storm damage rebuilds, accent
            walls, and general remodeling, Ratcliff Rebuild Right LLC works across
            this part of Southeast Tennessee.
          </p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Cities We Serve"
            title="Practical work for homes, rentals, and commercial properties"
            description="Each city below includes examples of the kind of work commonly handled there, from exterior repairs and siding updates to roofing and interior finish work."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {serviceAreas.map((area) => (
              <article key={area.city} className="surface-panel p-6">
                <p className="eyebrow">Service Area</p>
                <h3 className="mt-3 font-heading text-5xl leading-[0.95] text-white">
                  {area.city}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{area.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-zinc-200">
                  {area.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href={`/service-areas/${area.slug}`} className="button-secondary">
                    View {area.city}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-zinc-900/70">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="surface-panel p-6 lg:col-span-2">
              <p className="eyebrow">Common Work Across the Region</p>
              <h2 className="mt-3 font-heading text-5xl leading-[0.95] text-white">
                Siding, roofing, storm damage repair, and modern interior upgrades
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                Whether the property is in Cleveland, Chattanooga, Ooltewah, Athens,
                or one of the surrounding Tennessee communities, most calls come down
                to exterior protection, curb appeal, storm-related repairs, and interior
                upgrades that make the space feel cleaner and more finished.
              </p>
            </article>
            <article className="surface-panel p-6">
              <p className="eyebrow">Need a Quote?</p>
              <h2 className="mt-3 font-heading text-5xl leading-[0.95] text-white">
                Start with a free estimate
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                Share the city, the service needed, and any timing concerns so the
                estimate can start with a clear picture of the job.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="button-primary">
                  Book a Free Estimate
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="In the Area?"
        title="Need a remodeler near Cleveland, TN?"
        description="Call, text, or request a free estimate for exterior remodeling, siding, roofing, storm damage work, accent walls, and practical renovation projects across the full service area."
      />
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Service Areas", href: "/service-areas" },
      ])} />
    </>
  );
}
