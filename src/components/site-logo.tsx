import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "header-desktop" | "header-mobile" | "footer";
};

const logoVariants = {
  "header-desktop": {
    link: "hidden lg:inline-flex items-center",
    src: "/brand/logo-header.png",
    width: 1391,
    height: 700,
    image: "h-[4.15rem] w-auto",
    sizes: "232px",
  },
  "header-mobile": {
    link: "inline-flex items-center lg:hidden",
    src: "/brand/logo-header.png",
    width: 1391,
    height: 700,
    image: "h-[3rem] w-auto",
    sizes: "168px",
  },
  footer: {
    link: "inline-flex",
    src: "/brand/logo.png",
    width: 1391,
    height: 1391,
    image: "w-[10.5rem] sm:w-[12rem]",
    sizes: "192px",
  },
} as const;

export function SiteLogo({
  className = "",
  priority = false,
  variant = "footer",
}: SiteLogoProps) {
  const styles = logoVariants[variant];

  return (
    <Link
      href="/"
      className={`${styles.link} shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${className}`.trim()}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={styles.src}
        alt={`${siteConfig.name} logo`}
        width={styles.width}
        height={styles.height}
        sizes={styles.sizes}
        className={`${styles.image} object-contain`}
        priority={priority}
      />
    </Link>
  );
}
