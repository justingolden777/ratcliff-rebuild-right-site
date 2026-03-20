import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Book a Free Estimate - Remodeling Contractor in Cleveland, TN",
  description:
    "Request a free estimate from Ratcliff Rebuild Right LLC for siding, roofing, storm damage repair, accent walls, and remodeling projects in Cleveland, TN.",
  path: "/contact",
  keywords: ["free estimate Cleveland TN contractor", "contact remodeler near Cleveland TN", "remodeling estimate Cleveland TN"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a free estimate and get a practical next step for the work"
        description="Use the form, call, or text to start the conversation. Share the property location and the kind of work you need, and you will get a clear next step."
      >
        <div className="space-y-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 sm:p-6">
            <p className="eyebrow">Call</p>
            <div className="mt-3">
              <Link href={siteConfig.phoneHref} className="button-secondary">
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 sm:p-6">
            <p className="eyebrow">Text</p>
            <div className="mt-3">
              <Link href={siteConfig.smsHref} className="button-secondary">
                {siteConfig.phoneDisplay}
              </Link>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Send a quick project summary by text for faster scheduling.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 sm:p-6">
            <p className="eyebrow">Facebook</p>
            <Link
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-sm leading-7 text-zinc-300 transition hover:text-orange-200"
            >
              Follow Ratcliff Rebuild Right LLC on Facebook for updates and project posts.
            </Link>
          </div>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <ContactForm />

            <div className="space-y-5">
              <article className="surface-panel p-6 sm:p-7">
                <p className="eyebrow">What to Expect</p>
                <h2 className="mt-3 font-heading text-4xl leading-[0.98] text-white sm:text-5xl">
                  Straight communication from the start
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  The goal is to understand the property, the scope, and the timing
                  before recommending the next step. You do not need to write a long
                  message. Just include the basics and the estimate process can begin.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-zinc-200">
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                    <span>Primary service area: Cleveland, TN</span>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                    <span>Working across Chattanooga, Ooltewah, Athens, and nearby areas</span>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                    <span>Residential and commercial project support</span>
                  </li>
                </ul>
                <p className="mt-5 text-sm leading-7 text-zinc-300">
                  Serving Cleveland, TN 37311 and surrounding Southeast Tennessee communities
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Prefer email? Reach us through the form above or via Facebook message.
                </p>
                {/* TODO: Add email address when available */}
              </article>

              <article className="surface-panel p-6 sm:p-7">
                <p className="eyebrow">Where We Work</p>
                <h2 className="mt-3 font-heading text-4xl leading-[0.98] text-white sm:text-5xl">
                  Cleveland, TN and surrounding communities
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  Ratcliff Rebuild Right LLC works throughout Cleveland and the
                  surrounding area. If your property is nearby, reach out with the
                  location and project details to confirm availability.
                </p>
                <div className="mt-6 rounded-[1.75rem] border border-dashed border-white/15 bg-black/35 p-7 text-center sm:p-8">
                  <p className="font-heading text-3xl leading-none text-white sm:text-4xl">
                    Serving Southeast Tennessee
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    Serving Cleveland, Chattanooga, Ooltewah, Athens, Dayton, Charleston,
                    Soddy-Daisy, Hixson, Apison, McDonald, and nearby communities.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    Serving Cleveland, TN 37311 and surrounding Southeast Tennessee communities
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
      ])} />
    </>
  );
}
