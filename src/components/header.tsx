"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/content/site";
import { isActivePath } from "@/lib/utils";
import { SiteLogo } from "@/components/site-logo";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const leftNavItems = siteConfig.navItems.slice(0, 4);
  const rightNavItems = siteConfig.navItems.slice(4, 7);

  return (
    <header className="sticky top-3 z-50">
      <div className="container-shell">
        <div className="mx-auto rounded-[1.15rem] border border-white/10 bg-zinc-950/88 px-4 py-3 shadow-[0_24px_70px_-45px_rgba(0,0,0,0.95)] backdrop-blur-xl lg:w-fit lg:px-3 lg:py-1.5">
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <SiteLogo variant="header-mobile" priority />

            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-orange-400 hover:text-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              <span aria-hidden="true" className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>

          <div className="hidden lg:grid lg:grid-cols-[auto_auto_auto] lg:items-center lg:justify-center lg:gap-1.5">
            <nav aria-label="Primary Left" className="flex items-center gap-0">
              {leftNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`top-nav-link ${
                    isActivePath(pathname, item.href) ? "top-nav-link-active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <SiteLogo variant="header-desktop" priority className="justify-self-center" />

            <div className="flex items-center gap-1">
              <nav aria-label="Primary Right" className="flex items-center gap-0">
                {rightNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`top-nav-link ${
                      isActivePath(pathname, item.href) ? "top-nav-link-active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link href={siteConfig.primaryCtaHref} className="button-compact">
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`${isOpen ? "block" : "hidden"} container-shell mt-2 lg:hidden`}
      >
        <nav
          className="flex flex-col gap-2 rounded-[1.75rem] border border-white/10 bg-zinc-950/94 p-4 shadow-[0_24px_70px_-45px_rgba(0,0,0,0.95)] backdrop-blur-xl"
          aria-label="Mobile"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-2xl px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition ${
                isActivePath(pathname, item.href)
                  ? "bg-[linear-gradient(135deg,#fb923c_0%,#f97316_100%)] text-zinc-950"
                  : "bg-white/5 text-zinc-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Link
              href={siteConfig.phoneHref}
              className="button-secondary w-full"
              onClick={() => setIsOpen(false)}
            >
              Call Now
            </Link>
            <Link
              href={siteConfig.smsHref}
              className="button-secondary w-full"
              onClick={() => setIsOpen(false)}
            >
              Text Us
            </Link>
            <Link
              href={siteConfig.primaryCtaHref}
              className="button-primary sm:col-span-2"
              onClick={() => setIsOpen(false)}
            >
              {siteConfig.primaryCtaLabel}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
