'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Hero Section
 * Stunning hero with rotating images, parallax effect, and animated elements
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

const heroImages = [
  {
    src: 'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/gentry/gentry2.jpg',
    alt: 'Kitchen Craft Gentry kitchen with sage-blue shaker cabinets and light oak island',
    title: 'Modern Elegance',
  },
  {
    src: 'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/summit/acrylicbluekitchen1.jpg',
    alt: 'Kitchen Craft Summit contemporary kitchen with high-gloss cabinetry and blue island',
    title: 'Contemporary Living',
  },
  {
    src: 'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/lexington/off_white_cabinets_in_casual_kitchen_2.jpg',
    alt: 'Kitchen Craft Lexington casual kitchen with light cabinetry and wine storage',
    title: 'Timeless Warmth',
  },
  {
    src: 'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/lexington/off_white_cabinets_in_casual_kitchen_5.jpg',
    alt: 'Kitchen Craft Lexington off-white cabinets in a bright casual kitchen',
    title: 'Classic Craftsmanship',
  },
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Trigger initial animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000',
              index === currentImage ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Overlay gradient: holds a strong scrim under the text column */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <span className="inline-flex items-center gap-3 text-gold font-medium text-xs uppercase tracking-eyebrow mb-5">
              <span className="h-px w-8 bg-gold/60" />
              Custom Kitchens &amp; Cabinet Supply in Nova Scotia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold text-white mb-6 leading-[1.05] tracking-display"
          >
            Elevate Your Home with{' '}
            <span className="text-gold">Timeless Luxury</span> Kitchens
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed"
          >
            We design and build custom kitchens that look great and work hard, built to
            last. As a licensed distributor of Kitchen Craft and Triangle Kitchen, we also
            supply the cabinetry and parts on their own, for homeowners and builders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button variant="gold" size="lg" className="group">
                Start Your Design Journey
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={cn(
              'transition-all duration-300',
              index === currentImage
                ? 'w-12 h-2 bg-gold rounded-full'
                : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80'
            )}
            aria-label={`View ${image.title}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 right-8 hidden md:block text-white/50"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
