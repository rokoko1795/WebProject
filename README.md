# Mini Humidifier - E-commerce Site

A Next.js-powered single-product e-commerce site optimized for TikTok Shop traffic, featuring a fast checkout funnel and mobile-first design.

## 🚀 Features

- **Dual Layout System**: Separate layouts for main site (with navigation) and TikTok funnel (minimal, conversion-focused)
- **Mobile-First Design**: Optimized for 360-430px mobile devices
- **Fast Checkout**: TikTok-exclusive landing page designed for impulse purchases
- **Modern Stack**: Next.js 14+, TypeScript, Tailwind CSS v4, Supabase
- **Analytics Ready**: Built-in event tracking for page views, cart actions, and purchases
- **SEO Optimized**: Proper metadata for main pages, noindex for TikTok funnel

## 📁 Project Structure

```
mini-humidifier/
├── app/
│   ├── (main)/              # Main site with navigation
│   │   ├── layout.tsx       # Layout with Header + Footer
│   │   ├── page.tsx         # Home/Product landing page
│   │   ├── faq/             # FAQ page
│   │   ├── support/         # Support page
│   │   └── legal/           # Legal pages (privacy, terms, refund)
│   ├── tt-deal/             # TikTok-only fast checkout
│   │   ├── layout.tsx       # Minimal layout (no nav)
│   │   └── page.tsx         # Fast checkout funnel
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles + design system
├── components/
│   ├── layout/              # Header, Footer
│   ├── product/             # Product-specific components
│   ├── sections/            # Reusable page sections
│   ├── checkout/            # Checkout flow components
│   └── ui/                  # Base UI components (Button, etc.)
├── lib/
│   ├── data/                # Product data model
│   ├── supabase/            # Supabase clients
│   └── utils/               # Utilities (analytics, URL params, etc.)
├── types/                   # TypeScript type definitions
└── public/
    └── images/              # Static assets
```

## 🎨 Design System

Built with Tailwind CSS v4, featuring:

- **Primary Color**: Teal/Turquoise (`--primary: #14b8a6`) - matches product aesthetic
- **High Contrast**: Bold accent colors on neutral backgrounds
- **Fluid Typography**: Responsive font sizes
- **Custom Variables**: CSS custom properties for colors, shadows, and radii

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **Analytics**: Custom tracking (ready for PostHog, Mixpanel, TikTok Pixel)

## 📦 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your credentials:

```bash
cp .env.local.example .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. View TikTok Funnel

Navigate to [http://localhost:3000/tt-deal](http://localhost:3000/tt-deal) to see the TikTok-optimized checkout page.

## 🔑 Key Pages

### Main Site (Public)

- `/` - Home/Product Landing
- `/faq` - Frequently Asked Questions
- `/support` - Customer Support
- `/legal/privacy` - Privacy Policy
- `/legal/terms` - Terms of Service
- `/legal/refund` - Refund & Shipping Policy

### TikTok Funnel (Hidden)

- `/tt-deal` - Fast checkout page (noindex, minimal layout)
  - Access via: `http://localhost:3000/tt-deal?src=tiktok&coupon=TT10`
  - Auto-applies coupon from URL params
  - Tracks TikTok source for analytics

## 🎯 TikTok Integration

The `/tt-deal` page is optimized for TikTok traffic:

1. **URL Parameters**:
   - `?src=tiktok` - Track source
   - `?coupon=TT10` - Auto-apply discount code
   - `?utm_campaign=xyz` - Campaign tracking

2. **SEO**:
   - `noindex, nofollow` meta tags
   - Excluded from sitemap
   - Not linked from main site navigation

3. **Analytics**:
   - Automatic page view tracking
   - TikTok Pixel integration ready
   - Event tracking for cart/checkout actions

## 📊 Analytics Events

Built-in tracking for:

- `page_view` - Track page visits with source
- `add_to_cart` - Product additions
- `checkout_start` - Checkout initiation
- `purchase` - Completed orders

Implement your analytics provider in `lib/utils/analytics.ts`.

## 🗄️ Supabase Schema (To Be Created)

Recommended tables:

```sql
-- Products
CREATE TABLE products (
  id UUID PRIMARY KEY,
  name TEXT,
  price NUMERIC,
  -- ... other fields
);

-- Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  customer_email TEXT,
  total NUMERIC,
  source TEXT, -- 'main' or 'tiktok'
  utm_params JSONB,
  created_at TIMESTAMP
);

-- Reviews
CREATE TABLE reviews (
  id UUID PRIMARY KEY,
  product_id UUID REFERENCES products(id),
  rating INTEGER,
  text TEXT,
  verified BOOLEAN
);
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

```bash
npm run build
```

## 📝 Customization

### Update Product Data

Edit `lib/data/product-data.ts` to update:
- Product name, price, features
- Reviews
- FAQ items
- Use cases

### Modify Colors

Update design tokens in `app/globals.css`:
```css
:root {
  --primary: #14b8a6;  /* Change accent color */
  --primary-dark: #0f766e;
  --primary-light: #5eead4;
}
```

### Add Product Images

Place images in `public/images/product/` and update paths in `product-data.ts`.

## 🔧 Next Steps

1. **Add Stripe Checkout**: Implement payment flow in `components/checkout/`
2. **Set Up Supabase**: Create tables and configure database
3. **Add Analytics**: Integrate TikTok Pixel, Google Analytics, or PostHog
4. **Product Images**: Replace placeholder images with real photos
5. **Email Notifications**: Set up order confirmations and shipping updates
6. **Inventory Management**: Connect to inventory system
7. **Testing**: Add unit and integration tests

## 📄 License

Private project - All rights reserved.

## 🤝 Support

For questions or issues, contact: support@minihumidifier.com

---

Built with ❤️ for TikTok impulse buyers
