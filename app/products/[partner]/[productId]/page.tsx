/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Product Detail Page
 * Individual product showcase with full details and quote request
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, Palette, Box, Star } from 'lucide-react';
import { Section, Button, Badge, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { getProductById, products, getProductsByPartner } from '@/data/products';
import { getPartnerBySlug } from '@/data/partners';

interface PageProps {
  params: Promise<{ partner: string; productId: string }>;
}

// Generate static params
export async function generateStaticParams() {
  return products.map((product) => ({
    partner: product.partner,
    productId: product.id,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} - ${product.category}`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { partner: partnerSlug, productId } = await params;
  const product = getProductById(productId);
  const partner = getPartnerBySlug(partnerSlug);

  if (!product || !partner || product.partner !== partnerSlug) {
    notFound();
  }

  // Get related products
  const relatedProducts = getProductsByPartner(partnerSlug)
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm">
            <Link href="/products" className="text-charcoal-400 hover:text-gold">
              Products
            </Link>
            <span className="mx-2 text-charcoal-300">/</span>
            <Link href={`/products/${partner.id}`} className="text-charcoal-400 hover:text-gold">
              {partner.name}
            </Link>
            <span className="mx-2 text-charcoal-300">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <Section background="white" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.isNew && (
                <div className="absolute top-4 left-4">
                  <Badge variant="gold" size="md">New</Badge>
                </div>
              )}
            </div>

            {/* Additional Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1, 4).map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 33vw, 16vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <Link
              href={`/products/${partner.id}`}
              className="inline-flex items-center text-charcoal-400 hover:text-gold mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {partner.name}
            </Link>

            <span className="block text-gold font-medium text-sm uppercase tracking-wider mb-2">
              {product.category} by {partner.name}
            </span>

            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
              {product.name}
            </h1>

            <p className="text-charcoal-500 text-lg leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="bg-cream rounded-xl p-4 mb-6">
              <span className="text-charcoal-400 text-sm">Starting from</span>
              <span className="block text-2xl font-serif font-semibold text-charcoal">
                {product.priceRange}
              </span>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-charcoal mb-3 flex items-center">
                <Star className="w-5 h-5 text-gold mr-2" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div className="mb-6">
              <h3 className="font-semibold text-charcoal mb-3 flex items-center">
                <Box className="w-5 h-5 text-gold mr-2" />
                Available Materials
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-charcoal-50 rounded-full text-sm text-charcoal-600"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            {/* Finishes */}
            <div className="mb-8">
              <h3 className="font-semibold text-charcoal mb-3 flex items-center">
                <Palette className="w-5 h-5 text-gold mr-2" />
                Available Finishes
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.finishes.map((finish, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-charcoal-50 rounded-full text-sm text-charcoal-600"
                  >
                    {finish}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/contact?product=${product.id}`} className="flex-1">
                <Button variant="gold" size="lg" className="w-full">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/contact" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section background="cream" padding="lg">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 text-center">
            Related Products
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} variant="elevated" padding="none" hover>
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-semibold text-charcoal mb-1">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-charcoal-400 text-sm mb-3">{relatedProduct.priceRange}</p>
                  <Link href={`/products/${partner.id}/${relatedProduct.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <CTA variant="simple" />
    </>
  );
}
