'use client'

import { faqItems } from '@/lib/data/product-data'
import { useState } from 'react'

export default function FAQPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-neutral-600">
            Everything you need to know about our mini humidifier
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>

        <div className="mt-12 p-8 bg-[var(--primary)]/5 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-neutral-600 mb-6">
            Can't find the answer you're looking for? Please reach out to our friendly team.
          </p>
          <a
            href="/support"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary-dark)] transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        <svg
          className={`w-5 h-5 text-neutral-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
          <p className="text-neutral-700">{answer}</p>
        </div>
      )}
    </div>
  )
}
