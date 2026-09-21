import React from 'react'
import { Zap, TrendingUp, Users, CheckCircle2, ArrowRight } from 'lucide-react'
import { TextCascade } from './TextCascade'
import { CountUp } from '../hooks/useCountUp'

export const DigitalChallenges: React.FC = () => {
  const stats = [
    {
      numVal: 3,
      suffix: 'x',
      prefix: '',
      label: 'Faster Load Times',
      sub: 'Visitors never wait. Your website opens in under 2 seconds on every mobile phone.',
      icon: Zap,
    },
    {
      numVal: 40,
      prefix: '+',
      suffix: '%',
      label: 'More Customer Inquiries',
      sub: 'Clear buttons and forms that make it easy for visitors to call and request a quote.',
      icon: TrendingUp,
    },
    {
      numVal: 50,
      prefix: '',
      suffix: '+',
      label: 'Businesses Supported',
      sub: 'Helping local businesses get online, look professional, and attract paying customers.',
      icon: Users,
    },
    {
      numVal: 100,
      prefix: '',
      suffix: '%',
      label: 'Mobile Friendly',
      sub: 'Looks clean and works smoothly on every iPhone, Android, tablet, and computer.',
      icon: CheckCircle2,
    }
  ]

  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-[#ffff]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD4F5] shadow-sm text-xs font-semibold text-[#6754E9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6754E9]" />
              <span>Real Results For Your Business</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#130B2B] mt-4 leading-tight">
              <TextCascade
                segments={[
                  { text: 'Built to Bring In Customers.' },
                  { text: 'Simple, Fast & Reliable.', className: 'text-[#5B5370] font-normal', breakBefore: true },
                ]}
              />
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#5B5370] text-sm sm:text-base leading-relaxed">
              Most business websites fail at one simple thing: <strong className="text-[#130B2B] font-bold">getting people to reach out. We fix that.</strong>
            </p>
            <p className="text-[#5B5370] text-xs sm:text-sm leading-relaxed mt-2">
              We design simple, high-performing websites with direct call buttons and quick quote forms so you turn visitors into paying customers.
            </p>
          </div>
        </div>

        {/* 4 Performance Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div 
                key={idx}
                className="ordina-card reveal-stagger-card rounded-3xl p-7 flex flex-col justify-between group bg-white border border-[#DDD4F5]"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#130B2B] group-hover:text-[#6754E9] transition-colors">
                      <CountUp end={stat.numVal} prefix={stat.prefix} suffix={stat.suffix} duration={1600} />
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#F8F6FF] border border-[#DDD4F5] text-[#6754E9] flex items-center justify-center group-hover:bg-[#6754E9] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#130B2B] mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B5370] leading-relaxed font-normal">
                    {stat.sub}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DDD4F5] flex items-center gap-1.5 text-[11px] font-semibold text-[#5B5370] group-hover:text-[#6754E9] transition-colors">
                  <span>Proven Benefit</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bento Feature Showcase Banner */}
        <div className="ordina-card-dark rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl relative overflow-hidden animated-surface bg-[#130B2B]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#6754E9]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#C4B5FD] mb-4 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD] animate-pulse" />
                <span>Zero Technical Headaches</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Built to bring you customers, not confusion.
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                We handle everything from start to finish—design, simple wording, mobile optimization, and setting up your domain. You focus on running your business while your website works for you 24/7.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-left">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-bold text-white mb-1">&lt; 2s</div>
                <div className="text-xs text-slate-400 font-medium">Fast Mobile Speed</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-bold text-[#C4B5FD] mb-1">100%</div>
                <div className="text-xs text-slate-400 font-medium">Mobile Friendly</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-bold text-white mb-1">14 Days</div>
                <div className="text-xs text-slate-400 font-medium">Fast Turnaround</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-bold text-[#C4B5FD] mb-1">24/7</div>
                <div className="text-xs text-slate-400 font-medium">Customer Inquiries</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
