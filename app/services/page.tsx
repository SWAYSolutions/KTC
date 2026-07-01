/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Services Page
 * Overview of our kitchen design and installation services
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PenTool, Wrench, MessageSquare, Home, Package, ArrowRight, CheckCircle } from 'lucide-react';
import { Section, Button } from '@/components/ui';
import { DesignProcess, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Services - Kitchen Design, Installation & Cabinet Supply',
  description:
    'Explore our kitchen services: custom design, professional installation, design consultation, complete renovation, and cabinet & parts supply as a licensed distributor of Kitchen Craft and Triangle Kitchen.',
};

const services = [
  {
    id: 'custom-design',
    icon: PenTool,
    title: 'Custom Design',
    tagline: 'Your Vision, Our Expertise',
    description:
      'Our design team creates custom kitchen layouts tailored to your lifestyle, preferences, and space. With 3D renderings, you\'ll see your new kitchen before construction begins.',
    features: [
      'In-home consultation and measurement',
      '3D design renderings',
      'Material and finish selection guidance',
      'Detailed project specifications',
      'Coordination with contractors',
    ],
    image: 'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/pearson/shaker_style_cabinets_in_casual_kitchen_3.jpg',
  },
  {
    id: 'installation',
    icon: Wrench,
    title: 'Professional Installation',
    tagline: 'Precision Craftsmanship',
    description:
      'Our experienced installation team builds your design with close attention to detail. We handle everything from demolition to final adjustments for a clean, careful installation.',
    features: [
      'Experienced, certified installers',
      'Full project management',
      'Clean, respectful worksite practices',
      'Quality assurance inspections',
      'Post-installation support',
    ],
    image: 'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/gentry/gentry2.jpg',
  },
  {
    id: 'consultation',
    icon: MessageSquare,
    title: 'Design Consultation',
    tagline: 'Expert Guidance',
    description:
      'Not ready for a full renovation? Our consultation service provides expert advice on improving your current kitchen, whether it\'s a cabinet refresh, countertop upgrade, or layout optimization.',
    features: [
      'One-on-one expert consultation',
      'Space optimization recommendations',
      'Budget-friendly improvement ideas',
      'Product recommendations',
      'Written summary and action plan',
    ],
    image: 'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/lexington/off_white_cabinets_in_casual_kitchen_2.jpg',
  },
  {
    id: 'renovation',
    icon: Home,
    title: 'Complete Renovation',
    tagline: 'Total Transformation',
    description:
      'Our full-service renovation package handles every aspect of your kitchen transformation. From initial design through final styling, we manage the entire process so you can relax.',
    features: [
      'Comprehensive design services',
      'All cabinetry and countertops',
      'Plumbing and electrical coordination',
      'Flooring and backsplash installation',
      'Appliance procurement assistance',
    ],
    image: 'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/summit/acrylicbluekitchen1.jpg',
  },
  {
    id: 'cabinet-supply',
    icon: Package,
    title: 'Cabinet & Component Supply',
    tagline: 'Order Direct From Us',
    description:
      'You don\'t need a full renovation to work with us. As a licensed distributor of Kitchen Craft and Triangle Kitchen, we\'ll quote, order, and supply exactly what your project calls for (a full set of cabinets, a few replacement doors, or the hardware to finish the job) for homeowners, builders, and contractors.',
    features: [
      'Full cabinet orders from Kitchen Craft & Triangle Kitchen',
      'Replacement doors, drawer fronts & matching panels',
      'Hinges, handles & soft-close components',
      'Supply-only or supply-and-install',
      'Quotes for homeowners, builders & contractors',
    ],
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/lexington/off_white_cabinets_in_casual_kitchen_2.jpg',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="charcoal" padding="xl">
        <div className="text-center">
          <span className="text-gold font-medium text-xs uppercase tracking-eyebrow mb-4 block">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6">
            Comprehensive <span className="text-gold">Kitchen Solutions</span>
          </h1>
          <p className="text-charcoal-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            From first concept to final install, we offer a complete range of services: custom
            design, installation, and cabinet supply. As a licensed distributor of Kitchen Craft
            and Triangle Kitchen, we can also supply the cabinetry and components on their own.
          </p>
          <Link href="/contact">
            <Button variant="gold" size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="white" padding="xl">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative Element */}
                <div
                  className={`absolute -z-10 w-full h-full bg-gold/10 rounded-2xl ${
                    index % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'
                  }`}
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <span className="text-gold font-medium text-xs uppercase tracking-eyebrow">
                  {service.tagline}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mt-2 mb-4">
                  {service.title}
                </h2>
                <p className="text-charcoal-500 leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button variant="primary" className="group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Design Process */}
      <DesignProcess />

      {/* CTA */}
      <CTA
        variant="default"
        title="Ready to Renovate Your Kitchen?"
        description="Schedule your free consultation today and let's start planning your new kitchen together."
      />
    </>
  );
}
