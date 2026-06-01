'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Style Finder Section
 * Interactive slideshow showcasing different kitchen design styles
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
    description: 'Clean lines, minimal ornamentation, and a focus on functionality. Contemporary kitchens embrace current trends with sleek surfaces and innovative materials.',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80',
  },
  {
    id: 'farmhouse',
    name: 'Farmhouse',
    description: 'Warm, inviting spaces that blend rustic charm with modern convenience. Think natural woods, open shelving, and cozy gathering spots.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  },
  {
    id: 'scandinavian',
    name: 'Scandinavian',
    description: 'Light, bright, and airy with a focus on natural materials and simple forms. Scandinavian design maximizes light and creates calm, functional spaces.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Bold, streamlined, and innovative. Modern kitchens feature handleless cabinetry, integrated appliances, and striking geometric forms.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
  },
  {
    id: 'transitional',
    name: 'Transitional',
    description: 'The perfect balance between traditional warmth and contemporary simplicity. Transitional kitchens offer timeless appeal with modern functionality.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
  },
  {
    id: 'traditional',
    name: 'Traditional',
    description: 'Classic elegance with rich details, raised panel doors, and decorative moldings. Traditional kitchens create a sense of warmth and permanence.',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80',
  },
  {
    id: 'rustic',
    name: 'Rustic',
    description: 'Natural textures, reclaimed materials, and earthy tones create authentic, character-rich spaces that feel connected to nature.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
  },
];

export function StyleFinder() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (index < 0) index = kitchenStyles.length - 1;
    if (index >= kitchenStyles.length) index = 0;
    setActiveIndex(index);
  };

  const currentStyle = kitchenStyles[activeIndex];

  return (
    <Section background="cream" padding="xl">
      <SectionHeader
        subtitle="Style Finder"
        title="Discover Your Kitchen Style"
        description="Explore different design aesthetics to find the perfect inspiration for your dream kitchen."
      />

      {/* Style Slideshow */}
      <div className="relative max-w-5xl mx-auto">
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

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStyle.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src={currentStyle.image}
                alt={`${currentStyle.name} kitchen style`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />

              {/* Style Name Overlay */}
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 bg-gold text-charcoal font-semibold rounded-full text-sm">
                  {currentStyle.name}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="py-4">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">
                Kitchen Style
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mt-2 mb-4">
                {currentStyle.name}
              </h3>
              <p className="text-charcoal-500 leading-relaxed mb-8 text-lg">
                {currentStyle.description}
              </p>

              <Link href="/contact">
                <Button variant="primary" className="group">
                  Explore This Style
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Style Indicators */}
        <div className="flex justify-center mt-8 gap-2 flex-wrap">
          {kitchenStyles.map((style, index) => (
            <button
              key={style.id}
              onClick={() => scrollTo(index)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                index === activeIndex
                  ? 'bg-gold text-charcoal shadow-gold'
                  : 'bg-white text-charcoal-500 hover:bg-charcoal-50 shadow-sm'
              )}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>

      {/* Take the Quiz CTA */}
      <div className="text-center mt-12">
        <p className="text-charcoal-500 mb-4">Not sure which style suits you?</p>
        <Link href="/style-quiz">
          <Button variant="outline">
            Take Our Style Quiz
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
