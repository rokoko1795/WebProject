export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-neutral max-w-none space-y-6">
          <p className="text-neutral-600">
            <em>Last updated: {new Date().toLocaleDateString()}</em>
          </p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-neutral-700">
              By accessing and using this website, you accept and agree to be bound by the terms
              and conditions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Products and Services</h2>
            <p className="text-neutral-700">
              All products and services are subject to availability. We reserve the right to
              discontinue any product or service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Pricing</h2>
            <p className="text-neutral-700">
              Prices are subject to change without notice. We reserve the right to modify or
              discontinue products without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Conduct</h2>
            <p className="text-neutral-700">
              You agree not to use the website for any unlawful purpose or any purpose prohibited
              by these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-neutral-700">
              We shall not be liable for any indirect, incidental, special, or consequential
              damages arising out of or in connection with your use of our products or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Information</h2>
            <p className="text-neutral-700">
              For questions about these Terms of Service, contact us at support@minihumidifier.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
