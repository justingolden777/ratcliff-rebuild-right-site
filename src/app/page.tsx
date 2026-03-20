import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { JsonLd } from "@/components/json-ld";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { TrustStrip } from "@/components/trust-strip";
import {
  faqItems,
  featuredReasons,
  portfolioItems,
  serviceAreas,
  services,
  siteConfig,
  testimonials,
} from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getWebSiteSchema } from "@/lib/schema";

const featuredServices = services.filter((service) => service.featured);
const portfolioPreview = [
  ...portfolioItems.filter((item) => item.category === "Siding and Trim").slice(0, 1),
  ...portfolioItems
    .filter((item) => item.category === "Accent Walls / Feature Walls")
    .slice(0, 2),
];
const heroSlides = [
  {
    src: "/portfolio/siding-1.jpg",
    alt: "Siding installation on a Cleveland, TN home",
    captionEyebrow: "Exterior Siding",
    caption: "Full siding refresh in Cleveland, TN. New panels, tight trim, and a cleaner elevation from end to end.",
  },
  {
    src: "/portfolio/accent-wall-1.jpg",
    alt: "Custom wood accent wall installation in Cleveland, TN",
    captionEyebrow: "Accent Wall",
    caption: "Custom slat accent wall in Cleveland, TN. Adds texture and depth without making the room feel heavy.",
  },
  {
    src: "/portfolio/siding-2.jpg",
    alt: "Exterior siding replacement in Bradley County, TN",
    captionEyebrow: "Siding & Trim",
    caption: "Siding and trim upgrade in Bradley County. Better weather protection and a sharper look in three days.",
  },
  {
    src: "/portfolio/accent-wall-2.jpg",
    alt: "Interior accent wall with custom slat design in Cleveland, TN",
    captionEyebrow: "Feature Wall",
    caption: "Feature wall with natural warmth in Bradley County. Crisp spacing, straight reveals, balanced finish.",
  },
  {
    src: "/portfolio/siding-3.jpg",
    alt: "Vinyl siding project completed in Cleveland, TN",
    captionEyebrow: "Exterior Remodel",
    caption: "Modern exterior siding near Chattanooga. Cleaner profile, same durability, done in a week.",
  },
  {
    src: "/portfolio/accent-wall-3.jpg",
    alt: "Feature wall built by Ratcliff Rebuild Right in Bradley County, TN",
    captionEyebrow: "Interior Detail",
    caption: "Tall wall detail near Chattanooga. A transitional space turned into a finished focal point.",
  },
  {
    src: "/portfolio/knotty-pine-1.jpg",
    alt: "Knotty pine ceiling installation in Cleveland, TN home",
    captionEyebrow: "Knotty Pine Ceiling",
    caption: "Tongue-and-groove knotty pine in Cleveland, TN. Warm, textural, and built to improve with age.",
  },
  {
    src: "/portfolio/knotty-pine-2.png",
    alt: "Knotty pine tongue and groove ceiling in Bradley County, TN",
    captionEyebrow: "Knotty Pine Ceiling",
    caption: "Knotty pine sunroom ceiling in Bradley County. Natural character that changes how a room feels.",
  },
  {
    src: "/portfolio/knotty-pine-3.png",
    alt: "Finished knotty pine ceiling project in Cleveland, TN",
    captionEyebrow: "Knotty Pine Ceiling",
    caption: "Clean joints, intentional reveals, and real wood grain. A ceiling finish that stands on its own.",
  },
  {
    src: "/portfolio/wood-shutters.png",
    alt: "Custom wood shutters installed in a residential interior",
    captionEyebrow: "Custom Wood Shutters",
    caption: "Custom wood shutters in Cleveland, TN. Fitted trim work that completes the room from the inside out.",
  },
];
const areaPreview = serviceAreas.slice(0, 4);

export const metadata = createPageMetadata({
  title: "Remodeling and Exterior Contractor in Cleveland, TN",
  description:
    "Ratcliff Rebuild Right LLC provides siding, exterior remodeling, roofing, storm damage repair, and accent wall installation in Cleveland, TN and surrounding areas.",
  path: "/",
  keywords: [
    "siding contractor in Cleveland TN",
    "exterior remodeling Cleveland TN",
    "roofing contractor Cleveland TN",
    "storm damage repair Cleveland TN",
    "accent wall installer Cleveland TN",
    "home renovation Cleveland TN",
    "remodeler near Cleveland TN",
  ],
});

export default function HomePage() {
  return (
    <>
      <section className="border-b border-white/10 pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="eyebrow text-center">
                Siding | Roofing | Exterior Remodels | Cleveland, TN
              </p>
              <h1 className="mx-auto mt-4 max-w-4xl text-balance font-heading text-5xl leading-[0.9] text-white sm:text-6xl lg:text-[5.7rem]">
                Siding, Roofing and Exterior Remodeling in Cleveland, TN
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                Ratcliff Rebuild Right LLC helps homeowners, property managers,
                and commercial clients across Cleveland, Chattanooga, Ooltewah,
                Athens, Dayton, and nearby Tennessee communities with siding,
                exterior remodels, roofing, storm damage repair, and practical
                renovation work that looks sharp and holds up.
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-sm uppercase tracking-[0.2em] text-zinc-400">
                Licensed | Insured | Family-owned | Warranty-backed
              </p>

              <div className="mt-8 flex flex-col items-center gap-4">
                <Link
                  href={siteConfig.primaryCtaHref}
                  className="button-primary min-h-14 px-8 text-[0.8rem] sm:px-10"
                >
                  {siteConfig.primaryCtaLabel}
                </Link>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                  <Link href={siteConfig.phoneHref} className="text-action-link">
                    Call Now
                  </Link>
                  <Link href={siteConfig.smsHref} className="text-action-link">
                    Text Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <HeroSlideshow
                slides={heroSlides}
                eyebrow="Exterior Specialists"
                description="Siding, roofing, storm damage, and exterior remodel work across Cleveland and nearby Tennessee communities."
              />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section-space">
        <div className="container-shell">
          <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            <SectionHeading
              eyebrow="What We Do"
              title="High-value work for exterior protection and modern upgrades"
              description="Siding, exterior remodels, storm damage repair, roofing, and accent walls are the jobs people call about most, and they are the work Ratcliff Rebuild Right LLC is built to handle well."
            />
            <Link href="/services" className="button-secondary">
              View All Services
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-zinc-900/70">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for trust, speed, and premium craftsmanship"
            description="Ratcliff Rebuild Right LLC stays hands-on, keeps communication direct, and focuses on workmanship that looks sharp and holds up after the job is done."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredReasons.map((reason) => (
              <article key={reason.title} className="surface-panel flex flex-col p-6">
                <div className="min-h-28">
                  <h2 className="font-heading text-4xl leading-none text-white">
                    {reason.title}
                  </h2>
                </div>
                <p className="text-sm leading-7 text-zinc-300">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            <SectionHeading
              eyebrow="Real Projects"
              title="A look at siding and accent wall projects from the current gallery"
              description="These photos give a closer look at the finish level, detail work, and overall style behind recent siding and interior feature projects."
            />
            <Link href="/portfolio" className="button-secondary">
              Browse Portfolio
            </Link>
          </div>
          <div className="mt-10">
            <PortfolioGrid items={portfolioPreview} />
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-zinc-900/70">
        <div className="container-shell">
          <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            <SectionHeading
              eyebrow="Client Feedback"
              title="Clear communication, honest pricing, and strong finish work"
              description="These reviews highlight the traits the brand is built around: dependable communication, straightforward estimates, and siding work that looks sharp when the project is done."
            />
            <Link href="/testimonials" className="button-secondary">
              Read Client Reviews
            </Link>
          </div>
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.name}-${testimonial.location}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            <SectionHeading
              eyebrow="Service Area"
              title="Work across Cleveland and nearby Tennessee communities"
              description="From Cleveland to Chattanooga, Ooltewah, Athens, and the surrounding area, the work includes siding, roofing, storm damage repairs, and practical remodeling projects."
            />
            <Link href="/service-areas" className="button-secondary">
              View Service Areas
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {areaPreview.map((area) => (
              <article key={area.city} className="surface-panel p-6">
                <p className="eyebrow">Where We Work</p>
                <h2 className="mt-3 font-heading text-4xl leading-none text-white">
                  {area.city}
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  {area.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-zinc-900/70">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Straight answers before you book the estimate"
              description="These are some of the questions that come up most before an estimate is scheduled, from service areas and licensing to storm damage and project scope."
            />
            <FaqAccordion items={faqItems.slice(0, 4)} />
          </div>
          <div className="mt-8">
            <Link href="/faq" className="button-secondary">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to talk about your siding, roofing, or remodeling project?"
        description="Book a free estimate to walk the property, define the scope, and get a practical next step for the work you need in Cleveland, Chattanooga, and the surrounding service area."
      />
      <JsonLd data={getWebSiteSchema()} />
    </>
  );
}
