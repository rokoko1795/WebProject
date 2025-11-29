import { useCases } from '@/lib/data/product-data'

export function UseCasesSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perfect For Every Space
          </h2>
          <p className="text-lg text-neutral-600">
            From work to sleep, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {useCases.map((useCase, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[var(--primary-light)]/10 to-[var(--primary)]/5 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{useCase.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
              <p className="text-sm text-neutral-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
