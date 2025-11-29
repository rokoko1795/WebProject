export default function RefundPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Refund & Shipping Policy</h1>

        <div className="prose prose-neutral max-w-none space-y-6">
          <p className="text-neutral-600">
            <em>Last updated: {new Date().toLocaleDateString()}</em>
          </p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-neutral-700">
              We stand behind our product. If you're not completely satisfied with your mini
              humidifier, return it within 30 days for a full refund, no questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">How to Request a Refund</h2>
            <ol className="list-decimal list-inside space-y-2 text-neutral-700">
              <li>Contact our support team at support@minihumidifier.com</li>
              <li>Provide your order number and reason for return</li>
              <li>We'll send you a prepaid return label</li>
              <li>Ship the product back in its original packaging</li>
              <li>Receive your refund within 5-7 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Information</h2>
            <p className="text-neutral-700 mb-4">
              <strong>Free Shipping:</strong> We offer free shipping on all orders within the
              continental United States.
            </p>
            <p className="text-neutral-700 mb-4">
              <strong>Processing Time:</strong> Orders are processed and shipped within 1-2
              business days.
            </p>
            <p className="text-neutral-700">
              <strong>Delivery Time:</strong> Most orders arrive within 3-5 business days after
              shipment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Damaged or Defective Items</h2>
            <p className="text-neutral-700">
              If your item arrives damaged or defective, contact us immediately at
              support@minihumidifier.com. We'll send a replacement at no cost or issue a full
              refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Warranty</h2>
            <p className="text-neutral-700">
              All products come with a 1-year manufacturer warranty covering defects in materials
              and workmanship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Questions?</h2>
            <p className="text-neutral-700">
              Contact our support team at support@minihumidifier.com or visit our{' '}
              <a href="/support" className="text-[var(--primary)] hover:underline">
                Support page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
