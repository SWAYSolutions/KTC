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
    'Premium kitchen building and cabinetry service in Truro, Nova Scotia. Specializing in high-end custom kitchen designs featuring Kitchen Craft and Triangle Kitchens products.',
  url: 'https://kitchentablecabinetry.com',
  contact: {
    phone: '9025550123',
    email: 'info@kitchentablecabinetry.com',
    address: {
      street: '123 Main Street',
      city: 'Truro',
      province: 'Nova Scotia',
      postalCode: 'B2N 1A1',
      country: 'Canada',
    },
    hours: {
      weekday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
  },
  social: {
    facebook: 'https://facebook.com/kitchentablecabinetry',
    instagram: 'https://instagram.com/kitchentablecabinetry',
    pinterest: 'https://pinterest.com/kitchentablecabinetry',
    houzz: 'https://houzz.com/pro/kitchentablecabinetry',
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
        label: 'Kitchen Craft',
        href: '/products/kitchen-craft',
        description: 'Durable, stylish cabinetry solutions',
      },
      {
        label: 'Triangle Kitchens',
        href: '/products/triangle-kitchens',
        description: 'Innovative, ergonomic designs',
      },
      {
        label: 'All Cabinets',
        href: '/products?category=cabinets',
        description: 'Browse our full cabinet collection',
      },
      {
        label: 'Countertops',
        href: '/products?category=countertops',
        description: 'Premium surface options',
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
    ],
  },
  {
    label: 'Gallery',
    href: '/gallery',
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
    { label: 'Kitchen Craft', href: '/products/kitchen-craft' },
    { label: 'Triangle Kitchens', href: '/products/triangle-kitchens' },
    { label: 'Cabinets', href: '/products?category=cabinets' },
    { label: 'Countertops', href: '/products?category=countertops' },
    { label: 'Islands', href: '/products?category=islands' },
  ],
  services: [
    { label: 'Custom Design', href: '/services#custom-design' },
    { label: 'Installation', href: '/services#installation' },
    { label: 'Consultation', href: '/services#consultation' },
    { label: 'Renovation', href: '/services#renovation' },
  ],
  company: [
    { label: 'Gallery', href: '/gallery' },
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
