import type {
  FAQItem,
  PortfolioItem,
  Service,
  ServiceArea,
  SiteConfig,
  Testimonial,
  TrustBadge,
} from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Ratcliff Rebuild Right LLC",
  shortName: "Ratcliff Rebuild Right",
  domain: "https://ratcliffrebuildright.com",
  description:
    "Ratcliff Rebuild Right LLC is a family-owned remodeling and exterior contracting company serving Cleveland, Tennessee and nearby communities with siding, roofing, storm damage repair, accent walls, and dependable renovation work.",
  facebookUrl: "https://www.facebook.com/profile.php?id=61588494803484",
  phoneDisplay: "423-827-7804",
  phoneHref: "tel:+14238277804",
  smsHref: "sms:+14238277804",
  primaryCtaLabel: "Book a Free Estimate",
  primaryCtaHref: "/contact",
  primaryServiceArea: "Cleveland, TN",
  heroImages: {
    homePrimary: "/portfolio/siding-1.jpg",
    homeSecondary: "/portfolio/siding-2.jpg",
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  trustBadges: [
    { label: "Licensed", detail: "Work that meets code and holds up to inspection" },
    { label: "Insured", detail: "Full coverage so the property and crew are protected" },
    { label: "Free Estimates", detail: "No charge to walk the site and talk through options" },
    { label: "Warranty-Backed", detail: "We stand behind what we build" },
    { label: "Family-Owned", detail: "Chris is still the one answering the phone" },
    { label: "Fast Response", detail: "No waiting weeks to hear back on your project" },
    { label: "Residential + Commercial", detail: "Homes, rentals, and business property" },
    { label: "Insurance Claim Help", detail: "We help document storm damage and coordinate with adjusters" },
  ],
  serviceAreaNames: [
    "Cleveland, TN",
    "Chattanooga, TN",
    "Ooltewah, TN",
    "Athens, TN",
    "Dayton, TN",
    "Charleston, TN",
    "Soddy-Daisy, TN",
    "Hixson, TN",
    "Apison, TN",
    "McDonald, TN",
  ],
};

export const trustHighlights: TrustBadge[] = [
  { label: "Owner Involved", detail: "Field-led communication from estimate to finish" },
  { label: "Exterior Specialists", detail: "Siding, roofing, storm damage, and rebuild work" },
  { label: "Modern Craftsmanship", detail: "Sharp details, durable materials, clean finishes" },
  { label: "Straightforward Process", detail: "Clear scope, realistic scheduling, practical decisions" },
];

export const featuredReasons = [
  {
    title: "Rebuild done right",
    description:
      "Every project is built around durable materials, disciplined prep work, and details that hold up after the crew leaves.",
  },
  {
    title: "Hands-on communication",
    description:
      "You work with a contractor who stays involved in the field, answers questions directly, and keeps the project moving.",
  },
  {
    title: "Storm and insurance support",
    description:
      "When damage hits, the process needs speed and documentation. Ratcliff Rebuild Right helps homeowners and property managers stay organized.",
  },
  {
    title: "Built for real properties",
    description:
      "From curb appeal upgrades to practical repairs, the work is planned for homes, rental properties, and commercial spaces that have to function every day.",
  },
];

export const services: Service[] = [
  {
    slug: "siding",
    name: "Siding",
    shortDescription:
      "Upgrade worn or storm-damaged exteriors with siding systems that improve protection, efficiency, and curb appeal.",
    longDescription:
      "Whether the goal is protecting against weather exposure, updating worn or damaged panels, or improving curb appeal before a sale or refinance, new siding is one of the most impactful exterior upgrades a property can get. Ratcliff Rebuild Right LLC installs a range of siding systems on homes and commercial buildings throughout Cleveland and Southeast Tennessee, handling everything from the initial tear-off and substrate prep to the final trim, corner, and caulk detail. Every installation is approached as a complete system, not just a surface swap, so the finished result holds up to Tennessee weather and looks sharp for years.",
    benefits: ["Weather-resistant installation", "Clean trim and detail work", "A sharper, longer-lasting exterior"],
    featured: true,
  },
  {
    slug: "exterior-remodels",
    name: "Exterior Remodels",
    shortDescription:
      "Modernize the outside of your home or building with coordinated remodel work that ties roofing, siding, trim, and finishes together.",
    longDescription:
      "An exterior remodel does more than change the look. It coordinates roofing, siding, trim, gutters, and paint into a single cohesive plan that protects the property and elevates its presentation. Ratcliff Rebuild Right LLC approaches exterior remodel work as a full-picture process, starting with a site walk to identify what needs attention most and building out from there. Whether the job involves one trade or several, everything is managed under one contractor so nothing gets missed between handoffs. Projects across Cleveland, Chattanooga, and the surrounding area come out looking like they were planned from the start, because they were.",
    benefits: ["Stronger curb appeal", "Better exterior performance", "One plan for the full facade"],
    featured: true,
  },
  {
    slug: "storm-damage-and-insurance-work",
    name: "Storm Damage and Insurance Work",
    shortDescription:
      "Get practical repair guidance and rebuild support after hail, wind, or storm-related damage.",
    longDescription:
      "Storm damage moves fast and the repair process shouldn't have to wait. After hail, wind, or severe weather events, the first priority is understanding what was actually damaged and getting that documented accurately for an insurance claim. Ratcliff Rebuild Right LLC responds quickly to storm-affected properties throughout the Cleveland area, walking the site, identifying structural and cosmetic damage, and helping homeowners and property managers organize the information their adjuster needs. From there, repair work is handled with the same standard as any other project: practical, thorough, and finished to last.",
    benefits: ["Fast site response", "Insurance claim assistance", "Repairs focused on restoring protection"],
    featured: true,
  },
  {
    slug: "roofing",
    name: "Roofing",
    shortDescription:
      "Protect the structure with roofing work that addresses leaks, age, weather exposure, and overall roof performance.",
    longDescription:
      "A roofing problem is rarely just a roofing problem. A leak left untreated finds its way into decking, insulation, and interior finishes fast. Ratcliff Rebuild Right LLC handles roof repairs and replacements on residential and commercial properties throughout Southeast Tennessee, with an approach focused on identifying the root cause and correcting it properly, not just patching over it. Whether the issue is storm damage, age-related wear, improper flashing, or a failing ridge, the repair is built to hold. Material options are explained in plain terms so the decision makes sense before work begins.",
    benefits: ["Targeted repair or replacement", "Material guidance you can understand", "Dependable weather protection"],
    featured: true,
  },
  {
    slug: "accent-walls",
    name: "Accent Walls",
    shortDescription:
      "Add depth, texture, and a high-end focal point with custom accent walls designed for modern interiors.",
    longDescription:
      "A well-executed accent wall can redefine a room without overhauling the entire space. Ratcliff Rebuild Right LLC installs custom slat panels, board-and-batten layouts, geometric feature walls, and other high-end accent finishes for living rooms, bedrooms, home offices, and commercial interiors across Cleveland and surrounding Tennessee communities. The work is designed to integrate cleanly with the existing architecture, properly spaced, level, and finished with the kind of attention to edge detail and reveal consistency that separates a truly custom install from a weekend project.",
    benefits: ["Custom feature layouts", "Clean finish carpentry", "A standout look without overcomplicating the room"],
    featured: true,
  },
  {
    slug: "knotty-pine-ceilings",
    name: "Knotty Pine Ceilings",
    shortDescription:
      "Bring warmth and character to any room with knotty pine ceiling installations that add natural texture and a finished, cabin-style look.",
    longDescription:
      "Knotty pine is one of those finishes that immediately changes the character of a space: warm, textural, and unmistakably intentional. Ratcliff Rebuild Right LLC installs tongue-and-groove knotty pine ceilings on cabins, sunrooms, screened porches, living rooms, and any space that could use a natural wood finish that stands out. Boards are selected for character, installed tight, and finished cleanly at the borders and light fixture openings so the work looks intentional from every angle. This is a finish that holds up well in Tennessee's climate and improves with age.",
    benefits: ["Natural wood character and grain", "Clean installation and tight joints", "A warm, high-end finish that lasts"],
    featured: true,
  },
  {
    slug: "interior-trim-and-feature-walls",
    name: "Interior Trim and Feature Walls",
    shortDescription:
      "Refine living spaces with upgraded trim packages, feature walls, and finishing details that sharpen the whole room.",
    longDescription:
      "Trim is the detail work that separates a finished room from a truly polished one, and it's one of the most overlooked upgrades in remodeling. Ratcliff Rebuild Right LLC installs complete trim packages, wainscoting, shiplap panels, board-and-batten, coffered ceilings, and custom feature wall builds that sharpen transitions, add architectural character, and give rooms a more deliberate feel. Whether the job is updating a single doorway or upgrading the trim package throughout a full floor, the work is treated with the same standard: clean lines, tight joints, and finish quality that stands up in the details.",
    benefits: ["Crisp lines and transitions", "Consistent finish quality", "An upgraded feel throughout the space"],
  },
  {
    slug: "painting",
    name: "Painting",
    shortDescription:
      "Freshen interiors or exteriors with paint work that supports remodeling projects and improves presentation.",
    longDescription:
      "Paint work is one of the most common items wrapped into broader remodel and handyman-type jobs, and Ratcliff Rebuild Right LLC handles both standalone painting projects and paint as part of a larger scope. Interior and exterior painting is available for homes, rentals, and commercial spaces throughout Cleveland and the surrounding area. The process starts with proper surface prep, which is where most paint jobs either succeed or fail long-term. Coverage, finish, and cut work are all done to a standard that doesn't require touch-ups a year later.",
    benefits: ["Clean prep and coverage", "Color updates that fit the space", "Better finish durability"],
  },
  {
    slug: "general-remodeling",
    name: "General Remodeling",
    shortDescription:
      "Handle practical home improvement and renovation needs with a contractor who can coordinate the work from start to finish.",
    longDescription:
      "General remodeling covers the wide range of improvement work that doesn't fit neatly into one trade, the kind of projects a reliable handyman or general contractor handles because they require flexibility, problem-solving, and experience across multiple types of work. Ratcliff Rebuild Right LLC takes on full-scope remodeling projects that may span walls, trim, exterior elements, and functional upgrades all under one plan. Whether the goal is modernizing an outdated space, improving the daily function of a room, or upgrading a rental property between tenants, general remodeling work is approached with practical scope, realistic scheduling, and a clean result.",
    benefits: ["Flexible scope planning", "Improved daily function", "Reliable craftsmanship across trades"],
  },
  {
    slug: "additions",
    name: "Additions",
    shortDescription:
      "Expand usable square footage with additions that fit the property and tie into the existing structure cleanly.",
    longDescription:
      "Adding square footage to a home or building is one of the most significant improvement investments a property owner can make, and it only pays off when the addition ties into the existing structure cleanly and is built to the same standard as the rest of the property. Ratcliff Rebuild Right LLC plans and builds room additions for homeowners and commercial property owners throughout Cleveland and Southeast Tennessee, handling the full scope from framing through exterior cladding, interior finish, and final walkthrough. The goal is always an addition that looks and feels like it was always part of the home, not something bolted on after the fact.",
    benefits: ["More room to live or work", "Thoughtful tie-in to the existing home", "Built for long-term use"],
  },
  {
    slug: "repairs",
    name: "Repairs",
    shortDescription:
      "Solve problem areas quickly with repair work that fixes the issue and addresses the surrounding finish work properly.",
    longDescription:
      "Repair work is where dependable contractors earn their reputation. These are the jobs that require honest troubleshooting, attention to what actually caused the problem, and finish work that closes everything out cleanly. Whether the issue is a water-damaged section of siding, a failed transition, a rotted fascia board, a compromised corner, or one of the many other handyman-level repair needs that come up around residential and commercial properties, Ratcliff Rebuild Right LLC handles it with the same standard as a full project. Quick fixes that mask the problem aren't the approach; the work is done to last.",
    benefits: ["Practical troubleshooting", "Attention to the underlying cause", "A cleaner, more complete result"],
  },
  {
    slug: "consulting-and-estimates",
    name: "Consulting and Estimates",
    shortDescription:
      "Get straightforward guidance on scope, materials, sequencing, and budget before committing to work.",
    longDescription:
      "Before committing to any project, large or small, a site walk with a knowledgeable contractor can save thousands in scope creep, poor sequencing, or misunderstood material choices. Ratcliff Rebuild Right LLC offers free consultations and estimates for property owners across Cleveland and Southeast Tennessee who want honest guidance before they commit. The process is straightforward: walk the property, talk through what matters most, get a realistic cost range and timeline, and leave with a plan that makes sense. No pressure, no inflated numbers designed to scare you into a decision. Just practical advice from a contractor who's seen what these jobs actually involve.",
    benefits: ["Clear next steps", "Honest project expectations", "Better decisions before work begins"],
  },
];

export const processSteps = [
  {
    title: "Walk the project",
    description:
      "Start with a real conversation about the property, the problem, and the outcome you want. Estimates are built around the actual conditions on site.",
  },
  {
    title: "Define the scope",
    description:
      "Break down materials, priorities, and practical solutions so you know what work matters most and what comes next.",
  },
  {
    title: "Build with discipline",
    description:
      "Keep the owner involved in the field, maintain communication, and stay focused on workmanship that looks right and performs right.",
  },
  {
    title: "Close it out right",
    description:
      "Walk the finished work together, confirm everything meets the agreed standard, and make sure the property is left clean and complete before calling it done.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Full siding elevation refresh",
    category: "Siding and Trim",
    image: "/portfolio/siding-1.jpg",
    alt: "Updated exterior siding installation on a home in daylight",
    location: "Cleveland, TN",
    description:
      "A clean siding upgrade with stronger curb appeal, sharper lines, and the kind of finish work that makes the full elevation feel complete.",
  },
  {
    title: "Siding and trim upgrade",
    category: "Siding and Trim",
    image: "/portfolio/siding-2.jpg",
    alt: "Residential siding and trim detail after an exterior upgrade",
    location: "Bradley County, TN",
    description:
      "Exterior details tightened up with fresh siding and trim work designed to improve weather protection and presentation at the same time.",
  },
  {
    title: "Modern exterior siding project",
    category: "Siding and Trim",
    image: "/portfolio/siding-3.jpg",
    alt: "Completed siding project on a modernized exterior",
    location: "Chattanooga Area",
    description:
      "A siding-focused exterior remodel that gives the home a cleaner, more current profile without losing its practical durability.",
  },
  {
    title: "Custom slat accent wall",
    category: "Accent Walls / Feature Walls",
    image: "/portfolio/accent-wall-1.jpg",
    alt: "Finished vertical wood slat accent wall in a modern interior",
    location: "Cleveland, TN",
    description:
      "A clean feature wall install that adds texture and contrast without making the room feel busy.",
  },
  {
    title: "Feature wall with natural warmth",
    category: "Accent Walls / Feature Walls",
    image: "/portfolio/accent-wall-2.jpg",
    alt: "Modern accent wall with dark slats and warm wood tones",
    location: "Bradley County, TN",
    description:
      "Designed to bring depth to the room with crisp spacing, straight reveals, and a balanced finish.",
  },
  {
    title: "Tall wall detail installation",
    category: "Accent Walls / Feature Walls",
    image: "/portfolio/accent-wall-3.jpg",
    alt: "Accent wall installation extending across a tall stairwell-style space",
    location: "Chattanooga Area",
    description:
      "A full-height feature wall layout that turns a transitional space into a finished focal point.",
  },
  {
    title: "Knotty pine ceiling installation",
    category: "Knotty Pine Ceilings",
    image: "/portfolio/knotty-pine-1.jpg",
    alt: "Finished knotty pine tongue-and-groove ceiling in a residential space",
    location: "Cleveland, TN",
    description:
      "Tongue-and-groove knotty pine boards installed tight with clean borders and a warm, cabin-quality finish throughout.",
  },
  {
    title: "Knotty pine sunroom ceiling",
    category: "Knotty Pine Ceilings",
    image: "/portfolio/knotty-pine-2.png",
    alt: "Knotty pine ceiling covering a sunroom or screened porch space",
    location: "Bradley County, TN",
    description:
      "Natural wood ceiling that brings character and warmth to a sunroom, with boards selected for grain consistency and finished cleanly at every edge.",
  },
  {
    title: "Knotty pine living space ceiling",
    category: "Knotty Pine Ceilings",
    image: "/portfolio/knotty-pine-3.png",
    alt: "Knotty pine ceiling detail showing tight joints and natural wood grain",
    location: "Southeast Tennessee",
    description:
      "A standout ceiling finish that improves with age: clean joints, intentional reveal lines, and the natural texture that only real wood delivers.",
  },
  {
    title: "Custom wood shutter installation",
    category: "Interior Trim and Feature Walls",
    image: "/portfolio/wood-shutters.png",
    alt: "Custom wood shutters installed in a residential interior",
    location: "Cleveland, TN",
    description:
      "Custom wood shutters fitted and installed to complement the interior finish work: clean lines, solid construction, and a look that elevates the whole room.",
  },
  {
    title: "Exterior remodel gallery",
    category: "Exterior Remodels",
    alt: "Exterior remodel gallery card for larger outside upgrade projects",
    location: "Southeast Tennessee",
    description:
      "This category covers larger outside upgrades, including coordinated siding, trim, roofing, and related rebuild work.",
    placeholder: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mike T.",
    role: "Homeowner",
    location: "Cleveland, TN",
    quote:
      "Chris and his crew did an excellent job replacing the siding on our house. From the first estimate to the final walkthrough, communication was clear and honest. Chris explained every step of the process and stuck to what he promised. The workmanship is top-notch and our home looks better than it ever has.",
    badgeLabel: "Siding Replacement",
  },
  {
    name: "Sarah L.",
    role: "Property Owner",
    location: "Bradley County, TN",
    quote:
      "We had Chris install new siding on a rental property, and the experience was fantastic. He was straightforward about pricing, kept us updated throughout the project, and delivered exactly what he said he would. It is hard to find contractors who communicate this well and take this much pride in their work.",
    badgeLabel: "Rental Property Siding",
  },
  {
    name: "David M.",
    role: "Homeowner",
    location: "Chattanooga Area",
    quote:
      "Chris is one of the most honest contractors I have worked with. He answered every question, stayed in touch during the project, and made sure everything was done right. The siding looks great and the attention to detail really shows. I would absolutely recommend him to anyone needing siding work.",
    badgeLabel: "Repeat Client",
  },
  {
    name: "Jennifer R.",
    role: "Homeowner",
    location: "Ooltewah, TN",
    quote:
      "We had storm damage to the roof after a bad hail event and were nervous about the whole insurance process. Chris walked us through every step, helped with the documentation, and got the repairs done faster than we expected. The roof looks great and we felt informed the entire time. Could not have asked for better.",
    badgeLabel: "Storm Damage Repair",
  },
  {
    name: "Mark B.",
    role: "Homeowner",
    location: "Cleveland, TN",
    quote:
      "We wanted an accent wall in our living room and were not sure what to expect. Chris came out, talked through the options, and the finished product is exactly what we hoped for. Clean lines, great materials, and he kept the site tidy the whole time. Highly recommend for interior work.",
    badgeLabel: "Accent Wall Install",
  },
  {
    name: "Lisa K.",
    role: "Property Manager",
    location: "Athens, TN",
    quote:
      "Managing several rentals means I need contractors who show up when they say they will and do not leave me guessing. Chris has worked on two of our properties now and both times the communication, quality, and follow-through were exactly what you want. He will be our first call going forward.",
    badgeLabel: "Multi-Property Client",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What types of remodeling projects do you handle?",
    answer:
      "Ratcliff Rebuild Right LLC handles exterior remodels, siding, roofing, accent walls, interior trim and feature walls, painting, additions, repairs, and general remodeling for residential and commercial properties.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Free estimates are available so you can understand the scope, discuss options, and make a practical plan before moving forward.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Ratcliff Rebuild Right LLC is licensed and insured, with projects handled through clear communication, practical planning, and accountability from start to finish.",
  },
  {
    question: "Do you handle storm damage repairs?",
    answer:
      "Yes. Storm damage repair and insurance-related work are a major part of the business, including inspection, repair planning, and help with claim-related documentation.",
  },
  {
    question: "Do you work with homeowners and commercial clients?",
    answer:
      "Yes. The company works with homeowners, rental property owners, investors, and commercial clients that need dependable renovation and repair work.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "The main service area is Cleveland, Tennessee, with work also available in Chattanooga, Ooltewah, Athens, Dayton, Charleston, Soddy-Daisy, Hixson, Apison, McDonald, and nearby communities.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the contact form, call, or send a text message to start the conversation. Share your location, project type, and what you are trying to solve so the estimate process can move quickly.",
  },
  {
    question: "What should I include when contacting you?",
    answer:
      "The best requests include your name, phone number, property location, the type of work needed, and any timing concerns or storm-related details that affect the project.",
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: "cleveland-tn",
    city: "Cleveland, TN",
    summary:
      "Cleveland is the core service area, with work that regularly includes siding replacement, roof repairs, storm damage rebuilds, accent walls, and larger remodeling projects.",
    highlights: [
      "Siding replacement and trim updates",
      "Roof repairs, leak fixes, and storm damage work",
      "Accent walls and interior finish upgrades",
    ],
  },
  {
    slug: "chattanooga-tn",
    city: "Chattanooga, TN",
    summary:
      "In Chattanooga, projects often include siding repairs, exterior refreshes, roofing fixes, rental property improvements, and custom feature walls.",
    highlights: [
      "Siding and exterior updates for homes and rentals",
      "Roof repairs and storm-related work",
      "Accent walls, trim work, and finish carpentry",
    ],
  },
  {
    slug: "ooltewah-tn",
    city: "Ooltewah, TN",
    summary:
      "Ooltewah jobs commonly include siding updates, trim repairs, roofing concerns, and practical remodel work that improves the look and function of the home.",
    highlights: [
      "Siding refreshes and curb-appeal upgrades",
      "Roof repairs and exterior cleanup",
      "General remodeling and interior updates",
    ],
  },
  {
    slug: "athens-tn",
    city: "Athens, TN",
    summary:
      "In Athens, work ranges from storm-related repairs and roofing issues to siding replacement, additions, and everyday remodeling needs.",
    highlights: [
      "Storm damage repairs and rebuild work",
      "Siding replacement and exterior repairs",
      "Additions, repairs, and general remodeling",
    ],
  },
  {
    slug: "dayton-tn",
    city: "Dayton, TN",
    summary:
      "Dayton clients reach out for siding repairs, exterior restoration, roofing work, interior trim, and feature wall projects that clean up worn spaces.",
    highlights: [
      "Exterior restoration and siding repairs",
      "Roofing fixes after weather damage",
      "Interior trim and feature walls",
    ],
  },
  {
    slug: "charleston-tn",
    city: "Charleston, TN",
    summary:
      "In Charleston, common jobs include siding improvements, roof repairs, storm damage response, and repair work that gets a property back in shape.",
    highlights: [
      "Siding and trim repair work",
      "Storm response and roof repairs",
      "General repairs and project walk-throughs",
    ],
  },
  {
    slug: "soddy-daisy-tn",
    city: "Soddy-Daisy, TN",
    summary:
      "Soddy-Daisy projects often involve roofing, siding, exterior refreshes, painting, and interior upgrades that give the property a cleaner finished look.",
    highlights: [
      "Roofing and siding updates",
      "Exterior refreshes and paint work",
      "Accent walls and interior improvements",
    ],
  },
  {
    slug: "hixson-tn",
    city: "Hixson, TN",
    summary:
      "In Hixson, work often includes storm-related exterior repairs, painting, trim updates, and remodeling projects that improve both appearance and function.",
    highlights: [
      "Storm repairs and insurance-related work",
      "Painting, trim, and finish upgrades",
      "General remodeling and repair work",
    ],
  },
  {
    slug: "apison-tn",
    city: "Apison, TN",
    summary:
      "Apison property owners call for siding and roofing upgrades, additions, repairs, and broader improvement work that needs dependable scheduling and follow-through.",
    highlights: [
      "Siding and roofing upgrades",
      "Additions and larger remodel projects",
      "Repairs and exterior improvements",
    ],
  },
  {
    slug: "mcdonald-tn",
    city: "McDonald, TN",
    summary:
      "McDonald remains part of the regular service area for siding work, repairs, exterior updates, roofing concerns, and practical remodeling projects.",
    highlights: [
      "Siding repairs and exterior updates",
      "Roofing fixes and storm response",
      "Remodeling work for homes and businesses",
    ],
  },
];

export const footerTrustStatement =
  "Family-owned remodeling and exterior contracting focused on clear communication, dependable craftsmanship, and practical solutions for properties across Southeast Tennessee.";
