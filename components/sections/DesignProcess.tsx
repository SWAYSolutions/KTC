'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Design Process / Journey Timeline
 * Interactive timeline showcasing our design process, with a product/detail photo
 * beside each step (opposite the card on desktop, above the card on mobile).
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Compass,
  PenTool,
  Package,
  Hammer,
  Sparkles,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    description:
      'We begin with a free consultation to understand your goals, how you use the space, and your budget. This is where your new kitchen starts taking shape.',
    duration: '1-2 hours',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/gentry/gentry2.jpg',
    imageAlt: 'Kitchen Craft Gentry kitchen with sage-blue shaker cabinets and a light oak island',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Space Assessment',
    description:
      'Our designers visit your home to take precise measurements and assess the space. We consider lighting, traffic flow, and architectural features.',
    duration: '2-3 hours',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/lexington/off_white_cabinets_in_casual_kitchen_2.jpg',
    imageAlt: 'Kitchen Craft Lexington casual kitchen with light cabinetry',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design Development',
    description:
      'We create detailed 3D renderings and material selections tailored to your preferences. You\'ll see your new kitchen come to life before construction begins.',
    duration: '1-2 weeks',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/pearson/pearson_5pc_cherry_flat_panel_cabinet_door_winter_black.jpg',
    imageAlt: 'Kitchen Craft Pearson door style in cherry',
  },
  {
    number: '04',
    icon: Package,
    title: 'Product Selection',
    description:
      'Choose from our selection of cabinetry and finishes. Our designers guide you through materials, finishes, and hardware.',
    duration: '1-2 weeks',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/hardware/pull/kcclassich.jpg',
    imageAlt: 'Kitchen Craft cabinet hardware pull',
  },
  {
    number: '05',
    icon: Hammer,
    title: 'Expert Renovation & Installation',
    description:
      'Our skilled craftsmen build your design with careful renovation and installation. We maintain a clean, respectful workspace throughout the process.',
    duration: '1-3 weeks',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/cabinet_interiors/kccrnrpantrymgbocps.jpg',
    imageAlt: 'Kitchen Craft Magic Corner cabinet interior storage',
  },
  {
    number: '06',
    icon: Sparkles,
    title: 'Final Reveal',
    description:
      'We conduct a thorough walkthrough to ensure every detail meets your expectations. Your new kitchen is ready to enjoy for years to come, with the peace of mind that it\'s covered by our 5 year manufacturer and installation warranty.',
    duration: '1 day',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/summit/acrylicbluekitchen1.jpg',
    imageAlt: 'Kitchen Craft Summit contemporary kitchen with high-gloss cabinetry',
  },
];

export function DesignProcess() {
  return (
    <Section background="cream" padding="xl" id="design-journey">
      <SectionHeader
        subtitle="Our Process"
        title="Your Design Journey"
        description="From initial concept to final reveal, we guide you through every step of creating your perfect kitchen."
      />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-charcoal-200" />

        {/* Steps */}
        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center',
                  isEven ? 'lg:text-right' : ''
                )}
              >
                {/* Photo — above card on mobile, opposite column on desktop */}
                <div className={cn('mb-6 lg:mb-0', isEven ? 'lg:order-3' : 'lg:order-1')}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury group">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={cn(
                    'bg-white rounded-2xl p-6 lg:p-8 shadow-luxury',
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  )}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon (Mobile) */}
                    <div className="lg:hidden w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-gold" />
                    </div>

                    <div className="flex-1">
                      <span className="text-gold font-bold text-sm tracking-wider">
                        STEP {step.number}
                      </span>
                      <h3 className="text-xl font-serif font-semibold text-charcoal mt-1 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-charcoal-500 leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <span className="text-sm text-charcoal-400">
                        Typical duration: {step.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center Point (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-gold ring-4 ring-cream">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
