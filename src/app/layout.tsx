import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { siteConfig } from "@/content/site";
import { getLocalBusinessSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-display",
});

const bodyFont = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Remodeling and Exterior Contractor in Cleveland, TN",
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "siding contractor in Cleveland TN",
    "exterior remodeling Cleveland TN",
    "roofing contractor Cleveland TN",
    "storm damage repair Cleveland TN",
    "accent wall installer Cleveland TN",
    "home renovation Cleveland TN",
    "remodeler near Cleveland TN",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl(siteConfig.heroImages.homePrimary),
        width: 2000,
        height: 1333,
        alt: `${siteConfig.name} siding project preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.heroImages.homePrimary)],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/brand/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-950">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-zinc-950 text-zinc-50">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_20%),linear-gradient(180deg,#060607_0%,#101114_100%)]"
          />
          <Header />
          <main id="main-content" className="flex-1 pb-24 lg:pb-0">
            {children}
          </main>
          <Footer />
          <MobileCtaBar />
          <JsonLd data={getLocalBusinessSchema()} />
        </div>
      </body>
    </html>
  );
}
