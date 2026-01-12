'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Featured Projects Section
 * Elegant gallery carousel showcasing our best work
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { Section, SectionHeader, Badge, Button } from '@/components/ui';
import { getFeaturedProjects } from '@/data/projects';
import { cn } from '@/lib/utils';

export function FeaturedProjects() {
  const projects = getFeaturedProjects();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (index < 0) index = projects.length - 1;
    if (index >= projects.length) index = 0;
    setActiveIndex(index);
  };

  return (
    <Section background="cream" padding="xl">
      <SectionHeader
        subtitle="Our Portfolio"
        title="Featured Projects"
        description="Explore our collection of stunning kitchen transformations, each one a testament to our commitment to excellence and attention to detail."
      />

      {/* Project Cards Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={() => scrollTo(activeIndex - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-luxury flex items-center justify-center hover:shadow-luxury-lg hover:scale-110 transition-all hidden lg:flex"
          aria-label="Previous project"
        >
          <ArrowLeft className="w-5 h-5 text-charcoal" />
        </button>
        <button
          onClick={() => scrollTo(activeIndex + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-luxury flex items-center justify-center hover:shadow-luxury-lg hover:scale-110 transition-all hidden lg:flex"
          aria-label="Next project"
        >
          <ArrowRight className="w-5 h-5 text-charcoal" />
        </button>

        {/* Projects Grid */}
        <div
          ref={containerRef}
          className="overflow-hidden rounded-2xl"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover overlay with link */}
                    <Link
                      href={`/gallery/${project.slug}`}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="px-6 py-3 bg-white rounded-full font-medium text-charcoal shadow-luxury">
                        View Project
                      </span>
                    </Link>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="py-4"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="gold">{project.style.replace('-', ' ')}</Badge>
                      <span className="flex items-center text-charcoal-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
                      {project.title}
                    </h3>

                    <p className="text-charcoal-500 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-charcoal-600">
                          <span className="w-2 h-2 bg-gold rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Testimonial Preview */}
                    {project.testimonial && (
                      <blockquote className="border-l-4 border-gold pl-4 mb-6">
                        <p className="text-charcoal-600 italic">
                          &quot;{project.testimonial.quote.substring(0, 120)}...&quot;
                        </p>
                        <cite className="text-sm text-charcoal-400 not-italic mt-2 block">
                          — {project.testimonial.author}
                        </cite>
                      </blockquote>
                    )}

                    <Link href={`/gallery/${project.slug}`}>
                      <Button variant="primary" className="group">
                        Explore This Project
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'transition-all duration-300 rounded-full',
                index === activeIndex
                  ? 'w-8 h-2 bg-gold'
                  : 'w-2 h-2 bg-charcoal-200 hover:bg-charcoal-300'
              )}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* View All Link */}
      <div className="text-center mt-12">
        <Link href="/gallery">
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
