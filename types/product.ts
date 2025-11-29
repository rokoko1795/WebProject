export interface ProductVariant {
  id: string
  name: string
  color: string
  image_url: string
  stock: number
  is_available: boolean
}

export interface Product {
  id: string
  name: string
  short_name: string
  description: string
  price: number
  compare_at_price?: number
  images: string[]
  variants?: ProductVariant[]
  features: string[]
  specs: Record<string, string>
  whats_in_box: string[]
  shipping_info: string
  guarantee_text: string
  rating?: number
  review_count?: number
}

export interface Review {
  id: string
  product_id: string
  name: string
  initials: string
  rating: number
  text: string
  verified: boolean
  created_at: string
}

export interface AnalyticsEvent {
  event_type: 'page_view' | 'add_to_cart' | 'checkout_start' | 'purchase'
  page?: string
  source?: string
  product_id?: string
  variant_id?: string
  value?: number
  metadata?: Record<string, any>
}
