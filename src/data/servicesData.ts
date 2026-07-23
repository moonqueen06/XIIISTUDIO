import { ServicePillar, EngagementPackage, PricingRow } from '../types';

export const PILLARS_DATA: ServicePillar[] = [
  {
    id: 'pillar-1',
    number: '01',
    title: 'Strategic Brand & Design',
    subtitle: 'The Blueprint',
    description: 'Every successful venture begins with a master blueprint. We define your brand identity and map out a visual strategy that connects deeply with your ideal audience.',
    keyOutcomes: [
      'Brand Identity & Typography Guidelines',
      'Visual Asset Direction & Color Systems',
      'Audience Persona & Positioning Map',
      'High-Impact Creative Concepts'
    ],
    icon: 'Palette'
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'Digital Development',
    subtitle: 'The Platform',
    description: 'With a clear strategy in place, we build high-performing digital platforms. From intuitive websites to engaging core content, we bring your brand to life online.',
    keyOutcomes: [
      'High-Converting Mobile & Desktop Web Design',
      'Custom Direct Booking & E-Commerce Engines',
      'SEO & Google Workspace Integration',
      'Interactive Content & Storytelling Modules'
    ],
    icon: 'Layout'
  },
  {
    id: 'pillar-3',
    number: '03',
    title: 'Operations & Growth',
    subtitle: 'The Engine',
    description: 'A great brand needs great systems. We streamline your internal processes, leverage data-driven marketing, and set up the tools you need to scale smoothly.',
    keyOutcomes: [
      'Workflow & Operational Process Audits',
      'CRM & Guest Journey Automation',
      'Performance Analytics & Campaign Tweaks',
      'Team Training & Process Documentation'
    ],
    icon: 'Cpu'
  }
];

export const PACKAGES_DATA: EngagementPackage[] = [
  {
    id: 'blueprint',
    title: 'The Digital Blueprint',
    badge: 'Project-Based',
    targetAudience: 'Ideal for new businesses or brands undergoing a major relaunch',
    description: 'An intensive, one-time project to build your digital foundation from the ground up with high precision.',
    investment: 'Starting from $6,000',
    deliverables: [
      'Integrated Strategic Brand Plan',
      'Full Brand Identity & Design System',
      'Custom Web Development & Mobile Optimization',
      'SEO Setup & Google Workspace Integration',
      'Core Content Creation & Visual Copywriting'
    ],
    ctaText: 'Build Your Blueprint'
  },
  {
    id: 'growth-partner',
    title: 'The Growth Partner',
    badge: 'Monthly Retainer',
    targetAudience: 'For businesses ready for comprehensive, ongoing digital management',
    description: 'Think of me as your dedicated growth team and visual director so you can focus entirely on running your business.',
    investment: 'Starting from $4,500 / mo',
    highlight: true,
    deliverables: [
      'Integrated Strategic Plan & Ongoing Web Evolution',
      'SEO Optimization & Continuous Content Creation',
      'Social Media & Ad Campaign Management',
      'Performance Analytics & Strategy Tweaks',
      'Direct Access Priority Consulting'
    ],
    ctaText: 'Partner With XIII'
  },
  {
    id: 'process-architect',
    title: 'Operational Consulting & Systems Design',
    badge: 'The Process Architect',
    targetAudience: 'Ideal for businesses that have traction but lack internal organization',
    description: 'High-level consulting to organize your business behind the scenes. We audit workflows and implement time-saving tools.',
    investment: 'Starting from $1,200 / Project',
    deliverables: [
      'Workflow & Process Auditing',
      'Customer & Guest Service Journey Mapping',
      'Software Implementation (Booking, CRM, Automation)',
      'Team Training & Process Documentation',
      'Hourly Consultation available at $150/hr'
    ],
    ctaText: 'Streamline Your Systems'
  }
];

export const PRICING_TABLE_DATA: PricingRow[] = [
  {
    category: 'Branding',
    smallBiz: '$350 – $650',
    mediumProj: '$650 – $1,250',
    luxuryFull: '$950 – $1,850'
  },
  {
    category: 'Website / Redesign',
    smallBiz: '$950 – $1,650',
    mediumProj: '$1,850 – $3,250',
    luxuryFull: '$2,750 – $4,850'
  },
  {
    category: 'Social Media (Monthly)',
    smallBiz: '$550 – $750',
    mediumProj: '$1,050 – $1,450',
    luxuryFull: '$1,550 – $2,150'
  },
  {
    category: 'Graphic Design',
    smallBiz: 'Starting at $150',
    mediumProj: 'Custom Quote',
    luxuryFull: 'Custom Quote'
  }
];

export const SPECIALIZATION_SECTORS = [
  {
    title: 'Tourism & Hospitality',
    primary: true,
    description: 'Building digital experiences that increase direct bookings, reduce third-party OTA commissions, and enhance guest loyalty.'
  },
  {
    title: 'E-Commerce & Retail',
    primary: false,
    description: 'High-converting luxury online stores with seamless checkout flows and product presentation.'
  },
  {
    title: 'Local Services & Boutique Brands',
    primary: false,
    description: 'Elevating regional providers into memorable, premium local leaders.'
  },
  {
    title: 'Tech Startups & Founders',
    primary: false,
    description: 'Translating complex software and platforms into crisp visual storytelling.'
  },
  {
    title: 'Personal Brands & Artists',
    primary: false,
    description: 'Crafting timeless personal identity systems for creators, consultants, and leaders.'
  }
];
