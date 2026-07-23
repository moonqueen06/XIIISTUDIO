export type PortfolioCategory =
  | 'all'
  | 'brand-identity'
  | 'web-app'
  | 'photography'
  | 'operations';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  client: string;
  year: string;
  tags: string[];
  imageUrl: string;
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1';
  featured?: boolean;
  summary: string;
  challenge?: string;
  solution?: string;
  impact?: string;
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyOutcomes: string[];
  icon: string;
}

export interface EngagementPackage {
  id: string;
  title: string;
  badge: string;
  targetAudience: string;
  description: string;
  investment: string;
  deliverables: string[];
  highlight?: boolean;
  ctaText: string;
}

export interface PricingRow {
  category: string;
  smallBiz: string;
  mediumProj: string;
  luxuryFull: string;
}

export interface ContactInquiry {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  createdAt?: string;
  read?: boolean;
  status?: 'new' | 'contacted' | 'archived';
}
