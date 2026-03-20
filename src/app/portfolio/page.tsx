import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { portfolioItems } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Project Gallery - Siding & Exterior Work in Cleveland, TN",
  description:
    "Browse the Ratcliff Rebuild Right LLC portfolio for siding projects, accent wall work, and exterior improvement examples from the current gallery.",
  path: "/portfolio",
  keywords: ["accent wall installer Cleveland TN", "exterior remodeling Cleveland TN portfolio", "siding contractor portfolio Cleveland TN"],
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Examples of siding, accent wall, and exterior improvement work"
        description="This gallery gives a closer look at the finish level, detail work, and overall style behind Ratcliff Rebuild Right LLC projects."
      >
        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
          <p className="eyebrow">Current Gallery</p>
          <p className="text-sm leading-7 text-zinc-300">
            The current gallery highlights siding and accent wall work from recent
            projects, along with the exterior remodel category for larger outside upgrades.
          </p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-shell">
          <PortfolioGrid items={portfolioItems} grouped />
        </div>
      </section>

      <CtaBand
        eyebrow="Like What You See?"
        title="Want to talk through a project like these?"
        description="Reach out for a free estimate on exterior remodels, siding, roofing, storm damage work, or custom feature walls across Cleveland and the surrounding service area."
      />
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
      ])} />
    </>
  );
}
