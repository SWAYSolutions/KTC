/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Project Detail Page
 * Full project showcase with before/after and testimonial
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, CheckCircle, Quote } from 'lucide-react';
import { Section, Button, Badge, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { getProjectBySlug, projects, getFeaturedProjects } from '@/data/projects';
import { getProductById } from '@/data/products';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} - Kitchen Design Project`,
    description: project.shortDescription,
    openGraph: {
      images: [project.coverImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get related projects
  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.style === project.style)
    .slice(0, 3);

  // Get product details
  const projectProducts = project.products
    .map((productId) => getProductById(productId))
    .filter(Boolean);

  return (
    <>
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[70vh]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />

        {/* Back Link */}
        <Link
          href="/gallery"
          className="absolute top-6 left-6 inline-flex items-center text-white/80 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gallery
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <Badge variant="gold" className="mb-4">
              {project.style.replace('-', ' ')}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/80">
              <span className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {project.location}
              </span>
              <span className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Completed {formatDate(project.completedDate, { year: 'numeric', month: 'long' })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-charcoal-600">{feature}</span>
              </div>
            ))}
          </div>

          {/* Products Used */}
          {projectProducts.length > 0 && (
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-4">Products Featured</h3>
              <div className="flex flex-wrap gap-3">
                {projectProducts.map((product) => product && (
                  <Link
                    key={product.id}
                    href={`/products/${product.partner}/${product.id}`}
                    className="px-4 py-2 bg-white rounded-full text-sm text-charcoal hover:bg-gold hover:text-white transition-colors shadow-sm"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Image Gallery */}
      <Section background="cream" padding="lg">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 text-center">
          Project Gallery
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((image, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden ${
                idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`aspect-[4/3] ${idx === 0 ? 'md:aspect-[4/3]' : ''}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes={idx === 0 ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 1024px) 50vw, 33vw'}
                />
              </div>
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Before/After (if available) */}
      {project.beforeAfter && (
        <Section background="white" padding="lg">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 text-center">
            The Transformation
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">Before</Badge>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={project.beforeAfter.before}
                  alt="Before renovation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="gold">After</Badge>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={project.beforeAfter.after}
                  alt="After renovation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Client Testimonial (if available) */}
      {project.testimonial && (
        <Section background="charcoal" padding="lg">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-gold mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed mb-6">
              &quot;{project.testimonial.quote}&quot;
            </blockquote>
            <cite className="not-italic">
              <span className="block text-white font-semibold text-lg">
                {project.testimonial.author}
              </span>
              <span className="block text-charcoal-400">
                {project.testimonial.location}
              </span>
            </cite>
          </div>
        </Section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section background="cream" padding="lg">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 text-center">
            Similar Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject) => (
              <Card key={relatedProject.id} variant="elevated" padding="none" hover>
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <Image
                    src={relatedProject.coverImage}
                    alt={relatedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-semibold text-charcoal mb-1">
                    {relatedProject.title}
                  </h3>
                  <p className="text-charcoal-400 text-sm mb-3">{relatedProject.location}</p>
                  <Link href={`/gallery/${relatedProject.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Project
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <CTA variant="simple" />
    </>
  );
}
