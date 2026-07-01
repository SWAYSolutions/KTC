/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Finishing Touches
 * Compact hardware strip for the home page. Presents cabinet knobs & pulls as
 * small product tiles and links through to the Cabinet Accessories page.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Button } from '@/components/ui';
import { hardware } from '@/data/door-styles';

export function FinishingTouches() {
  return (
    <Section background="cream" padding="lg">
      <SectionHeader
        subtitle="The Details"
        title="Finishing Touches"
        description="Knobs and pulls are the jewellery of a kitchen. We supply cabinet hardware to match your doors and finishes down to the last detail."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
        {hardware.map((item) => (
          <div key={item.id} className="group text-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-luxury">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
              />
            </div>
            <p className="mt-3 font-serif font-semibold text-charcoal leading-tight">
              {item.name}
            </p>
            <p className="text-sm text-charcoal-400">{item.finish}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/products/accessories">
          <Button variant="outline" className="group">
            See all cabinet accessories
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
