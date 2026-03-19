import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TrustStrip } from "@/components/trust-strip";
import { featuredReasons, processSteps, trustHighlights } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "About – Family-Owned Contractor in Cleveland, TN",
  description:
    "Learn more about Ratcliff Rebuild Right LLC, a family-owned Cleveland, TN remodeling and exterior contracting company focused on trust, communication, and dependable craftsmanship.",
  path: "/about",
  keywords: ["family-owned contractor Cleveland TN", "about Ratcliff Rebuild Right LLC", "remodeling contractor Cleveland TN"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Company"
        title="A family-owned contractor built around trust, field leadership, and reliable workmanship"
        description="Ratcliff Rebuild Right LLC is a hands-on remodeling and exterior contracting company, not a sales-first operation. The goal is simple: show up, communicate clearly, make practical decisions, and leave behind work that holds up."
      >
        <div className="space-y-4">
          {trustHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
            >
              <p className="font-heading text-3xl leading-none text-white">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <TrustStrip />

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built around straight communication and the kind of craftsmanship that earns repeat calls"
                description="Family-owned, directly involved on site, and focused on doing the work the right way without overpromising."
              />
              <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300">
                <p>
                  Ratcliff Rebuild Right LLC was built for property owners who want
                  real communication, clean workmanship, and a contractor who stays
                  involved in the work itself. Chris Ratcliff, the owner, stays
                  active in the field, pays attention to the details, and treats
                  each project like it has to represent the company long after the
                  last day on site.
                </p>
                <p>
                  That approach matters whether the project is storm damage repair,
                  siding replacement, roofing, a full exterior remodel, or a custom
                  interior accent wall. Clients need clear expectations, realistic
                  planning, and workmanship that improves both the look and the
                  performance of the property. The goal is not flashy sales talk. It
                  is dependable work, transparent communication, and rebuilds that
                  are done right.
                </p>
                <p>
                  Because the company serves homeowners, investors, property
                  managers, and commercial clients across Southeast Tennessee, the
                  process stays practical. Every conversation starts with the actual
                  site conditions, the client&apos;s priorities, and the finish standard
                  expected at the end of the job.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {featuredReasons.map((reason) => (
                <article key={reason.title} className="surface-panel p-6">
                  <h2 className="font-heading text-4xl leading-none text-white">
                    {reason.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-zinc-900/70">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How Projects Move"
            title="A clear process from walkthrough to finish"
            description="Clients should know how work is evaluated, scoped, and carried through. Clear communication makes it easier to move from estimate to job start with confidence."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="surface-panel p-6">
                <p className="eyebrow">Step {index + 1}</p>
                <h2 className="mt-3 font-heading text-4xl leading-none text-white">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work With Us"
        title="Need a contractor who stays involved in the work?"
        description="Book a free estimate to talk through the property, the scope, and the most practical path forward for your remodel, roofing, or storm restoration project."
      />
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
      ])} />
    </>
  );
}
