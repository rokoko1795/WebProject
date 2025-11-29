'use client'

import { product } from '@/lib/data/product-data'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { getUrlParams, getCouponCode } from '@/lib/utils/url-params'
import { trackPageView } from '@/lib/utils/analytics'

export default function TikTokDealPage() {
  const [quantity, setQuantity] = useState(1)
  const [couponCode, setCouponCode] = useState<string | undefined>()
  const discount = 0.1 // 10% discount for TikTok
  const discountedPrice = product.price * (1 - discount)
  const total = discountedPrice * quantity

  useEffect(() => {
    // Track page view with TikTok source
    trackPageView('tt-deal', 'tiktok')

    // Auto-apply coupon from URL
    const code = getCouponCode()
    if (code) {
      setCouponCode(code)
    }
  }, [])

  const handleBuyNow = () => {
    // This would integrate with your checkout system
    // For now, it's a placeholder
    console.log('Buy now clicked', { quantity, total, source: 'tiktok' })
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* TikTok Badge */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-full">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
          </svg>
          As Seen on TikTok
        </div>
      </div>

      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-white via-[var(--primary-light)]/20 to-[var(--primary)]/30 rounded-2xl p-6 mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-neutral-300 text-6xl">📷</div>
        </div>
        {/* Urgency badge */}
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Limited Stock!
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.short_name}</h1>
          <p className="text-neutral-600">{product.description}</p>
        </div>

        {/* Quick Benefits */}
        <div className="flex flex-wrap gap-2">
          {product.features.slice(0, 3).map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="bg-[var(--primary)]/5 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-neutral-600 mb-1">TikTok Exclusive Price</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[var(--primary)]">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-lg text-neutral-400 line-through">
                  ${product.price}
                </span>
                <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded">
                  SAVE {Math.round(discount * 100)}%
                </span>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full border-2 border-neutral-300 flex items-center justify-center hover:border-[var(--primary)] transition-colors"
              >
                -
              </button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(5, quantity + 1))}
                className="w-8 h-8 rounded-full border-2 border-neutral-300 flex items-center justify-center hover:border-[var(--primary)] transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between text-lg font-semibold border-t border-neutral-200 pt-4">
            <span>Total:</span>
            <span className="text-2xl text-[var(--primary)]">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          fullWidth
          onClick={handleBuyNow}
          className="text-lg py-6 shadow-lg"
        >
          Buy Now - Checkout in Seconds 🚀
        </Button>

        {/* Social Proof */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold">4.4/5</span>
            <span className="text-sm text-neutral-600">(509 reviews)</span>
          </div>
          <p className="text-sm text-neutral-600">
            <strong>157 people</strong> bought this today
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 text-sm text-neutral-600 py-4 border-t border-neutral-200">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Free Shipping
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            30-Day Guarantee
          </div>
        </div>

        {/* Micro FAQ */}
        <details className="border border-neutral-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">How long does it run?</summary>
          <p className="mt-2 text-sm text-neutral-600">
            Up to 35 hours on a single fill!
          </p>
        </details>

        <details className="border border-neutral-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Is it quiet enough for sleeping?</summary>
          <p className="mt-2 text-sm text-neutral-600">
            Yes! At just 26dB, it's quieter than a whisper.
          </p>
        </details>

        <details className="border border-neutral-200 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">What if I don't like it?</summary>
          <p className="mt-2 text-sm text-neutral-600">
            30-day money-back guarantee, no questions asked!
          </p>
        </details>
      </div>
    </div>
  )
}
