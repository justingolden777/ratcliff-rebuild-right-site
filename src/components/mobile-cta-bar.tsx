import Link from "next/link";

import { siteConfig } from "@/content/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-zinc-950/95 px-3 py-3 shadow-[0_-16px_40px_-28px_rgba(0,0,0,0.95)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Link href={siteConfig.phoneHref} className="button-secondary min-h-12 text-center">
          Call
        </Link>
        <Link href={siteConfig.smsHref} className="button-secondary min-h-12 text-center">
          Text
        </Link>
        <Link href={siteConfig.primaryCtaHref} className="button-primary min-h-12 text-center">
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
