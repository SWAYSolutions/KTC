# Facebook / Instagram Lead-Gen Playbook — Kitchen Table Cabinetry

A ready-to-run guide for generating leads on Meta (Facebook + Instagram) for two
offers: **Kitchen Renovations** and **Cabinet Sales**. The website is already
instrumented (Meta Pixel + `Lead` events + UTM/`fbclid` capture); this doc covers
everything that happens **inside Meta Ads Manager**, which can't be automated from
the codebase.

> **Do this first (one-time):** in your Vercel/host env, set
> `NEXT_PUBLIC_FB_PIXEL_ID` (your Meta Pixel), `NEXT_PUBLIC_FORMSPREE_ID` (where
> leads email to), and optionally `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`. Until the
> Pixel ID is set, no Pixel loads and ads can't optimize for leads.

---

## 0. The business (for writing accurate ads)
- **Who:** Kitchen Table Cabinetry — kitchen design, renovation, and cabinet supply in **Truro, Nova Scotia** (152 Esplanade St). Serves Truro, Halifax, and all of Nova Scotia.
- **Licensed distributor** of **Kitchen Craft** (Canadian-made, Winnipeg, since 1971) and **Triangle Kitchen** (Dieppe, NB). Cabinetry carries the manufacturer's **lifetime warranty**.
- **Two ways to buy:** full **design + install** renovations, OR **supply-only** cabinets/doors/drawer fronts/hardware (order just what you need). Countertops (granite/marble) via Nova Tile.
- **Offers to advertise:** *Free design consultation* (renovations) and *Free, no-obligation quote* (cabinet sales).
- **True proof points only** (no invented reviews/stats): 20+ years' experience, licensed distributor, Canadian-made, local Truro showroom, supply-only or installed, one-business-day reply.

---

## 1. Meta setup checklist (one-time)
1. **Business assets:** Meta Business Suite → confirm you own the **Facebook Page**, **Instagram**, an **Ad Account**, and a **Pixel** (Events Manager → Data Sources).
2. **Put your Pixel ID in the site env** (`NEXT_PUBLIC_FB_PIXEL_ID`), redeploy, then in Events Manager use **Test Events** to confirm `PageView` and `Lead` fire (submit a test form on `/kitchen-renovations`).
3. **Domain verification:** Events Manager → Brand Safety → Domains → verify `kitchentablecabinetry.com`.
4. **Aggregated Event Measurement:** Events Manager → your domain → **Configure Web Events** → add and **rank `Lead` as priority #1** (needed for iOS conversions).
5. **Two Custom Conversions** (Events Manager → Custom Conversions → Create), both from the `Lead` event, split by the `content_category` parameter the site now sends:
   - **"KR – Kitchen Renovation Lead"** → event `Lead`, where `content_category` equals `Kitchen Renovation`.
   - **"CS – Cabinet Sales Lead"** → event `Lead`, where `content_category` equals `Cabinet Sales`.
   (The generic contact form sends `General Enquiry` — you can add a third if useful.)
6. **Conversions API (optional, recommended):** improves match quality vs iOS/ad-blockers. Easiest path is the Formspree/Zapier or a Meta CAPI Gateway; the Pixel alone is fine to launch.

---

## 2. Campaign structure
Use the **Sales** objective (a.k.a. "Leads → website"), performance goal **"Maximize number of conversions,"** conversion event = the matching Custom Conversion above. Run **two campaigns** so each offer optimizes and reports independently.

| Campaign | Landing page | Optimize for | Notes |
|---|---|---|---|
| **Kitchen Renovations** | `/kitchen-renovations` | KR – Kitchen Renovation Lead | Higher value, longer consideration |
| **Cabinet Sales** | `/cabinetry` | CS – Cabinet Sales Lead | Faster, lower-ticket; supply-only angle |

Keep **Advantage+ placements** on (Meta spreads across Feed, Reels, Stories, Marketplace). Use **CBO/Advantage campaign budget** once you have 2+ ad sets.

### Ad-set count by budget (see §4)
- **Starter:** 1 ad set per campaign (broad).
- **Growth:** 2 ad sets per campaign (Broad + Interest).
- **Aggressive:** 3 per campaign (Broad, Interest, Retargeting) and 2–3 creatives each.

---

## 3. Targeting
- **Location:** Nova Scotia. Tighten to **Truro + Halifax + a radius** (e.g. Truro +40 km and Halifax +25 km) if you want to control drive distance; broaden to all NS if volume is low. Set location to **"People living in this location."**
- **Age:** 30–65+. **Gender:** All.
- **Broad ad set:** no detailed targeting — let Advantage+ find buyers from the Pixel signal (usually wins once the Pixel has data).
- **Interest ad set (test against broad):** Home improvement, Kitchen, Home renovation, Interior design, Houzz, HGTV, Homeownership; optionally behaviors "Likely to move." Add **Advantage detailed-targeting expansion**.
- **Retargeting ad set (Aggressive / once traffic exists):** Custom Audiences — website visitors (30–180 days), video viewers, IG/FB engagers. Small budget, "book your consultation / get your quote" message.
- **Exclusions:** upload your existing **customer/lead list** (Formspree export) as a Custom Audience and exclude from prospecting.
- **Not a Special Ad Category:** home services ≠ housing/credit/employment, so normal targeting is allowed. Keep it that way — don't imply protected attributes.

---

## 4. Budget & expectations
Kitchen leads in a regional market typically run **~$8–$30 CAD per lead** depending on offer and creative; renovations usually cost more per lead than cabinet-supply but are worth far more. Give each new ad set **~$15–25/day for 5–7 days** before judging — that's the **learning phase** (aim for ~50 conversions/ad set/week to exit it).

| Tier | ~Monthly | Split | Structure |
|---|---|---|---|
| **Starter** | $300–600 | ~55% Reno / 45% Cabinets | 1 broad ad set each; 2 creatives |
| **Growth (recommended)** | $750–1,500 | separate budgets per campaign | 2 ad sets each (Broad + Interest); 3 creatives |
| **Aggressive** | $2,000+ | per campaign + retargeting | 3 ad sets each; add retargeting + Reels video |

Don't edit ad sets daily (resets learning). Review every 3–4 days; give changes time.

---

## 5. Creative — Kitchen Renovations (`/kitchen-renovations`)
**Offer:** free, no-obligation design consultation. **CTA button:** *Book Now* or *Get Offer*.

**Primary text (test 3–4):**
1. *Planning a kitchen renovation in Nova Scotia? Kitchen Table Cabinetry designs, builds, and installs custom kitchens with Canadian-made cabinetry — start with a free, no-obligation design consultation. Serving Truro, Halifax & all of NS.*
2. *From first sketch to final install, one local Truro team handles your whole kitchen. Licensed distributor of Kitchen Craft & Triangle Kitchen, backed by the manufacturer's lifetime warranty. Book your free consultation →*
3. *Your kitchen, designed around how you actually cook. Custom cabinetry, expert installation, clear pricing before we start. Free design consultation — we reply within one business day.*
4. *20+ years building kitchens across Nova Scotia. Canadian-made cabinets, professional install, no pressure. Tell us about your space and get a free consultation.*

**Headlines (test ~5):** "Free Kitchen Design Consultation" · "Custom Kitchens, Built in Nova Scotia" · "Renovate With a Local Truro Team" · "Canadian-Made Cabinetry, Installed" · "Book Your Free Consultation"

**Descriptions:** "No obligation. We reply within one business day." · "Serving Truro, Halifax & all of Nova Scotia." · "Design, cabinetry & installation under one roof."

**Visuals:** real finished-kitchen photos (the site's Kitchen Craft environment shots — gentry/summit/lexington/keelie/pearson), a short **Reel** panning a kitchen, or a before→after. Square (1:1) + vertical (4:5 / 9:16) for Reels/Stories. Avoid text-heavy images.

---

## 6. Creative — Cabinet Sales (`/cabinetry`)
**Offer:** free quote, supply-only or installed. **CTA button:** *Get Quote*.

**Primary text (test 3–4):**
1. *Need cabinets — not a full renovation? We supply Canadian-made Kitchen Craft & Triangle Kitchen cabinetry: full kitchens, replacement doors, drawer fronts, or just the hardware. Supply-only or installed. Free quote, reply within one business day.*
2. *Refreshing your kitchen? Order exactly what you need — a single cabinet, new doors, or a full set — from a licensed local distributor in Truro. Homeowners & builders welcome. Request a free quote →*
3. *Genuine Kitchen Craft & Triangle Kitchen cabinets and parts, backed by the manufacturer's lifetime warranty. We'll quote and order precisely what your project calls for. Free, no-obligation pricing.*

**Headlines (test ~5):** "Cabinets — Supply Only or Installed" · "Canadian-Made Cabinets, Local Pricing" · "Replacement Doors & Drawer Fronts" · "Free Cabinet Quote" · "Order Just the Cabinets You Need"

**Descriptions:** "Full kitchens, doors, drawer fronts or hardware." · "Homeowners & builders — Truro, NS." · "Lifetime manufacturer warranty."

**Visuals:** door-style close-ups, hardware, cabinet interiors (the site's `/products` imagery), an installed kitchen for aspiration. Builder-angle variant works well for the supply-only message.

---

## 7. UTM tags (so leads are attributed)
Add a URL parameter template to every ad (Ad level → **Website URL** = the landing page, **URL parameters** = below). The site captures these and includes them in the lead email.

```
utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{adset.name}}&utm_term={{ad.name}}
```
Meta fills the `{{…}}` dynamic values automatically. `fbclid` is added by Meta on click and is also captured. Result: each Formspree lead email shows the campaign, ad set, and ad that produced it (plus landing page + referrer).

Example destinations:
- `https://kitchentablecabinetry.com/kitchen-renovations?utm_source=facebook&utm_medium=paid_social&utm_campaign=kitchen-reno&utm_content=broad&utm_term=reel-a`
- `https://kitchentablecabinetry.com/cabinetry?utm_source=facebook&utm_medium=paid_social&utm_campaign=cabinet-sales&utm_content=interest&utm_term=doors-image`

---

## 8. Measuring & optimizing
- **Where leads land:** your Formspree inbox — each email now includes `utm_campaign`, `utm_content`, `fbclid`, `landing_page`, `referrer`, plus the `_source` and project type.
- **In Ads Manager:** watch **Cost per lead** (your Custom Conversion), CTR (link), and frequency. In GA4, leads show as paid_social sessions.
- **Weekly routine:** pause ads with CPL well above target or CTR < ~1%; duplicate and scale the winners (+20–30% budget); refresh creative when frequency > ~2–3 (ad fatigue). Keep the best 2–3 creatives per ad set.
- **Quality check:** skim the actual leads — if volume is high but quality low, tighten location/age or switch messaging toward higher intent ("free quote" vs "learn more").

---

## 9. Compliance (Canada)
- **CASL/PIPEDA:** the form is consent to be contacted about the enquiry; keep the privacy policy current and don't add people to unrelated marketing without consent.
- **Truthful claims only:** everything above is factual (licensed distributor, Canadian-made, 20+ years, lifetime *manufacturer* warranty, free consultation). Do **not** add review counts, testimonials, or stats you can't substantiate.
- **Meta policies:** no "before/after" implying personal attributes, no sensationalized claims; home services is not a Special Ad Category.

---

## 10. Alternative: Meta Instant Forms (lead ads)
Instead of (or alongside) landing-page ads you can run **Instant Form** lead ads — the form opens **inside** Facebook/Instagram, so it converts higher but usually lower-intent and **bypasses the website + Formspree**.
- Objective **Leads** → **Instant forms**. Build a form per offer (name, email, phone, "what do you need?").
- Choose a **higher-intent** form ("more volume" vs "higher intent" toggle) to reduce junk.
- **Get the leads out of Meta:** connect Leads Access (a CRM or **Zapier/Make → your email/Google Sheet**) — Meta doesn't email them by default, and they won't hit Formspree or fire the site Pixel `Lead` event.
- Good for a **volume test** against landing-page ads; compare cost-per-lead **and** close rate before committing budget.

---

### Quick launch checklist
- [ ] Env vars set (Pixel, Formspree) + redeployed; Test Events shows `Lead`
- [ ] Domain verified; `Lead` ranked #1 in Aggregated Event Measurement
- [ ] 2 Custom Conversions created (Kitchen Renovation / Cabinet Sales)
- [ ] 2 campaigns, Sales objective, optimizing for the right conversion
- [ ] Targeting: NS/Truro+Halifax, 30–65+, broad (+ interest test)
- [ ] 2–3 creatives per offer with real photos + UTM template
- [ ] Budget set per tier; leave 5–7 days before judging
- [ ] First test lead submitted and received in the inbox with UTM fields
