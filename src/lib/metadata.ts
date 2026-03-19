import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

const sharedImage = {
  url: absoluteUrl(siteConfig.heroImages.homePrimary),
  width: 2000,
  height: 1333,
  alt: `${siteConfig.name} siding project preview`,
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: MetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [sharedImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [sharedImage.url],
    },
  };
}
