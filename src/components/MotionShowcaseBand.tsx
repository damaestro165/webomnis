import React from 'react'
import { ArrowUpRight, Gauge, ShoppingBag, WandSparkles, Workflow } from 'lucide-react'
import { TextCascade } from './TextCascade'

const showcaseItems = [
  {
    title: 'Conversion-first storefront',
    metric: '+68% orders',
    label: 'Commerce redesign',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=80',
    icon: ShoppingBag,
  },
  {
    title: 'Sub-second web app',
    metric: '0.42s load',
    label: 'Performance system',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    icon: Gauge,
  },
  {
    title: 'Automated sales workflow',
    metric: '12x faster',
    label: 'AI operations',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
    icon: Workflow,
  },
  {
    title: 'Premium brand interface',
    metric: '2x recall',
    label: 'Design system',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
    icon: WandSparkles,
  },
]

const integrations = [
  'Next.js',
  'React',
  'Shopify',
  'WooCommerce',
  'Stripe',
  'Supabase',
  'OpenAI',
  'Framer',
  'Vercel',
  'Analytics',
]

export const MotionShowcaseBand: React.FC = () => {
  const repeatedShowcase = [...showcaseItems, ...showcaseItems]
  return (
    <section className="relative overflow-hidden bg-[#EEEBFF] py-16 border-y border-[#DDD4F5]">
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#EEEBFF] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#EEEBFF] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="ordina-pill mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6754E9]" />
              Moving delivery system
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#130B2B] tracking-tight max-w-3xl">
              <TextCascade
                segments={[
                  { text: 'Work, metrics, and tools' },
                  { text: 'moving as one system.', className: 'text-[#5B5370] font-normal', breakBefore: true },
                ]}
              />
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 max-w-md md:justify-end">
            {integrations.slice(0, 6).map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#DDD4F5] bg-white px-3.5 py-1.5 text-[11px] font-bold text-[#130B2B]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-5 motion-track">
        {repeatedShowcase.map((item, index) => {
          const Icon = item.icon

          return (
            <article
              key={`${item.title}-${index}`}
              className="moving-showcase-card ordina-card rounded-2xl overflow-hidden group bg-white border border-[#DDD4F5]"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130B2B]/85 via-[#130B2B]/25 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#6754E9] text-white text-[11px] font-bold">
                    {item.metric}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#130B2B] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-[#5B5370] mb-2">
                  <Icon className="w-3.5 h-3.5 text-[#6754E9]" />
                  {item.label}
                </div>
                <h3 className="text-base font-bold text-[#130B2B]">{item.title}</h3>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
