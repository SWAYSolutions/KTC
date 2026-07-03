/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Cabinets Page
 * A sample of cabinet door styles we supply. Cards deep-link to the maker's full
 * range; the page drives toward a free quote.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import { CTA, DoorStyles } from '@/components/sections';
import { doorStyles } from '@/data/door-styles';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Kitchen Cabinets & Door Styles',
  description:
    'Browse a sample of Canadian-made cabinet door styles in finishes from thermofoil to solid maple, cherry, and acrylic. Tap any style to explore the range, then request a free quote.',
  alternates: { canonical: '/products/cabinets' },
};

export default function CabinetsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Products', path: '/products' },
          { name: 'Cabinets', path: '/products/cabinets' },
        ])}
      />
      <DoorStyles
        items={doorStyles}
        eyebrow="Cabinets"
        title="Find Your Door Style"
        description="Your cabinet doors set the tone for the whole kitchen. Here is a sample of the styles and finishes we supply. Tap any style to explore the full range on the maker's site, then tell us what caught your eye. The catalogue is much larger, so if you have something specific in mind, just ask."
        linkCards
        footer="makers"
        background="cream"
        backHref="/products"
        backLabel="Back to Products"
        headingAs="h1"
      />

      <CTA
        variant="simple"
        title="Found a Style You Love?"
        description="Tell us which door style caught your eye and we'll put together a free quote."
      />
    </>
  );
}
