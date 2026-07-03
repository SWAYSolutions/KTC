/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Our Work
 * Gallery of real, completed installs. Every photo on this page is our own
 * work — the strongest proof we can show a prospective customer.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui';
import { CTA } from '@/components/sections';
import { ourWork } from '@/data/our-work';

export const metadata: Metadata = {
  title: 'Our Work - Real Kitchen Installs in Nova Scotia',
  description:
    'A gallery of kitchens and built-ins designed, supplied, and installed by Kitchen Table Cabinetry across Nova Scotia. Every photo is our own completed work.',
  alternates: { canonical: '/our-work' },
};

export default function OurWorkPage() {
  return (
    <>
      <Section background="cream" padding="xl">
        <SectionHeader
          as="h1"
          subtitle="Our Work"
          title="Kitchens We've Built"
          description="Every photo below is a real Kitchen Table Cabinetry install — designed, supplied, and put in by our team. If you see a look you like, we'll walk you through how to get it in your home."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {ourWork.map((project) => (
            <figure key={project.id} className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-4">
                <h2 className="text-charcoal font-serif text-xl font-semibold leading-tight">
                  {project.title}
                </h2>
                <p className="text-charcoal-500 mt-1 leading-relaxed">{project.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CTA
        variant="simple"
        title="Want a Kitchen Like These?"
        description="Tell us which install caught your eye and we'll plan yours. Free consultation, no obligation."
      />
    </>
  );
}
