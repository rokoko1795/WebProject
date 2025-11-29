import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl font-bold text-[var(--primary)] mb-4">
              Mini Humidifier
            </div>
            <p className="text-neutral-600 text-sm max-w-md">
              Instant moisture for your desk, bedroom, and small rooms.
              Compact, quiet, and stylish.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-[var(--primary)] text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-600 hover:text-[var(--primary)] text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-neutral-600 hover:text-[var(--primary)] text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy" className="text-neutral-600 hover:text-[var(--primary)] text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-neutral-600 hover:text-[var(--primary)] text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/refund" className="text-neutral-600 hover:text-[var(--primary)] text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-200">
          <p className="text-neutral-500 text-sm text-center">
            © {new Date().getFullYear()} Mini Humidifier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
