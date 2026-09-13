import React from 'react'
import { Compass, Layout, Code2, Rocket, ArrowRight } from 'lucide-react'
import { TextCascade } from './TextCascade'

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      name: 'Understand Your Business',
      desc: 'We dive deep into your goals, challenges, and opportunities to identify where we can create the most commercial impact.',
      icon: Compass
    },
    {
      num: '02',
      name: 'Plan & Design',
      desc: 'We map out a conversion-focused structure and design an experience tailored to your audience and customer psychology.',
      icon: Layout
    },
    {
      num: '03',
      name: 'Build & Optimize',
      desc: 'Rapid, transparent engineering. We write clean, modern code while keeping you updated at every major milestone.',
      icon: Code2
    },
    {
      num: '04',
      name: 'Launch & Improve',
      desc: 'After launch, we monitor performance, load times, and customer funnels to continuously refine and maximize results.',
      icon: Rocket
    }
  ]

  return (
    <section id="process" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAEAEA] shadow-sm text-xs font-semibold text-[#01283C] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#01283C]" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#083247] tracking-tight">
            <TextCascade
              segments={[
                { text: 'A process built for' },
                { text: 'results.', className: 'text-[#737373] font-normal' },
              ]}
            />
          </h2>
          <p className="text-[#737373] text-sm sm:text-base max-w-xl mt-3 leading-relaxed">
            A streamlined 4-step framework engineered to take your website from strategic discovery to high-growth deployment.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="ordina-card reveal-stagger-card rounded-3xl p-7 flex flex-col justify-between group relative"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-extrabold text-[#01283C] group-hover:text-[#083247] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] flex items-center justify-center text-[#01283C] group-hover:bg-[#01283C] group-hover:text-[#CBFF97] transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#083247] mb-2 transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0F0F0] flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-[#083247] transition-colors">
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
