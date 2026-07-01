/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Site Configuration
 * Central configuration for the entire website
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type SiteConfig, type NavItem } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Kitchen Table Cabinetry',
  tagline: 'Elevate Your Home with Timeless Luxury Kitchens',
  description:
    'Kitchen renovation and design experts in Truro, Nova Scotia, and licensed distributors of Kitchen Craft and Triangle Kitchen cabinetry. We design and install complete custom kitchens, and we sell and supply Canadian-made cabinets and cabinet parts (doors, drawer fronts, hardware, and replacement components) to homeowners, builders, and contractors.',
  url: 'https://kitchentablecabinetry.com',
  contact: {
    phone: '9029552225',
    email: 'info@kitchentablecabinetry.com',
    address: {
      street: '152 Esplanade St',
      city: 'Truro',
      province: 'Nova Scotia',
      postalCode: 'B2N 2K3',
      country: 'Canada',
    },
    hours: {
      weekday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
  },
  social: {
    facebook: 'https://www.facebook.com/people/Kitchen-Table-Cabinetry/61584518031082/',
    instagram: 'https://www.instagram.com/kitchentablecabinetry/',
  },
};

export const navigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Cabinets',
        href: '/products/cabinets',
        description: 'Cabinet door styles and finishes',
      },
      {
        label: 'Cabinet Accessories',
        href: '/products/accessories',
        description: 'Interiors, hardware, and accents',
      },
      {
        label: 'Countertops',
        href: '/products/countertops',
        description: 'Granite and marble countertops',
      },
      {
        label: 'Kitchen Craft',
        href: 'https://www.kitchencraft.com/products',
        description: 'Browse the full collection',
      },
      {
        label: 'Triangle Kitchen',
        href: 'https://trianglekitchen.com/products/styles',
        description: 'Browse the full collection',
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Custom Design',
        href: '/services#custom-design',
        description: 'Tailored kitchen solutions',
      },
      {
        label: 'Installation',
        href: '/services#installation',
        description: 'Professional installation services',
      },
      {
        label: 'Consultation',
        href: '/services#consultation',
        description: 'Expert design guidance',
      },
      {
        label: 'Renovation',
        href: '/services#renovation',
        description: 'Complete kitchen transformations',
      },
      {
        label: 'Cabinet & Component Supply',
        href: '/services#cabinet-supply',
        description: 'Order cabinets & components',
      },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerLinks = {
  products: [
    { label: 'Cabinets', href: '/products/cabinets' },
    { label: 'Cabinet Accessories', href: '/products/accessories' },
    { label: 'Countertops', href: '/products/countertops' },
    { label: 'Cabinetry & Parts', href: '/cabinetry' },
  ],
  services: [
    { label: 'Custom Design', href: '/services#custom-design' },
    { label: 'Installation', href: '/services#installation' },
    { label: 'Consultation', href: '/services#consultation' },
    { label: 'Renovation', href: '/services#renovation' },
  ],
  company: [
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/contact#faq' },
    { label: 'Request Quote', href: '/contact#quote' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};
