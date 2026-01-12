/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Products Data
 * Comprehensive product catalog featuring Kitchen Craft and Triangle Kitchens
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
      'The Shaker Elegance Collection represents the perfect marriage of traditional craftsmanship and contemporary refinement. Each cabinet door features the classic five-piece shaker design with a recessed center panel, executed in premium hardwoods with exceptional attention to detail. Available in over 40 finishes, from classic whites to rich espresso tones.',
    shortDescription: 'Classic shaker-style cabinets with modern sophistication and premium finishes.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80',
      'https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?w=1200&q=80',
    ],
    features: [
      'Solid wood door frames',
      'Dovetail drawer construction',
      'Soft-close hinges and drawer slides',
      'Full overlay design option',
      'Interior organization accessories',
    ],
    materials: ['Maple', 'Oak', 'Cherry', 'Birch'],
    finishes: ['Pure White', 'Ivory Cream', 'Slate Grey', 'Espresso', 'Natural Oak'],
    priceRange: '$350-650 per linear foot',
    isFeatured: true,
  },
  {
    id: 'kc-modern-slab',
    name: 'Modern Slab Series',
    category: 'cabinets',
    partner: 'kitchen-craft',
    description:
      'Clean lines and seamless aesthetics define the Modern Slab Series. These handle-less cabinets feature integrated pulls and a smooth, continuous facade that creates a stunning visual flow throughout your kitchen. Perfect for contemporary homes seeking understated luxury.',
    shortDescription: 'Sleek, handle-less cabinets with integrated pulls for a seamless modern look.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    features: [
      'Integrated J-pull handles',
      'High-gloss and matte options',
      'Edge-to-edge door design',
      'Premium laminate surfaces',
      'Anti-fingerprint technology',
    ],
    materials: ['MDF', 'High-Pressure Laminate', 'Acrylic'],
    finishes: ['Glacier White', 'Graphite', 'Midnight Blue', 'Warm Taupe'],
    priceRange: '$400-700 per linear foot',
    isNew: true,
  },
  {
    id: 'kc-heritage-raised',
    name: 'Heritage Raised Panel',
    category: 'cabinets',
    partner: 'kitchen-craft',
    description:
      'For those who appreciate the grandeur of traditional design, the Heritage Raised Panel collection offers timeless elegance with intricate detailing. Featuring raised center panels, decorative moldings, and optional glazing techniques that add depth and character.',
    shortDescription: 'Traditional raised panel cabinets with ornate detailing and classic appeal.',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80',
    ],
    features: [
      'Raised center panel design',
      'Crown molding compatible',
      'Glazing and antiquing options',
      'Decorative corbels available',
      'Glass door inserts',
    ],
    materials: ['Solid Maple', 'Cherry', 'Alder'],
    finishes: ['Antique White', 'Honey Maple', 'Chestnut', 'Burgundy'],
    priceRange: '$450-800 per linear foot',
  },
  {
    id: 'kc-quartz-supreme',
    name: 'Quartz Supreme Countertops',
    category: 'countertops',
    partner: 'kitchen-craft',
    description:
      'Engineered quartz countertops that combine the beauty of natural stone with superior durability. Non-porous surfaces resist staining, scratching, and bacterial growth, making them ideal for busy family kitchens without compromising on aesthetics.',
    shortDescription: 'Premium engineered quartz surfaces combining beauty with exceptional durability.',
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=1200&q=80',
    ],
    features: [
      'Non-porous surface',
      'Heat and scratch resistant',
      'NSF certified for food safety',
      'UV stable colors',
      '15-year warranty',
    ],
    materials: ['Engineered Quartz'],
    finishes: ['Calacatta Gold', 'Statuario', 'Concrete Grey', 'Pure Black', 'Arctic White'],
    priceRange: '$85-150 per square foot installed',
    isFeatured: true,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Triangle Kitchens Products
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'tk-infinity-series',
    name: 'Infinity Edge Series',
    category: 'cabinets',
    partner: 'triangle-kitchens',
    description:
      'The Infinity Edge Series pushes the boundaries of kitchen design with its revolutionary edge-to-edge construction and true handleless operation. German-engineered mechanisms provide whisper-quiet operation, while the seamless facade creates a striking visual statement.',
    shortDescription: 'Revolutionary handleless cabinets with German-engineered precision mechanisms.',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    ],
    features: [
      'True handleless design',
      'Touch-to-open mechanisms',
      'Integrated LED strip lighting',
      'Soft-close servo-drive system',
      'Customizable interior fittings',
    ],
    materials: ['Premium MDF', 'Fenix NTM', 'Lacquer'],
    finishes: ['Matte White', 'Silk Grey', 'Forest Green', 'Terra Cotta'],
    priceRange: '$500-900 per linear foot',
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'tk-smart-storage',
    name: 'Smart Storage System',
    category: 'storage',
    partner: 'triangle-kitchens',
    description:
      'Maximize every inch of your kitchen with the Smart Storage System. Features include motorized corner solutions, pull-out pantry units, and custom drawer organizers that transform chaotic cabinets into organized havens. Designed by ergonomics experts for effortless access.',
    shortDescription: 'Intelligent storage solutions featuring motorized mechanisms and custom organizers.',
    image: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1200&q=80',
    ],
    features: [
      'Motorized corner units',
      'Pull-out pantry systems',
      'Custom drawer dividers',
      'Spice rack pullouts',
      'Under-sink organizers',
    ],
    materials: ['Solid Wood', 'Chrome', 'Stainless Steel'],
    finishes: ['Natural Wood', 'Anthracite', 'Chrome', 'White'],
    priceRange: '$200-1,500 per unit',
  },
  {
    id: 'tk-artisan-island',
    name: 'Artisan Kitchen Island',
    category: 'islands',
    partner: 'triangle-kitchens',
    description:
      'The centerpiece of any luxury kitchen, the Artisan Island combines stunning design with practical functionality. Features include integrated breakfast bars, concealed power outlets, and optional wine storage. Each island is custom-designed to fit your space perfectly.',
    shortDescription: 'Custom-designed kitchen islands with integrated features and stunning aesthetics.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    ],
    features: [
      'Custom sizing available',
      'Integrated power outlets',
      'Wine storage options',
      'Waterfall edge countertops',
      'Pendant lighting integration',
    ],
    materials: ['Solid Hardwood', 'Quartz', 'Granite', 'Marble'],
    finishes: ['Two-Tone Options', 'Custom Paint Match', 'Natural Wood'],
    priceRange: '$5,000-25,000',
    isFeatured: true,
  },
  {
    id: 'tk-dekton-surfaces',
    name: 'Dekton Ultra-Compact Surfaces',
    category: 'countertops',
    partner: 'triangle-kitchens',
    description:
      'Dekton represents the pinnacle of surface technology. These ultra-compact surfaces are virtually indestructible, with unmatched resistance to heat, UV rays, scratches, and stains. Available in stunning designs that mimic natural materials or push into avant-garde territory.',
    shortDescription: 'Ultra-compact surfaces with unmatched durability and avant-garde designs.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    features: [
      'UV ray resistant',
      'High heat tolerance',
      'Scratch proof surface',
      'Large format slabs',
      'Indoor/outdoor use',
    ],
    materials: ['Sintered Stone'],
    finishes: ['Kelya', 'Sirius', 'Laos', 'Nilium', 'Kreta'],
    priceRange: '$100-200 per square foot installed',
    isNew: true,
  },
  {
    id: 'tk-premium-hardware',
    name: 'Premium Hardware Collection',
    category: 'hardware',
    partner: 'triangle-kitchens',
    description:
      'The finishing touches that make all the difference. Our Premium Hardware Collection includes brushed brass pulls, matte black handles, and invisible touch-latch systems. Each piece is selected to complement our cabinetry lines while providing years of reliable function.',
    shortDescription: 'Designer hardware including brushed brass, matte black, and touch-latch systems.',
    image: 'https://images.unsplash.com/photo-1600566752734-2a0cf0c3b3b3?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600566752734-2a0cf0c3b3b3?w=1200&q=80',
    ],
    features: [
      'Lifetime warranty',
      'Coordinated collections',
      'Custom length pulls',
      'Soft-close upgrades',
      'Touch-latch integration',
    ],
    materials: ['Solid Brass', 'Stainless Steel', 'Zinc Alloy'],
    finishes: ['Brushed Brass', 'Matte Black', 'Polished Chrome', 'Satin Nickel', 'Antique Bronze'],
    priceRange: '$15-150 per piece',
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
  { id: 'cabinets', name: 'Cabinets', description: 'Premium cabinetry in various styles' },
  { id: 'countertops', name: 'Countertops', description: 'Stunning surface options' },
  { id: 'islands', name: 'Kitchen Islands', description: 'Custom island solutions' },
  { id: 'storage', name: 'Storage Solutions', description: 'Intelligent organization' },
  { id: 'hardware', name: 'Hardware', description: 'Finishing touches' },
  { id: 'accessories', name: 'Accessories', description: 'Complementary items' },
];
