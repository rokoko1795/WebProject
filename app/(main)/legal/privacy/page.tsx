export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-neutral max-w-none space-y-6">
          <p className="text-neutral-600">
            <em>Last updated: {new Date().toLocaleDateString()}</em>
          </p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-neutral-700">
              We collect information you provide directly to us, such as when you create an account,
              make a purchase, or contact us for support. This includes your name, email address,
              shipping address, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-neutral-700">
              We use the information we collect to process your orders, communicate with you about
              your purchases, and improve our products and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-neutral-700">
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information with service providers who assist us in operating our website
              and processing orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="text-neutral-700">
              We implement appropriate security measures to protect your personal information.
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p className="text-neutral-700">
              You have the right to access, correct, or delete your personal information. Contact
              us at privacy@minihumidifier.com to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
            <p className="text-neutral-700">
              If you have questions about this Privacy Policy, please contact us at
              support@minihumidifier.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
