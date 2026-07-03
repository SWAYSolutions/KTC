/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Cabinet Accessories Page
 * Cabinet interiors and storage, plus decorative mouldings and accents. Cards
 * deep-link to the maker; the page drives toward a free quote.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import { CTA, DoorStyles } from '@/components/sections';
import { cabinetInteriors, mouldingsAccents, hardware } from '@/data/door-styles';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cabinet Accessories & Interiors',
  description:
    'Cabinet interiors, pull-outs, corner units, and hardware, plus decorative mouldings and accents that make a kitchen work beautifully. Request a free quote.',
  alternates: { canonical: '/products/accessories' },
};

export default function AccessoriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Products', path: '/products' },
          { name: 'Cabinet Accessories', path: '/products/accessories' },
        ])}
      />
      <DoorStyles
        items={cabinetInteriors}
        eyebrow="Cabinet Accessories"
        title="Interiors That Work Harder"
        description="The right interiors turn good cabinets into a kitchen that works the way you do. Pull-outs, corner units, waste and recycling, soft-close hardware, and more. Here is a sample of what we can order."
        background="cream"
        backHref="/products"
        backLabel="Back to Products"
        headingAs="h1"
      />

      <DoorStyles
        items={mouldingsAccents}
        eyebrow="Mouldings & Accents"
        title="The Finishing Touches"
        description="Range hoods, corbels, open shelving, and decorative details that give a kitchen its character."
        background="white"
      />

      <DoorStyles
        items={hardware}
        eyebrow="Hardware & Handles"
        title="Handles That Finish the Look"
        description="Knobs and pulls are the jewellery of a kitchen. Here is a sample of the cabinet hardware we can order to match your doors and finishes."
        footer="makers"
        background="cream"
      />

      <CTA
        variant="simple"
        title="Want to Upgrade Your Cabinets?"
        description="Tell us which accessories you're after and we'll include them in a free quote."
      />
    </>
  );
}
