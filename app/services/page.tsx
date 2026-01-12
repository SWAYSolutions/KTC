/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Services Page
 * Overview of our kitchen design and installation services
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PenTool, Wrench, MessageSquare, Home, ArrowRight, CheckCircle } from 'lucide-react';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { DesignProcess, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Services - Kitchen Design, Installation & Consultation',
  description:
    'Explore our comprehensive kitchen services including custom design, professional installation, design consultation, and complete renovation.',
};

const services = [
  {
    id: 'custom-design',
    icon: PenTool,
    title: 'Custom Design',
    tagline: 'Your Vision, Our Expertise',
    description:
      'Our design team creates bespoke kitchen layouts tailored to your lifestyle, preferences, and space. Using advanced 3D visualization, you\'ll see your dream kitchen come to life before construction begins.',
    features: [
      'In-home consultation and measurement',
      '3D design renderings',
      'Material and finish selection guidance',
      'Detailed project specifications',
      'Coordination with contractors',
    ],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 'installation',
    icon: Wrench,
    title: 'Professional Installation',
    tagline: 'Precision Craftsmanship',
    description:
      'Our experienced installation team brings your design to life with meticulous attention to detail. We handle everything from demolition to final adjustments, ensuring a seamless transformation.',
    features: [
      'Experienced, certified installers',
      'Full project management',
      'Clean, respectful worksite practices',
      'Quality assurance inspections',
      'Post-installation support',
    ],
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="charcoal" padding="xl">
        <div className="text-center">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6">
            Comprehensive <span className="text-gold">Kitchen Solutions</span>
          </h1>
          <p className="text-charcoal-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            From initial concept to final reveal, we offer a complete range of services to bring
            your dream kitchen to life with precision and care.
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
                <span className="text-gold font-medium text-sm uppercase tracking-wider">
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

      {/* Pricing Overview */}
      <Section background="white" padding="lg">
        <SectionHeader
          subtitle="Investment"
          title="Understanding Your Investment"
          description="Every kitchen is unique, and pricing reflects your specific needs, materials, and scope. Here's a general guide to help you plan."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card variant="outlined" padding="lg" className="text-center">
            <span className="text-charcoal-400 text-sm uppercase tracking-wider">Refresh</span>
            <div className="text-3xl font-serif font-bold text-charcoal mt-2 mb-1">
              $15K - $30K
            </div>
            <p className="text-charcoal-500 text-sm">Cabinet refacing, new countertops, hardware</p>
          </Card>

          <Card variant="elevated" padding="lg" className="text-center border-2 border-gold relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <span className="text-charcoal-400 text-sm uppercase tracking-wider">Renovation</span>
            <div className="text-3xl font-serif font-bold text-charcoal mt-2 mb-1">
              $40K - $80K
            </div>
            <p className="text-charcoal-500 text-sm">
              Full cabinet replacement, countertops, backsplash
            </p>
          </Card>

          <Card variant="outlined" padding="lg" className="text-center">
            <span className="text-charcoal-400 text-sm uppercase tracking-wider">Premium</span>
            <div className="text-3xl font-serif font-bold text-charcoal mt-2 mb-1">$80K+</div>
            <p className="text-charcoal-500 text-sm">
              Complete transformation with premium materials
            </p>
          </Card>
        </div>

        <p className="text-center text-charcoal-400 text-sm mt-8 max-w-2xl mx-auto">
          These are general estimates. Contact us for a personalized quote based on your specific
          project requirements. We offer flexible financing options.
        </p>
      </Section>

      {/* CTA */}
      <CTA
        variant="default"
        title="Ready to Transform Your Kitchen?"
        description="Schedule your free consultation today and let's start planning your dream kitchen together."
      />
    </>
  );
}
