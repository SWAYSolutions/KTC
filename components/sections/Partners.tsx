'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Partners Section
 * Showcase of our Canadian cabinet manufacturers
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ExternalLink, MapPin } from 'lucide-react';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { partners } from '@/data/partners';

export function Partners() {
  return (
    <Section background="white" padding="xl">
      <SectionHeader
        subtitle="Canadian Quality"
        title="Premium Canadian-Made Cabinetry"
        description="We work exclusively with Canadian cabinet manufacturers who share our commitment to quality craftsmanship and frameless construction. Every cabinet is built right here in Canada."
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

      {/* Canadian Manufacturing Emphasis */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-8 bg-cream rounded-2xl"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif font-semibold text-charcoal mb-2">
            Proudly Canadian-Made Frameless Cabinetry
          </h3>
          <p className="text-charcoal-500 max-w-2xl mx-auto">
            We sell exclusively frameless (full-access) cabinetry from Canadian manufacturers.
            Frameless construction maximizes interior cabinet space with clean, modern lines
            that suit any kitchen style.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-5 h-5 text-gold" />
            <div>
              <div className="text-lg font-serif font-bold text-charcoal">Kitchen Craft</div>
              <p className="text-charcoal-500 text-sm">Winnipeg, Manitoba</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-5 h-5 text-gold" />
            <div>
              <div className="text-lg font-serif font-bold text-charcoal">Triangle Kitchen</div>
              <p className="text-charcoal-500 text-sm">Dieppe, New Brunswick</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
