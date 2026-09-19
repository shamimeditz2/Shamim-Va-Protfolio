import { NavItem, ServiceItem, ProjectCaseStudy, WhyChooseItem, TestimonialItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_DATA = {
  greeting: "HI, I'M SHAMIM",
  role: "Virtual Assistant & Operations Specialist",
  headline: "HI, I'M SHAMIM. Your Partner for Scaling E-commerce & Amplifying Social Media.",
  subheadline: "Streamline Your Business with Expert E-commerce Management and Engaging Content Operations.",
  ctaPrimary: "Get A Free Consultation",
  ctaUpwork: "Hire on Upwork",
  ctaFiverr: "Hire on Fiverr",
  upworkUrl: "https://www.upwork.com",
  fiverrUrl: "https://www.fiverr.com",
  ctaSecondary: "Explore Project",
  avatarImage: "/src/assets/images/shamim_profile_photo_1789827854427.jpg",
  availability: "Available for Remote & Freelancing Work",
  stats: [
    { label: "Client Revenue Handled", value: "$2.4M+" },
    { label: "Catalog SKUs Managed", value: "65,000+" },
    { label: "Content Impressions", value: "18.5M+" },
    { label: "On-Time Delivery", value: "99.9%" },
  ],
  floatingBadges: [
    { text: "E-commerce Optimization Specialist", icon: "shopping-bag", glow: "cyan" },
    { text: "Viral Social Content Strategist", icon: "sparkles", glow: "lime" },
    { text: "Shopify & Amazon Certified VA", icon: "shield-check", glow: "cyan" },
  ]
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "ecommerce-management",
    title: "E-commerce Management",
    subtitle: "End-to-End Store Operations, Catalog Archiving & Order Logistics",
    imageSrc: "/src/assets/images/ecom_3d_render_1789752079042.jpg",
    imageAlt: "3D neon shopping cart popping out of high-tech laptop screen",
    glowColor: "cyan",
    description: "Holistic store administration designed to minimize returns, boost organic search ranks, and eliminate out-of-stock bottlenecks on leading digital marketplaces.",
    keyPoints: [
      "Product Listings (High-Conversion Bullet Points & A+ Content)",
      "Description Optimization (SEO-Rich Copy & Search Terms)",
      "Excel Inventory Tracking (Real-Time Stock Alerts & Reorder Points)",
      "Customer Email Support (24/7 Ticketing & Dispute Resolution)"
    ],
    floatingLogos: [
      { name: "Shopify", badgeBg: "bg-emerald-950/80 border-emerald-500/50", textColor: "text-emerald-300", icon: "shopify" },
      { name: "Amazon FBA", badgeBg: "bg-amber-950/80 border-amber-500/50", textColor: "text-amber-300", icon: "amazon" },
      { name: "MS Excel", badgeBg: "bg-teal-950/80 border-teal-500/50", textColor: "text-teal-300", icon: "table" },
    ],
    stats: [
      { label: "Listing Accuracy", value: "99.9%" },
      { label: "Daily Order Throughput", value: "1,400+" },
    ],
    softwareTools: ["Shopify Admin", "Amazon Seller Central", "Helium 10", "Excel / Google Sheets", "Zendesk", "Canva Pro"]
  },
  {
    id: "social-media-operations",
    title: "Social Media Operations",
    subtitle: "High-Engagement Visuals, Multi-Channel Scheduling & Video SEO",
    imageSrc: "/src/assets/images/social_3d_render_1789752095137.jpg",
    imageAlt: "3D neon smartphone popping out Instagram and YouTube play badges",
    glowColor: "lime",
    description: "Amplify your audience attention with high-retention graphic layouts, algorithmic YouTube metadata ranking, and systematic calendar dispatch.",
    keyPoints: [
      "Graphic Design (High-CTR Posts, Carousel Decks & Thumbnails)",
      "YouTube & Social SEO (Tag Mining, Keyword Clusters & Descriptions)",
      "Content Calendar (Monthly Roadmaps & Multi-Platform Repurposing)",
      "Scheduling & Community (Buffer/Later Auto-Queue & Reply Triage)"
    ],
    floatingLogos: [
      { name: "Instagram", badgeBg: "bg-pink-950/80 border-pink-500/50", textColor: "text-pink-300", icon: "instagram" },
      { name: "YouTube", badgeBg: "bg-red-950/80 border-red-500/50", textColor: "text-red-300", icon: "youtube" },
      { name: "MS Excel", badgeBg: "bg-emerald-950/80 border-emerald-500/50", textColor: "text-emerald-300", icon: "sheet" },
    ],
    stats: [
      { label: "Avg Engagement Lift", value: "+310%" },
      { label: "CTR Benchmark", value: "9.2%+" },
    ],
    softwareTools: ["YouTube Studio", "Adobe Photoshop / Canva", "VidIQ", "Meta Business Suite", "Notion", "Metricool"]
  }
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "shopify-catalog-scaling",
    title: "Shopify Product Listing & Inventory Dashboard",
    category: "ecommerce",
    categoryLabel: "E-commerce Optimization",
    imageSrc: "/src/assets/images/shopify_project_3d_1789752113076.jpg",
    imageAlt: "3D isometric mockup of Shopify Product Listing Dashboard",
    client: "Nordic Apex Gear (D2C Apparel & Equipment)",
    metric: "+148% Conversion Rate",
    metricLabel: "Quarterly Revenue Surge",
    description: "Complete restructuring of an 1,800-SKU catalog. Re-architected SEO bullet hierarchies, optimized variations, and built automated low-stock warnings in Excel linked via API.",
    keyDeliverables: [
      "1,800+ Optimized Titles & High-Conversion Product Descriptions",
      "Dynamic Size & Material Chart Graphics for Better CX",
      "Bi-Weekly Inventory Turnover Reconciliation Matrix",
      "Customer CSAT Response Protocol (Under 45min SLA)"
    ],
    toolsUsed: ["Shopify Plus", "Excel VBA Macro", "Helium 10", "Gorgias"],
    resultsBreakdown: [
      { label: "Catalog Audit Score", value: "99/100", change: "+45 pts" },
      { label: "Cart Abandonment Drop", value: "-24%", change: "Direct improvement" },
      { label: "Organic Search Impressions", value: "380K/mo", change: "+165%" }
    ]
  },
  {
    id: "instagram-carousel-growth",
    title: "Instagram Growth & High-Retention Carousel Grid",
    category: "social",
    categoryLabel: "Social Content Architecture",
    imageSrc: "/src/assets/images/instagram_project_3d_1789752128963.jpg",
    imageAlt: "Floating 3D layered grid showcasing Instagram Carousels & Post Designs",
    client: "Lumina Skin Botanicals",
    metric: "3.8x Follower Surge",
    metricLabel: "Organically Grown in 90 Days",
    description: "Designed 36 modular educational carousels with swipe-stopping 3D hooks. Standardized aesthetic guidelines and scheduled automated cross-posts using Metricool.",
    keyDeliverables: [
      "Custom 3D-Accent Instagram Carousel Slide Templates",
      "Hashtag & Keyword Cluster Vault (High & Mid Intent)",
      "Daily Community Engagement & DM Lead Qualification",
      "Weekly Analytics Breakdown & Content Evolution Report"
    ],
    toolsUsed: ["Canva Pro", "Adobe Photoshop", "Metricool", "Notion"],
    resultsBreakdown: [
      { label: "Save & Share Rate", value: "14.2%", change: "vs 2.1% baseline" },
      { label: "Account Reach", value: "1.2M", change: "+420%" },
      { label: "Bio Link CTR", value: "6.8%", change: "+190%" }
    ]
  },
  {
    id: "youtube-seo-case-study",
    title: "YouTube SEO Case Study & High CTR Thumbnails",
    category: "youtube",
    categoryLabel: "Video Growth Operations",
    imageSrc: "/src/assets/images/youtube_project_3d_1789752147588.jpg",
    imageAlt: "3D YouTube video player mockup displaying YouTube SEO & High CTR Thumbnails",
    client: "TechFoundry Review Lab (480K Subscribers)",
    metric: "11.6% Average CTR",
    metricLabel: "Surpassing Industry Avg of 4.5%",
    description: "Overhauled YouTube channel metadata across 120 legacy videos while leading end-to-end publishing workflows for 3 weekly tech breakdowns with custom high-contrast thumbnails.",
    keyDeliverables: [
      "High-CTR 3D & Neo-Glow Thumbnail Compositions",
      "Algorithm-Engineered Titles with Emotional & Search Triggers",
      "Timestamp Chapters, Cards & End-Screen Conversion Mapping",
      "VidIQ Keyword Mapping for #1 Search Placement"
    ],
    toolsUsed: ["YouTube Studio", "VidIQ Pro", "Photoshop", "TubeBuddy"],
    resultsBreakdown: [
      { label: "Search Ranking #1-3", value: "78 Videos", change: "Top of search" },
      { label: "Watch Time Hours", value: "840K hrs", change: "+112%" },
      { label: "CTR Jump", value: "11.6%", change: "From 3.2%" }
    ]
  }
];

export const WHY_CHOOSE_ME: WhyChooseItem[] = [
  {
    id: "efficiency",
    title: "Efficiency & Organization",
    highlight: "Zero Disruption Standard Operating Procedures",
    description: "Precision task orchestration with documented SOPs, synchronized spreadsheet trackers, and daily progress logs ensuring seamless reliability across all time zones.",
    glowColor: "cyan",
    iconType: "efficiency",
    stats: "24h Turnaround",
    features: [
      "Automated stock & order status tracking",
      "Daily asynchronous Slack/Email reporting",
      "Strict data confidentiality & security",
      "Time-zone aligned communication"
    ]
  },
  {
    id: "creativity",
    title: "Creative Solutions",
    highlight: "Scroll-Stopping Visuals & Viral Formatting",
    description: "Modern design eye tuned for conversion. From punchy YouTube thumbnails to multi-slide Instagram carousels, every creative asset is crafted to outshine generic competitors.",
    glowColor: "lime",
    iconType: "creativity",
    stats: "3.4x Engagement",
    features: [
      "Custom 3D & neon graphic accents",
      "Psychology-backed visual hierarchy",
      "Brand kit adherence across all platforms",
      "Rapid template iteration & A/B testing"
    ]
  },
  {
    id: "data-driven",
    title: "Data-Driven Results",
    highlight: "Metrics Over Guesswork Every Time",
    description: "Decisions guided by granular analytics. We track CTRs, keyword rankings, inventory velocities, and customer satisfaction rates to continually compound your store and brand growth.",
    glowColor: "cyan",
    iconType: "data",
    stats: "100% Metric Backed",
    features: [
      "Helium 10 & VidIQ search keyword audits",
      "Listing conversion rate split tests",
      "Weekly actionable KPI dashboard summaries",
      "Return rate and negative review prevention"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Vance Athletic Gear (Shopify Plus)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    platform: "Shopify Plus",
    rating: 5,
    quote: "Shamim single-handedly transformed our Shopify backend. Within three weeks, he re-indexed 1,400 product listings, cleaned our messy inventory sheets, and raised our organic search visibility by over 130%. He works with military precision!",
    metricResult: "+148% Monthly GMV",
    verified: true
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Content Director",
    company: "Pulse Media Network (620k Subs)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    platform: "YouTube",
    rating: 5,
    quote: "Finding a Virtual Assistant who understands YouTube SEO and creates thumbnails that actually boost CTR is like striking gold. Shamim pushed our average CTR from 3.1% to over 11%. Our videos regularly land in the top 3 search results now.",
    metricResult: "11.6% Average CTR",
    verified: true
  },
  {
    id: "3",
    name: "David K. Campbell",
    role: "Managing Director",
    company: "Apex Direct Logistics & FBA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    platform: "Upwork",
    rating: 5,
    quote: "100% Job Success score well deserved. Shamim handles our Amazon customer disputes, creates daily inventory reconciliations in Excel, and ensures our store never runs out of stock during seasonal rushes. Truly an indispensable partner.",
    metricResult: "99.9% Order Accuracy",
    verified: true
  }
];

export const CONTACT_INFO = {
  name: "Shamim",
  fullName: "Shamim Hasan",
  role: "Virtual Assistant Specialist",
  email: "shamimhasan809@gmail.com",
  responseTime: "Within 2 Hours",
  workHours: "Mon – Sat: Flexible Global Timezones (EST / GMT / BST / PST)",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin", glow: "cyan" },
    { name: "Upwork", url: "https://upwork.com", icon: "upwork", glow: "lime" },
    { name: "Fiverr Pro", url: "https://fiverr.com", icon: "fiverr", glow: "cyan" },
    { name: "Email", url: "mailto:shamimhasan809@gmail.com", icon: "mail", glow: "lime" }
  ]
};
