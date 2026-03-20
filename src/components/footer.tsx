import Link from "next/link";

import { footerTrustStatement, siteConfig } from "@/content/site";
import { SiteLogo } from "@/components/site-logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr_0.9fr]">
          <div className="space-y-5">
            <SiteLogo variant="footer" />
            <p className="max-w-xl text-sm leading-7 text-zinc-300">
              {footerTrustStatement}
            </p>
            <p className="max-w-xl text-sm leading-7 text-zinc-300">
              Serving Cleveland, TN 37311 and surrounding Southeast Tennessee communities
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
              <Link href={siteConfig.phoneHref} className="button-secondary">
                {siteConfig.phoneDisplay}
              </Link>
              <Link href={siteConfig.smsHref} className="button-secondary">
                Text Us
              </Link>
              <Link href={siteConfig.facebookUrl} className="button-secondary" target="_blank" rel="noreferrer">
                Facebook
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              Your information is never sold or shared.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-white">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-zinc-300">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-orange-300 focus-visible:outline-none focus-visible:text-orange-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-white">
              Service Areas
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {siteConfig.serviceAreaNames.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-zinc-300"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Follow current project updates and company activity on Facebook.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
