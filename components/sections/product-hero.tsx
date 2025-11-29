import { Product } from '@/types/product'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface ProductHeroProps {
  product: Product
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative aspect-square bg-gradient-to-br from-white via-[var(--primary-light)]/20 to-[var(--primary)]/30 rounded-3xl p-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-neutral-300 text-6xl">📷</div>
              <div className="absolute bottom-4 left-4 text-sm text-neutral-500">
                Product image placeholder
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full">
              ✨ As Seen on TikTok
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {product.name}
            </h1>

            <p className="text-lg text-neutral-600">
              {product.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {product.features.slice(0, 4).map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              {product.compare_at_price && (
                <span className="text-2xl text-neutral-400 line-through">
                  ${product.compare_at_price}
                </span>
              )}
              <span className="text-4xl font-bold text-[var(--primary)]">
                ${product.price}
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg" fullWidth>
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center gap-6 text-sm text-neutral-600 pt-4 border-t border-neutral-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                30-Day Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
