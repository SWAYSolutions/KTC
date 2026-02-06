/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Blog Post Detail Page
 * Individual blog article with rich content
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Section, Button, Badge, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { getBlogPostBySlug, blogPosts, getRecentBlogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = getRecentBlogPosts(4).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <article>
        {/* Hero Image */}
        <div className="relative h-[40vh] md:h-[60vh]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />

          {/* Back Link */}
          <Link
            href="/blog"
            className="absolute top-6 left-6 inline-flex items-center text-white/80 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Content */}
        <Section background="white" padding="lg">
          <div className="max-w-3xl mx-auto -mt-32 relative z-10">
            {/* Article Card */}
            <Card variant="elevated" padding="lg">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="gold">{post.category}</Badge>
                <span className="flex items-center text-charcoal-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readingTime} min read
                </span>
                <span className="flex items-center text-charcoal-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(post.publishedAt)}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-charcoal mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-4 pb-8 border-b border-charcoal-100">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <span className="font-medium text-charcoal block">{post.author.name}</span>
                  <span className="text-sm text-charcoal-400">{post.author.role}</span>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none mt-8
                  prose-headings:font-serif prose-headings:text-charcoal
                  prose-p:text-charcoal-600 prose-p:leading-relaxed
                  prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-charcoal
                  prose-ul:text-charcoal-600 prose-ol:text-charcoal-600
                  prose-li:marker:text-gold
                  prose-blockquote:border-gold prose-blockquote:text-charcoal-600 prose-blockquote:italic
                  prose-hr:border-charcoal-200"
                dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
              />

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-charcoal-100">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-charcoal-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-charcoal-50 rounded-full text-sm text-charcoal-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-charcoal-100">
                <div className="flex items-center gap-4">
                  <span className="text-charcoal-400 text-sm font-medium flex items-center">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share this article
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://kitchentablecabinetry.com/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-charcoal-50 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://kitchentablecabinetry.com/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-charcoal-50 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://kitchentablecabinetry.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-charcoal-50 flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section background="cream" padding="lg">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 text-center">
            More Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} variant="elevated" padding="none" hover className="overflow-hidden">
                <Link href={`/blog/${relatedPost.slug}`}>
                  <div className="relative aspect-video">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" size="sm" className="mb-2">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-serif font-semibold text-charcoal line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <CTA variant="simple" />
    </>
  );
}

// Simple markdown to HTML converter for the blog content
function formatMarkdown(content: string): string {
  return content
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^\*\*(.*)\*\*$/gim, '<strong>$1</strong>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/((?:<li>[\s\S]*<\/li>)+)/, '<ul>$1</ul>')
    .replace(/^---$/gim, '<hr />')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gim, '<p>$1</p>')
    .replace(/<p><h/g, '<h')
    .replace(/<\/h(\d)><\/p>/g, '</h$1>')
    .replace(/<p><ul>/g, '<ul>')
    .replace(/<\/ul><\/p>/g, '</ul>')
    .replace(/<p><hr \/><\/p>/g, '<hr />');
}
