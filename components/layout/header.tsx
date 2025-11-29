'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[var(--primary)]">
              Mini Humidifier
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-neutral-700 hover:text-[var(--primary)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/faq"
              className="text-neutral-700 hover:text-[var(--primary)] transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/support"
              className="text-neutral-700 hover:text-[var(--primary)] transition-colors"
            >
              Support
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary-dark)] transition-colors"
            >
              Buy Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-neutral-200">
            <Link
              href="/"
              className="block py-2 text-neutral-700 hover:text-[var(--primary)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/faq"
              className="block py-2 text-neutral-700 hover:text-[var(--primary)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/support"
              className="block py-2 text-neutral-700 hover:text-[var(--primary)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              href="/"
              className="block w-full text-center px-6 py-3 rounded-lg bg-[var(--primary)] text-white font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
