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
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1920&q=90',
    alt: 'Modern luxury kitchen with handleless cabinets',
    title: 'Modern Elegance',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=90',
    alt: 'Warm rustic luxury kitchen',
    title: 'Timeless Warmth',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90',
    alt: 'Contemporary coastal kitchen',
    title: 'Coastal Serenity',
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
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Floating Particle Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1000,
            }}
            animate={{
              y: -10,
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              },
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-gold font-medium text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-gold/10 rounded-full backdrop-blur-sm">
              Premium Kitchen Design in Nova Scotia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Elevate Your Home with{' '}
            <span className="text-gold">Timeless Luxury</span> Kitchens
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
          >
            Experience the art of bespoke kitchen design. We craft extraordinary
            spaces that blend innovative functionality with uncompromising elegance,
            featuring premium products from Kitchen Craft and Triangle Kitchens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button variant="gold" size="lg" className="group">
                Start Your Design Journey
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-charcoal">
                <Play className="mr-2 w-5 h-5" />
                View Our Work
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
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center"
      >
        <span className="text-white/60 text-sm tracking-wider mb-2 rotate-90 origin-center translate-y-8">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
