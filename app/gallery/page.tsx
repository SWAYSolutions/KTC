/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Gallery / Portfolio Page
 * Showcase of completed projects with filtering and lightbox
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import { GalleryGrid } from './GalleryGrid';
import { Section, SectionHeader } from '@/components/ui';
import { CTA } from '@/components/sections';
import { projects, projectStyles } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Gallery - Our Kitchen Design Portfolio',
  description:
    'Explore our portfolio of stunning kitchen transformations. From modern minimalist to rustic luxury, see how we bring dream kitchens to life.',
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="charcoal" padding="xl">
        <div className="text-center">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6">
            Inspiring Kitchen <span className="text-gold">Transformations</span>
          </h1>
          <p className="text-charcoal-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Each project tells a unique story of collaboration, craftsmanship, and attention to
            detail. Explore our portfolio to find inspiration for your own kitchen journey.
          </p>
        </div>
      </Section>

      {/* Gallery Grid with Filters */}
      <Section background="cream" padding="lg">
        <GalleryGrid projects={projects} styles={projectStyles} />
      </Section>

      {/* CTA */}
      <CTA
        variant="split"
        title="Ready to Start Your Transformation?"
        description="Let us bring your vision to life. Schedule a free consultation to discuss your dream kitchen."
      />
    </>
  );
}
