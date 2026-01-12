/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - 404 Not Found Page
 * Custom error page for missing routes
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cream">
      <div className="container mx-auto px-4 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[150px] md:text-[200px] font-serif font-bold text-charcoal-100 leading-none">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
          Page Not Found
        </h1>
        <p className="text-charcoal-500 text-lg max-w-md mx-auto mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or
          doesn&apos;t exist.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="gold" size="lg">
              <Home className="mr-2 w-5 h-5" />
              Go Home
            </Button>
          </Link>
          <Link href="/gallery">
            <Button variant="outline" size="lg">
              <Search className="mr-2 w-5 h-5" />
              Browse Gallery
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-charcoal-200">
          <p className="text-charcoal-400 text-sm mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/products" className="text-gold hover:underline">
              Products
            </Link>
            <Link href="/services" className="text-gold hover:underline">
              Services
            </Link>
            <Link href="/gallery" className="text-gold hover:underline">
              Gallery
            </Link>
            <Link href="/contact" className="text-gold hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
