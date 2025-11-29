import { Product, Review } from '@/types/product'

export const product: Product = {
  id: 'dreo-mini-humidifier-001',
  name: 'DREO Cool Mist Humidifier',
  short_name: 'Mini Humidifier',
  description: 'Compact USB-powered mini humidifier for desks, bedrooms, and small rooms. Instant moisture wherever you need it.',
  price: 17.99,
  compare_at_price: 24.99,
  images: [
    '/images/product/hero.png',
    '/images/product/angle-1.png',
    '/images/product/angle-2.png',
    '/images/product/detail.png',
  ],
  features: [
    'USB-powered for portability',
    'Whisper-quiet 26dB operation',
    'Auto shut-off safety feature',
    'Cute ambient LED light',
    '360° adjustable mist nozzle',
    'Top-fill design - no spills',
  ],
  specs: {
    'Capacity': '3.7L',
    'Runtime': 'Up to 35 hours',
    'Coverage': 'Up to 300 sq ft',
    'Noise Level': '26dB (whisper quiet)',
    'Dimensions': '7.68"D x 7.68"W x 11.1"H',
    'Power': 'USB-powered',
    'Technology': 'Ultrasonic',
    'Material': 'BPA-free plastic',
    'Mist Output': 'Adjustable 360° nozzle',
  },
  whats_in_box: [
    '1x Mini Humidifier',
    '1x USB Power Cable',
    '1x User Manual',
    '1x Cleaning Brush',
  ],
  shipping_info: 'Free shipping on all orders. Ships within 1-2 business days.',
  guarantee_text: '30-day money-back guarantee. 1-year warranty included.',
  rating: 4.4,
  review_count: 509,
}

export const reviews: Review[] = [
  {
    id: '1',
    product_id: 'dreo-mini-humidifier-001',
    name: 'Sarah M.',
    initials: 'SM',
    rating: 5,
    text: 'Perfect for my desk! Super quiet and the LED light is so cute.',
    verified: true,
    created_at: '2025-01-15',
  },
  {
    id: '2',
    product_id: 'dreo-mini-humidifier-001',
    name: 'Mike T.',
    initials: 'MT',
    rating: 4,
    text: 'Great value for the price. Runs all day without refilling.',
    verified: true,
    created_at: '2025-01-12',
  },
  {
    id: '3',
    product_id: 'dreo-mini-humidifier-001',
    name: 'Jessica L.',
    initials: 'JL',
    rating: 5,
    text: 'My baby sleeps so much better now. Highly recommend!',
    verified: true,
    created_at: '2025-01-10',
  },
  {
    id: '4',
    product_id: 'dreo-mini-humidifier-001',
    name: 'David K.',
    initials: 'DK',
    rating: 5,
    text: 'Compact and powerful. The USB power is a game changer.',
    verified: true,
    created_at: '2025-01-08',
  },
]

export const faqItems = [
  {
    question: 'How long does it run on a full tank?',
    answer: 'The 3.7L tank provides up to 35 hours of continuous mist, depending on your humidity settings.',
  },
  {
    question: 'Is it loud? Can I use it while sleeping?',
    answer: 'Operating at just 26dB, it\'s as quiet as a whisper. Perfect for bedrooms and nurseries.',
  },
  {
    question: 'What size room does it cover?',
    answer: 'It effectively humidifies rooms up to 300 square feet with the adjustable 360° mist nozzle.',
  },
  {
    question: 'How do I clean it?',
    answer: 'Simply rinse with water and wipe with a soft cloth. A cleaning brush is included for hard-to-reach areas.',
  },
  {
    question: 'Does it have an auto shut-off?',
    answer: 'Yes! It automatically shuts off when water runs low to prevent damage and ensure safety.',
  },
  {
    question: 'Can I use essential oils?',
    answer: 'Yes, there\'s a built-in aroma tray for essential oils (oils not included).',
  },
]

export const useCases = [
  {
    title: 'Desk',
    description: 'Stay comfortable while working',
    icon: '💻',
  },
  {
    title: 'Bedside',
    description: 'Sleep better with perfect humidity',
    icon: '🛏️',
  },
  {
    title: 'Kids Room',
    description: 'Safe and quiet for little ones',
    icon: '🧸',
  },
  {
    title: 'Travel',
    description: 'Compact enough to take anywhere',
    icon: '✈️',
  },
]
