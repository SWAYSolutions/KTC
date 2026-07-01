/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Countertops Page
 * Granite and marble countertop galleries supplied through Nova Tile.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Section } from '@/components/ui';
import { CTA, Countertops } from '@/components/sections';
import { countertopMaterials } from '@/data/countertops';

export const metadata: Metadata = {
  title: 'Granite & Marble Countertops',
  description:
    'Finish your kitchen with natural granite and marble countertops, supplied through Nova Tile. Browse examples and request a free countertop quote.',
};

export default function CountertopsPage() {
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

      <Countertops
        materials={countertopMaterials}
        eyebrow="Countertops"
        title="Top It Off in Natural Stone"
        description="The countertop is where your kitchen comes together. We finish kitchens with natural granite and marble supplied through Nova Tile. Explore the examples below, browse the full selection, and request a quote."
        background="cream"
      />

      <CTA
        variant="simple"
        title="Ready for a New Countertop?"
        description="Tell us your kitchen size and the look you're after, and we'll prepare a free quote."
      />
    </>
  );
}
