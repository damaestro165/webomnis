import React from 'react'
import { Globe, ShoppingCart, RefreshCw, Zap, ArrowRight, Sparkles } from 'lucide-react'
import { TextCascade } from './TextCascade'

export const Services: React.FC = () => {
  const services = [
    {
      num: '01',
      icon: Globe,
      title: 'Custom Business Websites',
      description: 'A clean, modern website built specifically for your business. Fast loading, easy to navigate, and built to turn visitors into phone calls and messages.',
      features: ['Mobile & Tablet Optimized', 'Direct Call & WhatsApp Buttons', 'Domain & Hosting Setup Included'],
      featured: false
    },
    {
      num: '02',
      icon: ShoppingCart,
      title: 'Online Stores (E-Commerce)',
      description: 'Sell products online 24/7. Simple product pages, secure checkout, and easy order management so customers can buy in seconds.',
      features: ['Secure Card & Bank Payments', '14-Day Fast Launch', 'Easy for You to Add Products'],
      featured: true,
      badge: 'Most Popular'
    },
    {
      num: '03',
      icon: RefreshCw,
      title: 'Website Redesign & Refresh',
      description: 'Have an old or slow website? We rebuild it into a fresh, professional site that looks credible, works on mobile, and attracts more clients.',
      features: ['Modern Professional Design', 'Speed & Security Upgrade', 'Keep Your Current Content & Links'],
      featured: false
    },
    {
      num: '04',
      icon: Zap,
      title: 'Speed & Google Visibility',
      description: 'Help customers find you on Google. We optimize your loading speed, mobile performance, and local search presence.',
      features: ['Google Search Setup', 'Loads in Under 2 Seconds', 'No Confusing Plugins or Bloat'],
      featured: false
    }
  ]

  return (
    <section id="services" className="py-24 bg-[#EEEBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD4F5] shadow-sm text-xs font-semibold text-[#6754E9] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6754E9]" />
            <span>What We Build</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#130B2B] tracking-tight">
            <TextCascade
              segments={[
                { text: 'Simple Solutions' },
                { text: 'To Grow Your Business.', className: 'text-[#5B5370] font-normal' },
              ]}
            />
          </h2>
          <p className="text-[#5B5370] text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Everything you need to look professional online, get discovered by local customers, and make sales.
          </p>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {services.map((srv, idx) => {
            const Icon = srv.icon
            return (
              <div
                key={idx}
                className="ordina-card reveal-stagger-card rounded-3xl p-7 flex flex-col justify-between group relative bg-white border border-[#DDD4F5]"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                {srv.badge && (
                  <div className="absolute -top-3 right-6 bg-[#6754E9] text-white font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-white/20 shadow-sm">
                    {srv.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-2xl bg-[#F8F6FF] border border-[#DDD4F5] text-[#6754E9] flex items-center justify-center group-hover:bg-[#6754E9] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#8C85A3] tracking-wider">
                      {srv.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#130B2B] mb-2 transition-colors">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#5B5370] text-xs sm:text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Bullet badges */}
                  <div className="space-y-2 mb-6">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#5B5370] font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6754E9]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href="#contact" 
                  className="pt-4 border-t border-[#DDD4F5] flex items-center justify-between text-xs font-bold text-[#130B2B] group-hover:text-[#6754E9] transition-colors"
                >
                  <span>Get Started</span>
                  <div className="w-7 h-7 rounded-full bg-[#F8F6FF] border border-[#DDD4F5] text-[#6754E9] group-hover:bg-[#6754E9] group-hover:text-white group-hover:border-transparent flex items-center justify-center transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </a>
              </div>
            )
          })}
        </div>

        {/* Mid-page CTA after services */}
        <div className="ordina-card-dark rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 shadow-xl bg-[#130B2B]">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold tracking-tight">
              Not sure what your business needs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Chat with us for 15 minutes. We&apos;ll give you honest, friendly advice on the best route for your budget.
            </p>
          </div>
          <a
            href="https://calendly.com/adeniyiabayomi16/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#6754E9] hover:bg-[#5542D0] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Book a Free 15-Min Call</span>
          </a>
        </div>

      </div>
    </section>
  )
}
