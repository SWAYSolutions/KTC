'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Why Choose Us Section
 * Highlights our unique value propositions and luxury benefits
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { motion } from 'framer-motion';
import {
  Palette,
  Award,
  Leaf,
  Wrench,
  Heart,
  Clock
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: Palette,
    title: 'Bespoke Design',
    description:
      'Every kitchen is uniquely crafted to reflect your personal style and lifestyle needs. Our designers work closely with you to create a space that\'s truly yours.',
    color: 'gold',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description:
      'We partner exclusively with industry-leading manufacturers like Kitchen Craft and Triangle Kitchens, ensuring exceptional craftsmanship and durability.',
    color: 'wood',
  },
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description:
      'Our commitment to the environment means we prioritize eco-friendly materials and sustainable practices in every project we undertake.',
    color: 'sage',
  },
  {
    icon: Wrench,
    title: 'Expert Installation',
    description:
      'Our skilled craftsmen bring decades of combined experience to every installation, ensuring precision, attention to detail, and lasting results.',
    color: 'charcoal',
  },
  {
    icon: Heart,
    title: 'Personalized Service',
    description:
      'From your first consultation to final walkthrough, you\'ll receive dedicated attention and support from our passionate team.',
    color: 'gold',
  },
  {
    icon: Clock,
    title: 'Lifetime Value',
    description:
      'Our kitchens are built to last generations. With proper care, your investment will continue to add beauty and value to your home for decades.',
    color: 'wood',
  },
];

const colorStyles = {
  gold: 'bg-gold-50 text-gold-600 group-hover:bg-gold group-hover:text-white',
  wood: 'bg-wood-50 text-wood-600 group-hover:bg-wood group-hover:text-white',
  sage: 'bg-sage-50 text-sage-600 group-hover:bg-sage group-hover:text-white',
  charcoal: 'bg-charcoal-100 text-charcoal-600 group-hover:bg-charcoal group-hover:text-white',
};

export function WhyUs() {
  return (
    <Section background="gradient" padding="xl">
      <SectionHeader
        subtitle="Why Choose Us"
        title="The Kitchen Table Difference"
        description="We believe that a kitchen should be more than functional—it should be extraordinary. Here's what sets us apart."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-6 h-full shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1">
              {/* Icon */}
              <div
                className={cn(
                  'w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300',
                  colorStyles[benefit.color as keyof typeof colorStyles]
                )}
              >
                <benefit.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">
                {benefit.title}
              </h3>
              <p className="text-charcoal-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-16"
      >
        {[
          { value: '20+', label: 'Years of Kitchen Renovation Experience' },
          { value: '5 Star', label: 'Google Reviews' },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl lg:text-4xl font-serif font-bold text-gold mb-1">
              {stat.value}
            </div>
            <div className="text-charcoal-500 text-sm">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
