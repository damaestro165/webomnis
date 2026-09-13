import React from 'react'
import { ArrowRight, Globe2, Star, Zap, CheckCircle2 } from 'lucide-react'
import { TextCascade } from './TextCascade'
import { CountUp } from '../hooks/useCountUp'

interface HeroProps {
  onOpenConsultation?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden bg-[#01283C] text-white pt-16 pb-24 md:pt-24 md:pb-32 border-b border-[#083247]">
      {/* Ordina atmospheric ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#006092]/30 via-[#01283C]/20 to-transparent blur-3xl pointer-events-none -z-10 rounded-full animate-ambient-sweep" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#CBFF97]/5 rounded-full blur-3xl pointer-events-none -z-10 animate-ambient-drift" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ordina Eyebrow Badge */}
        <div className="motion-pop inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-sm text-xs font-semibold text-[#CBFF97] mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CBFF97] animate-pulse"></span>
          <span className="tracking-wide">High-Converting Web Architecture</span>
        </div>

        {/* Main Headline (Ordina White Display Typography) */}
        <h1 className="motion-rise motion-delay-1 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6">
          <span className="sr-only">
          Your Website Should Make You Money -{' '}
          <br className="hidden sm:inline" />
          <span className="text-[#CBFF97]">
            Not Just Look Good.
          </span>
          </span>
          <TextCascade
            active
            segments={[
              { text: 'Your Website Should Make You Money -' },
              { text: 'Not Just Look Good.', className: 'text-[#CBFF97]', breakBefore: true },
            ]}
          />
        </h1>

        {/* Subtitle */}
        <p className="motion-rise motion-delay-2 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          We engineer lightning-fast e-commerce platforms and custom web apps using modern tech stacks to drive sales, streamline operations, and scale your business.
        </p>

        {/* Ordina Dual CTA Pill Action Bar */}
        <div className="motion-rise motion-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
          <a
            href="#contact"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#CBFF97] hover:bg-[#bdfd7f] text-[#01283C] font-bold text-sm transition-all duration-300 shadow-lg shadow-[#CBFF97]/10 active:scale-98 group cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-[#01283C] group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://calendly.com/adeniyiabayomi16/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all duration-300"
          >
            <span>Book Strategy Call</span>
          </a>
        </div>

        {/* Bento Visual Cards Grid: Calm 2-Card Layout (1-Wide Architecture + 1-Side Revenue) */}
        <div className="relative max-w-5xl mx-auto mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* 1. Wide Card (md:col-span-7): High-Performance Architecture Engine */}
            <div className="motion-card motion-delay-4 md:col-span-7 rounded-3xl bg-white p-7 sm:p-8 flex flex-col justify-between ordina-card relative overflow-hidden group text-left">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#01283C] bg-[#FAFAFA] px-3 py-1 rounded-full border border-slate-200/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Edge-Rendered Architecture
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    <CountUp end={0.38} decimals={2} suffix="s LCP" duration={1200} />
                  </span>
                </div>

                {/* Performance Metrics Block */}
                <div className="bg-[#FAFAFA] rounded-2xl p-5 border border-slate-100/80 mb-5">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold text-[#083247]">Core Web Vitals Audit</span>
                    <span className="text-xs font-black text-emerald-600 font-mono">
                      <CountUp end={100} duration={1500} /> / 100
                    </span>
                  </div>
                  {/* Performance bar */}
                  <div className="w-full h-2 bg-slate-200/70 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full animate-fill-bar" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-2.5 font-mono">
                    <span>Performance 100</span>
                    <span>SEO 100%</span>
                    <span>Best Practices 100</span>
                  </div>
                </div>

                {/* Stack Chips Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="flex flex-col py-2 px-3 rounded-xl bg-white border border-slate-100">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Engine Stack</span>
                    <span className="font-bold text-[#01283C] text-xs mt-0.5">Next.js 15 + React 19</span>
                  </div>
                  <div className="flex flex-col py-2 px-3 rounded-xl bg-white border border-slate-100">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Edge Latency</span>
                    <span className="font-bold text-emerald-600 font-mono text-xs mt-0.5">&lt; 14ms Global</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Infrastructure Tier</span>
                <span className="font-semibold text-[#083247]">Enterprise Zero-Bloat Code</span>
              </div>
            </div>

            {/* 2. Side Card (md:col-span-5): Deep Navy Revenue Acceleration Card */}
            <div className="motion-card motion-delay-5 md:col-span-5 rounded-3xl bg-[#01283C] text-white p-7 sm:p-8 flex flex-col justify-between ordina-card-dark relative group text-left">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#CBFF97] bg-[#083247] px-3 py-1 rounded-full border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CBFF97]" />
                    Revenue Surge
                  </span>
                  <span className="text-[11px] text-[#CBFF97] font-mono font-bold">
                    <CountUp end={68} prefix="+" suffix="% Avg" duration={1800} />
                  </span>
                </div>

                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1">
                  Commercial Impact
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2.5">
                  Built to Perform. Designed to Convert.
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Turning passive visitors into paying customers with conversion-focused UX and sub-second page speed.
                </p>
              </div>

              <div>
                <a 
                  href="#contact"
                  className="w-full py-3.5 px-5 rounded-2xl bg-[#CBFF97] hover:bg-[#b8f580] text-[#01283C] font-extrabold text-xs transition-all flex items-center justify-between group/btn shadow-sm active:scale-98"
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CBFF97]" />
                  <span>30-min discovery / Zero obligation</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Social Proof Strip below Hero (from former design) */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 text-white text-xs font-semibold">
          {/* Google rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-white font-bold">
              <CountUp end={5.0} decimals={1} duration={1200} /> on Google
            </span>
          </div>

          <span className="hidden sm:block h-1 w-1 rounded-full bg-white/35" />

          {/* Clients Served */}
          <div className="flex items-center gap-1.5">
            <span className="text-white font-bold text-sm">
              <CountUp end={50} suffix="+" duration={1400} />
            </span>
            <span className="text-white font-normal">Clients Served</span>
          </div>

          <span className="hidden sm:block h-1 w-1 rounded-full bg-white/35" />

          {/* Client Satisfaction */}
          <div className="flex items-center gap-1.5">
            <span className="text-white font-bold text-sm">
              <CountUp end={98} suffix="%" duration={1600} />
            </span>
            <span className="text-white font-normal">Client Satisfaction</span>
          </div>

          <span className="hidden sm:block h-1 w-1 rounded-full bg-white/35" />

          {/* Location */}
          <div className="flex items-center gap-1.5 text-white">
            <Globe2 className="w-3.5 h-3.5 text-[#CBFF97]" />
            <span className="font-semibold text-white">Lagos / Available Worldwide</span>
          </div>
        </div>

      </div>
    </section>
  )
}
