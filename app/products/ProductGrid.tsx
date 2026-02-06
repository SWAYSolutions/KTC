'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Product Grid Component
 * Filterable product display with category and partner filters
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Grid, List, ArrowRight } from 'lucide-react';
import { Button, Badge, Card } from '@/components/ui';
import { type Product, type ProductCategory } from '@/types';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  categories: { id: ProductCategory; name: string; description: string }[];
}

export function ProductGrid({ products, categories }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [activePartner, setActivePartner] = useState<string | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
      const partnerMatch = activePartner === 'all' || product.partner === activePartner;
      return categoryMatch && partnerMatch;
    });
  }, [products, activeCategory, activePartner]);

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              activeCategory === 'all'
                ? 'bg-gold text-charcoal'
                : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
            )}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-gold text-charcoal'
                  : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-4">
          {/* Partner Filter */}
          <select
            value={activePartner}
            onChange={(e) => setActivePartner(e.target.value)}
            className="px-4 py-2 rounded-lg border border-charcoal-200 bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            <option value="all">All Partners</option>
            <option value="kitchen-craft">Kitchen Craft</option>
            <option value="triangle-kitchens">Triangle Kitchens</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex border border-charcoal-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                'p-2 transition-colors',
                viewMode === 'grid' ? 'bg-charcoal text-white' : 'bg-white text-charcoal hover:bg-charcoal-50'
              )}
              aria-label="Grid view"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                'p-2 transition-colors',
                viewMode === 'list' ? 'bg-charcoal text-white' : 'bg-white text-charcoal hover:bg-charcoal-50'
              )}
              aria-label="List view"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-charcoal-500 mb-6">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      {/* Products Grid */}
      <motion.div
        layout
        className={cn(
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        )}
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {viewMode === 'grid' ? (
                <ProductCard product={product} />
              ) : (
                <ProductListItem product={product} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-charcoal-500 text-lg mb-4">No products match your filters.</p>
          <Button
            variant="outline"
            onClick={() => {
              setActiveCategory('all');
              setActivePartner('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}

// Product Card Component (Grid View)
function ProductCard({ product }: { product: Product }) {
  return (
    <Card variant="elevated" padding="none" hover className="group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {product.isNew && <Badge variant="gold">New</Badge>}
          {product.isFeatured && <Badge variant="sage">Featured</Badge>}
        </div>
        {/* Partner Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-charcoal">
            {product.partner === 'kitchen-craft' ? 'Kitchen Craft' : 'Triangle Kitchens'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <span className="text-gold text-sm font-medium uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-xl font-serif font-semibold text-charcoal mt-1 mb-2">
          {product.name}
        </h3>
        <p className="text-charcoal-500 text-sm line-clamp-2 mb-4">
          {product.shortDescription}
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <Link href={`/products/${product.partner}/${product.id}`} className="flex-1">
            <Button variant="primary" size="sm" className="w-full group/btn">
              View Details
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

// Product List Item Component (List View)
function ProductListItem({ product }: { product: Product }) {
  return (
    <Card variant="outlined" padding="none" className="flex flex-col md:flex-row overflow-hidden hover:border-gold/50 transition-colors">
      <div className="relative w-full md:w-64 aspect-video md:aspect-square flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 256px"
        />
        {product.isNew && (
          <div className="absolute top-3 left-3">
            <Badge variant="gold">New</Badge>
          </div>
        )}
      </div>

      <div className="flex-1 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
          <div>
            <span className="text-gold text-sm font-medium uppercase tracking-wider">
              {product.category} • {product.partner === 'kitchen-craft' ? 'Kitchen Craft' : 'Triangle Kitchens'}
            </span>
            <h3 className="text-xl font-serif font-semibold text-charcoal mt-1">
              {product.name}
            </h3>
          </div>
        </div>

        <p className="text-charcoal-500 mb-4">{product.shortDescription}</p>

        {/* Features Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="px-2 py-1 bg-charcoal-50 rounded text-xs text-charcoal-600">
              {feature}
            </span>
          ))}
          {product.features.length > 3 && (
            <span className="px-2 py-1 text-xs text-charcoal-400">
              +{product.features.length - 3} more
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <Link href={`/products/${product.partner}/${product.id}`}>
            <Button variant="primary" size="sm" className="group">
              View Details
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
