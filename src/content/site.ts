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
  phoneDisplay: "(423) 827-7804",
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
    {
      label: "Insurance Claim Help",
      detail: "We help document storm damage and coordinate with adjusters",
    },
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
      "Ratcliff Rebuild Right LLC installs and replaces siding for homeowners across Cleveland, Tennessee and the surrounding communities, with a process built around durable materials, clean trim work, and proper weatherproofing behind every panel.",
    benefits: [
      "Weather-resistant installation",
      "Clean trim and detail work",
      "A sharper, longer-lasting exterior",
    ],
    featured: true,
    schemaName: "Siding Installation and Replacement",
    schemaServiceType: "Siding Contractor",
    schemaDescription:
      "Siding installation and replacement for homes in Cleveland, TN, including vinyl, fiber cement, engineered wood, and storm-damage siding work.",
    pageContent: {
      intro: [
        "New siding is one of the most visible improvements you can make to a home. It changes the curb appeal immediately, adds a layer of weatherproofing, and when done correctly, holds up for decades without constant maintenance. At Ratcliff Rebuild Right, we handle siding installation and replacement across Cleveland, TN and the broader Southeast Tennessee region. Chris Ratcliff leads every project in the field, so the work gets done right the first time and you have one clear point of contact throughout.",
      ],
      sections: [
        {
          heading: "Siding Materials We Install",
          paragraphs: [
            "Different siding materials have different strengths, and the right choice depends on your home's structure, your aesthetic goals, your budget, and how much maintenance you want to manage over time. Here is what we work with in the Cleveland area.",
          ],
          subSections: [
            {
              heading: "Vinyl Siding",
              paragraphs: [
                "Vinyl is the most widely installed siding material in Tennessee residential construction. It is affordable, comes in dozens of colors and profiles, does not need painting, and holds up well in the heat and humidity of Southeast Tennessee summers. Modern vinyl products have improved significantly in thickness and UV resistance. Insulated vinyl options also add a meaningful layer of energy efficiency. Vinyl is a strong choice for homeowners who want a clean, consistent look with minimal upkeep over time.",
              ],
            },
            {
              heading: "Fiber Cement Siding",
              paragraphs: [
                "Fiber cement, most commonly associated with the James Hardie product line, is a premium siding material that offers the appearance of wood without the maintenance demands. It resists moisture, insects, and fire at a level that vinyl and wood cannot match. In Tennessee's climate, where humidity and seasonal storms are a regular factor, fiber cement's durability is a genuine advantage. It does require periodic painting, but properly maintained fiber cement siding can last 30 to 50 years. If you are planning to stay in the home long-term or want a product that holds its appearance over time, fiber cement is worth the additional investment.",
              ],
            },
            {
              heading: "Engineered Wood Siding",
              paragraphs: [
                "Engineered wood siding, including products like LP SmartSide, is manufactured to resist moisture, impact, and decay better than traditional wood while maintaining the warmth and texture of a natural wood appearance. It is a solid middle-ground option for homeowners who want the look of wood without the vulnerability to Tennessee's humidity and storm seasons.",
              ],
            },
            {
              heading: "Traditional Wood Siding",
              paragraphs: [
                "We also install and repair traditional wood siding, including cedar lap and board-and-batten profiles. Wood siding requires more maintenance than synthetic alternatives but remains the preferred material for historic properties or homes where an authentic appearance is the priority.",
              ],
            },
          ],
        },
        {
          heading: "What Siding Installation Includes",
          list: [
            "Removal of Existing Siding -- We remove the old siding and inspect the sheathing and housewrap beneath it for moisture damage, rot, or gaps.",
            "Substrate Repair -- Any damaged sheathing or framing is repaired before the new siding goes on. Skipping this step leads to long-term problems regardless of how good the new material is.",
            "Housewrap and Flashing -- Proper water management behind the siding is essential. We install or replace housewrap and ensure all window and door flashing is correct before covering it.",
            "Installation -- Siding is installed to manufacturer specifications, including proper fastening, overlap, and gap allowances for thermal expansion.",
            "Trim and Finishing -- Corners, trim boards, and j-channel are installed cleanly to give the finished product a professional appearance.",
            "Cleanup -- Full site cleanup at the end of every day and a thorough final cleanup on completion.",
          ],
        },
        {
          heading: "Siding Repairs",
          paragraphs: [
            "Not every siding project is a full replacement. We handle targeted repairs for homes with isolated damage from impact, moisture intrusion, or storm debris. If your siding can be repaired rather than replaced, we will tell you that clearly and give you an honest picture of how long the repaired sections will hold before a larger project makes sense.",
          ],
        },
        {
          heading: "Storm Damage Siding Work",
          paragraphs: [
            "Hail and wind damage to siding is common in Bradley County and the broader Chattanooga metro area. We assist homeowners with damage documentation and insurance estimates, and we can be present for adjuster inspections when needed. Our estimates are formatted for insurance submission, and we work to make the claim process straightforward rather than overwhelming.",
          ],
        },
        {
          heading: "Why Ratcliff Rebuild Right for Siding in Cleveland, TN",
          paragraphs: [
            "Siding work is visible every day. Poor installation shows quickly through gaps, buckling, cracked trim, and moisture problems that follow within a season or two. We take the installation process seriously because the finished product reflects directly on our reputation in the community.",
            "Chris Ratcliff is a Cleveland resident who works in this area full-time. Every job gets his direct attention. When you hire Ratcliff Rebuild Right, you get the same person who gave you the estimate doing the work on your home, not a rotating crew of subcontractors managed from an office.",
          ],
        },
        {
          heading: "Frequently Asked Questions About Siding in Cleveland, TN",
          subSections: [
            {
              heading: "How long does siding installation take?",
              paragraphs: [
                "Most residential siding replacements take two to five days depending on the size of the home, the material being installed, and the condition of the substrate. Homes with significant moisture damage behind the old siding may take additional time once the sheathing is repaired. We give you a specific timeline in your written estimate before work begins and communicate any changes as soon as they come up. Our goal is a clean job done in the time we said it would take, with no surprise delays.",
              ],
            },
            {
              heading: "What is the best siding material for Tennessee's climate?",
              paragraphs: [
                "Fiber cement and insulated vinyl both perform well in Tennessee's combination of heat, humidity, and storm exposure. Fiber cement offers the best long-term durability and holds paint well even through hot summers and wet winters. Insulated vinyl offers the best upfront value with lower maintenance requirements. The right answer depends on your budget, how long you plan to stay in the home, and whether you want a product you can largely forget about or one you are willing to repaint every 10 to 15 years. We walk through this during the estimate visit at no charge.",
              ],
            },
            {
              heading: "Do you offer free estimates for siding projects?",
              paragraphs: [
                "Yes. We provide free on-site estimates for all siding projects, including full replacements and targeted repairs. There is no obligation, and you will get a written breakdown of materials and labor before you make any decision. The estimate visit is also a good time to ask questions about material options, timeline, and what the installation process actually looks like on your specific home.",
              ],
            },
            {
              heading: "What areas do you serve for siding work?",
              paragraphs: [
                "We serve Cleveland, TN and the surrounding communities, including Chattanooga, Ooltewah, Athens, Dayton, Charleston, Soddy-Daisy, Hixson, Apison, and McDonald, TN. Call or text (423) 827-7804 to schedule a free estimate.",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "exterior-remodels",
    name: "Exterior Remodels",
    shortDescription:
      "Modernize the outside of your home or building with coordinated remodel work that ties roofing, siding, trim, and finishes together.",
    longDescription:
      "An exterior remodel does more than change the look. It coordinates roofing, siding, trim, gutters, and paint into a single cohesive plan that protects the property and elevates its presentation. Ratcliff Rebuild Right LLC approaches exterior remodel work as a full-picture process, starting with a site walk to identify what needs attention most and building out from there.",
    benefits: [
      "Stronger curb appeal",
      "Better exterior performance",
      "One plan for the full facade",
    ],
    featured: true,
    schemaName: "Exterior Remodeling",
    schemaServiceType: "Exterior Remodeling Contractor",
    schemaDescription:
      "Exterior remodeling services in Cleveland, TN, including coordinated siding, trim, roofing, gutters, and facade updates.",
  },
  {
    slug: "storm-damage-and-insurance-work",
    name: "Storm Damage and Insurance Work",
    shortDescription:
      "Get practical repair guidance and rebuild support after hail, wind, or storm-related damage.",
    longDescription:
      "Storm damage moves fast and the repair process should not have to wait. Ratcliff Rebuild Right LLC responds quickly to storm-affected properties throughout the Cleveland area, documenting damage, helping homeowners stay organized for insurance, and then rebuilding the property with the same standard as any other project.",
    benefits: [
      "Fast site response",
      "Insurance claim assistance",
      "Repairs focused on restoring protection",
    ],
    featured: true,
    schemaName: "Storm Damage Repair and Insurance Claims",
    schemaServiceType: "Storm Damage Contractor",
    schemaDescription:
      "Storm damage repair and insurance claim support in Cleveland, TN for roofs, siding, and exterior systems after hail or wind events.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    shortDescription:
      "Protect the structure with roofing work that addresses leaks, age, weather exposure, and overall roof performance.",
    longDescription:
      "Ratcliff Rebuild Right LLC handles roofing projects across Cleveland, Tennessee and surrounding communities, with honest inspections, practical material guidance, and repairs or replacements built to hold up in storm season.",
    benefits: [
      "Targeted repair or replacement",
      "Material guidance you can understand",
      "Dependable weather protection",
    ],
    featured: true,
    schemaName: "Roofing Installation and Repair",
    schemaServiceType: "Roofing Contractor",
    schemaDescription:
      "Roofing installation and repair in Cleveland, TN, including replacements, storm-damage repairs, flashing work, decking repair, and insurance claim support.",
    pageContent: {
      intro: [
        "When your roof has a problem, everything else feels uncertain. Whether it is a slow leak, storm damage, or a roof that has simply run its course, getting the right contractor on site quickly makes a real difference. At Ratcliff Rebuild Right, we handle roofing projects across Cleveland, TN and the surrounding communities of Bradley County, Chattanooga, Ooltewah, and beyond. Chris Ratcliff stays on the job from the first inspection through the final cleanup, so you always have a direct line to the person doing the work.",
      ],
      sections: [
        {
          heading: "What Roofing Services We Provide",
          list: [
            "Full roof replacements on aging or damaged roofs",
            "Storm damage repairs, including hail, wind, and falling debris",
            "Insurance claim support and documentation",
            "Flashing repair and replacement around chimneys, vents, and skylights",
            "Ridge cap replacement and ventilation corrections",
            "Decking repair or replacement when substrate damage is found",
            "Flat and low-slope roofing repairs",
          ],
          paragraphs: [
            "Whether you need a full tear-off and replacement or targeted repairs on a specific section, we approach every job with the same attention to detail.",
          ],
        },
        {
          heading: "Roofing Materials We Work With",
          paragraphs: [
            "Choosing the right roofing material depends on your home's structure, your budget, and how long you plan to stay in the property. Here is a breakdown of the most common options we install and repair in the Cleveland, TN area.",
          ],
          subSections: [
            {
              heading: "Architectural (Dimensional) Shingles",
              paragraphs: [
                "Architectural shingles are the most popular choice for residential roofing in Tennessee. They are thicker than standard three-tab shingles, hold up better in high winds, and carry longer warranties. Most manufacturers offer 30-year to lifetime warranties on architectural shingles. They come in a wide range of colors and profiles, which makes them a flexible option for nearly any home style.",
              ],
            },
            {
              heading: "Three-Tab Shingles",
              paragraphs: [
                "Three-tab shingles are a more economical option that works well on budget replacements or secondary structures. They are lighter and flatter than architectural shingles, and while they have a shorter expected lifespan, they are a solid choice when cost is the primary concern.",
              ],
            },
            {
              heading: "Metal Roofing",
              paragraphs: [
                "Standing seam and corrugated metal roofing have become increasingly popular in Southeast Tennessee, particularly in areas with heavy tree coverage or where longevity is the priority. Metal roofs handle Tennessee's combination of summer heat, humidity, and storm season very well. They are more expensive up front but often last 40 to 70 years with minimal maintenance.",
              ],
            },
          ],
        },
        {
          heading: "Storm Damage and Insurance Roofing Work",
          paragraphs: [
            "Tennessee's storm seasons bring real roofing threats. Hail, strong winds, ice buildup in winter, and heavy rain can all accelerate roof deterioration or cause sudden damage that needs immediate attention.",
            "We help homeowners through the insurance documentation process. This includes walking the property with you, identifying and photographing all visible damage, and providing written estimates formatted for insurance claim submissions. We do not push unnecessary replacements. If your roof can be repaired rather than replaced, we will tell you that directly.",
            "If your insurance adjuster disputes the scope of damage, we can be present during reinspections to provide our professional assessment.",
          ],
        },
        {
          heading: "Our Roofing Process",
          list: [
            "Free Inspection and Estimate -- Chris comes to the property and walks the roof. You get a written estimate covering materials, labor, and timeline before any commitment is made.",
            "Material Selection -- We help you choose the right material for your property and budget, and we can provide samples for color selection.",
            "Scheduling -- We schedule around your availability and give you a specific start date.",
            "Installation -- We handle tear-off, decking inspection, underlayment, and installation. Any decking that shows rot or damage gets addressed before the new roof goes on.",
            "Cleanup -- Every job ends with a magnetic nail sweep of the yard and a full site cleanup.",
            "Final Walkthrough -- Before we close out the job, we walk the property with you to confirm everything looks right.",
          ],
        },
        {
          heading: "Why Cleveland, TN Homeowners Choose Ratcliff Rebuild Right",
          paragraphs: [
            "A lot of roofing companies operate with large crews and rotating project managers, which means the person who sold you the job is rarely the person on your roof. We work differently. Chris Ratcliff is an active part of every project. When you call or text with a question, you are talking to the person who knows your job.",
            "We are also straightforward about scope. If a full replacement is not necessary, we will not recommend one. And if a repair is only going to delay an inevitable replacement by a year or two, we will be upfront about that so you can make the decision that makes sense for you.",
          ],
        },
        {
          heading: "Frequently Asked Questions About Roofing in Cleveland, TN",
          subSections: [
            {
              heading: "How long does a roof replacement take?",
              paragraphs: [
                "Most standard residential roof replacements in the Cleveland area take one to two days, depending on the size of the home and the condition of the decking. Larger homes or jobs with significant decking damage may take an additional day. We give you a realistic timeline in your written estimate before any work starts, and we communicate any changes as soon as we know about them. Our goal is to keep the job moving without surprises.",
              ],
            },
            {
              heading: "How do I know if I need a full replacement or just repairs?",
              paragraphs: [
                "Age, the extent of damage, and the condition of the decking are the main factors. A roof under 15 years old with isolated damage is often a good candidate for repairs. A roof over 20 years old with widespread granule loss, sagging, or multiple leak points usually makes more financial sense to replace than to continue patching. During a free inspection, Chris will walk the roof with you and give you an honest assessment of what the roof actually needs rather than what generates the largest invoice.",
              ],
            },
            {
              heading: "Do you work with insurance companies on roofing claims?",
              paragraphs: [
                "Yes. We are experienced with residential roofing insurance claims in Tennessee and can assist with documentation, written estimates, and adjuster meetings for storm-related damage. We format our estimates for insurance submission and can be present during reinspections if a claim is disputed. We do not inflate scopes to manufacture insurance payouts. Our goal is to get you a fair settlement for damage that is actually present.",
              ],
            },
            {
              heading: "What areas do you serve?",
              paragraphs: [
                "We serve Cleveland, TN and the surrounding communities, including Chattanooga, Ooltewah, Athens, Dayton, Charleston, Soddy-Daisy, Hixson, Apison, and McDonald, TN. If you are unsure whether we cover your area, call or text and we will let you know right away.",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "accent-walls",
    name: "Accent Walls",
    shortDescription:
      "Add depth, texture, and a high-end focal point with custom accent walls designed for modern interiors.",
    longDescription:
      "Ratcliff Rebuild Right LLC installs custom accent walls across Cleveland, Tennessee, including slat walls, board-and-batten layouts, and other feature wall designs that bring a finished focal point to the room.",
    benefits: [
      "Custom feature layouts",
      "Clean finish carpentry",
      "A standout look without overcomplicating the room",
    ],
    featured: true,
    schemaName: "Accent Wall Installation",
    schemaServiceType: "Accent Wall Contractor",
    schemaDescription:
      "Custom accent wall installation in Cleveland, TN, including slat walls, feature walls, and statement trim details for residential interiors.",
  },
  {
    slug: "knotty-pine-ceilings",
    name: "Knotty Pine Ceilings",
    shortDescription:
      "Bring warmth and character to any room with knotty pine ceiling installations that add natural texture and a finished, cabin-style look.",
    longDescription:
      "Ratcliff Rebuild Right LLC installs tongue-and-groove knotty pine ceilings for homes across Cleveland, Tennessee, with tight board layouts, clean trim transitions, and the natural wood character that changes how a room feels.",
    benefits: [
      "Natural wood character and grain",
      "Clean installation and tight joints",
      "A warm, high-end finish that lasts",
    ],
    featured: true,
    schemaName: "Knotty Pine Ceiling Installation",
    schemaServiceType: "Interior Contractor",
    schemaDescription:
      "Knotty pine ceiling installation in Cleveland, TN for living areas, porches, sunrooms, and other interior spaces that need warm wood detail.",
  },
  {
    slug: "interior-trim-and-feature-walls",
    name: "Interior Trim and Feature Walls",
    shortDescription:
      "Refine living spaces with upgraded trim packages, feature walls, and finishing details that sharpen the whole room.",
    longDescription:
      "Ratcliff Rebuild Right LLC installs trim packages, feature walls, wainscoting, and other finish carpentry details in Cleveland, Tennessee, with clean lines, tight joints, and finish quality that stands up in the details.",
    benefits: [
      "Crisp lines and transitions",
      "Consistent finish quality",
      "An upgraded feel throughout the space",
    ],
    schemaName: "Interior Trim and Feature Walls",
    schemaServiceType: "Interior Contractor",
    schemaDescription:
      "Interior trim and feature wall work in Cleveland, TN, including wainscoting, shiplap, custom trim packages, and architectural wall details.",
  },
  {
    slug: "painting",
    name: "Painting",
    shortDescription:
      "Freshen interiors or exteriors with paint work that supports remodeling projects and improves presentation.",
    longDescription:
      "Ratcliff Rebuild Right LLC handles interior and exterior painting in Cleveland, Tennessee, with careful prep work, solid coverage, and clean finish quality for homes, rentals, and small commercial spaces.",
    benefits: [
      "Clean prep and coverage",
      "Color updates that fit the space",
      "Better finish durability",
    ],
    schemaName: "Interior and Exterior Painting",
    schemaServiceType: "Painting Contractor",
    schemaDescription:
      "Interior and exterior painting services in Cleveland, TN, including prep work, finish painting, repainting, and paint support for remodel projects.",
  },
  {
    slug: "general-remodeling",
    name: "General Remodeling",
    shortDescription:
      "Handle practical home improvement and renovation needs with a contractor who can coordinate the work from start to finish.",
    longDescription:
      "Ratcliff Rebuild Right LLC takes on general remodeling projects in Cleveland, Tennessee, including room updates, layout improvements, finish work, and practical renovation scopes that need one contractor to coordinate the full job.",
    benefits: [
      "Flexible scope planning",
      "Improved daily function",
      "Reliable craftsmanship across trades",
    ],
    schemaName: "General Remodeling",
    schemaServiceType: "Remodeling Contractor",
    schemaDescription:
      "General remodeling services in Cleveland, TN for residential spaces that need updated finishes, layout improvements, and coordinated renovation work.",
  },
  {
    slug: "additions",
    name: "Additions",
    shortDescription:
      "Expand usable square footage with additions that fit the property and tie into the existing structure cleanly.",
    longDescription:
      "Ratcliff Rebuild Right LLC builds home additions in Cleveland, Tennessee, with careful planning, structural tie-ins, and finish work that makes the new space feel like part of the original home.",
    benefits: [
      "More room to live or work",
      "Thoughtful tie-in to the existing home",
      "Built for long-term use",
    ],
    schemaName: "Home Additions",
    schemaServiceType: "Home Addition Contractor",
    schemaDescription:
      "Home additions in Cleveland, TN, including room additions and expansion work that ties cleanly into the existing structure.",
  },
  {
    slug: "repairs",
    name: "Repairs",
    shortDescription:
      "Solve problem areas quickly with repair work that fixes the issue and addresses the surrounding finish work properly.",
    longDescription:
      "Ratcliff Rebuild Right LLC handles residential repair work in Cleveland, Tennessee, including exterior damage, trim failures, moisture-related repairs, and other problem areas that need practical troubleshooting and lasting fixes.",
    benefits: [
      "Practical troubleshooting",
      "Attention to the underlying cause",
      "A cleaner, more complete result",
    ],
    schemaName: "Repairs",
    schemaServiceType: "Repair Contractor",
    schemaDescription:
      "Home repair services in Cleveland, TN, including exterior repairs, trim repairs, storm-related damage corrections, and practical property fixes.",
  },
  {
    slug: "consulting-and-estimates",
    name: "Consulting and Estimates",
    shortDescription:
      "Get straightforward guidance on scope, materials, sequencing, and budget before committing to work.",
    longDescription:
      "Ratcliff Rebuild Right LLC offers free project consultations and estimates in Cleveland, Tennessee so property owners can understand scope, material options, and practical next steps before work begins.",
    benefits: [
      "Clear next steps",
      "Honest project expectations",
      "Better decisions before work begins",
    ],
    schemaName: "Consulting and Free Estimates",
    schemaServiceType: "General Contractor",
    schemaDescription:
      "Free consulting and project estimates in Cleveland, TN for siding, roofing, remodeling, repairs, and storm-damage projects.",
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
    alt: "Siding installation on a Cleveland, TN home",
    location: "Cleveland, TN",
    description:
      "A clean siding upgrade with stronger curb appeal, sharper lines, and the kind of finish work that makes the full elevation feel complete.",
  },
  {
    title: "Siding and trim upgrade",
    category: "Siding and Trim",
    image: "/portfolio/siding-2.jpg",
    alt: "Exterior siding replacement in Bradley County, TN",
    location: "Bradley County, TN",
    description:
      "Exterior details tightened up with fresh siding and trim work designed to improve weather protection and presentation at the same time.",
  },
  {
    title: "Modern exterior siding project",
    category: "Siding and Trim",
    image: "/portfolio/siding-3.jpg",
    alt: "Vinyl siding project completed in Cleveland, TN",
    location: "Cleveland, TN",
    description:
      "A siding-focused exterior remodel that gives the home a cleaner, more current profile without losing its practical durability.",
  },
  {
    title: "Custom slat accent wall",
    category: "Accent Walls / Feature Walls",
    image: "/portfolio/accent-wall-1.jpg",
    alt: "Custom wood accent wall installation in Cleveland, TN",
    location: "Cleveland, TN",
    description:
      "A clean feature wall install that adds texture and contrast without making the room feel busy.",
  },
  {
    title: "Feature wall with natural warmth",
    category: "Accent Walls / Feature Walls",
    image: "/portfolio/accent-wall-2.jpg",
    alt: "Interior accent wall with custom slat design in Cleveland, TN",
    location: "Cleveland, TN",
    description:
      "Designed to bring depth to the room with crisp spacing, straight reveals, and a balanced finish.",
  },
  {
    title: "Tall wall detail installation",
    category: "Accent Walls / Feature Walls",
    image: "/portfolio/accent-wall-3.jpg",
    alt: "Feature wall built by Ratcliff Rebuild Right in Bradley County, TN",
    location: "Bradley County, TN",
    description:
      "A full-height feature wall layout that turns a transitional space into a finished focal point.",
  },
  {
    title: "Knotty pine ceiling installation",
    category: "Knotty Pine Ceilings",
    image: "/portfolio/knotty-pine-1.jpg",
    alt: "Knotty pine ceiling installation in Cleveland, TN home",
    location: "Cleveland, TN",
    description:
      "Tongue-and-groove knotty pine boards installed tight with clean borders and a warm, cabin-quality finish throughout.",
  },
  {
    title: "Knotty pine sunroom ceiling",
    category: "Knotty Pine Ceilings",
    image: "/portfolio/knotty-pine-2.png",
    alt: "Knotty pine tongue and groove ceiling in Bradley County, TN",
    location: "Bradley County, TN",
    description:
      "Natural wood ceiling that brings character and warmth to a sunroom, with boards selected for grain consistency and finished cleanly at every edge.",
  },
  {
    title: "Knotty pine living space ceiling",
    category: "Knotty Pine Ceilings",
    image: "/portfolio/knotty-pine-3.png",
    alt: "Finished knotty pine ceiling project in Cleveland, TN",
    location: "Cleveland, TN",
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
    question: "Do you offer free estimates?",
    answer:
      "Yes. Every project starts with a free on-site estimate, no matter the size of the job. Chris comes to the property, looks at what needs to be done, and puts together a written estimate covering materials, labor, and timeline. There is no pressure to decide on the spot, and there is no fee for the visit. The estimate conversation is also a good time to ask questions about the project, the materials, and what the process will look like. We want you to feel comfortable with the scope before any commitment is made. To schedule your free estimate, call or text (423) 827-7804 or fill out the contact form and we will get back to you the same day.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Ratcliff Rebuild Right LLC is licensed and carries general liability insurance on every project. We are happy to provide documentation of coverage before work begins. Hiring a licensed and insured contractor protects you as a homeowner in the event of property damage or a worksite injury. It also means the work is being done by someone who stands behind it and has met the standards required to operate legally in Tennessee. If you ever have questions about our credentials or want to verify coverage, just ask. We keep that information available and will send it over promptly.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Cleveland, TN and the surrounding Southeast Tennessee communities, including Chattanooga, Ooltewah, Athens, Dayton, Charleston, Soddy-Daisy, Hixson, Apison, and McDonald, TN. Most of our work is concentrated in Bradley County and Hamilton County, but we are willing to travel for the right project. If you are unsure whether we cover your location, the fastest way to find out is to call or text (423) 827-7804. We respond quickly and will let you know right away whether your area falls within our normal service range.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary depending on the type of work and the size of the home. A standard siding replacement on a typical two-story home takes two to four days. A roof replacement usually takes one to two days. Interior work like accent walls or trim projects can range from a single day to a full week. Every estimate includes a specific timeline so you know what to expect before work starts. We also communicate any changes as soon as we know about them, whether that is a material delay or a weather hold. We do not leave you wondering where we are in the schedule.",
  },
  {
    question: "Do you handle storm damage and insurance claims?",
    answer:
      "Yes. Storm damage is one of the most common reasons homeowners contact us, particularly after hail seasons and severe thunderstorm events. We help with the full documentation process, including photographing damage, writing detailed estimates formatted for insurance submission, and being present during adjuster reinspections when claims are disputed. We do not inflate damage scopes to manufacture larger payouts. Our job is to make sure you get a fair settlement for damage that is actually there, and then to repair or replace that damage correctly. If you have recently experienced storm damage, reach out quickly because documentation is easier and more effective when done soon after the event.",
  },
  {
    question: "How do I get started?",
    answer:
      "The easiest way to get started is to call or text (423) 827-7804. You can also fill out the contact form on our contact page. Chris responds to all inquiries personally, usually the same day. From there, we schedule a time to come out to the property, take a look at what you have in mind, and put together a written estimate. There is no commitment required at the estimate stage. We want you to have all the information you need to make a confident decision, and we are happy to answer questions before, during, and after the estimate visit.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes. We back our work with a warranty on labor, and most materials we install come with manufacturer warranties that pass through to you as the homeowner. The specific warranty terms depend on the scope of work and the materials used. We go over warranty details during the estimate process so you know exactly what is covered before work begins. A written record of the warranty is provided at the close of every project. If something does not look right after we have finished, contact us and we will address it. Our reputation in this community is more important to us than any individual job.",
  },
  {
    question: "What types of projects do you specialize in?",
    answer:
      "Our core specialties are exterior work and finish-level interior work. On the exterior side, we focus on siding installation and replacement, roofing, exterior remodels, storm damage repair, and insurance claim support. On the interior side, we build accent walls, knotty pine ceilings, interior trim and feature walls, and handle painting. We also take on general remodeling, additions, and repairs for residential properties. If you have a project in mind that is not on that list, reach out anyway. We are straightforward about what we can and cannot do well, and if your project falls outside our wheelhouse, we will tell you and point you in the right direction.",
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
    intro:
      "Cleveland is the seat of Bradley County and the home base for Ratcliff Rebuild Right. It is where Chris Ratcliff lives and works, and it makes up the largest portion of the projects we complete each year. The Cleveland area includes a mix of established residential neighborhoods, newer subdivisions along Keith Street and Mouse Creek Road, and older homes in the historic downtown and Georgetown areas. Bradley County sits in a part of Tennessee that sees significant storm activity in spring and fall, with hail events and high-wind thunderstorms being the most common causes of roofing and siding damage we respond to. We know the properties here, the local building patterns, and the specific challenges that come with Southeast Tennessee's climate. When you call Ratcliff Rebuild Right, you are calling a neighbor who works in this community every week.",
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
    intro:
      "Chattanooga is the largest city in our service area and home to one of the most diverse housing stocks in Southeast Tennessee. The city includes everything from historic bungalows in neighborhoods like St. Elmo, North Chattanooga, and Missionary Ridge to newer construction in the East Brainerd and Hixson corridors. Older homes in Chattanooga often have siding and roofing systems that are well past their design lifespan and benefit significantly from a full replacement rather than continued patching. Hamilton County also sees regular severe weather, including hail events that cause widespread siding and roof damage across established neighborhoods. We serve the full Chattanooga metro area and can typically schedule a free estimate within a few days of your call.",
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
    intro:
      "Ooltewah is one of the fastest-growing communities in Hamilton County, located east of Chattanooga off Highway 11. The area has seen significant residential development over the past 15 years, with a mix of established subdivisions and newer construction neighborhoods. Many of the homes in Ooltewah were built in the late 1990s through the 2010s, which means siding systems are starting to reach the age where replacement or substantial repair becomes the right call rather than continued maintenance. We work throughout the Ooltewah area, including the communities near Collegedale and the subdivisions along Georgetown Road. If you are dealing with storm damage, aging siding, or a roofing issue, we can get out to your property quickly for a free assessment.",
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
    intro:
      "Athens is the seat of McMinn County, located about 35 miles south of Cleveland along I-75. The area combines downtown historic properties with rural residential and agricultural land, and housing in McMinn County spans a wide range of ages and construction types. Older homes in Athens often have original siding systems that have not been updated in decades, and the area sees similar storm patterns to Bradley County, with periodic hail and wind events that accelerate exterior wear. We travel to Athens regularly for siding, roofing, and exterior remodeling projects, and we approach every trip with the same level of attention we give to jobs closer to our home base in Cleveland.",
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
    intro:
      "Dayton is the seat of Rhea County, located along the Tennessee River north of Chattanooga. It is a smaller community with a strong residential character, and the housing stock in Dayton includes a significant number of older homes that benefit from updated exterior systems. The Tennessee River corridor creates localized humidity conditions that can accelerate moisture-related siding and roofing wear, particularly on homes with wood or older vinyl systems. We serve Dayton and the surrounding Rhea County area for siding installation, roofing, storm damage repair, and exterior remodeling work. Reach out to schedule a free estimate and we will make the drive.",
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
    intro:
      "Charleston is a small community in Bradley County situated between Cleveland and Athens along Highway 11. It has a rural character with older residential properties on larger lots, and many of the homes in the Charleston area were built before modern siding and roofing materials were widely available. Properties here often benefit from full siding replacements that update aging wood or original aluminum siding to modern vinyl or fiber cement systems. Because Charleston sits in the same storm corridor as Cleveland and Bradley County, hail and wind damage events affect this area regularly. We serve Charleston as part of our core Bradley County coverage area.",
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
    intro:
      "Soddy-Daisy is a community north of Chattanooga along the eastern shore of Chickamauga Lake in Hamilton County. The area has a mix of lakefront properties, established inland neighborhoods, and newer residential development. Homes near the lake face additional moisture exposure from seasonal humidity, and exterior siding and trim systems on lake-adjacent properties often require more frequent attention than properties further inland. We work throughout the Soddy-Daisy area and understand the specific considerations that come with maintaining homes in a lakeside community. Whether your project involves storm damage, routine siding replacement, or a full exterior remodel, we can schedule a free estimate at a time that works for you.",
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
    intro:
      "Hixson is a well-established suburban community northwest of Chattanooga in Hamilton County. It includes a large number of residential neighborhoods built from the 1960s through the 1990s, many of which are reaching the age where siding and roofing systems need substantial attention. Homes in Hixson from this era often have original aluminum or early vinyl siding that has faded, warped, or been compromised by decades of Tennessee weather. We complete a significant number of full siding replacements in the Hixson area and can help you evaluate whether your home is a candidate for a full replacement or targeted repairs. Call or text to schedule a free estimate.",
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
    intro:
      "Apison is a rural-suburban community in southeastern Hamilton County, located between Chattanooga and the Georgia state line. The area has experienced growing residential development while maintaining its rural character, and properties range from newer construction homes in planned developments to older farmhouses and rural residences on larger parcels. We serve Apison for siding, roofing, exterior remodeling, and storm damage repair work. The community falls within the same storm corridor as the broader Hamilton County area, and we respond to hail and wind damage claims in Apison regularly following significant weather events. Free estimates are available and we can typically schedule within a few business days.",
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
    intro:
      "McDonald is a small community just south of Cleveland in Bradley County, with a rural feel and properties that include both residential homes and agricultural parcels. Because of its proximity to Cleveland, McDonald falls squarely within our primary service area and we work there regularly. Homes in the McDonald area tend to have the same storm exposure profile as Cleveland and the surrounding Bradley County communities, and we see similar demand for siding replacement, roofing work, and storm damage repair after spring and fall weather events. If you are in the McDonald area and need an estimate, call or text (423) 827-7804 and we will get you scheduled.",
  },
];

export const footerTrustStatement =
  "Family-owned remodeling and exterior contracting focused on clear communication, dependable craftsmanship, and practical solutions for properties across Southeast Tennessee.";
