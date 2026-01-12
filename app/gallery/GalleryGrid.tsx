'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Gallery Grid Component
 * Filterable project gallery with lightbox functionality
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import { Button, Badge } from '@/components/ui';
import { type Project, type ProjectStyle } from '@/types';
import { cn } from '@/lib/utils';

interface GalleryGridProps {
  projects: Project[];
  styles: { id: ProjectStyle; name: string; description: string }[];
}

export function GalleryGrid({ projects, styles }: GalleryGridProps) {
  const [activeStyle, setActiveStyle] = useState<ProjectStyle | 'all'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeStyle === 'all') return projects;
    return projects.filter((project) => project.style === activeStyle);
  }, [projects, activeStyle]);

  // Open lightbox
  const openLightbox = (project: Project, imageIndex: number = 0) => {
    setLightboxProject(project);
    setLightboxImageIndex(imageIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxProject(null);
    document.body.style.overflow = '';
  };

  // Navigate lightbox
  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!lightboxProject) return;
    const imageCount = lightboxProject.images.length;
    if (direction === 'next') {
      setLightboxImageIndex((prev) => (prev + 1) % imageCount);
    } else {
      setLightboxImageIndex((prev) => (prev - 1 + imageCount) % imageCount);
    }
  };

  return (
    <>
      {/* Style Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveStyle('all')}
          className={cn(
            'px-5 py-2.5 rounded-full text-sm font-medium transition-all',
            activeStyle === 'all'
              ? 'bg-gold text-charcoal shadow-gold'
              : 'bg-white text-charcoal-600 hover:bg-charcoal-50 shadow-luxury'
          )}
        >
          All Projects
        </button>
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => setActiveStyle(style.id)}
            className={cn(
              'px-5 py-2.5 rounded-full text-sm font-medium transition-all',
              activeStyle === style.id
                ? 'bg-gold text-charcoal shadow-gold'
                : 'bg-white text-charcoal-600 hover:bg-charcoal-50 shadow-luxury'
            )}
          >
            {style.name}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-center text-charcoal-500 mb-8">
        Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
      </p>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-300">
                {/* Main Image */}
                <div
                  className="relative aspect-[4/3] cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(project, 0)}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 bg-white rounded-full font-medium text-charcoal shadow-luxury">
                      View Gallery
                    </span>
                  </div>

                  {/* Style Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold">{project.style.replace('-', ' ')}</Badge>
                  </div>

                  {/* Image Count */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                    {project.images.length} photos
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
                    {project.title}
                  </h3>
                  <p className="flex items-center text-charcoal-400 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </p>
                  <p className="text-charcoal-500 text-sm line-clamp-2 mb-4">
                    {project.shortDescription}
                  </p>

                  <Link href={`/gallery/${project.slug}`}>
                    <Button variant="outline" size="sm" className="w-full group/btn">
                      View Full Project
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            {lightboxProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('next');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={lightboxImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxProject.images[lightboxImageIndex].src}
                alt={lightboxProject.images[lightboxImageIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-white text-xl font-serif font-semibold mb-1">
                  {lightboxProject.title}
                </h3>
                {lightboxProject.images[lightboxImageIndex].caption && (
                  <p className="text-white/70 text-sm">
                    {lightboxProject.images[lightboxImageIndex].caption}
                  </p>
                )}
                <p className="text-white/50 text-sm mt-2">
                  Image {lightboxImageIndex + 1} of {lightboxProject.images.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
