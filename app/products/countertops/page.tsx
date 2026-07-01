/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Countertops Page
 * Granite and marble countertop galleries supplied through Nova Tile.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
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
      <Countertops
        materials={countertopMaterials}
        eyebrow="Countertops"
        title="Top It Off in Natural Stone"
        description="The countertop is where your kitchen comes together. We finish kitchens with natural granite and marble supplied through Nova Tile. Explore the examples below, browse the full selection, and request a quote."
        background="cream"
        backHref="/products"
        backLabel="Back to Products"
      />

      <CTA
        variant="simple"
        title="Ready for a New Countertop?"
        description="Tell us your kitchen size and the look you're after, and we'll prepare a free quote."
      />
    </>
  );
}
