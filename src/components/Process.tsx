import React from 'react'
import { MessageSquare, Layout, CheckCircle2, Rocket, ArrowRight } from 'lucide-react'
import { TextCascade } from './TextCascade'

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      name: 'Chat About Your Business',
      desc: 'We start with a friendly chat to understand your services, your ideal customers, and what you want your website to achieve.',
      icon: MessageSquare
    },
    {
      num: '02',
      name: 'We Design & Build It',
      desc: 'We craft a clean, mobile-ready website with simple words, clear pricing or services, and easy click-to-call buttons.',
      icon: Layout
    },
    {
      num: '03',
      name: 'Review & Easy Tweaks',
      desc: 'You test the website on your smartphone and laptop. We make any tweaks or updates you need until you are 100% happy.',
      icon: CheckCircle2
    },
    {
      num: '04',
      name: 'Launch & Get Customers',
      desc: 'We connect your domain, configure your contact forms, launch the site live, and make sure local customers can find you.',
      icon: Rocket
    }
  ]

  return (
    <section id="process" className="py-24 bg-[#ffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD4F5] shadow-sm text-xs font-semibold text-[#6754E9] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6754E9]" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#130B2B] tracking-tight">
            <TextCascade
              segments={[
                { text: 'From Idea to Live Site in' },
                { text: '4 Simple Steps.', className: 'text-[#5B5370] font-normal' },
              ]}
            />
          </h2>
          <p className="text-[#5B5370] text-sm sm:text-base max-w-xl mt-3 leading-relaxed">
            No technical confusion or complicated jargon. Just a clear, straightforward path to getting your business online.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="ordina-card reveal-stagger-card rounded-3xl p-7 flex flex-col justify-between group relative bg-white border border-[#DDD4F5]"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-extrabold text-[#130B2B] group-hover:text-[#6754E9] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#F8F6FF] border border-[#DDD4F5] flex items-center justify-center text-[#6754E9] group-hover:bg-[#6754E9] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#130B2B] mb-2 transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B5370] leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DDD4F5] flex items-center gap-1.5 text-xs font-semibold text-[#5B5370] group-hover:text-[#6754E9] transition-colors">
                  <span>Phase {step.num}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
