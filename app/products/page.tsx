/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Products Page
 * Browse all products from our premium partners
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import { ProductGrid } from './ProductGrid';
import { Section, SectionHeader } from '@/components/ui';
import { CTA } from '@/components/sections';
import { products, productCategories } from '@/data/products';
import { partners } from '@/data/partners';

export const metadata: Metadata = {
  title: 'Products - Premium Kitchen Cabinetry & Countertops',
  description:
    'Explore our curated collection of premium kitchen cabinets, countertops, and accessories from Kitchen Craft and Triangle Kitchens.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="cream" padding="xl">
        <SectionHeader
          subtitle="Our Collection"
          title="Premium Kitchen Products"
          description="Discover our carefully curated selection of luxury cabinetry, countertops, and accessories from industry-leading manufacturers."
        />

        {/* Partner Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-luxury"
            >
              <div className="w-10 h-10 bg-charcoal-100 rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-charcoal">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <div>
                <span className="font-medium text-charcoal">{partner.name}</span>
                <span className="block text-sm text-charcoal-400">{partner.tagline}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {productCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="bg-white p-4 rounded-xl text-center shadow-luxury hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-charcoal font-medium">{category.name}</span>
              <span className="block text-sm text-charcoal-400 mt-1">
                {products.filter((p) => p.category === category.id).length} items
              </span>
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
        description="Our design experts are here to help you find the perfect products for your kitchen."
      />
    </>
  );
}
