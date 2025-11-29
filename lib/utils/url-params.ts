/**
 * Utility functions for handling URL parameters
 * Useful for tracking UTM params, coupons, and source attribution
 */

export interface UrlParams {
  source?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  coupon?: string
}

export function getUrlParams(): UrlParams {
  if (typeof window === 'undefined') return {}

  const searchParams = new URLSearchParams(window.location.search)

  return {
    source: searchParams.get('source') || searchParams.get('src') || undefined,
    utm_source: searchParams.get('utm_source') || undefined,
    utm_medium: searchParams.get('utm_medium') || undefined,
    utm_campaign: searchParams.get('utm_campaign') || undefined,
    utm_content: searchParams.get('utm_content') || undefined,
    utm_term: searchParams.get('utm_term') || undefined,
    coupon: searchParams.get('coupon') || searchParams.get('discount') || undefined,
  }
}

export function getSource(): string | undefined {
  const params = getUrlParams()
  return params.source || params.utm_source
}

export function getCouponCode(): string | undefined {
  const params = getUrlParams()
  return params.coupon
}

export function isTikTokSource(): boolean {
  const source = getSource()
  return source?.toLowerCase().includes('tiktok') || false
}

export function buildUrlWithParams(baseUrl: string, params: UrlParams): string {
  const url = new URL(baseUrl, window.location.origin)

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value)
    }
  })

  return url.toString()
}
