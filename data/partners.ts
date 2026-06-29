/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Partner Data
 * Information about our Canadian cabinet manufacturers
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type Partner } from '@/types';

export const partners: Partner[] = [
  {
    id: 'kitchen-craft',
    name: 'Kitchen Craft',
    tagline: 'Elegant. Versatile. Stylish.',
    description:
      'Kitchen Table Cabinetry is a licensed distributor of Kitchen Craft cabinetry and components. Kitchen Craft has been manufacturing fine quality cabinetry in Winnipeg, Manitoba since 1971. As part of the MasterBrand Cabinets family, Kitchen Craft is known for their European-style full-access (frameless) cabinet system that prioritizes usable interior space and clean architectural lines. Every cabinet is crafted with precision and backed by a Lifetime Warranty — your investment is protected for as long as you own your home. Their products meet or exceed ANSI A161.1 performance and construction standards as certified by ICC-ES.',
    logo: '/images/partners/kitchen-craft-logo.svg',
    website: 'https://www.kitchencraft.com',
    productsUrl: 'https://www.kitchencraft.com/products',
    features: [
      'Canadian-made in Winnipeg, Manitoba since 1971',
      'Full-access frameless cabinet construction',
      'Lifetime warranty on all cabinetry',
      'ANSI A161.1 certified quality standards',
      'Extensive door styles and finish options',
      'Available locally through Kitchen Table Cabinetry',
    ],
  },
  {
    id: 'triangle-kitchens',
    name: 'Triangle Kitchen',
    tagline: 'Quality Cabinetry, Atlantic Canadian Made',
    description:
      'Kitchen Table Cabinetry is a licensed distributor of Triangle Kitchen cabinetry and components. Triangle Kitchen Ltd. has been a leader in manufacturing quality cabinetry for over 40 years. Based in Dieppe, New Brunswick, Triangle manufactures a range of cabinetry from their Canadian facility — from entry level to high-end custom. Their product line includes over 50 door styles in a wide range of materials including solid wood, laminate, MDF, thermoplastic, polyester, and acrylic. Triangle\'s M Line brings European-inspired frameless design with handleless slab doors to the Atlantic Canadian market.',
    logo: '/images/partners/triangle-kitchens-logo.svg',
    website: 'https://www.trianglekitchen.com',
    productsUrl: 'https://trianglekitchen.com/products/styles',
    features: [
      'Manufactured in Dieppe, New Brunswick',
      'Over 40 years of cabinetry manufacturing',
      'Frameless European-inspired M Line',
      'Over 50 door styles available',
      'Wide range of materials and finishes',
      'Available locally through Kitchen Table Cabinetry',
    ],
  },
];

export function getPartnerById(id: string): Partner | undefined {
  return partners.find((partner) => partner.id === id);
}

export function getPartnerBySlug(slug: string): Partner | undefined {
  return partners.find((partner) => partner.id === slug);
}
