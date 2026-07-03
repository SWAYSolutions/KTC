/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Home Page
 * The main landing page showcasing our luxury kitchen design services
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import {
  Hero,
  StyleQuizSection,
  Partners,
  WhyUs,
  CTA,
  DesignProcess,
  DoorStyles,
  FinishingTouches,
} from '@/components/sections';
import { doorStyles } from '@/data/door-styles';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Stunning rotating images with tagline */}
      <Hero />

      {/* Why Choose Us - Our unique value propositions */}
      <WhyUs />

      {/* Style Quiz - interactive style finder that feeds the consultation funnel */}
      <StyleQuizSection />

      {/* Design Process - Interactive timeline showing our journey */}
      <DesignProcess background="white" />

      {/* Partners - Kitchen Craft and Triangle Kitchens showcase */}
      <Partners background="cream" />

      {/* Door Styles teaser - deep-links out; "Explore" drives into /products */}
      <DoorStyles
        items={doorStyles}
        limit={6}
        eyebrow="Explore"
        title="Featured Door Styles"
        description="A taste of the Kitchen Craft and Triangle Kitchen door styles we supply."
        linkCards
        footer="products"
        background="white"
      />

      {/* Finishing Touches - compact hardware strip */}
      <FinishingTouches />

      {/* Call to Action - Free consultation */}
      <CTA variant="split" />
    </>
  );
}
