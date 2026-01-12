'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Testimonials Section
 * Client reviews and success stories carousel
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Section background="charcoal" padding="xl">
      <div className="text-center mb-12">
        <span className="text-gold font-medium text-sm uppercase tracking-wider mb-3 block">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-charcoal-300 text-lg max-w-2xl mx-auto">
          Don&apos;t just take our word for it—hear from homeowners who have
          transformed their kitchens with Kitchen Table Cabinetry.
        </p>
      </div>

      {/* Testimonial Carousel */}
      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-charcoal-600 flex items-center justify-center hover:bg-gold transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-charcoal-600 flex items-center justify-center hover:bg-gold transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Testimonial Card */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-charcoal-600/50 rounded-2xl p-8 lg:p-12 text-center"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-8">
                <Quote className="w-8 h-8 text-gold" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-5 h-5',
                      i < testimonials[activeIndex].rating
                        ? 'text-gold fill-gold'
                        : 'text-charcoal-500'
                    )}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-serif italic">
                &quot;{testimonials[activeIndex].quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                {testimonials[activeIndex].image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-gold">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].author}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                )}
                <cite className="not-italic">
                  <span className="block text-white font-semibold text-lg">
                    {testimonials[activeIndex].author}
                  </span>
                  <span className="block text-charcoal-400 text-sm">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                  </span>
                </cite>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'transition-all duration-300 rounded-full',
                index === activeIndex
                  ? 'w-8 h-2 bg-gold'
                  : 'w-2 h-2 bg-charcoal-500 hover:bg-charcoal-400'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
