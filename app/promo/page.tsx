/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Facebook Ads Landing Page
 * Optimized for conversions: kitchen renovations and cabinet sales
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import Image from 'next/image';
import { CheckCircle, Star, MapPin, Clock, Phone, Award, Leaf, Users } from 'lucide-react';
import { Section, Card } from '@/components/ui';
import { PromoLeadForm } from './PromoLeadForm';
import { siteConfig } from '@/data/site-config';
import { formatPhone } from '@/lib/utils';
import { testimonials } from '@/data/testimonials';

export default function PromoPage() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1920&q=80"
            alt="Modern kitchen"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block text-gold font-medium text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-gold/10 rounded-full">
                Free Consultation
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Transform Your Kitchen with{' '}
                <span className="text-gold">Premium Canadian Cabinetry</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Ready for the kitchen you&apos;ve always dreamed of? Our expert designers create
                stunning, functional spaces using top-quality frameless cabinetry from trusted
                Canadian manufacturers.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-sm">20+ Years<br/>Experience</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-sm">5 Star<br/>Google Rating</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-sm">Canadian<br/>Manufacturers</span>
                </div>
              </div>

              {/* Mobile Form CTA */}
              <div className="lg:hidden">
                <a
                  href="#contact-form"
                  className="inline-block w-full text-center px-8 py-4 bg-gold text-charcoal font-semibold rounded-xl hover:bg-gold-400 transition-colors text-lg"
                >
                  Get Your Free Quote
                </a>
              </div>
            </div>

            {/* Right - Lead Form */}
            <div className="hidden lg:block" id="contact-form">
              <Card variant="elevated" padding="lg" className="bg-white">
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-2 text-center">
                  Get Your Free Consultation
                </h2>
                <p className="text-charcoal-500 text-center mb-6">
                  No obligation. We&apos;ll contact you within 24 hours.
                </p>
                <PromoLeadForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Form Section */}
      <Section background="cream" padding="lg" className="lg:hidden">
        <div id="contact-form-mobile">
          <Card variant="elevated" padding="lg" className="bg-white">
            <h2 className="text-2xl font-serif font-semibold text-charcoal mb-2 text-center">
              Get Your Free Consultation
            </h2>
            <p className="text-charcoal-500 text-center mb-6">
              No obligation. We&apos;ll contact you within 24 hours.
            </p>
            <PromoLeadForm />
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
            Complete Kitchen Solutions
          </h2>
          <p className="text-charcoal-500 max-w-2xl mx-auto">
            From simple cabinet upgrades to full kitchen renovations, we handle every detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Kitchen Renovations',
              description: 'Complete transformations from design to installation with expert craftsmanship.',
              features: ['Custom layouts', 'Full project management', '5-year warranty'],
            },
            {
              title: 'Frameless Cabinetry',
              description: 'Modern European-style cabinets that maximize space and style.',
              features: ['Soft-close hardware', 'Premium finishes', 'Custom sizing'],
            },
            {
              title: 'Countertops & More',
              description: 'Complete your kitchen with quality surfaces and accessories.',
              features: ['Quartz & granite', 'Islands & storage', 'Hardware upgrades'],
            },
          ].map((service, index) => (
            <Card key={index} variant="outlined" padding="lg" className="h-full">
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal-500 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-charcoal-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="cream" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Kitchen Table Cabinetry
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-6">
              Your Local Kitchen Experts
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: Users,
                  title: 'Personalized Service',
                  description: 'Work directly with our design team from start to finish.',
                },
                {
                  icon: Award,
                  title: 'Quality Guaranteed',
                  description: '5-year warranty on all installations and manufacturer warranties.',
                },
                {
                  icon: Leaf,
                  title: 'Canadian Made',
                  description: 'Supporting local manufacturers like Kitchen Craft and Triangle Kitchens.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-charcoal-500 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt="Beautiful kitchen renovation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} variant="outlined" padding="lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-gold fill-gold' : 'text-charcoal-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-charcoal-600 mb-4 italic">
                &quot;{testimonial.quote.length > 150
                  ? testimonial.quote.substring(0, 150) + '...'
                  : testimonial.quote}&quot;
              </p>
              <div>
                <span className="font-semibold text-charcoal block">{testimonial.author}</span>
                <span className="text-charcoal-400 text-sm">{testimonial.location}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Info & Final CTA */}
      <Section background="charcoal" padding="lg">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-charcoal-300 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today. We&apos;ll discuss your vision, measure your space,
            and provide a detailed quote—all with no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 px-8 py-4 bg-gold text-charcoal font-semibold rounded-xl hover:bg-gold-400 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call {formatPhone(siteConfig.contact.phone)}
            </a>
            <a
              href="#contact-form"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-charcoal transition-colors text-lg"
            >
              Request Free Quote
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-charcoal-300 text-sm">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {siteConfig.contact.address.city}, {siteConfig.contact.address.province}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Mon-Fri 9am-6pm, Sat 10am-4pm
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
