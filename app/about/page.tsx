/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - About Page
 * Company story, team, and values
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Heart, Target, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { Testimonials, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Team',
  description:
    'Learn about Kitchen Table Cabinetry, our commitment to quality, and the passionate team behind your dream kitchen.',
};

const team = [
  {
    name: 'Jennifer Mitchell',
    role: 'Design Director',
    bio: 'With over 15 years of experience in luxury kitchen design, Jennifer leads our creative team with passion and precision.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Marcus Chen',
    role: 'Installation Manager',
    bio: 'Marcus brings 20 years of hands-on expertise, ensuring every installation meets our exacting standards.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Sarah Thompson',
    role: 'Client Relations',
    bio: 'Sarah ensures every client feels valued and informed throughout their kitchen journey with us.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in every aspect of our work.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients to bring their unique visions to life.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We genuinely love what we do, and it shows in every kitchen we create.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Meticulous attention to detail ensures perfect results every time.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="cream" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-charcoal mb-6">
              Crafting <span className="text-gold">Dream Kitchens</span> Since 2005
            </h1>
            <p className="text-charcoal-500 text-lg leading-relaxed mb-8">
              Kitchen Table Cabinetry was founded on a simple belief: that the kitchen is the heart
              of every home, and every family deserves a space that reflects their unique lifestyle
              and aspirations.
            </p>
            <p className="text-charcoal-500 leading-relaxed mb-8">
              What started as a small family business in Truro, Nova Scotia has grown into the
              region&apos;s premier kitchen design studio. Today, we&apos;re proud to be authorized
              dealers for Kitchen Craft and Triangle Kitchens, bringing world-class cabinetry to
              homes throughout the Maritime provinces.
            </p>
            <Link href="/contact">
              <Button variant="gold" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Kitchen Table Cabinetry showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-luxury p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <span className="text-3xl font-serif font-bold text-gold block">500+</span>
                  <span className="text-charcoal-500 text-sm">Kitchens Completed</span>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-serif font-bold text-gold block">20+</span>
                  <span className="text-charcoal-500 text-sm">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Section background="white" padding="xl">
        <SectionHeader
          subtitle="Our Values"
          title="What Drives Us"
          description="Our commitment to excellence guides everything we do, from initial consultation to final installation."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} variant="outlined" padding="lg" className="text-center">
              <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
                {value.title}
              </h3>
              <p className="text-charcoal-500">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section background="cream" padding="xl" id="team">
        <SectionHeader
          subtitle="Our Team"
          title="Meet the Experts"
          description="Our talented team brings decades of combined experience in design, craftsmanship, and customer service."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} variant="elevated" padding="none" className="overflow-hidden group">
              <div className="relative aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold mb-3">{member.role}</p>
                  <p className="text-white/80 text-sm">{member.bio}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="charcoal" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
              The Kitchen Table Difference
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Local Expertise',
                  description:
                    'We understand Maritime homes and lifestyles, designing kitchens that work for our climate and culture.',
                },
                {
                  title: 'Premium Partnerships',
                  description:
                    'Our exclusive partnerships with Kitchen Craft and Triangle Kitchens give you access to the finest cabinetry available.',
                },
                {
                  title: 'End-to-End Service',
                  description:
                    'From initial design through installation and beyond, we handle every detail so you can enjoy the journey.',
                },
                {
                  title: 'Lifetime Support',
                  description:
                    'Our relationship doesn\'t end at installation. We\'re here for adjustments, maintenance advice, and future projects.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-charcoal font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-charcoal-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600&q=80"
                alt="Modern kitchen design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                alt="Luxury kitchen interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA variant="split" />
    </>
  );
}
