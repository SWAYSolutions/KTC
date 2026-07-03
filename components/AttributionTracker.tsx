'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Attribution Tracker
 * Mounts once in the root layout and records first-touch campaign attribution
 * (UTM tags, fbclid, referrer) on first client render. Renders nothing.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution';

export function AttributionTracker() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
