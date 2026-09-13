import React, { useEffect, useState, useRef } from 'react'
import { Zap, ShoppingBag, Palette, ShieldCheck, RefreshCw, ArrowUpRight } from 'lucide-react'

export const RotatingShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollRotation, setScrollRotation] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            // Calculate progress through viewport (-1 to 1)
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height)
            setScrollRotation(progress * 180) // 180 degrees over scroll travel
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const cards = [
    {
      title: 'Sub-0.4s Edge Speed',
      badge: '100 / 100 LCP',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/60',
      icon: Zap,
      desc: 'Global edge deployment with sub-second page loads',
      angle: 0
    },
    {
      title: 'High-Converting Checkout',
      badge: '+68% Sales Lift',
      badgeColor: 'text-[#01283C] bg-[#CBFF97] border-[#CBFF97]',
      icon: ShoppingBag,
      desc: 'Frictionless e-commerce and instant payment routing',
      angle: 72
    },
    {
      title: 'Conversion UI/UX',
      badge: 'Top 1% Design',
      badgeColor: 'text-indigo-700 bg-indigo-50 border-indigo-200/60',
      icon: Palette,
      desc: 'Psychology-driven layouts engineered to turn visitors into buyers',
      angle: 144
    },
    {
      title: 'Zero Technical Debt',
      badge: 'Enterprise Clean',
      badgeColor: 'text-slate-800 bg-slate-100 border-slate-200',
      icon: ShieldCheck,
      desc: 'Modular TypeScript architectures that scale without bottlenecks',
      angle: 216
    },
    {
      title: 'Automated Lead Sync',
      badge: '24/7 Operations',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/60',
      icon: RefreshCw,
      desc: 'Realtime CRM integration and zero-leak lead pipelines',
      angle: 288
    }
  ]

  // Larger radius keeps the orbiting cards away from the central statement.
  const orbitRadius = 360

  return (
    <section 
      ref={containerRef}
      className="py-28 md:py-36 bg-[#FAFAFA] relative overflow-hidden border-t border-[#F0F0F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F0F0F0] shadow-sm text-xs font-semibold text-[#01283C]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#01283C]" />
            <span>Unified Architecture</span>
          </div>
        </div>

        {/* Mobile: editorial statement followed by swipeable cards */}
        <div className="sm:hidden">
          <div className="max-w-sm mx-auto text-center px-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#083247] leading-[1.12]">
              WebOmnis brings everything together
              <span className="text-[#737373] font-normal block mt-2 text-xl leading-snug">
                connecting design, engineering, and conversion funnels into one clear digital engine.
              </span>
            </h2>
          </div>

          <div className="-mx-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory">
            <div className="flex gap-4 w-max">
              {cards.map((card, idx) => {
                const Icon = card.icon

                return (
                  <article
                    key={idx}
                    className="ordina-card rounded-2xl p-4 w-[78vw] max-w-[300px] snap-center bg-white/95"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] flex items-center justify-center text-[#01283C]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${card.badgeColor}`}>
                        {card.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#083247] mb-1.5">
                      {card.title}
                    </h4>
                    <p className="text-xs text-[#737373] leading-relaxed">
                      {card.desc}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        {/* Tablet/Desktop: orbiting cards around central statement */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[780px] lg:min-h-[860px] hidden sm:flex items-center justify-center">
          
          {/* Faint Guide Orbit Rings */}
          <div className="absolute w-[440px] sm:w-[660px] lg:w-[760px] h-[440px] sm:h-[660px] lg:h-[760px] rounded-full border border-dashed border-slate-200/80 pointer-events-none" />
          <div className="absolute w-[540px] sm:w-[800px] lg:w-[920px] h-[540px] sm:h-[800px] lg:h-[920px] rounded-full border border-slate-200/40 pointer-events-none" />

          {/* Central Editorial Statement (Ordina Signature Feature Headline) */}
          <div className="relative z-10 max-w-sm sm:max-w-lg text-center px-4 sm:px-6 pointer-events-none select-none">
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#083247] leading-[1.18]">
              WebOmnis brings everything together{' '}
              <span className="text-[#737373] font-normal block mt-2 text-lg sm:text-2xl lg:text-[30px]">
                connecting design, engineering, and conversion funnels into one clear, high-performance digital engine.
              </span>
            </h2>
          </div>

          {/* Orbiting Rotating Container (Rotates based on scroll + gentle ambient movement) */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              transform: `rotate(${scrollRotation}deg)`,
              transition: 'transform 0.15s linear'
            }}
          >
            {cards.map((card, idx) => {
              const Icon = card.icon
              const angleRad = (card.angle * Math.PI) / 180
              const currentRadius = orbitRadius
              const x = Math.cos(angleRad) * currentRadius
              const y = Math.sin(angleRad) * currentRadius

              return (
                <div
                  key={idx}
                  className="absolute pointer-events-auto cursor-pointer"
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                >
                  {/* Counter-rotate each card so its text stays upright */}
                  <div
                    style={{
                      transform: `rotate(${-scrollRotation}deg)`,
                      transition: 'transform 0.15s linear'
                    }}
                  >
                    <div className="ordina-card rounded-2xl p-4 sm:p-5 w-[190px] sm:w-[230px] shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group bg-white/95 backdrop-blur-md">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] flex items-center justify-center text-[#01283C] group-hover:bg-[#01283C] group-hover:text-[#CBFF97] transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${card.badgeColor}`}>
                          {card.badge}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-[#083247] mb-1">
                        {card.title}
                      </h4>
                      <p className="text-[11px] text-[#737373] leading-relaxed line-clamp-2">
                        {card.desc}
                      </p>

                      <div className="pt-2.5 mt-2.5 border-t border-[#F5F5F5] flex items-center justify-between text-[10px] font-semibold text-slate-400 group-hover:text-[#083247] transition-colors">
                        <span>Audited standard</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
