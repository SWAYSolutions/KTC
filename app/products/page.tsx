/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Products Page
 * Browse cabinetry by manufacturer
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import { ProductGrid } from './ProductGrid';
import { Section, SectionHeader } from '@/components/ui';
import { CTA } from '@/components/sections';
import { products, productCategories } from '@/data/products';
import { partners } from '@/data/partners';

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
          description="As a licensed distributor of Kitchen Craft and Triangle Kitchen, we supply their Canadian-made frameless cabinetry — full kitchens, individual cabinets, and the finishing pieces like doors, drawer fronts, and hardware. Explore the collections below, then tell us what you have in mind."
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

      {/* Product Grid with Filters */}
      <Section background="white" padding="lg">
        <ProductGrid products={products} categories={productCategories} />
      </Section>

      {/* CTA */}
      <CTA
        variant="simple"
        title="Tell Us What You're Looking For"
        description="Full cabinets, replacement doors and drawer fronts, or just the hardware — share your project and we'll price and order it for you."
      />
    </>
  );
}
