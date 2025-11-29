import { Product } from '@/types/product'

interface FeaturesSectionProps {
  product: Product
}

export function FeaturesSection({ product }: FeaturesSectionProps) {
  const featureIcons = ['💧', '🔇', '⚡', '💡', '🔄', '🌊']

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why You'll Love It
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Designed for modern living with features that make your life easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.features.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{featureIcons[i] || '✨'}</div>
              <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              <p className="text-neutral-600 text-sm">
                {getFeatureDescription(feature)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getFeatureDescription(feature: string): string {
  const descriptions: Record<string, string> = {
    'USB-powered for portability': 'Plug into any USB port - laptop, power bank, or wall adapter. Perfect for on-the-go use.',
    'Whisper-quiet 26dB operation': 'Quieter than a library whisper. Won\'t disturb your sleep, work, or study sessions.',
    'Auto shut-off safety feature': 'Automatically turns off when water is low, protecting the device and ensuring safety.',
    'Cute ambient LED light': 'Soft, soothing LED light creates the perfect ambiance for any room.',
    '360° adjustable mist nozzle': 'Direct the mist exactly where you need it with our flexible nozzle design.',
    'Top-fill design - no spills': 'Easy refilling without the mess. Just lift the lid and pour.',
  }
  return descriptions[feature] || 'A great feature that enhances your experience.'
}
