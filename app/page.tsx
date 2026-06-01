/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Home Page
 * The main landing page showcasing our luxury kitchen design services
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import {
  Hero,
  StyleFinder,
  Partners,
  WhyUs,
  Testimonials,
  CTA,
  DesignProcess,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Stunning rotating images with tagline */}
      <Hero />

      {/* Why Choose Us - Our unique value propositions */}
      <WhyUs />

      {/* Style Finder - Explore different kitchen design styles */}
      <StyleFinder />

      {/* Design Process - Interactive timeline showing our journey */}
      <DesignProcess />

      {/* Partners - Kitchen Craft and Triangle Kitchens showcase */}
      <Partners />

      {/* Testimonials - Client reviews carousel */}
      <Testimonials />

      {/* Call to Action - Free consultation */}
      <CTA variant="split" />
    </>
  );
}
