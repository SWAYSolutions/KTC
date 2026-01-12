'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Call to Action Section
 * Compelling CTA for free consultation
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui';
import { siteConfig } from '@/data/site-config';
import { formatPhone } from '@/lib/utils';

interface CTAProps {
  variant?: 'default' | 'simple' | 'split';
  title?: string;
  description?: string;
}

export function CTA({
  variant = 'default',
  title = 'Ready to Transform Your Kitchen?',
  description = 'Schedule a free consultation with our design experts and take the first step toward your dream kitchen.',
}: CTAProps) {
  if (variant === 'simple') {
    return (
      <section className="bg-gold py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-2">
                {title}
              </h2>
              <p className="text-charcoal/80">{description}</p>
            </div>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="whitespace-nowrap">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'split') {
    return (
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80"
              alt="Luxury kitchen interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/20" />
          </div>

          {/* Content Side */}
          <div className="bg-charcoal p-8 lg:p-16 flex items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block"
              >
                Start Your Journey
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6"
              >
                {title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-charcoal-300 text-lg mb-8 leading-relaxed"
              >
                {description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact">
                  <Button variant="gold" size="lg" className="group">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Consultation
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href={`tel:${siteConfig.contact.phone}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-charcoal"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    {formatPhone(siteConfig.contact.phone)}
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Modern kitchen background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-gold font-medium text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-gold/10 rounded-full"
        >
          Free Consultation
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6 max-w-3xl mx-auto"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-charcoal-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/contact">
            <Button variant="gold" size="xl" className="group">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-charcoal-400 text-sm"
        >
          Or call us directly at{' '}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="text-gold hover:underline"
          >
            {formatPhone(siteConfig.contact.phone)}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
