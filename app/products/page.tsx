/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Products Hub
 * Entry point to what we supply: cabinets, cabinet accessories, and countertops,
 * plus links to browse our manufacturers' full ranges.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { CTA } from '@/components/sections';
import { doorStyles, cabinetInteriors } from '@/data/door-styles';
import { countertopMaterials } from '@/data/countertops';
import { partners } from '@/data/partners';

export const metadata: Metadata = {
  title: 'Products - Cabinets, Accessories & Countertops',
  description:
    'Explore what we supply: Canadian-made cabinet door styles, cabinet interiors and accessories, and granite and marble countertops. Request a free quote.',
  alternates: { canonical: '/products' },
};

const categories = [
  {
    href: '/products/cabinets',
    title: 'Cabinets',
    description:
      'Cabinet door styles in a range of finishes, from thermofoil to solid maple, cherry, and acrylic.',
    image: doorStyles.find((d) => d.id === 'pearson-cherry')?.image ?? doorStyles[0].image,
  },
  {
    href: '/products/accessories',
    title: 'Cabinet Accessories',
    description:
      'Cabinet interiors, storage, hardware, and mouldings that make a kitchen work beautifully.',
    image:
      cabinetInteriors.find((a) => a.id === 'magic-corner')?.image ?? cabinetInteriors[0].image,
  },
  {
    href: '/products/countertops',
    title: 'Countertops',
    description:
      'Natural granite and marble countertops supplied through Nova Tile to finish your kitchen.',
    image: countertopMaterials[0].images[0],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero + category cards */}
      <Section background="cream" padding="xl">
        <SectionHeader
          as="h1"
          subtitle="What We Supply"
          title="Cabinets, Accessories & Countertops"
          description="Everything we need to build or refresh your kitchen, from Canadian-made cabinetry to the countertops that top it off. Browse a category below, then reach out for a free quote."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
                  {category.title}
                </h3>
                <p className="text-charcoal-400 leading-relaxed mb-4">{category.description}</p>
                <span className="inline-flex items-center text-gold font-medium">
                  Explore {category.title}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Manufacturer outbound links */}
      <Section background="white" padding="lg">
        <SectionHeader
          subtitle="Our Manufacturers"
          title="Browse the Full Collections"
          description="We supply Canadian-made frameless cabinetry from two trusted manufacturers. Browse their complete ranges, then let us quote and order exactly what you need."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.productsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-2xl border border-charcoal-200 hover:border-gold hover:shadow-luxury transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-charcoal-100 rounded-full flex items-center justify-center">
                  <span className="font-serif font-bold text-charcoal text-lg">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="font-serif font-semibold text-charcoal text-lg block">
                    {partner.name}
                  </span>
                  <span className="text-sm text-charcoal-400">{partner.tagline}</span>
                </div>
              </div>
              <p className="text-charcoal-500 leading-relaxed mb-4">
                {partner.description.substring(0, 160)}...
              </p>
              <span className="inline-flex items-center text-gold font-medium">
                Browse {partner.name}
                <ExternalLink className="ml-2 w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </Section>

      <CTA
        variant="simple"
        title="Not Sure Where to Start?"
        description="Tell us about your kitchen and we'll help you choose. Get a free, no-obligation quote."
      />
    </>
  );
}
