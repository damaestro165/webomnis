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
      sub: 'Through edge caching, asset compression, and optimized serverless architecture.',
      icon: Zap,
    },
    {
      numVal: 40,
      prefix: '+',
      suffix: '%',
      label: 'Increase in Conversions',
      sub: 'By implementing frictionless UX psychology, modern interfaces, and optimized CTAs.',
      icon: TrendingUp,
    },
    {
      numVal: 50,
      prefix: '',
      suffix: '+',
      label: 'Businesses Helped',
      sub: 'To scale their operations, automate workflows, and expand across global markets.',
      icon: Users,
    },
    {
      numVal: 100,
      prefix: '',
      suffix: '%',
      label: 'Custom-Built Solutions',
      sub: 'Tailored specifically directly to your complex business logic and operational goals.',
      icon: CheckCircle2,
    }
  ]

  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-[#FAFAFA]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAEAEA] shadow-sm text-xs font-semibold text-[#01283C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#01283C]" />
              <span>Real Results. Not Just Design.</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#083247] mt-4 leading-tight">
              <TextCascade
                segments={[
                  { text: 'Built to Perform.' },
                  { text: 'Designed to Convert.', className: 'text-[#737373] font-normal', breakBefore: true },
                ]}
              />
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#737373] text-sm sm:text-base leading-relaxed">
              Most websites fail at one thing: <strong className="text-[#083247] font-bold">turning visitors into customers. We fix that.</strong>
            </p>
            <p className="text-[#737373] text-xs sm:text-sm leading-relaxed mt-2">
              Every project we deliver is focused on speed, user experience, and conversion, so your business doesn&apos;t just look good online, it grows.
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
                className="ordina-card reveal-stagger-card rounded-3xl p-7 flex flex-col justify-between group"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#01283C] group-hover:text-[#083247] transition-colors">
                      <CountUp end={stat.numVal} prefix={stat.prefix} suffix={stat.suffix} duration={1600} />
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] text-[#01283C] flex items-center justify-center group-hover:bg-[#01283C] group-hover:text-[#CBFF97] transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#083247] mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed font-normal">
                    {stat.sub}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0F0F0] flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-[#083247] transition-colors">
                  <span>Audited Metric</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Ordina Bento Feature Showcase Banner */}
        <div className="ordina-card-dark rounded-3xl p-8 sm:p-10 border border-[#083247] shadow-xl relative overflow-hidden animated-surface">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#006092]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#CBFF97] mb-4 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CBFF97] animate-pulse" />
                <span>The WebOmnis Standard</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Engineered for speed, conversion rate, and revenue growth.
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                We replace outdated templates and heavy plugins with ultra-fast modern frameworks, conversion-psychology layouts, and automated sales pipelines.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-left">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-bold text-white mb-1">&lt; 0.5s</div>
                <div className="text-xs text-slate-400 font-medium">Global Time to Interactive</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-bold text-[#CBFF97] mb-1">98/100</div>
                <div className="text-xs text-slate-400 font-medium">Lighthouse Performance</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-slate-400 font-medium">TypeScript Clean Code</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-bold text-[#CBFF97] mb-1">14 Days</div>
                <div className="text-xs text-slate-400 font-medium">Concept to Deployment</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
