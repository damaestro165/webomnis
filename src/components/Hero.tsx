import React from 'react'
import { ArrowRight, Globe2, Star, Zap, CheckCircle2 } from 'lucide-react'
import { TextCascade } from './TextCascade'
import { CountUp } from '../hooks/useCountUp'

interface HeroProps {
  onOpenConsultation?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden bg-[#EEEBFF] text-[#130B2B] pt-16 pb-24 md:pt-24 md:pb-32 border-b border-[#DDD4F5]">
      {/* Soft lavender atmospheric ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#C4B5FD]/40 via-[#DDD4F5]/30 to-transparent blur-3xl pointer-events-none -z-10 rounded-full animate-ambient-sweep" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C4B5FD]/25 rounded-full blur-3xl pointer-events-none -z-10 animate-ambient-drift" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Badge */}
        <div className="motion-pop inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#DDD4F5] shadow-sm text-xs font-semibold text-[#6754E9] mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6754E9] animate-pulse"></span>
          <span className="tracking-wide">Website Agency</span>
        </div>

        {/* Main Headline */}
        <h1 className="motion-rise motion-delay-1 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#130B2B] max-w-4xl mx-auto leading-[1.08] mb-6">
          <span className="sr-only">
          Your Website Should Make You Money -{' '}
          <br className="hidden sm:inline" />
          <span className="text-[#6754E9]">
            Not Just Look Good.
          </span>
          </span>
          <TextCascade
            active
            segments={[
              { text: 'Your Website Should Make You Money -' },
              { text: 'Not Just Look Good.', className: 'text-[#6754E9]', breakBefore: true },
            ]}
          />
        </h1>

        {/* Subtitle */}
        <p className="motion-rise motion-delay-2 text-base sm:text-lg text-[#5B5370] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          We build fast, beautiful websites and online stores that turn visitors into phone calls, appointments, and paying customers.
        </p>

        {/* Dual CTA Pill Action Bar */}
        <div className="motion-rise motion-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
          <a
            href="#contact"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#6754E9] hover:bg-[#5542D0] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-[#6754E9]/25 active:scale-98 group cursor-pointer"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://calendly.com/adeniyiabayomi16/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F8F6FF] text-[#130B2B] font-semibold text-sm border border-[#DDD4F5] transition-all duration-300 shadow-sm"
          >
            <span>Book a Call</span>
          </a>
        </div>

        {/* Clean Center Feature Card (LCP card removed) */}
        <div className="relative max-w-3xl mx-auto mb-14">
          <div className="motion-card motion-delay-4 rounded-3xl bg-[#130B2B] text-white p-7 sm:p-9 ordina-card-dark relative text-left border border-white/10 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#C4B5FD] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD] animate-pulse" />
                Proven Results for Small Businesses
              </span>
              <span className="text-xs text-[#C4B5FD] font-mono font-bold bg-[#6754E9]/30 px-3 py-1 rounded-full border border-[#6754E9]/40">
                <CountUp end={68} prefix="+" suffix="% More Customer Inquiries" duration={1800} />
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
              Built to Bring In Customers. Ready in 14 Days.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              We build websites that look great on smartphones, load instantly, and make it simple for local customers to call, message, or order from you.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C4B5FD] shrink-0" />
                <span className="text-xs font-semibold text-white">Fast Mobile Loading</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C4B5FD] shrink-0" />
                <span className="text-xs font-semibold text-white">Click-to-Call Buttons</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C4B5FD] shrink-0" />
                <span className="text-xs font-semibold text-white">Easy for You to Update</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-white/10">
              <a 
                href="#contact"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#6754E9] hover:bg-[#5542D0] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn shadow-md active:scale-98"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#C4B5FD]" />
                <span>Zero technical jargon • Done-for-you launch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Strip below Hero */}
        <div className="pt-6 border-t border-[#DDD4F5] flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 text-[#130B2B] text-xs font-semibold">
          {/* Google rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-[#130B2B] font-bold">
              <CountUp end={5.0} decimals={1} duration={1200} /> on Google
            </span>
          </div>

          <span className="hidden sm:block h-1 w-1 rounded-full bg-[#DDD4F5]" />

          {/* Clients Served */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#130B2B] font-bold text-sm">
              <CountUp end={50} suffix="+" duration={1400} />
            </span>
            <span className="text-[#5B5370] font-normal">Clients Served</span>
          </div>

          <span className="hidden sm:block h-1 w-1 rounded-full bg-[#DDD4F5]" />

          {/* Client Satisfaction */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#130B2B] font-bold text-sm">
              <CountUp end={98} suffix="%" duration={1600} />
            </span>
            <span className="text-[#5B5370] font-normal">Client Satisfaction</span>
          </div>

          <span className="hidden sm:block h-1 w-1 rounded-full bg-[#DDD4F5]" />

          {/* Location */}
          <div className="flex items-center gap-1.5 text-[#130B2B]">
            <Globe2 className="w-3.5 h-3.5 text-[#6754E9]" />
            <span className="font-semibold text-[#130B2B]">Lagos / Available Worldwide</span>
          </div>
        </div>

      </div>
    </section>
  )
}
