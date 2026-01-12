/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Blog Page
 * Kitchen design insights, trends, and tips
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Section, SectionHeader, Button, Badge, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { blogPosts, blogCategories, getFeaturedBlogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog - Kitchen Design Trends, Tips & Inspiration',
  description:
    'Explore our blog for the latest kitchen design trends, expert tips, and inspiration for your dream kitchen project.',
};

export default function BlogPage() {
  const featuredPosts = getFeaturedBlogPosts();
  const regularPosts = blogPosts.filter((post) => !post.isFeatured);

  return (
    <>
      {/* Hero Section */}
      <Section background="cream" padding="xl">
        <SectionHeader
          subtitle="Our Blog"
          title="Kitchen Design Insights"
          description="Expert advice, design trends, and inspiration to help you create the kitchen of your dreams."
        />

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <Card
                key={post.id}
                variant="elevated"
                padding="none"
                hover
                className={`overflow-hidden ${index === 0 ? 'lg:row-span-2' : ''}`}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className={`relative ${index === 0 ? 'aspect-[4/3] lg:aspect-[3/4]' : 'aspect-video'}`}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes={index === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 100vw, 50vw'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge variant="gold" className="mb-3">
                        {post.category}
                      </Badge>
                      <h2 className={`font-serif font-semibold text-white mb-2 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                        {post.title}
                      </h2>
                      <p className="text-white/80 text-sm line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </Section>

      {/* Category Filter */}
      <Section background="white" padding="none">
        <div className="border-b border-charcoal-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
              <Link
                href="/blog"
                className="px-4 py-2 bg-gold text-charcoal rounded-full text-sm font-medium whitespace-nowrap"
              >
                All Posts
              </Link>
              {blogCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.id}`}
                  className="px-4 py-2 bg-charcoal-50 text-charcoal-600 hover:bg-charcoal-100 rounded-full text-sm font-medium whitespace-nowrap transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* All Posts */}
      <Section background="white" padding="lg">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} variant="outlined" padding="none" hover className="overflow-hidden">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-video">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" size="sm">{post.category}</Badge>
                    <span className="flex items-center text-charcoal-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readingTime} min read
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-charcoal mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-charcoal-500 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-charcoal-100 flex items-center justify-center mr-2">
                        <User className="w-4 h-4 text-charcoal-400" />
                      </div>
                      <span className="text-sm text-charcoal-600">{post.author.name}</span>
                    </div>
                    <span className="text-sm text-charcoal-400">
                      {formatDate(post.publishedAt, { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section background="cream" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-4">
            Stay Inspired
          </h2>
          <p className="text-charcoal-500 mb-6">
            Subscribe to our newsletter for the latest design trends, tips, and exclusive insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold w-full sm:w-auto sm:min-w-[300px]"
            />
            <Button variant="gold" size="lg">
              Subscribe
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </Section>

      <CTA variant="simple" />
    </>
  );
}
