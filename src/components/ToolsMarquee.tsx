import React from 'react'
import { TextCascade } from './TextCascade'

const tools = [
  { name: 'Next.js 15', role: 'Edge Framework', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  { name: 'React 19', role: 'UI Engine', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', role: 'Type Safety', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Tailwind CSS', role: 'Design Systems', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Shopify Plus', role: 'Headless Commerce', logo: 'https://cdn.simpleicons.org/shopify/7AB55C' },
  { name: 'Stripe', role: 'Global Payments', logo: 'https://cdn.simpleicons.org/stripe/635BFF' },
  { name: 'Supabase', role: 'Backend and Database', logo: 'https://cdn.simpleicons.org/supabase/3FCF8E' },
  { name: 'Vercel', role: 'Global Edge CDN', logo: 'https://cdn.simpleicons.org/vercel/000000' },
  { name: 'Sanity.io', role: 'Headless CMS', logo: 'https://cdn.simpleicons.org/sanity/F03E2F' },
  { name: 'PostgreSQL', role: 'Relational DB', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Google Cloud', role: 'Infrastructure', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'Webflow', role: 'Visual CMS', logo: 'https://cdn.simpleicons.org/webflow/146EF5' },
]

export const ToolsMarquee: React.FC = () => {
  const repeatedTools = [...tools, ...tools, ...tools]

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAFA] relative overflow-hidden border-t border-[#F0F0F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F0F0F0] shadow-sm text-xs font-semibold text-[#01283C] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#01283C]" />
          <span>Modern Tech Ecosystem</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#083247] max-w-3xl mx-auto">
          <TextCascade
            segments={[
              { text: 'Works with the tools' },
              { text: 'your team already uses.', className: 'text-[#737373] font-normal', breakBefore: true },
            ]}
          />
        </h2>

        <p className="text-[#737373] text-sm sm:text-base max-w-xl mx-auto mt-3.5 leading-relaxed font-normal">
          We build on modern, open technologies that connect neatly with your payments, CRM, content, and marketing stack.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee py-2 gap-4">
          {repeatedTools.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className="tool-logo-card ordina-card rounded-2xl px-5 py-3.5 flex items-center gap-3.5 shrink-0 hover:border-slate-300 transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] flex items-center justify-center group-hover:bg-white transition-colors">
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="h-5 w-5 object-contain"
                />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#083247] leading-tight">
                  {tool.name}
                </div>
                <div className="text-[11px] text-[#737373] font-normal mt-0.5">
                  {tool.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
