/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Cabinet Accessories Page
 * Cabinet interiors and storage, plus decorative mouldings and accents. Cards
 * deep-link to the maker; the page drives toward a free quote.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Section } from '@/components/ui';
import { CTA, DoorStyles } from '@/components/sections';
import { cabinetInteriors, mouldingsAccents } from '@/data/door-styles';

export const metadata: Metadata = {
  title: 'Cabinet Accessories & Interiors',
  description:
    'Cabinet interiors, pull-outs, corner units, and hardware, plus decorative mouldings and accents that make a kitchen work beautifully. Request a free quote.',
};

export default function AccessoriesPage() {
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
        items={cabinetInteriors}
        eyebrow="Cabinet Accessories"
        title="Interiors That Work Harder"
        description="The right interiors turn good cabinets into a kitchen that works the way you do. Pull-outs, corner units, waste and recycling, soft-close hardware, and more. Here is a sample of what we can order."
        background="cream"
      />

      <DoorStyles
        items={mouldingsAccents}
        eyebrow="Mouldings & Accents"
        title="The Finishing Touches"
        description="Range hoods, corbels, open shelving, and decorative details that give a kitchen its character."
        footer="makers"
        background="white"
      />

      <CTA
        variant="simple"
        title="Want to Upgrade Your Cabinets?"
        description="Tell us which accessories you're after and we'll include them in a free quote."
      />
    </>
  );
}
