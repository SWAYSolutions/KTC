/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Products Page
 * Browse cabinetry by manufacturer
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui';
import { CTA, DoorStyles } from '@/components/sections';
import { partners } from '@/data/partners';
import { doorStyles, cabinetInteriors } from '@/data/door-styles';

export const metadata: Metadata = {
  title: 'Cabinets & Components — Kitchen Craft & Triangle Kitchen',
  description:
    'As a licensed distributor of Kitchen Craft and Triangle Kitchen, we supply Canadian-made frameless cabinets and components — full kitchens, individual cabinets, doors, drawer fronts, and hardware. Browse the collections and request a quote.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="cream" padding="xl">
        <SectionHeader
          subtitle="Kitchen Craft & Triangle Kitchen"
          title="Browse the Collections"
          description="As a licensed distributor of Kitchen Craft and Triangle Kitchen, we supply their Canadian-made frameless cabinetry — full kitchens, individual cabinets, and the finishing pieces like doors, drawer fronts, and hardware. Browse a sample of door styles below, explore the full collections at each maker, then tell us what you have in mind."
        />

        {/* Manufacturer Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.productsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-luxury hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-charcoal-100 rounded-full flex items-center justify-center">
                  <span className="font-serif font-bold text-charcoal text-lg">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="font-serif font-semibold text-charcoal text-lg">{partner.name}</span>
                  <span className="block text-sm text-charcoal-400">{partner.tagline}</span>
                </div>
              </div>
              <p className="text-charcoal-500 text-sm leading-relaxed">
                {partner.description.substring(0, 150)}...
              </p>
            </a>
          ))}
        </div>
      </Section>

      {/* Featured Door Styles — deep-link out to the manufacturer browsers */}
      <DoorStyles
        items={doorStyles}
        eyebrow="Door Styles"
        title="A Style for Every Kitchen"
        description="A sample of the door styles and finishes we supply from Kitchen Craft and Triangle Kitchen. Tap any style to explore the full range on the maker's site, then tell us what you have in mind."
        linkCards
        footer="makers"
        background="white"
      />

      {/* Smart Cabinet Interiors */}
      <DoorStyles
        items={cabinetInteriors}
        eyebrow="Smart Storage"
        title="Cabinet Interiors That Work Harder"
        description="Pull-outs, lazy Susans, and organizers that make the most of every cabinet."
        linkCards
        footer="none"
        background="cream"
      />

      {/* CTA */}
      <CTA
        variant="simple"
        title="Tell Us What You're Looking For"
        description="Full cabinets, replacement doors and drawer fronts, or just the hardware — share your project and we'll price and order it for you."
      />
    </>
  );
}
