import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { faqItems } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Contractor FAQ – Estimates, Services & Storm Repairs",
  description:
    "Read common questions about remodeling services, free estimates, licensing, storm damage repair, service areas, and quote requests in Cleveland, TN.",
  path: "/faq",
  keywords: ["contractor FAQ Cleveland TN", "storm damage repair FAQ Cleveland TN", "free estimate Cleveland TN"],
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Clear answers on estimates, service areas, and project types"
        description="These are the questions people ask most before scheduling an estimate, from service areas and project types to storm damage and insurance-related work."
      >
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
          <p className="eyebrow">Included Topics</p>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            Remodeling services, free estimates, licensing and insurance, storm
            damage repair, residential and commercial work, service areas, and the
            best way to request a quote.
          </p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-shell max-w-4xl">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <CtaBand
        eyebrow="Still Have Questions?"
        title="Still have a question about your project?"
        description="Use the contact form or call directly if you need help with scope, timing, storm damage, siding, roofing, or general remodeling work."
      />
      <JsonLd data={getFaqSchema()} />
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "FAQ", href: "/faq" },
      ])} />
    </>
  );
}
