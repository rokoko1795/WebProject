import { Product } from '@/types/product'

interface SpecsSectionProps {
  product: Product
}

export function SpecsSection({ product }: SpecsSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Technical Specifications
        </h2>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-neutral-200">
          <div className="divide-y divide-neutral-200">
            {Object.entries(product.specs).map(([key, value], i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-4 px-6 py-4 hover:bg-neutral-50 transition-colors"
              >
                <div className="font-semibold text-neutral-700">{key}</div>
                <div className="text-neutral-600">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-[var(--primary)]/5 rounded-2xl p-6">
          <h3 className="font-semibold text-lg mb-3">What's in the Box</h3>
          <ul className="space-y-2">
            {product.whats_in_box.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-neutral-700">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
