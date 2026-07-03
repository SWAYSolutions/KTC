/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Meta (Facebook) Pixel Helpers
 * Lightweight wrappers around the Meta Pixel (window.fbq) so we can fire
 * conversion events from React components without repeating the typing.
 *
 * The Pixel base code is injected in app/layout.tsx and only loads when
 * NEXT_PUBLIC_FB_PIXEL_ID is set, so these helpers safely no-op otherwise.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// Set NEXT_PUBLIC_FB_PIXEL_ID to YOUR Meta Pixel. When unset, the Pixel does
// not load (no default account), so events never fire to someone else's pixel.
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a standard Meta "Lead" conversion event. Call this when a contact /
 * consultation form is submitted successfully. This is the event the Facebook
 * ad campaign optimizes for.
 */
export function trackLead(params?: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', params);
  }
}
