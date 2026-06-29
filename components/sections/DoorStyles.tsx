/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Door Styles Gallery
 * Reusable sample-imagery gallery. Cards can deep-link out to the manufacturer
 * browsers (products / homepage) or stay display-only with a form CTA (the paid
 * landing page, to keep traffic in the lead funnel).
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Button, Badge } from '@/components/ui';
import { type DoorStyle } from '@/types';

const brandLabel: Record<DoorStyle['brand'], string> = {
  'kitchen-craft': 'Kitchen Craft',
  'triangle-kitchens': 'Triangle Kitchen',
};

type FooterMode = 'makers' | 'products' | 'form' | 'none';
type Variant = 'grid' | 'editorial';

interface DoorStylesProps {
  items: DoorStyle[];
  eyebrow?: string;
  title?: string;
  description?: string;
  limit?: number;
  background?: 'white' | 'cream' | 'charcoal' | 'gradient';
  /** Layout: 'grid' (3-up overlay cards) or 'editorial' (large 2-up + caption below). */
  variant?: Variant;
  /** When true, each card deep-links (new tab) to its manufacturer browser. */
  linkCards?: boolean;
  /** CTA row under the grid. */
  footer?: FooterMode;
  /** Target for footer="form" (e.g. "#get-started"). */
  formHref?: string;
}

/** Compact overlay card used by the default grid. */
function Tile({ item }: { item: DoorStyle }) {
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury group">
      <Image
        src={item.image}
        alt={`${item.name} door style in ${item.finish} by ${brandLabel[item.brand]}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Brand badge */}
      <div className="absolute top-3 left-3">
        <Badge variant="gold" size="sm">
          {brandLabel[item.brand]}
        </Badge>
      </div>
      {/* Label */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent p-4 pt-10">
        <h3 className="text-white font-serif text-lg font-semibold leading-tight">
          {item.name}
        </h3>
        <p className="text-white/80 text-sm">{item.finish}</p>
      </div>
    </div>
  );
}

/** Large image with the caption set beneath (magazine-style). */
function EditorialTile({ item, linked }: { item: DoorStyle; linked?: boolean }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury">
        <Image
          src={item.image}
          alt={`${item.name} door style in ${item.finish} by ${brandLabel[item.brand]}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="gold" size="sm">
            {brandLabel[item.brand]}
          </Badge>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-charcoal font-serif text-xl font-semibold leading-tight">
          {item.name}
        </h3>
        <p className="text-charcoal-500 text-sm mt-0.5">{item.finish}</p>
        {linked && (
          <span className="inline-flex items-center gap-1.5 text-gold text-sm font-medium mt-2 transition-all group-hover:gap-2.5">
            Explore the range
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        )}
      </div>
    </div>
  );
}

export function DoorStyles({
  items,
  eyebrow = 'Door Styles',
  title = 'A Style for Every Kitchen',
  description,
  limit,
  background = 'cream',
  variant = 'grid',
  linkCards = false,
  footer = 'none',
  formHref = '#get-started',
}: DoorStylesProps) {
  const shown = typeof limit === 'number' ? items.slice(0, limit) : items;
  const gridClass =
    variant === 'editorial'
      ? 'grid md:grid-cols-2 gap-8 lg:gap-10'
      : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6';

  const renderTile = (item: DoorStyle) =>
    variant === 'editorial' ? (
      <EditorialTile item={item} linked={linkCards} />
    ) : (
      <Tile item={item} />
    );

  return (
    <Section background={background} padding="lg">
      <SectionHeader subtitle={eyebrow} title={title} description={description} />

      <div className={gridClass}>
        {shown.map((item) =>
          linkCards ? (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${item.name} at ${brandLabel[item.brand]}`}
            >
              {renderTile(item)}
            </a>
          ) : (
            <div key={item.id}>{renderTile(item)}</div>
          )
        )}
      </div>

      {/* Footer CTAs */}
      {footer === 'makers' && (
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.kitchencraft.com/products"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="w-full sm:w-auto">
              Browse all Kitchen Craft styles
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </a>
          <a
            href="https://trianglekitchen.com/products/styles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="w-full sm:w-auto">
              Browse all Triangle Kitchen styles
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      )}

      {footer === 'products' && (
        <div className="mt-10 text-center">
          <Link href="/products">
            <Button variant="primary" className="group">
              Explore Door Styles
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      )}

      {footer === 'form' && (
        <div className="mt-10 text-center">
          <a href={formHref}>
            <Button variant="gold" size="lg">
              Get My Free Consultation
            </Button>
          </a>
        </div>
      )}
    </Section>
  );
}
