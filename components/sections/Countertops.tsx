/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Countertops Gallery
 * Natural stone countertops supplied through Nova Tile. Each material shows a
 * sample gallery, deep-links to Nova Tile's full selection, and offers a quote CTA.
 * Mirrors the DoorStyles gallery styling (hover-zoom tiles, editorial captions).
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import { Section, SectionHeader, Button, Badge } from '@/components/ui';
import { type CountertopMaterial } from '@/data/countertops';

interface CountertopsProps {
  materials: CountertopMaterial[];
  eyebrow?: string;
  title?: string;
  description?: string;
  background?: 'white' | 'cream' | 'charcoal' | 'gradient';
  /** Internal quote href, e.g. "/contact?product=". */
  quoteHrefBase?: string;
  /** Optional back-link rendered tightly above the header. */
  backHref?: string;
  backLabel?: string;
  /** Heading level for the section title ("h1" when this is the page's top heading). */
  headingAs?: 'h1' | 'h2';
}

export function Countertops({
  materials,
  eyebrow = 'Countertops',
  title = 'Top It Off in Natural Stone',
  description,
  background = 'cream',
  quoteHrefBase = '/contact?product=',
  backHref,
  backLabel = 'Back',
  headingAs = 'h2',
}: CountertopsProps) {
  return (
    <Section background={background} padding="lg">
      {backHref && (
        <Link
          href={backHref}
          className="inline-flex items-center text-charcoal-400 hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          {backLabel}
        </Link>
      )}
      <SectionHeader subtitle={eyebrow} title={title} description={description} as={headingAs} />

      <div className="space-y-16">
        {materials.map((material) => {
          const quoteHref = `${quoteHrefBase}${encodeURIComponent(`${material.name} Countertops`)}`;
          const [lead, ...rest] = material.images;

          return (
            <div key={material.id}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                <div>
                  <Badge variant="gold" size="sm">
                    {material.tagline}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mt-3">
                    {material.name} Countertops
                  </h3>
                  <p className="text-charcoal-500 mt-2 max-w-2xl leading-relaxed">
                    {material.description}
                  </p>
                </div>
                <a
                  href={material.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold font-medium whitespace-nowrap hover:gap-2.5 transition-all"
                >
                  {material.sourceLabel}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Gallery: one lead image + supporting thumbnails */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <a
                  href={material.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[4/3] sm:col-span-2 lg:row-span-2 lg:aspect-auto rounded-2xl overflow-hidden shadow-luxury"
                  aria-label={`View ${material.name} countertops at Nova Tile`}
                >
                  <Image
                    src={lead}
                    alt={`${material.name} countertop`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </a>
                {rest.map((img, idx) => (
                  <a
                    key={img}
                    href={material.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury"
                    aria-label={`View ${material.name} countertops at Nova Tile`}
                  >
                    <Image
                      src={img}
                      alt={`${material.name} countertop example ${idx + 2}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <Link href={quoteHref}>
                  <Button variant="gold">
                    Request a {material.name} Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
