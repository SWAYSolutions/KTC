/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Promo Landing Page Layout
 * Minimal layout for Facebook ads conversion - no navigation distractions
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { formatPhone } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Free Kitchen Consultation | Kitchen Table Cabinetry',
  description:
    'Transform your kitchen with premium Canadian cabinetry. Book your free design consultation today. 20+ years experience, 5-star Google rating.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PromoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Minimal Header - Logo and Phone Only */}
      <header className="bg-white border-b border-charcoal-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-xl font-serif font-bold text-charcoal">
                Kitchen Table
              </span>
              <span className="text-xl font-serif text-gold ml-2">Cabinetry</span>
            </div>
          </Link>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2 px-4 py-2 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{formatPhone(siteConfig.contact.phone)}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Minimal Footer */}
      <footer className="bg-charcoal py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-charcoal-400 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. Truro, Nova Scotia.
          </p>
          <div className="mt-2 flex justify-center gap-4 text-sm">
            <Link href="/privacy" className="text-charcoal-400 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-charcoal-400 hover:text-gold transition-colors">
              Visit Full Site
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
