import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { TextCascade } from './TextCascade'

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How much will a website cost for my business?',
      answer: 'We provide clear, upfront pricing with zero hidden fees. After a quick 15-minute chat to understand what your business needs (a simple professional site vs. an online store), we give you a fixed, transparent quote before starting any work.'
    },
    {
      question: 'How long until my website is live?',
      answer: 'Most standard business websites and e-commerce stores are ready in as little as 14 days. We give you an exact launch date on day one and keep you updated at each stage so you are never left guessing.'
    },
    {
      question: 'Do I need to write all the text and content myself?',
      answer: "Not at all. If you have text and photos ready, that's great. If not, we can write simple, compelling text for your services and provide professional imagery so your business looks credible from day one."
    },
    {
      question: 'Will my website look great and load fast on mobile phones?',
      answer: 'Yes, 100%. Over 70% of your customers will visit using their smartphones. We optimize every page so it loads in under 2 seconds on mobile and makes calling or messaging your business as easy as a single tap.'
    },
    {
      question: 'Can you redesign or fix my existing website?',
      answer: 'Yes! We regularly take slow or outdated websites and transform them into modern, professional sales channels. You keep your domain name, existing business emails, and Google search ranking.'
    },
    {
      question: 'What do I need to get started?',
      answer: 'Just reach out to us! You do not need to know any technical details. Tell us about your business, the services you provide, and your goals. We handle domain setup, hosting, design, and launch.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-[#EEEBFF] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD4F5] shadow-sm text-xs font-semibold text-[#130B2B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6754E9]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#130B2B] tracking-tight">
            <TextCascade
              segments={[
                { text: 'Common' },
                { text: 'questions.', className: 'text-[#5B5370] font-normal' },
              ]}
            />
          </h2>
          <p className="text-[#5B5370] text-sm sm:text-base max-w-xl mt-3 leading-relaxed">
            Still have questions?{' '}
            <a href="#contact" className="font-semibold text-[#6754E9] hover:underline underline-offset-2">
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
                className={`ordina-card rounded-2xl transition-all duration-200 overflow-hidden bg-white border ${
                  isOpen ? 'border-[#6754E9]/40 shadow-md' : 'border-[#DDD4F5]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#130B2B] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-[#6754E9] text-white'
                        : 'bg-[#F8F6FF] border border-[#DDD4F5] text-[#130B2B]'
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
                  <div className="px-6 pb-6 pt-1 text-[#5B5370] text-xs sm:text-sm leading-relaxed border-t border-[#DDD4F5] animate-fadeIn">
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
