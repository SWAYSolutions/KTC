/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Contact Page
 * Contact form, location map, and business information
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { ContactForm } from './ContactForm';
import { siteConfig } from '@/data/site-config';
import { formatPhone } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact Us - Schedule Your Free Consultation',
  description:
    'Get in touch with Kitchen Table Cabinetry. Schedule a free consultation, request a quote, or visit our showroom in Truro, Nova Scotia.',
};

export default function ContactPage() {
  const address = siteConfig.contact.address;
  const mapQuery = encodeURIComponent(
    `${address.street}, ${address.city}, ${address.province} ${address.postalCode}`
  );

  return (
    <>
      {/* Hero Section */}
      <Section background="charcoal" padding="xl">
        <div className="text-center">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6">
            Let&apos;s Create Your <span className="text-gold">Dream Kitchen</span>
          </h1>
          <p className="text-charcoal-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re ready to start your project or just exploring ideas, we&apos;d love
            to hear from you. Schedule a free consultation or drop us a message.
          </p>
        </div>
      </Section>

      {/* Contact Information Cards */}
      <Section background="cream" padding="lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-10">
          <Card variant="elevated" padding="lg" className="text-center">
            <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-semibold text-charcoal mb-2">Visit Our Showroom</h3>
            <p className="text-charcoal-500 text-sm">
              {address.street}
              <br />
              {address.city}, {address.province}
              <br />
              {address.postalCode}
            </p>
          </Card>

          <Card variant="elevated" padding="lg" className="text-center">
            <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-semibold text-charcoal mb-2">Call Us</h3>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-charcoal-500 hover:text-gold transition-colors"
            >
              {formatPhone(siteConfig.contact.phone)}
            </a>
            <p className="text-charcoal-400 text-sm mt-1">Mon-Fri, 9am-6pm</p>
          </Card>

          <Card variant="elevated" padding="lg" className="text-center">
            <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-semibold text-charcoal mb-2">Email Us</h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-charcoal-500 hover:text-gold transition-colors break-all"
            >
              {siteConfig.contact.email}
            </a>
            <p className="text-charcoal-400 text-sm mt-1">We respond within 24 hours</p>
          </Card>

          <Card variant="elevated" padding="lg" className="text-center">
            <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-semibold text-charcoal mb-2">Business Hours</h3>
            <p className="text-charcoal-500 text-sm">
              Mon-Fri: {siteConfig.contact.hours.weekday}
              <br />
              Sat: {siteConfig.contact.hours.saturday}
              <br />
              Sun: {siteConfig.contact.hours.sunday}
            </p>
          </Card>
        </div>
      </Section>

      {/* Contact Form and Map */}
      <Section background="white" padding="xl" id="quote">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <SectionHeader
              subtitle="Send a Message"
              title="Request a Free Consultation"
              description="Fill out the form below and one of our design experts will get back to you within 24 hours."
              align="left"
            />
            <ContactForm />
          </div>

          {/* Map */}
          <div>
            <SectionHeader
              subtitle="Our Location"
              title="Visit Our Showroom"
              description="Experience our products in person. Our showroom features displays from Kitchen Craft and Triangle Kitchens."
              align="left"
            />
            <div className="rounded-2xl overflow-hidden shadow-luxury h-[400px] lg:h-[500px]">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBFw0Qbyq9zTFTd-tUY6CE80AWe7fD4ymw'}&q=${mapQuery}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kitchen Table Cabinetry Location"
              />
            </div>
            <div className="mt-4">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-medium"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="cream" padding="lg" id="faq">
        <SectionHeader
          subtitle="FAQ"
          title="Common Questions"
          description="Find answers to frequently asked questions about our services."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} variant="elevated" padding="lg">
              <h3 className="font-semibold text-charcoal mb-2">{faq.question}</h3>
              <p className="text-charcoal-500">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

const faqs = [
  {
    question: 'How much does a kitchen renovation cost?',
    answer:
      'Kitchen renovation costs vary widely based on size, materials, and scope. A typical mid-range kitchen renovation starts around $25,000, while a high-end custom kitchen can range from $50,000 to $150,000+. We provide detailed quotes after understanding your specific needs.',
  },
  {
    question: 'How long does a kitchen renovation take?',
    answer:
      'The timeline depends on the scope of work. A cabinet replacement typically takes 1-2 weeks, while a complete kitchen renovation usually takes 6-12 weeks from design to completion. We provide a detailed timeline during your consultation.',
  },
  {
    question: 'Do you offer design services only, without installation?',
    answer:
      'Yes, we offer standalone design consultations and can create detailed plans for your kitchen. However, we highly recommend our full-service approach to ensure the best results and warranty coverage.',
  },
  {
    question: 'What brands do you work with?',
    answer:
      'We are authorized dealers for Kitchen Craft and Triangle Kitchens, two of the most respected names in cabinetry. We also work with premium countertop, hardware, and appliance brands to complete your kitchen.',
  },
  {
    question: 'Do you offer financing options?',
    answer:
      'We partner with several financing providers to offer flexible payment options. During your consultation, we can discuss financing plans that fit your budget.',
  },
];
