import Link from "next/link";

import { siteConfig } from "@/content/site";

type CtaBandProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function CtaBand({ title, description, eyebrow = "Ready to Talk" }: CtaBandProps) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="surface-panel overflow-hidden bg-[linear-gradient(135deg,rgba(251,146,60,0.12),rgba(255,255,255,0.03)_36%,rgba(255,255,255,0.04)_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy">{description}</p>
          </div>
          <div className="mt-8 flex w-full flex-col gap-3 lg:mt-0 lg:w-auto lg:min-w-[240px] lg:shrink-0">
            <Link href={siteConfig.primaryCtaHref} className="button-primary w-full">
              {siteConfig.primaryCtaLabel}
            </Link>
            <div className="flex gap-3">
              <Link href={siteConfig.phoneHref} className="button-secondary flex-1">
                Call Now
              </Link>
              <Link href={siteConfig.smsHref} className="button-secondary flex-1">
                Text Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
