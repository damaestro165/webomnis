import React from 'react'
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react'
import { TextCascade } from './TextCascade'

export const WorkShowcase: React.FC = () => {
  const projects = [
    {
      name: 'Toserah',
      tag: 'E-Commerce Brand Redesign',
      result: '+68% Conversion Rate',
      desc: 'High-converting hero section redesign and UI optimization for a fast-growing fashion e-commerce brand.',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80',
      wide: true
    },
    {
      name: 'Plusmed',
      tag: 'Custom Web App',
      result: '3x Faster Processing',
      desc: 'AI-powered web application featuring automated prescription extraction and intelligent chat integrations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      wide: false
    },
    {
      name: 'Eyomoa Farms',
      tag: 'Brand & UI Design',
      result: '2x Brand Recognition',
      desc: 'Complete premium brand kit, packaging design, and promotional assets for a local food product.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
      wide: false
    }
  ]

  return (
    <section id="work" className="py-24 bg-[#EEEBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD4F5] shadow-sm text-xs font-semibold text-[#6754E9] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6754E9]" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#130B2B] tracking-tight">
              <TextCascade
                segments={[
                  { text: "Projects we're" },
                  { text: 'proud of.', className: 'text-[#5B5370] font-normal' },
                ]}
              />
            </h2>
          </div>
          <a
            href="#contact"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6754E9] text-white text-xs font-semibold hover:bg-[#5542D0] transition-all shadow-md shadow-[#6754E9]/20 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Portfolio Cards Grid: 1 Wide Card on top + 2 equal cards below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`ordina-card reveal-stagger-card rounded-3xl overflow-hidden group flex flex-col justify-between bg-white border border-[#DDD4F5] ${
                proj.wide ? 'md:col-span-2' : ''
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Visual Card Image with Gradient Overlay */}
              <div className={`relative w-full overflow-hidden ${proj.wide ? 'h-72 sm:h-96' : 'h-64 sm:h-80'}`}>
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130B2B]/85 via-[#130B2B]/30 to-transparent" />

                {/* Badges on Image */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#EEEBFF] text-[#130B2B] text-xs font-bold shadow-sm">
                    {proj.result}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#130B2B] transition-all shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom text inside image banner */}
                <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {proj.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                    {proj.name}
                  </h3>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-7 flex flex-col justify-between flex-1">
                <p className="text-[#5B5370] text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>
                <div className="pt-4 border-t border-[#DDD4F5] flex items-center justify-between text-xs font-bold text-[#130B2B] group-hover:text-[#6754E9]">
                  <span>View Project Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page CTA after portfolio */}
        <div className="ordina-card rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-[#DDD4F5]">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-[#130B2B]">
              Like what you see?
            </h4>
            <p className="text-xs sm:text-sm text-[#5B5370] mt-1">
              Let&apos;s build something like this for your business.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#6754E9] hover:bg-[#5542D0] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md shadow-[#6754E9]/20 transition-all transform hover:-translate-y-0.5"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </a>
        </div>

      </div>
    </section>
  )
}
