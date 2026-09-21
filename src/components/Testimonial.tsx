import React from 'react'
import { Star, Quote, CheckCircle2 } from 'lucide-react'
import { TextCascade } from './TextCascade'

export const Testimonial: React.FC = () => {
  const testimonials = [
    {
      text: 'Our website went from just existing to actually generating consistent sales. The difference was immediate: we saw a 68% jump in online orders within the first month.',
      name: 'Sarah Mitchell',
      role: 'CEO',
      company: 'Luma Brands',
      result: '+68% online orders in month 1',
      avatar: 'S'
    },
    {
      text: 'They understood exactly what we needed and delivered a platform that exceeded every expectation. Our prescription processing time dropped from 2 days to under 4 hours.',
      name: 'James Okoye',
      role: 'Founder',
      company: 'Vault Inc.',
      result: '12x faster prescription processing',
      avatar: 'J'
    },
    {
      text: 'We saw a huge improvement in user engagement and conversions within weeks. Our bounce rate fell by nearly half, and our average session time doubled.',
      name: 'Amara Diallo',
      role: 'Head of Growth',
      company: 'Belara Shop',
      result: '-44% bounce rate / 2x session time',
      avatar: 'A'
    }
  ]

  return (
    <section id="reviews" className="py-24 bg-[#ffff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD4F5] shadow-sm text-xs font-semibold text-[#130B2B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6754E9]" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#130B2B] tracking-tight">
            <TextCascade
              segments={[
                { text: 'What our clients' },
                { text: 'say about us.', className: 'text-[#5B5370] font-normal' },
              ]}
            />
          </h2>
          <p className="text-[#5B5370] text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Hear how our conversion-focused architecture and rapid execution delivered measurable growth for ambitious brands.
          </p>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="ordina-card reveal-stagger-card rounded-3xl p-8 flex flex-col justify-between group bg-white border border-[#DDD4F5]"
              style={{ transitionDelay: `${idx * 90}ms` }}
            >
              <div>
                {/* Result Pill Badge */}
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#130B2B] bg-[#F8F6FF] px-3 py-1 rounded-full border border-[#DDD4F5] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{t.result}</span>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[#5B5370] text-sm sm:text-base leading-relaxed mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-[#DDD4F5] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#6754E9] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#130B2B] text-sm">{t.name}</div>
                  <div className="text-xs text-[#5B5370] font-medium">
                    {t.role} / {t.company}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
