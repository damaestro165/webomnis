import React from 'react'
import { Code2, ShoppingCart, Bot, Palette, ArrowRight, Sparkles } from 'lucide-react'
import { TextCascade } from './TextCascade'

export const Services: React.FC = () => {
  const services = [
    {
      num: '01',
      icon: Code2,
      title: 'Full-Stack & Custom Web Apps',
      description: 'Robust, scalable applications built with React, Next.js, and TypeScript. We build custom solutions to handle your complex business logic.',
      features: ['React & Next.js Ecosystem', 'Serverless & Edge APIs', 'Complex Business Logic'],
      featured: false
    },
    {
      num: '02',
      icon: ShoppingCart,
      title: 'High-Converting E-Commerce',
      description: 'High-converting WooCommerce and custom storefronts designed to maximize cart size. We offer rapid development cycles, going from concept to launch in as little as 14 days.',
      features: ['High-Velocity Storefronts', '14-Day Rapid Launch', 'Checkout Optimization'],
      featured: true,
      badge: 'Most Requested'
    },
    {
      num: '03',
      icon: Bot,
      title: 'AI & Automation',
      description: 'Future-proof your business by integrating intelligent AI models, automated data extraction (OCR), and custom AI chatbots directly into your platforms.',
      features: ['Automated OCR & Data Pipelines', 'Custom AI Chatbots', 'Workflow Automation'],
      featured: false
    },
    {
      num: '04',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design That Drives Behavior. Every design decision is backed by user psychology and conversion principles to ensure your visitors take action.',
      features: ['User Psychology Driven', 'Conversion-First Layouts', 'Figma Design Systems'],
      featured: false
    }
  ]

  return (
    <section id="services" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAEAEA] shadow-sm text-xs font-semibold text-[#01283C] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#01283C]" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#083247] tracking-tight">
            <TextCascade
              segments={[
                { text: 'What We Can Do' },
                { text: 'For Your Business.', className: 'text-[#737373] font-normal' },
              ]}
            />
          </h2>
          <p className="text-[#737373] text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            From initial concept to rapid launch, every digital solution is engineered for measurable commercial impact.
          </p>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {services.map((srv, idx) => {
            const Icon = srv.icon
            return (
              <div
                key={idx}
                className="ordina-card reveal-stagger-card rounded-3xl p-7 flex flex-col justify-between group relative"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                {srv.badge && (
                  <div className="absolute -top-3 right-6 bg-[#01283C] text-[#CBFF97] font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-white/20 shadow-sm">
                    {srv.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] text-[#01283C] flex items-center justify-center group-hover:bg-[#01283C] group-hover:text-[#CBFF97] transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 tracking-wider">
                      {srv.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#083247] mb-2 transition-colors">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#737373] text-xs sm:text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Bullet badges */}
                  <div className="space-y-2 mb-6">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#737373] font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#01283C]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href="#contact" 
                  className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-xs font-bold text-[#01283C] group-hover:text-[#083247] transition-colors"
                >
                  <span>Get Started</span>
                  <div className="w-7 h-7 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] group-hover:bg-[#01283C] group-hover:text-[#CBFF97] group-hover:border-transparent flex items-center justify-center transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </a>
              </div>
            )
          })}
        </div>

        {/* Ordina Mid-page CTA after services */}
        <div className="ordina-card-dark rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#083247] shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold tracking-tight">
              Not sure which service fits your needs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              We&apos;ll diagnose your current website and map out the highest ROI path forward.
            </p>
          </div>
          <a
            href="https://calendly.com/adeniyiabayomi16/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#CBFF97] hover:bg-[#bdfd7f] text-[#01283C] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-[#01283C]" />
            <span>Book a Free 30-Min Strategy Call</span>
          </a>
        </div>

      </div>
    </section>
  )
}
