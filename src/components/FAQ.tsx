import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { TextCascade } from './TextCascade'

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long does a project take?',
      answer: 'Most projects take between 2-6 weeks. Starter sites are typically delivered in 14 days. Custom web apps and e-commerce builds take 3-6 weeks. We will give you a firm timeline before we begin, and we keep you updated at every milestone so there are no surprises.'
    },
    {
      question: 'Will this actually increase my sales?',
      answer: "That's exactly what we build for. Every decision, layout, copy structure, load speed, and CTAs, is made with conversion in mind. Our clients have seen results like +68% conversion rates and 2x revenue within the first month. That said, results depend on your product, traffic, and market. We'll be honest with you if we think your bottleneck isn't your website."
    },
    {
      question: 'Can you redesign an existing website?',
      answer: "Absolutely. Redesigns are actually one of our most common projects. We start with a full audit of your current site to identify exactly what's hurting your conversions, then rebuild with a clear strategy to fix it. You keep your domain, your content (if it's working), and your SEO equity. We just make everything perform better."
    },
    {
      question: 'Do you work with small businesses or only large companies?',
      answer: "We work with ambitious businesses of all sizes. What matters to us is that you're serious about growth, not your company size."
    },
    {
      question: 'What do you need from me to get started?',
      answer: 'We simply need an overview of your business, your design preferences, and your ready-to-go text and images. If you need help purchasing a domain and hosting, we can handle that too. Once those pieces are in place, we start building right away!'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAEAEA] shadow-sm text-xs font-semibold text-[#01283C] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#01283C]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#083247] tracking-tight">
            <TextCascade
              segments={[
                { text: 'Common' },
                { text: 'questions.', className: 'text-[#737373] font-normal' },
              ]}
            />
          </h2>
          <p className="text-[#737373] text-sm sm:text-base max-w-xl mt-3 leading-relaxed">
            Still have questions?{' '}
            <a href="#contact" className="font-semibold text-[#083247] hover:underline underline-offset-2">
              Book a free call
            </a>{' '}
            - we&apos;ll answer everything.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`ordina-card rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#01283C]/20 shadow-md' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#083247] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-[#01283C] text-[#CBFF97]'
                        : 'bg-[#FAFAFA] border border-[#EAEAEA] text-[#01283C]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[#737373] text-xs sm:text-sm leading-relaxed border-t border-[#F0F0F0] animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
