'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Style Finder Section
 * Interactive slideshow showcasing different kitchen styles
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Button } from '@/components/ui';
import { cn } from '@/lib/utils';

const kitchenStyles = [
  {
    id: 'contemporary',
    name: 'Contemporary',
    description:
      'Clean lines, minimal ornamentation, and a focus on function define the contemporary kitchen. Think flat-panel frameless cabinetry, integrated handles, and a neutral palette with bold accent pieces.',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80',
  },
  {
    id: 'farmhouse',
    name: 'Farmhouse',
    description:
      'Warm, inviting, and full of character. Farmhouse kitchens feature shaker-style cabinetry, apron-front sinks, open shelving, and natural wood tones that create a welcoming gathering space.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  },
  {
    id: 'scandinavian',
    name: 'Scandinavian',
    description:
      'Light, airy, and effortlessly functional. Scandinavian kitchens emphasize white and light wood tones, streamlined cabinetry, and thoughtful storage solutions that keep everything organized.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
  },
  {
    id: 'modern',
    name: 'Modern',
    description:
      'Bold and forward-thinking. Modern kitchens push boundaries with handleless cabinetry, high-gloss or matte finishes, waterfall countertops, and integrated appliances for a seamless look.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
  },
  {
    id: 'transitional',
    name: 'Transitional',
    description:
      'The best of both worlds. Transitional kitchens bridge traditional warmth with modern simplicity — think shaker doors paired with sleek hardware, neutral tones, and a balanced, timeless feel.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
  },
  {
    id: 'traditional',
    name: 'Traditional',
    description:
      'Rich in detail and craftsmanship. Traditional kitchens feature raised-panel or ornate door profiles, crown mouldings, decorative hardware, and warm wood stains that exude classic elegance.',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80',
  },
  {
    id: 'rustic',
    name: 'Rustic',
    description:
      'Rugged beauty meets comfort. Rustic kitchens celebrate natural materials — rough-hewn wood, stone countertops, iron hardware — creating a cozy, lived-in feel with authentic character.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
  },
];

export function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (index < 0) index = kitchenStyles.length - 1;
    if (index >= kitchenStyles.length) index = 0;
    setActiveIndex(index);
  };

  const activeStyle = kitchenStyles[activeIndex];

  return (
    <Section background="cream" padding="xl">
      <SectionHeader
        subtitle="Find Your Style"
        title="Kitchen Style Finder"
        description="Explore the kitchen styles we design and build. Each style can be tailored to your space using our Canadian-made frameless cabinetry."
      />

      {/* Style Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {kitchenStyles.map((style, index) => (
          <button
            key={style.id}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              index === activeIndex
                ? 'bg-gold text-white shadow-gold'
                : 'bg-white text-charcoal-600 hover:bg-charcoal-100'
            )}
          >
            {style.name}
          </button>
        ))}
      </div>

      {/* Main Slideshow */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={() => scrollTo(activeIndex - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-luxury flex items-center justify-center hover:shadow-luxury-lg hover:scale-110 transition-all hidden lg:flex"
          aria-label="Previous style"
        >
          <ArrowLeft className="w-5 h-5 text-charcoal" />
        </button>
        <button
          onClick={() => scrollTo(activeIndex + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-luxury flex items-center justify-center hover:shadow-luxury-lg hover:scale-110 transition-all hidden lg:flex"
          aria-label="Next style"
        >
          <ArrowRight className="w-5 h-5 text-charcoal" />
        </button>

        {/* Style Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStyle.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={activeStyle.image}
                alt={`${activeStyle.name} kitchen style`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="py-4">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">
                Kitchen Style
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mt-2 mb-4">
                {activeStyle.name}
              </h3>
              <p className="text-charcoal-500 leading-relaxed mb-8 text-lg">
                {activeStyle.description}
              </p>

              <Link href="/contact">
                <Button variant="primary" className="group">
                  Discuss This Style With Us
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {kitchenStyles.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'transition-all duration-300 rounded-full',
                index === activeIndex
                  ? 'w-8 h-2 bg-gold'
                  : 'w-2 h-2 bg-charcoal-200 hover:bg-charcoal-300'
              )}
              aria-label={`Go to style ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
