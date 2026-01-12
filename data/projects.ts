/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Projects / Gallery Data
 * Showcase of completed luxury kitchen projects
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type Project, type ProjectStyle } from '@/types';

export const projects: Project[] = [
  {
    id: 'proj-modern-minimalist-halifax',
    title: 'Modern Minimalist Haven',
    slug: 'modern-minimalist-haven',
    style: 'modern',
    location: 'Halifax, Nova Scotia',
    description:
      'A stunning transformation of a 1960s ranch home into a sleek, contemporary kitchen that maximizes natural light and functionality. The handleless cabinetry from Triangle Kitchens creates an uninterrupted visual flow, while the waterfall quartz island serves as the room\'s dramatic centerpiece.',
    shortDescription: 'Sleek handleless design with waterfall quartz island and integrated appliances.',
    coverImage: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80', alt: 'Modern kitchen overview' },
      { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80', alt: 'Kitchen island detail' },
      { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80', alt: 'Cabinetry closeup' },
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80',
    },
    features: [
      'Handleless push-to-open cabinetry',
      'Waterfall edge quartz countertops',
      'Integrated Sub-Zero refrigeration',
      'Hidden pantry storage',
      'Under-cabinet LED lighting',
    ],
    products: ['tk-infinity-series', 'kc-quartz-supreme'],
    testimonial: {
      quote: 'Kitchen Table Cabinetry transformed our outdated kitchen into something we never dreamed possible. Every detail was considered, and the result is absolutely stunning.',
      author: 'Sarah & Michael Chen',
      location: 'Halifax, NS',
    },
    completedDate: '2024-06-15',
    isFeatured: true,
  },
  {
    id: 'proj-rustic-luxury-truro',
    title: 'Rustic Luxury Farmhouse',
    slug: 'rustic-luxury-farmhouse',
    style: 'rustic-luxury',
    location: 'Truro, Nova Scotia',
    description:
      'This project brings together the warmth of traditional farmhouse design with the sophistication of luxury finishes. Custom Kitchen Craft cabinetry in a warm honey tone pairs beautifully with reclaimed wood beams and professional-grade appliances.',
    shortDescription: 'Warm farmhouse elegance with custom wood cabinetry and professional appliances.',
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80', alt: 'Farmhouse kitchen view' },
      { src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80', alt: 'Kitchen range area' },
      { src: 'https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?w=1200&q=80', alt: 'Pantry storage' },
    ],
    features: [
      'Custom hood with reclaimed wood surround',
      'Farmhouse apron-front sink',
      'Butcher block island top',
      'Glass-front display cabinets',
      'Pot filler over range',
    ],
    products: ['kc-shaker-elegance', 'kc-heritage-raised'],
    testimonial: {
      quote: 'They captured exactly what we wanted - a kitchen that feels like home but has all the modern conveniences. Our friends can\'t stop asking who designed it.',
      author: 'The Morrison Family',
      location: 'Truro, NS',
    },
    completedDate: '2024-04-20',
    isFeatured: true,
  },
  {
    id: 'proj-contemporary-coastal',
    title: 'Contemporary Coastal Retreat',
    slug: 'contemporary-coastal-retreat',
    style: 'contemporary',
    location: 'Lunenburg, Nova Scotia',
    description:
      'Inspired by the Atlantic coastline, this kitchen features a calming palette of soft blues and crisp whites. The design maximizes the ocean views while providing a highly functional space for a family that loves to entertain.',
    shortDescription: 'Ocean-inspired design with soft blues, panoramic views, and entertainer\'s island.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', alt: 'Coastal kitchen panorama' },
      { src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80', alt: 'Island seating' },
    ],
    features: [
      'Custom blue-grey cabinetry',
      'Marble-look quartz counters',
      'Oversized entertainer\'s island',
      'Built-in beverage center',
      'Seamless indoor-outdoor flow',
    ],
    products: ['kc-modern-slab', 'tk-artisan-island'],
    completedDate: '2024-02-10',
    isFeatured: true,
  },
  {
    id: 'proj-traditional-elegance',
    title: 'Traditional Elegance Estate',
    slug: 'traditional-elegance-estate',
    style: 'traditional',
    location: 'Wolfville, Nova Scotia',
    description:
      'A grand kitchen befitting a historic estate home. Rich cherry cabinetry with intricate raised panels, granite countertops, and professional-grade appliances create a space that honors tradition while meeting modern demands.',
    shortDescription: 'Grand estate kitchen with cherry cabinetry, granite, and professional appliances.',
    coverImage: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80', alt: 'Traditional kitchen' },
    ],
    features: [
      'Custom cherry raised panel cabinets',
      'Granite countertops with ogee edge',
      'Crown molding throughout',
      'Built-in hutch and display',
      'Professional Viking appliances',
    ],
    products: ['kc-heritage-raised'],
    completedDate: '2023-11-30',
  },
  {
    id: 'proj-urban-loft',
    title: 'Urban Industrial Loft',
    slug: 'urban-industrial-loft',
    style: 'contemporary',
    location: 'Dartmouth, Nova Scotia',
    description:
      'Converting a former warehouse into a modern living space required a kitchen that embraced the building\'s industrial heritage. Matte black cabinetry, concrete countertops, and exposed ductwork create an edgy, urban aesthetic.',
    shortDescription: 'Industrial chic with matte black cabinets, concrete counters, and exposed elements.',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', alt: 'Industrial loft kitchen' },
    ],
    features: [
      'Matte black handleless cabinets',
      'Concrete countertops',
      'Open shelving with metal brackets',
      'Commercial-style range',
      'Integrated wine storage',
    ],
    products: ['tk-infinity-series', 'tk-premium-hardware'],
    completedDate: '2023-09-15',
  },
  {
    id: 'proj-transitional-family',
    title: 'Transitional Family Kitchen',
    slug: 'transitional-family-kitchen',
    style: 'transitional',
    location: 'Bedford, Nova Scotia',
    description:
      'Designed for a busy family of five, this transitional kitchen balances beautiful design with bulletproof durability. Soft-close everything, quartz surfaces that resist sticky fingers, and ample storage keep the chaos contained.',
    shortDescription: 'Family-friendly design balancing style with durability and smart storage.',
    coverImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80', alt: 'Family kitchen overview' },
    ],
    features: [
      'Soft-close cabinets throughout',
      'Durable quartz countertops',
      'Double islands with seating',
      'Walk-in pantry',
      'Homework station built-in',
    ],
    products: ['kc-shaker-elegance', 'tk-smart-storage'],
    testimonial: {
      quote: 'With three kids under 10, we needed a kitchen that could handle anything. Kitchen Table Cabinetry delivered a space that\'s both gorgeous and practically indestructible.',
      author: 'Jennifer Williams',
      location: 'Bedford, NS',
    },
    completedDate: '2024-01-25',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────────────────────

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByStyle(style: ProjectStyle): Project[] {
  return projects.filter((project) => project.style === style);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.isFeatured);
}

export const projectStyles: { id: ProjectStyle; name: string; description: string }[] = [
  { id: 'modern', name: 'Modern', description: 'Clean lines and minimalist aesthetics' },
  { id: 'traditional', name: 'Traditional', description: 'Classic elegance and timeless details' },
  { id: 'rustic-luxury', name: 'Rustic Luxury', description: 'Warm, natural materials with upscale finishes' },
  { id: 'contemporary', name: 'Contemporary', description: 'Current trends and innovative designs' },
  { id: 'transitional', name: 'Transitional', description: 'Bridge between traditional and modern' },
];
