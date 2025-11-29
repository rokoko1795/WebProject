import { product } from '@/lib/data/product-data'
import { ProductHero } from '@/components/sections/product-hero'
import { FeaturesSection } from '@/components/sections/features-section'
import { UseCasesSection } from '@/components/sections/use-cases-section'
import { ReviewsSection } from '@/components/sections/reviews-section'
import { SpecsSection } from '@/components/sections/specs-section'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div>
      <ProductHero product={product} />
      <FeaturesSection product={product} />
      <UseCasesSection />
      <ReviewsSection />
      <SpecsSection product={product} />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Better Air Quality?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy customers. 30-day money-back guarantee.
          </p>
          <Button
            size="lg"
            className="bg-white text-[var(--primary)] hover:bg-neutral-100 text-lg px-12"
          >
            Get Yours Now - ${product.price}
          </Button>
        </div>
      </section>
    </div>
  )
}
