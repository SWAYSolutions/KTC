/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Partner Data
 * Information about our premium kitchen partners
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type Partner } from '@/types';

export const partners: Partner[] = [
  {
    id: 'kitchen-craft',
    name: 'Kitchen Craft',
    tagline: 'Crafted for Life',
    description:
      'Kitchen Craft has been a leader in cabinetry for over 50 years, combining timeless design with modern innovation. Their commitment to quality craftsmanship and sustainable practices makes them the perfect partner for creating kitchens that last generations.',
    logo: '/images/partners/kitchen-craft-logo.svg',
    website: 'https://www.kitchencraft.com',
    features: [
      'Canadian-made quality since 1972',
      'Over 600 door styles and finishes',
      'Industry-leading warranty',
      'Sustainable manufacturing practices',
      'Custom sizing and modifications',
      'Premium hardware options',
    ],
  },
  {
    id: 'triangle-kitchens',
    name: 'Triangle Kitchens',
    tagline: 'Design Without Boundaries',
    description:
      'Triangle Kitchens brings European innovation to North American homes with their ergonomic designs and cutting-edge functionality. Known for intelligent storage solutions and sleek aesthetics, Triangle creates kitchens that work as beautifully as they look.',
    logo: '/images/partners/triangle-kitchens-logo.svg',
    website: 'https://www.trianglekitchens.com',
    features: [
      'European-inspired contemporary design',
      'Innovative storage systems',
      'Ergonomic work triangles',
      'Premium soft-close mechanisms',
      'Integrated lighting solutions',
      'Handle-less design options',
    ],
  },
];

export function getPartnerById(id: string): Partner | undefined {
  return partners.find((partner) => partner.id === id);
}

export function getPartnerBySlug(slug: string): Partner | undefined {
  return partners.find((partner) => partner.id === slug);
}
