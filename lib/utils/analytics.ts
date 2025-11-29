import { AnalyticsEvent } from '@/types/product'

/**
 * Analytics utility for tracking user events
 * Replace with your analytics provider (PostHog, Mixpanel, Google Analytics, etc.)
 */

export function trackEvent(event: AnalyticsEvent) {
  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event)
  }

  // TODO: Implement your analytics provider here
  // Examples:
  // - PostHog: posthog.capture(event.event_type, event)
  // - Mixpanel: mixpanel.track(event.event_type, event)
  // - Google Analytics: gtag('event', event.event_type, event)

  // TikTok Pixel tracking
  if (typeof window !== 'undefined' && (window as any).ttq) {
    const ttq = (window as any).ttq

    switch (event.event_type) {
      case 'page_view':
        ttq.page()
        break
      case 'add_to_cart':
        ttq.track('AddToCart', {
          content_id: event.product_id,
          content_type: 'product',
          value: event.value,
        })
        break
      case 'checkout_start':
        ttq.track('InitiateCheckout', {
          value: event.value,
          currency: 'USD',
        })
        break
      case 'purchase':
        ttq.track('CompletePayment', {
          value: event.value,
          currency: 'USD',
        })
        break
    }
  }
}

export function trackPageView(page: string, source?: string) {
  trackEvent({
    event_type: 'page_view',
    page,
    source,
  })
}

export function trackAddToCart(productId: string, variantId?: string, value?: number, source?: string) {
  trackEvent({
    event_type: 'add_to_cart',
    product_id: productId,
    variant_id: variantId,
    value,
    source,
  })
}

export function trackCheckoutStart(value: number, source?: string) {
  trackEvent({
    event_type: 'checkout_start',
    value,
    source,
  })
}

export function trackPurchase(value: number, metadata?: Record<string, any>) {
  trackEvent({
    event_type: 'purchase',
    value,
    metadata,
  })
}
