import React from 'react'

export const Marquee: React.FC = () => {
  const items = [
    'Web Design',
    'Web Development',
    'E-Commerce',
    'UI/UX Design',
    'Brand Identity',
    'SEO & Performance',
    'Custom Web Apps',
    'AI & Automation'
  ]

  const doubled = [...items, ...items, ...items]

  return (
    <div className="py-5 bg-white border-y border-[#DDD4F5] overflow-hidden relative space-y-3">
      {/* Subtle fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
        {doubled.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-10 text-[13px] font-semibold uppercase tracking-wider text-[#5B5370] hover:text-[#6754E9] transition-colors">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6754E9]/40"></span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee-reverse opacity-60">
        {doubled.map((item, idx) => (
          <div key={`${item}-${idx}`} className="inline-flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider text-[#130B2B]/70">
            <span>{item}</span>
            <span className="h-px w-8 bg-[#DDD4F5]"></span>
          </div>
        ))}
      </div>
    </div>
  )
}
