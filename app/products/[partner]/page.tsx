/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Partner Products Page
 * Products filtered by partner (Kitchen Craft or Triangle Kitchens)
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { Section, SectionHeader, Button, Badge, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { getPartnerBySlug, partners } from '@/data/partners';
import { getProductsByPartner, productCategories } from '@/data/products';

interface PageProps {
  params: Promise<{ partner: string }>;
}

// Generate static params for all partners
export async function generateStaticParams() {
  return partners.map((partner) => ({
    partner: partner.id,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { partner: partnerSlug } = await params;
  const partner = getPartnerBySlug(partnerSlug);

  if (!partner) {
    return {
      title: 'Partner Not Found',
    };
  }

  return {
    title: `${partner.name} Products - Premium Kitchen Cabinetry`,
    description: partner.description,
  };
}

export default async function PartnerProductsPage({ params }: PageProps) {
  const { partner: partnerSlug } = await params;
  const partner = getPartnerBySlug(partnerSlug);

  if (!partner) {
    notFound();
  }

  const products = getProductsByPartner(partnerSlug);

  return (
    <>
      {/* Partner Hero */}
      <Section background="charcoal" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="gold" className="mb-4">
              Authorized Dealer
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4">
              {partner.name}
            </h1>
            <p className="text-gold text-xl mb-6">{partner.tagline}</p>
            <p className="text-charcoal-300 text-lg leading-relaxed mb-8">
              {partner.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#products">
                <Button variant="gold" size="lg" className="group">
                  Browse Products
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href={partner.website} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-charcoal"
                >
                  Visit Website
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {products.slice(0, 4).map((product, idx) => (
                <div
                  key={product.id}
                  className={`relative aspect-square rounded-2xl overflow-hidden ${
                    idx === 0 ? 'col-span-2 aspect-video' : ''
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Partner Features */}
      <Section background="cream" padding="lg">
        <SectionHeader
          subtitle={`Why Choose ${partner.name}`}
          title="Quality You Can Trust"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partner.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
              <span className="text-charcoal-600">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Products Grid */}
      <Section background="white" padding="xl" id="products">
        <SectionHeader
          subtitle="Our Collection"
          title={`${partner.name} Products`}
          description={`Explore our selection of ${partner.name} kitchen products.`}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} variant="elevated" padding="none" hover className="group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && <Badge variant="gold">New</Badge>}
                  {product.isFeatured && <Badge variant="sage">Featured</Badge>}
                </div>
              </div>

              <div className="p-6">
                <span className="text-gold text-sm font-medium uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-xl font-serif font-semibold text-charcoal mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="text-charcoal-500 text-sm line-clamp-2 mb-4">
                  {product.shortDescription}
                </p>
                <p className="text-charcoal font-medium mb-4">{product.priceRange}</p>

                <div className="flex gap-3">
                  <Link href={`/products/${partner.id}/${product.id}`} className="flex-1">
                    <Button variant="primary" size="sm" className="w-full group/btn">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTA
        variant="default"
        title={`Ready to Explore ${partner.name}?`}
        description="Schedule a showroom visit to see these products in person and discuss your project with our design team."
      />
    </>
  );
}
