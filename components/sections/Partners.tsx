'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Partners Section
 * Showcase of our premium partner brands: Kitchen Craft and Triangle Kitchens
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { partners } from '@/data/partners';

export function Partners() {
  return (
    <Section background="white" padding="xl">
      <SectionHeader
        subtitle="Our Partners"
        title="Premium Brands, Exceptional Quality"
        description="We proudly partner with industry-leading cabinet manufacturers to bring you the finest quality and most innovative designs available."
      />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card variant="outlined" padding="lg" className="h-full group hover:border-gold/50 transition-colors">
              {/* Partner Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-charcoal-100">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-charcoal mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-gold font-medium">{partner.tagline}</p>
                </div>
                <div className="w-20 h-20 bg-cream rounded-xl flex items-center justify-center">
                  {/* Placeholder for partner logo */}
                  <span className="text-3xl font-serif font-bold text-charcoal-400">
                    {partner.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-charcoal-500 leading-relaxed mb-6">
                {partner.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {partner.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Link href={`/products/${partner.id}`} className="flex-1">
                  <Button variant="primary" className="w-full group/btn">
                    View Products
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full">
                    Visit Website
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Partner Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-8 bg-cream rounded-2xl"
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-serif font-bold text-gold mb-2">50+</div>
            <p className="text-charcoal-600">Years Combined Experience</p>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-gold mb-2">600+</div>
            <p className="text-charcoal-600">Door Styles Available</p>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-gold mb-2">100%</div>
            <p className="text-charcoal-600">Customer Satisfaction</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
