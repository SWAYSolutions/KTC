/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - TypeScript Type Definitions
 * Comprehensive types for a luxury kitchen design website
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────────────────────────────
// Product & Partner Types
// ─────────────────────────────────────────────────────────────────────────────

export type PartnerName = 'kitchen-craft' | 'triangle-kitchens';

export interface Partner {
  id: PartnerName;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  website: string;
  features: string[];
}

export type ProductCategory =
  | 'cabinets'
  | 'countertops'
  | 'islands'
  | 'storage'
  | 'hardware'
  | 'accessories';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  partner: PartnerName;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  features: string[];
  materials: string[];
  finishes: string[];
  priceRange?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Project & Gallery Types
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStyle = 'modern' | 'traditional' | 'rustic-luxury' | 'contemporary' | 'transitional';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  style: ProjectStyle;
  location: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  images: ProjectImage[];
  beforeAfter?: {
    before: string;
    after: string;
  };
  features: string[];
  products: string[];
  testimonial?: {
    quote: string;
    author: string;
    location: string;
  };
  completedDate: string;
  isFeatured?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Blog Types
// ─────────────────────────────────────────────────────────────────────────────

export type BlogCategory = 'trends' | 'tips' | 'inspiration' | 'news' | 'guides';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: BlogCategory;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readingTime: number;
  tags: string[];
  isFeatured?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Testimonial Types
// ─────────────────────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  image?: string;
  projectId?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

// ─────────────────────────────────────────────────────────────────────────────
// Service Types
// ─────────────────────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Style Quiz Types
// ─────────────────────────────────────────────────────────────────────────────

export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    image?: string;
    styles: ProjectStyle[];
  }[];
}

export interface QuizResult {
  style: ProjectStyle;
  title: string;
  description: string;
  recommendations: string[];
  sampleProjects: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Form Types
// ─────────────────────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
  projectType?: string;
  budget?: string;
  timeline?: string;
}

export interface QuoteRequestData {
  name: string;
  email: string;
  phone: string;
  address: string;
  projectDescription: string;
  productInterest: string[];
  budget: string;
  timeline: string;
  howHeard: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Navigation Types
// ─────────────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
  icon?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// SEO Types
// ─────────────────────────────────────────────────────────────────────────────

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, unknown>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Site Configuration Types
// ─────────────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    phone: string;
    email: string;
    address: {
      street: string;
      city: string;
      province: string;
      postalCode: string;
      country: string;
    };
    hours: {
      weekday: string;
      saturday: string;
      sunday: string;
    };
  };
  social: {
    facebook: string;
    instagram: string;
    pinterest: string;
    houzz: string;
  };
}
