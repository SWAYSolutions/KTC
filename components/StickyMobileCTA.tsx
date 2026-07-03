'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Sticky Mobile CTA
 * Persistent bottom action bar for the ad landing pages (mobile only): one-tap
 * call plus a jump to the lead form. Hides itself while the form is on screen
 * so it never covers the thing it points to.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { formatPhone } from '@/lib/utils';

interface StickyMobileCTAProps {
  /** Anchor of the lead form on the page. */
  formHref?: string;
  /** Label for the form button. */
  ctaLabel?: string;
}

export function StickyMobileCTA({
  formHref = '#get-started',
  ctaLabel = 'Get My Free Quote',
}: StickyMobileCTAProps) {
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    const target = document.querySelector(formHref);
    if (!target || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [formHref]);

  if (formInView) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-charcoal-100 shadow-luxury-lg pb-[env(safe-area-inset-bottom)]">
      <div className="flex gap-3 p-3">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-charcoal text-charcoal font-semibold"
          aria-label={`Call ${formatPhone(siteConfig.contact.phone)}`}
        >
          <Phone className="w-5 h-5" />
          Call
        </a>
        <a
          href={formHref}
          className="flex-[2] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gold text-charcoal font-semibold shadow-gold"
        >
          {ctaLabel}
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
