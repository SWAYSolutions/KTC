/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Cabinets Page
 * A sample of cabinet door styles we supply. Cards deep-link to the maker's full
 * range; the page drives toward a free quote.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Section } from '@/components/ui';
import { CTA, DoorStyles } from '@/components/sections';
import { doorStyles } from '@/data/door-styles';

export const metadata: Metadata = {
  title: 'Kitchen Cabinets & Door Styles',
  description:
    'Browse a sample of Canadian-made cabinet door styles in finishes from thermofoil to solid maple, cherry, and acrylic. Tap any style to explore the range, then request a free quote.',
};

export default function CabinetsPage() {
  return (
    <>
      <Section background="cream" padding="sm">
        <Link
          href="/products"
          className="inline-flex items-center text-charcoal-400 hover:text-gold transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Products
        </Link>
      </Section>

      <DoorStyles
        items={doorStyles}
        eyebrow="Cabinets"
        title="Find Your Door Style"
        description="Your cabinet doors set the tone for the whole kitchen. Here is a sample of the styles and finishes we supply. Tap any style to explore the full range on the maker's site, then tell us what caught your eye. The catalogue is much larger, so if you have something specific in mind, just ask."
        linkCards
        footer="makers"
        background="cream"
      />

      <CTA
        variant="simple"
        title="Found a Style You Love?"
        description="Tell us which door style caught your eye and we'll put together a free quote."
      />
    </>
  );
}
