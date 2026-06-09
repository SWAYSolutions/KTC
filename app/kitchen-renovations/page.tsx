/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Kitchen Renovations Landing Page
 * Dedicated, conversion-focused landing page for the Facebook ad campaign.
 * Designed to generate contact form fills (free consultation requests).
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import {
  CheckCircle2,
  Star,
  Phone,
  Award,
  Ruler,
  Hammer,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { Section, Card, Badge } from '@/components/ui';
import { LeadForm } from './LeadForm';
import { siteConfig } from '@/data/site-config';
import { formatPhone } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Kitchen Renovations in Nova Scotia — Free Design Consultation',
  description:
    'Transform your kitchen with Kitchen Table Cabinetry. Custom cabinetry, expert installation, and a free design consultation. Serving Truro, Halifax & all of Nova Scotia.',
  openGraph: {
    title: 'Dream Kitchen Renovations in Nova Scotia',
    description:
      'Book your free, no-obligation design consultation with Kitchen Table Cabinetry today.',
  },
  // Campaign landing pages are typically excluded from search indexing
  robots: {
    index: false,
    follow: true,
  },
};

const benefits = [
  {
    icon: Ruler,
    title: 'Custom Design, Tailored to You',
    description:
      'Every kitchen is designed around the way you live, cook, and entertain — no cookie-cutter layouts.',
  },
  {
    icon: Award,
    title: 'Premium Cabinetry Brands',
    description:
      'Authorized dealer for Kitchen Craft and Triangle Kitchens — quality that lasts for decades.',
  },
  {
    icon: Hammer,
    title: 'Expert, In-House Installation',
    description:
      'One accountable team from first sketch to final reveal. Done right, on time, the first time.',
  },
  {
    icon: Sparkles,
    title: 'Stress-Free Process',
    description:
      'We manage the details so you don\'t have to — clear timelines, transparent pricing, no surprises.',
  },
];

const galleryImages = [
  {
    src: 'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/gentry/gentry2.jpg',
    alt: 'Kitchen renovation with sage-blue shaker cabinets and oak island',
  },
  {
    src: 'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/summit/acrylicbluekitchen1.jpg',
    alt: 'Contemporary kitchen renovation with high-gloss cabinetry and blue island',
  },
  {
    src: 'https://www.kitchencraft.com/file/media/kitchencraft/products/environment/lexington/off_white_cabinets_in_casual_kitchen_2.jpg',
    alt: 'Traditional kitchen renovation with cream cabinetry and granite counters',
  },
];

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description:
      'We learn about your space, style, and budget — in your home or our Truro showroom.',
  },
  {
    number: '02',
    title: 'Custom Design & Quote',
    description:
      'See your new kitchen come to life with a detailed design and a clear, fixed quote.',
  },
  {
    number: '03',
    title: 'Build & Install',
    description:
      'Our craftsmen handle everything and reveal a kitchen you\'ll love for years.',
  },
];

const testimonials = [
  {
    quote:
      'Kitchen Table Cabinetry transformed our outdated kitchen into something we never dreamed possible. Every detail was considered, and the result is absolutely stunning.',
    author: 'Sarah & Michael Chen',
    location: 'Halifax, NS',
  },
  {
    quote:
      'They captured exactly what we wanted — a kitchen that feels like home but has all the modern conveniences. Our friends can\'t stop asking who designed it.',
    author: 'The Morrison Family',
    location: 'Truro, NS',
  },
  {
    quote:
      'Professional from start to finish. The project stayed on schedule and on budget, and the craftsmanship is incredible. Worth every penny.',
    author: 'Jennifer L.',
    location: 'Bible Hill, NS',
  },
];

const faqs = [
  {
    question: 'How much does a kitchen renovation cost?',
    answer:
      'It depends on the size, materials, and scope of your project. A mid-range kitchen typically starts around $25,000, while high-end custom kitchens range higher. We provide a clear, detailed quote after your free consultation — no guesswork.',
  },
  {
    question: 'How long will my renovation take?',
    answer:
      'A cabinet replacement usually takes 1–2 weeks, while a complete renovation typically runs 6–12 weeks from design to completion. We give you a firm timeline before we begin.',
  },
  {
    question: 'Is the consultation really free?',
    answer:
      'Yes — completely free and with no obligation. It\'s simply a conversation about your kitchen, your goals, and how we can help.',
  },
];

export default function KitchenRenovationsLandingPage() {
  const phone = siteConfig.contact.phone;

  return (
    <>
      {/* ─── Hero with Lead Form ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-charcoal">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://www.kitchencraft.com/file/media/kitchencraft/products/environment/gentry/gentry2.jpg"
            alt="Beautifully renovated luxury kitchen"
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
            <div>
              <span className="inline-flex items-center gap-2 text-gold font-medium text-sm uppercase tracking-wider mb-5 px-4 py-2 bg-gold/10 rounded-full backdrop-blur-sm">
                <MapPin className="w-4 h-4" />
                Serving Truro, Halifax &amp; all of Nova Scotia
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Your Dream Kitchen,{' '}
                <span className="text-gold">Beautifully Built</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                Custom cabinetry, expert design, and flawless installation — all from one
                trusted local team. Book your <strong className="text-white">free design
                consultation</strong> today and see what&apos;s possible.
              </p>

              {/* Trust points */}
              <ul className="space-y-3 mb-8">
                {[
                  'Free, no-obligation in-home consultation',
                  'Premium Kitchen Craft & Triangle Kitchens cabinetry',
                  'Transparent, fixed-price quotes',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Rating + phone */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-white/80 text-sm">Loved by Nova Scotia homeowners</span>
                </div>
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
            <div id="get-started" className="lg:pl-8 scroll-mt-24">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ────────────────────────────────────────────────────── */}
      <Section background="cream" padding="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-3 block">
            Why Homeowners Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
            Renovation Without the Headaches
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title} variant="elevated" padding="lg" className="text-center">
              <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">{benefit.title}</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── Gallery ─────────────────────────────────────────────────────── */}
      <Section background="white" padding="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-3 block">
            Recent Work
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
            Kitchens We&apos;re Proud Of
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Process ─────────────────────────────────────────────────────── */}
      <Section background="cream" padding="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
            Three Simple Steps to Your New Kitchen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

      {/* ─── Testimonials ────────────────────────────────────────────────── */}
      <Section background="white" padding="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-3 block">
            Happy Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} variant="elevated" padding="lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-charcoal-600 italic mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-charcoal">{testimonial.author}</p>
                <p className="text-charcoal-400 text-sm">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      <Section background="cream" padding="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-3 block">
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
            Limited Consultation Slots
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
            Ready to Start Your <span className="text-gold">Dream Kitchen?</span>
          </h2>
          <p className="text-charcoal-300 text-lg mb-8 leading-relaxed">
            Book your free design consultation today. There&apos;s no obligation — just expert
            advice and a clear plan for the kitchen you&apos;ve always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center font-semibold bg-gold text-charcoal hover:bg-gold-400 shadow-gold hover:shadow-luxury-lg transition-all duration-300 px-8 py-4 text-lg rounded-xl"
            >
              Get My Free Consultation
            </a>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 font-medium border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-8 py-4 text-lg rounded-xl"
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
