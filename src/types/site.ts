export type NavItem = {
  label: string;
  href: string;
};

export type TrustBadge = {
  label: string;
  detail: string;
};

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  benefits: string[];
  featured?: boolean;
};

export type PortfolioCategory =
  | "Exterior Remodels"
  | "Siding and Trim"
  | "Accent Walls / Feature Walls"
  | "Knotty Pine Ceilings"
  | "Interior Trim and Feature Walls";

export type PortfolioItem = {
  title: string;
  category: PortfolioCategory;
  image?: string;
  alt: string;
  location: string;
  description: string;
  placeholder?: boolean;
};

export type Testimonial = {
  name: string;
  role: string;
  location: string;
  quote: string;
  badgeLabel: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceArea = {
  slug: string;
  city: string;
  summary: string;
  highlights: string[];
};

export type SiteConfig = {
  name: string;
  shortName: string;
  domain: string;
  description: string;
  facebookUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  smsHref: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  primaryServiceArea: string;
  heroImages: {
    homePrimary: string;
    homeSecondary: string;
  };
  navItems: NavItem[];
  trustBadges: TrustBadge[];
  serviceAreaNames: string[];
};
