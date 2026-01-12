/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Testimonials Data
 * Client reviews and success stories
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'From our initial consultation to the final installation, Kitchen Table Cabinetry exceeded every expectation. The attention to detail is remarkable, and our kitchen has become the heart of our home.',
    author: 'Margaret & David Thompson',
    role: 'Homeowners',
    location: 'Halifax, NS',
    image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=200&q=80',
    rating: 5,
  },
  {
    id: 'test-2',
    quote:
      'The team\'s expertise in both design and functionality is outstanding. They transformed our cramped galley kitchen into an open, welcoming space that we absolutely love cooking in.',
    author: 'Sarah Chen',
    role: 'Chef & Food Blogger',
    location: 'Truro, NS',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    projectId: 'proj-modern-minimalist-halifax',
  },
  {
    id: 'test-3',
    quote:
      'Working with Kitchen Table Cabinetry was a pleasure from start to finish. Their knowledge of Kitchen Craft products helped us make informed decisions, and the result speaks for itself.',
    author: 'Robert MacLeod',
    role: 'Architect',
    location: 'Wolfville, NS',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
  },
  {
    id: 'test-4',
    quote:
      'The quality of the Triangle Kitchens cabinetry is exceptional. Five years later, everything still operates perfectly, and it looks as beautiful as the day it was installed.',
    author: 'Lisa & James MacDonald',
    role: 'Homeowners',
    location: 'Lunenburg, NS',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
  },
  {
    id: 'test-5',
    quote:
      'Our renovation was completed on time and on budget. The team was professional, clean, and respectful of our home throughout the entire process. Couldn\'t recommend them more highly.',
    author: 'The Patterson Family',
    role: 'Homeowners',
    location: 'Dartmouth, NS',
    rating: 5,
  },
  {
    id: 'test-6',
    quote:
      'As interior designers, we\'re very particular about our partners. Kitchen Table Cabinetry has been our go-to for luxury kitchen projects for years. Their craftsmanship is unparalleled.',
    author: 'Emma Richardson',
    role: 'Interior Designer',
    location: 'Halifax, NS',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    rating: 5,
  },
];

export function getFeaturedTestimonials(count: number = 3): Testimonial[] {
  return testimonials.slice(0, count);
}

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id);
}
