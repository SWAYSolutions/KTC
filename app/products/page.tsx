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
  title: 'Products - Canadian-Made Frameless Cabinetry',
  description:
    'Explore our curated collection of frameless cabinetry from Kitchen Craft and Triangle Kitchen — proudly Canadian-made.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="cream" padding="xl">
        <SectionHeader
          subtitle="Our Manufacturers"
          title="Canadian-Made Cabinet Collections"
          description="We work exclusively with Canadian cabinet manufacturers. Browse our collections from Kitchen Craft and Triangle Kitchen — all frameless construction, all built in Canada."
        />

        {/* Manufacturer Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={`#${partner.id}`}
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
        title="Need Help Choosing?"
        description="Our design experts are here to help you find the perfect cabinetry for your kitchen."
      />
    </>
  );
}
