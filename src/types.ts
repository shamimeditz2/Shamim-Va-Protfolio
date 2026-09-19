export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  glowColor: 'cyan' | 'lime';
  keyPoints: string[];
  floatingLogos: {
    name: string;
    badgeBg: string;
    textColor: string;
    icon: string;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
  softwareTools: string[];
  description: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'ecommerce' | 'social' | 'youtube';
  categoryLabel: string;
  imageSrc: string;
  imageAlt: string;
  client: string;
  metric: string;
  metricLabel: string;
  description: string;
  keyDeliverables: string[];
  toolsUsed: string[];
  resultsBreakdown: {
    label: string;
    value: string;
    change: string;
  }[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  highlight: string;
  description: string;
  glowColor: 'cyan' | 'lime';
  iconType: 'efficiency' | 'creativity' | 'data';
  stats: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  platform: 'Upwork' | 'Shopify Plus' | 'YouTube' | 'Fiverr Pro';
  rating: number;
  quote: string;
  metricResult: string;
  verified: boolean;
}
