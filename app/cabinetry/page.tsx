/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Cabinetry Page
 * Homeowner-focused page for ordering Kitchen Craft & Triangle Kitchen cabinets and
 * cabinet parts (doors, drawer fronts, hardware), with or without installation.
 * Indexable (organic + ad traffic). Primary CTA: request a quote.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import {
  CheckCircle2,
  Phone,
  MapPin,
  Boxes,
  DoorOpen,
  Layers,
  Wrench,
  ShieldCheck,
  Award,
  Users,
  ExternalLink,
} from 'lucide-react';
import { Section, Card, Badge } from '@/components/ui';
import { DoorStyles } from '@/components/sections';
import { LeadForm } from '@/app/kitchen-renovations/LeadForm';
import { partners } from '@/data/partners';
import { doorStyles } from '@/data/door-styles';
import { siteConfig } from '@/data/site-config';
import { formatPhone } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cabinetry & Cabinet Parts in Nova Scotia',
  description:
    'Canadian-made Kitchen Craft and Triangle Kitchen cabinetry, replacement doors, drawer fronts, and hardware, supplied by a licensed distributor in Truro, NS. Request a quote, supply only or installed.',
  openGraph: {
    title: 'Cabinetry & Cabinet Parts in Nova Scotia',
    description:
      'Genuine Kitchen Craft & Triangle Kitchen cabinetry and parts from a local licensed distributor. Request a quote today.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const whatYouCanBuy = [
  {
    icon: Boxes,
    title: 'Full Cabinets',
    description:
      'Complete cabinet sets for a new kitchen or an addition, built to your layout and finish.',
  },
  {
    icon: DoorOpen,
    title: 'Doors & Drawer Fronts',
    description:
      'Refresh your kitchen by swapping fronts. Keep the boxes, get a brand-new look.',
  },
  {
    icon: Layers,
    title: 'Panels & Fillers',
    description:
      'End panels, toe kicks, and matching fillers to finish the job cleanly.',
  },
  {
    icon: Wrench,
    title: 'Hardware & Hinges',
    description:
      'Handles, soft-close hinges, drawer slides, and the components that make it all work.',
  },
];

const whyBuy = [
  {
    icon: Award,
    title: 'Licensed Distributor',
    description:
      'Genuine Kitchen Craft and Triangle Kitchen product, backed by full manufacturer warranties.',
  },
  {
    icon: MapPin,
    title: 'Canadian-Made',
    description:
      'Built in Winnipeg and Dieppe, quality cabinetry made right here in Canada.',
  },
  {
    icon: Users,
    title: 'Local, In-Person Help',
    description:
      'Visit our Truro showroom and talk to real people who know these product lines inside out.',
  },
  {
    icon: ShieldCheck,
    title: 'We Match the Right Parts',
    description:
      "Not sure of your model? Bring photos or measurements and we'll help identify the right doors, finishes, and hardware.",
  },
];

const steps = [
  {
    number: '01',
    title: 'Measure & Choose',
    description:
      'Tell us what you need: full cabinets, a few doors, or just hardware. Bring photos or measurements.',
  },
  {
    number: '02',
    title: 'Get Your Quote',
    description: 'We price it out clearly, with no obligation and no surprises.',
  },
  {
    number: '03',
    title: 'We Order It',
    description: 'Once approved, we place the order with the manufacturer for you.',
  },
  {
    number: '04',
    title: 'Pick Up or Install',
    description: 'Collect your order, or have our team install it. Your choice.',
  },
];

const faqs = [
  {
    question: 'What are your lead times?',
    answer:
      'Most orders arrive in roughly 4-8 weeks depending on the manufacturer, finish, and time of year. We confirm the timeline when we quote.',
  },
  {
    question: 'Can I order just parts?',
    answer:
      'Absolutely. A single replacement door, a set of drawer fronts, or just hardware is no problem. You don\'t need to order a full kitchen.',
  },
  {
    question: 'Do I need to know the exact model?',
    answer:
      'No. Bring photos and measurements and we\'ll help identify the right product, finish, and components to match what you already have.',
  },
  {
    question: 'Supply only, or installed?',
    answer:
      'Your choice. We can supply the product for you to install, or have our experienced team handle the installation.',
  },
];

export default function CabinetSalesPage() {
  const phone = siteConfig.contact.phone;

  return (
    <>
      {/* ─── Hero with Lead Form ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-charcoal">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://www.kitchencraft.com/file/media/kitchencraft/products/environment/gentry/gentry2.jpg"
            alt="Canadian-made kitchen cabinetry"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Copy */}
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 text-gold font-medium text-xs uppercase tracking-eyebrow mb-5">
                <MapPin className="w-4 h-4" />
                Licensed Kitchen Craft &amp; Triangle Kitchen Distributor · Truro, NS
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6 leading-[1.05] tracking-display">
                Beautiful Cabinetry,{' '}
                <span className="text-gold">Sourced for You</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                Full kitchens, a single cabinet, replacement doors and drawer fronts, or just
                the hardware. Canadian-made and sourced for you. Request a{' '}
                <strong className="text-white">free, no-obligation quote</strong> today.
              </p>

              {/* Trust points */}
              <ul className="space-y-3 mb-8">
                {[
                  'Genuine Kitchen Craft & Triangle Kitchen product',
                  'Order just what you need (supply only or installed)',
                  'Local help choosing the right doors, finishes & parts',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Phone */}
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 text-white hover:text-gold transition-colors font-medium"
                >
                  <Phone className="w-5 h-5" />
                  {formatPhone(phone)}
                </a>
              </div>
            </div>

            {/* Lead Form */}
            <div id="get-started" className="order-1 lg:order-2 lg:pl-8 scroll-mt-24">
              <div className="lg:hidden flex items-center justify-center gap-2 mb-4 text-white/90 text-sm">
                <span>Genuine product · Free &amp; no-obligation</span>
              </div>
              <LeadForm
                source="Cabinet Sales Page"
                leadCategory="Cabinet Sales"
                heading="Request Your Cabinet Quote"
                subheading="Tell us what you need: full cabinets, doors, drawer fronts, or hardware. Takes 30 seconds, no obligation. We'll reply within one business day."
                submitLabel="Request My Quote"
                successTitle="Quote Request Received!"
                successBody="Thanks! One of our cabinet specialists will reach out within one business day with pricing and next steps."
                projectTypeLabel="What are you looking for?"
                projectTypePlaceholder="Select what you need"
                subjectPrefix="New Cabinet Sales Lead"
                projectOptions={[
                  { value: 'full-cabinet-order', label: 'Full cabinet order' },
                  { value: 'doors-drawer-fronts', label: 'Replacement doors / drawer fronts' },
                  { value: 'hardware-parts', label: 'Cabinet hardware / components' },
                  { value: 'not-sure', label: 'Not sure yet' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Door Styles (editorial; cards explore, CTA → quote form) ─────── */}
      <DoorStyles
        items={doorStyles}
        limit={4}
        variant="editorial"
        eyebrow="Door Styles"
        title="Find the Look You Love"
        description="A sample of the Kitchen Craft and Triangle Kitchen door styles and finishes we supply. Explore the full range, then request a quote on exactly what you want."
        linkCards
        footer="form"
        formHref="#get-started"
        background="white"
      />

      {/* ─── What You Can Buy ────────────────────────────────────────────── */}
      <Section background="cream" padding="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium text-xs uppercase tracking-eyebrow mb-3 block">
            What You Can Order
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
            From a Full Kitchen to a Single Door
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatYouCanBuy.map((item) => (
            <Card key={item.title} variant="elevated" padding="lg" className="text-center">
              <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── Why Buy From Us ─────────────────────────────────────────────── */}
      <Section background="white" padding="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium text-xs uppercase tracking-eyebrow mb-3 block">
            Why Order From Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
            Local Experts, Genuine Product
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyBuy.map((item) => (
            <Card key={item.title} variant="elevated" padding="lg" className="text-center">
              <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── How It Works ────────────────────────────────────────────────── */}
      <Section background="cream" padding="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium text-xs uppercase tracking-eyebrow mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
            Four Simple Steps to Your Order
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-5xl font-serif font-bold text-gold/30 mb-3">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">{step.title}</h3>
              <p className="text-charcoal-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Brands ──────────────────────────────────────────────────────── */}
      <Section background="white" padding="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium text-xs uppercase tracking-eyebrow mb-3 block">
            The Brands We Carry
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
            Canada&apos;s Leading Cabinet Makers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <Card key={partner.id} variant="outlined" padding="lg">
              <h3 className="text-2xl font-serif font-semibold text-charcoal mb-1">
                {partner.name}
              </h3>
              <p className="text-gold font-medium mb-4">{partner.tagline}</p>
              <a
                href={partner.productsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors font-medium"
              >
                Explore {partner.name} styles
                <ExternalLink className="w-4 h-4" />
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      <Section background="cream" padding="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium text-xs uppercase tracking-eyebrow mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
            Questions? We&apos;ve Got Answers
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.question} variant="elevated" padding="lg">
              <h3 className="font-semibold text-charcoal mb-2">{faq.question}</h3>
              <p className="text-charcoal-500 leading-relaxed">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── Final CTA ───────────────────────────────────────────────────── */}
      <Section background="charcoal" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="gold" className="mb-6">
            Free, No-Obligation Quote
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
            Ready to Order Your <span className="text-gold">Cabinets?</span>
          </h2>
          <p className="text-charcoal-300 text-lg mb-8 leading-relaxed">
            Tell us what you need and we&apos;ll price it out: full cabinets, replacement doors,
            or just the hardware. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center font-semibold bg-gold text-charcoal hover:bg-gold-400 shadow-gold hover:shadow-luxury-lg hover:-translate-y-0.5 transition-all duration-300 px-8 py-4 text-lg rounded-xl"
            >
              Request My Quote
            </a>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 font-medium border-2 border-white/40 text-white hover:bg-white hover:text-charcoal transition-all duration-300 px-8 py-4 text-lg rounded-xl"
            >
              <Phone className="w-5 h-5" />
              Call {formatPhone(phone)}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
