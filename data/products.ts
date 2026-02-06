/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Products Data
 * Product catalog featuring Kitchen Craft and Triangle Kitchen cabinetry
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type Product, type ProductCategory } from '@/types';

export const products: Product[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // Kitchen Craft Products
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'kc-shaker-elegance',
    name: 'Shaker Elegance Collection',
    category: 'cabinets',
    partner: 'kitchen-craft',
    description:
      'The Shaker Elegance Collection features the classic five-piece shaker design with a recessed center panel, executed in premium hardwoods. Kitchen Craft\'s full-access frameless construction maximizes interior space while delivering the clean lines that define quality cabinetry. Available in a wide range of finishes from classic whites to rich espresso tones.',
    shortDescription: 'Classic shaker-style frameless cabinets with premium finishes.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80',
      'https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?w=1200&q=80',
    ],
    features: [
      'Full-access frameless construction',
      'Solid wood door frames',
      'Dovetail drawer construction',
      'Soft-close hinges and drawer slides',
      'Lifetime warranty',
    ],
    materials: ['Maple', 'Oak', 'Cherry', 'Birch'],
    finishes: ['Pure White', 'Ivory Cream', 'Slate Grey', 'Espresso', 'Natural Oak'],
    isFeatured: true,
  },
  {
    id: 'kc-modern-slab',
    name: 'Modern Slab Series',
    category: 'cabinets',
    partner: 'kitchen-craft',
    description:
      'Clean lines and seamless aesthetics define the Modern Slab Series. These frameless cabinets feature integrated pulls and a smooth, continuous facade for a contemporary look. Kitchen Craft\'s European-style full-access construction delivers maximum interior space with whisper-quiet soft-close operation.',
    shortDescription: 'Sleek frameless cabinets with integrated pulls for a seamless modern look.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    features: [
      'Full-access frameless construction',
      'Integrated J-pull handles',
      'High-gloss and matte options',
      'Edge-to-edge door design',
      'Lifetime warranty',
    ],
    materials: ['MDF', 'High-Pressure Laminate', 'Acrylic'],
    finishes: ['Glacier White', 'Graphite', 'Midnight Blue', 'Warm Taupe'],
    isNew: true,
  },
  {
    id: 'kc-heritage-raised',
    name: 'Heritage Raised Panel',
    category: 'cabinets',
    partner: 'kitchen-craft',
    description:
      'For those who appreciate the grandeur of traditional design, the Heritage Raised Panel collection offers timeless elegance with intricate detailing. Raised center panels, decorative moldings, and optional glazing techniques add depth and character — all built on Kitchen Craft\'s frameless full-access platform for modern functionality.',
    shortDescription: 'Traditional raised panel frameless cabinets with ornate detailing.',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80',
    ],
    features: [
      'Full-access frameless construction',
      'Raised center panel design',
      'Crown molding compatible',
      'Glazing and antiquing options',
      'Lifetime warranty',
    ],
    materials: ['Solid Maple', 'Cherry', 'Alder'],
    finishes: ['Antique White', 'Honey Maple', 'Chestnut', 'Burgundy'],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Triangle Kitchen Products
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'tk-m-line',
    name: 'M Line — European Frameless',
    category: 'cabinets',
    partner: 'triangle-kitchens',
    description:
      'Triangle\'s M Line is inspired by modern European design, featuring handleless slab doors and clean frameless construction. Born from inspiration at EuroCucina in Milan, the M Line delivers sleek Italian-inspired aesthetics manufactured right in Atlantic Canada. Available in a range of contemporary finishes.',
    shortDescription: 'European-inspired handleless frameless cabinetry made in Atlantic Canada.',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    ],
    features: [
      'Handleless slab door design',
      'Frameless full-access construction',
      'Italian-inspired aesthetics',
      'Soft-close mechanisms throughout',
      'Made in Dieppe, New Brunswick',
    ],
    materials: ['MDF', 'Laminate', 'Acrylic', 'Polyester'],
    finishes: ['Matte White', 'Silk Grey', 'Forest Green', 'Terra Cotta'],
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'tk-classic-collection',
    name: 'Classic Collection',
    category: 'cabinets',
    partner: 'triangle-kitchens',
    description:
      'Triangle\'s Classic Collection offers traditional and transitional door styles in solid wood and composite materials. With over 50 door profiles to choose from and a wide range of paint and stain options, this collection covers everything from simple shaker doors to detailed raised panels — all manufactured in their Dieppe, NB facility.',
    shortDescription: 'Traditional and transitional cabinetry with 50+ door styles.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    ],
    features: [
      'Over 50 door styles',
      'Solid wood and composite options',
      'Custom paint and stain matching',
      'Full range from entry level to high-end custom',
      'Made in Dieppe, New Brunswick',
    ],
    materials: ['Solid Wood', 'MDF', 'Thermoplastic', 'Laminate', 'Polyester'],
    finishes: ['Custom Paint Match', 'Wood Stain Options', 'Thermofoil Colours'],
    isFeatured: true,
  },
  {
    id: 'tk-storage-solutions',
    name: 'Storage Solutions',
    category: 'storage',
    partner: 'triangle-kitchens',
    description:
      'Maximize every inch of your kitchen with Triangle\'s integrated storage solutions. Pull-out pantry units, corner solutions, and custom drawer organizers transform chaotic cabinets into organized, functional spaces. Designed to work seamlessly with both the M Line and Classic Collection cabinetry.',
    shortDescription: 'Integrated storage solutions for maximum kitchen organization.',
    image: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1200&q=80',
    ],
    features: [
      'Pull-out pantry systems',
      'Corner cabinet solutions',
      'Custom drawer dividers',
      'Spice rack pullouts',
      'Under-sink organizers',
    ],
    materials: ['Solid Wood', 'Chrome', 'Stainless Steel'],
    finishes: ['Natural Wood', 'Anthracite', 'Chrome', 'White'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────────────────────

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByPartner(partnerId: string): Product[] {
  return products.filter((product) => product.partner === partnerId);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured);
}

export function getNewProducts(): Product[] {
  return products.filter((product) => product.isNew);
}

export const productCategories: { id: ProductCategory; name: string; description: string }[] = [
  { id: 'cabinets', name: 'Cabinets', description: 'Premium frameless cabinetry' },
  { id: 'storage', name: 'Storage Solutions', description: 'Intelligent organization' },
];
