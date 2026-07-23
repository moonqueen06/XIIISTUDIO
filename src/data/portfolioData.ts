import { PortfolioItem } from '../types';

import heroEditorial from '../assets/images/hero_xiii_editorial_1784764871391.jpg';
import hospitalityImg from '../assets/images/portfolio_hospitality_1784764879793.jpg';
import brandingImg from '../assets/images/portfolio_branding_1784764888030.jpg';

export const HERO_IMAGE = heroEditorial;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Aura Costa Rica Eco-Resort',
    category: 'web-app',
    categoryLabel: 'Hospitality & Web',
    client: 'Aura Hotel Group',
    year: '2026',
    tags: ['Tourism', 'Web Design', 'Direct Bookings', 'UI/UX'],
    imageUrl: hospitalityImg,
    aspectRatio: '4:3',
    featured: true,
    summary: 'Seamless digital platform and custom booking workflow for an eco-luxury resort in Papagayo Peninsula, driving +48% direct bookings.',
    challenge: 'Aura was losing up to 25% commission to third-party OTAs because their previous website lacked a compelling mobile booking experience and high-converting storytelling.',
    solution: 'Engineered a cinematic, fast-loading mobile-first platform integrated with an automated reservation workflow, room customization steps, and guest concierges.',
    impact: 'Increased direct non-commissioned reservations by 48% in Q1 alone, saving $42,000 in OTA fees.'
  },
  {
    id: '2',
    title: 'EGO Brand Systems & Direction',
    category: 'brand-identity',
    categoryLabel: 'Brand Identity',
    client: 'Ego Creative Lab',
    year: '2026',
    tags: ['Branding', 'Art Direction', 'Typography', 'Print'],
    imageUrl: brandingImg,
    aspectRatio: '4:3',
    featured: true,
    summary: 'Uncompromising luxury brand identity system with dark velvet red foils, bold XIII typography, and modular design guidelines.',
    challenge: 'Ego Lab needed a distinct visual presence that would instantly establish authority in high-end fashion and creative strategy across Europe and Latin America.',
    solution: 'Crafted a timeless typographic mark, bespoke foil stationery, and digital style system emphasizing deep crimson contrasts and bold negative space.',
    impact: 'Won Awwwards Site of the Day nomination and onboarded 5 luxury brand clients within 60 days.'
  },
  {
    id: '3',
    title: 'Noir Editorial Fine Art Series',
    category: 'photography',
    categoryLabel: 'Photography & Art',
    client: 'XIII Personal Gallery',
    year: '2025',
    tags: ['Photography', 'Fine Art', 'Visual Studies', 'Costa Rica'],
    imageUrl: heroEditorial,
    aspectRatio: '16:9',
    featured: true,
    summary: 'A high-fashion photographic exploration of shadow, crimson light, and human form inspired by Ringling College Visual Studies research.',
    challenge: 'Merging classical fine art photographic techniques with contemporary digital strategy aesthetics.',
    solution: 'Shot on medium format with physical gel lighting in a darkroom studio setup, digitized for high-resolution gallery printing and NFT exhibition.',
    impact: 'Exhibited at Maastricht Contemporary Art Fair & featured in Latin Art Quarterly.'
  },
  {
    id: '4',
    title: 'Valle Verde Tourism Systems Engine',
    category: 'operations',
    categoryLabel: 'Operations & Systems',
    client: 'Valle Verde Expeditions',
    year: '2025',
    tags: ['Systems Design', 'CRM', 'Process Audit', 'Automation'],
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: '4:3',
    summary: 'End-to-end operational workflow audit, CRM integration, and customer journey mapping for a premier tour operator.',
    challenge: 'Disjointed customer service inquiries across WhatsApp, email, and booking forms led to lost leads and overbooked staff.',
    solution: 'Implemented a unified CRM workflow, automated pre-arrival guest questionnaires, and staff SOP documentation.',
    impact: 'Reduced response times from 14 hours to under 8 minutes; automated 70% of routine guest inquiries.'
  },
  {
    id: '5',
    title: 'Lumina Digital Marketplace Platform',
    category: 'web-app',
    categoryLabel: 'Digital Development',
    client: 'Lumina Craft Co.',
    year: '2025',
    tags: ['E-Commerce', 'Web Development', 'Stripe', 'UI Design'],
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: '3:4',
    summary: 'High-converting minimalist e-commerce storefront with custom product preview engine and fast checkout.',
    challenge: 'High cart abandonment due to cluttered layouts and slow page performance on mobile devices.',
    solution: 'Redesigned layout with generous whitespace, high contrast product cards, and instant 1-click checkout.',
    impact: 'Elevated conversion rate by 3.2% and increased average order value (AOV) by $38.'
  },
  {
    id: '6',
    title: 'Botanica Identity & Packaging',
    category: 'brand-identity',
    categoryLabel: 'Brand Identity',
    client: 'Botanica Organics',
    year: '2025',
    tags: ['Packaging', 'Graphic Design', 'Brand Identity', 'Print'],
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: '1:1',
    summary: 'Sustainable luxury cosmetics packaging design featuring custom botanical illustrations and minimalist label hierarchy.',
    challenge: 'Standing out in a saturated organic skincare market with sustainable materials that still feel ultra-premium.',
    solution: 'Embossed stark black typography on uncoated off-white paper stock with deep crimson wax seals.',
    impact: 'Secured distribution in 24 boutique hotels and luxury spas across Central America.'
  }
];
