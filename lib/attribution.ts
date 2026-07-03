/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Ad Attribution
 * Captures first-touch campaign data (UTM tags, ad click IDs, referrer, landing
 * page) and persists it to sessionStorage so it survives the in-page scroll to
 * the form and any in-site navigation. The stored object is attached to lead
 * submissions so each lead can be traced back to the campaign/ad that produced it.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

const STORAGE_KEY = 'kt_attribution';

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const;

// Ad-platform click identifiers (Meta, Google, TikTok, Microsoft).
const CLICK_ID_KEYS = ['fbclid', 'gclid', 'ttclid', 'msclkid'] as const;

export type Attribution = Record<string, string>;

/**
 * Reads campaign params from the current URL + referrer and stores them as the
 * FIRST-TOUCH attribution for this browser session (does not overwrite once set).
 * Safe to call on every page mount; no-ops on the server.
 */
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return {};

  // First-touch wins: keep the earliest attribution captured this session.
  const existing = getAttribution();
  if (Object.keys(existing).length > 0) return existing;

  const params = new URLSearchParams(window.location.search);
  const data: Attribution = {};

  for (const key of [...UTM_KEYS, ...CLICK_ID_KEYS]) {
    const value = params.get(key);
    if (value) data[key] = value;
  }

  // Always record the entry point for context, even for organic visits.
  data.landing_page = window.location.pathname + window.location.search;
  if (document.referrer) data.referrer = document.referrer;

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage unavailable (private mode / disabled) — ignore.
  }
  return data;
}

/** Returns the stored first-touch attribution, or {} if none / on the server. */
export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}
