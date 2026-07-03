/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Structured Data (schema.org) Builders
 * Page-level JSON-LD generators. The site-wide LocalBusiness graph lives in
 * app/layout.tsx with @id = siteConfig.url; builders here reference it.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { siteConfig } from '@/data/site-config';
import { type BlogPost } from '@/types';

/** BlogPosting schema for a blog article page. */
export function blogPostingSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: { '@id': siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };
}

/** BreadcrumbList schema. Pass items in order, e.g. [{name:'Products', path:'/products'}, ...]. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/** FAQPage schema from an array of question/answer pairs. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** Service schemas for the services page (provider = the LocalBusiness in layout). */
export function servicesSchema(services: { title: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': services.map((service) => ({
      '@type': 'Service',
      name: service.title,
      description: service.description,
      provider: { '@id': siteConfig.url },
      areaServed: {
        '@type': 'State',
        name: 'Nova Scotia',
      },
    })),
  };
}
