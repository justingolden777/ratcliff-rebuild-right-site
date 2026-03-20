import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getReviewGraphSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Client Reviews - Remodeling Contractor in Cleveland, TN",
  description:
    "Read customer testimonials for Ratcliff Rebuild Right LLC and see how clients describe the company's communication, honesty, and siding workmanship.",
  path: "/testimonials",
  keywords: ["contractor reviews Cleveland TN", "Ratcliff Rebuild Right testimonials", "siding contractor reviews Cleveland TN"],
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What clients say about the communication and workmanship"
        description="These testimonials focus on the same things prospective clients care about most: honest estimates, clear communication, dependable follow-through, and siding work that holds up."
      >
        <div className="rounded-[1.5rem] border border-orange-400/20 bg-orange-400/10 p-5">
          <p className="eyebrow">What Stands Out</p>
          <p className="mt-3 text-sm leading-7 text-zinc-200">
            Clients repeatedly call out straightforward pricing, responsive communication,
            and the pride taken in the finished work. Those are the same qualities most
            people want to hear about before hiring a contractor.
          </p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-shell grid gap-6 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.location}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Join the List"
        title="Ready to work with a contractor who values follow-through?"
        description="Reach out for a free estimate and start the conversation about remodeling, roofing, storm damage repair, or custom interior finish work."
      />
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Testimonials", href: "/testimonials" },
      ])} />
      <JsonLd data={getReviewGraphSchema()} />
    </>
  );
}
