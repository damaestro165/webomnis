import React from 'react'
import { ArrowRight, Clock, Tag } from 'lucide-react'

export const Insights: React.FC = () => {
  const articles = [
    {
      title: 'Architecting Scalable Web Applications for 10x Enterprise Growth',
      category: 'System Architecture',
      readTime: '5 min read',
      date: 'May 2025',
      summary: 'Why micro-frontends and edge-rendered Next.js deployments are replacing monolithic architectures for hyper-growth companies.',
      gradient: 'from-blue-600 via-indigo-600 to-purple-700',
      svgType: 'pillars'
    },
    {
      title: 'The 2026 Playbook for Core Web Vitals and High-Conversion UI/UX',
      category: 'UI/UX & Performance',
      readTime: '4 min read',
      date: 'April 2025',
      summary: 'Practical techniques to achieve sub-0.5s Largest Contentful Paint (LCP) and 100% Google PageSpeed scores without design sacrifices.',
      gradient: 'from-indigo-600 via-purple-600 to-amber-500',
      svgType: 'workspace'
    }
  ]

  return (
    <section id="insights" className="py-20 md:py-28 bg-[#F8F7FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Insights
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-4">
            Think further with our <br />expert insights
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            Deep technical breakdowns, UI design philosophies, and architectural principles written by our senior engineering leads.
          </p>
        </div>

        {/* 2 Articles Grid (Mirrors Reference Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
            >
              {/* Image banner with 3D illustration */}
              <div className={`h-52 w-full bg-gradient-to-br ${art.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
                
                {/* 3D graphic mockup */}
                {art.svgType === 'pillars' ? (
                  <div className="relative flex items-center justify-center gap-3">
                    <div className="w-12 h-24 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 transform -rotate-3 translate-y-2 flex flex-col justify-between p-2 shadow-lg">
                      <div className="w-5 h-5 rounded-full bg-blue-400 mx-auto" />
                      <div className="h-1 w-full bg-white/40 rounded" />
                    </div>
                    <div className="w-14 h-32 bg-white/30 backdrop-blur-md rounded-xl border border-white/40 flex flex-col justify-between p-2 shadow-2xl z-10 scale-110">
                      <div className="w-6 h-6 rounded-full bg-emerald-400 mx-auto flex items-center justify-center text-[10px] text-slate-900 font-bold">AI</div>
                      <div className="space-y-1">
                        <div className="h-1 w-full bg-white/60 rounded" />
                        <div className="h-1 w-2/3 bg-white/40 rounded" />
                      </div>
                    </div>
                    <div className="w-12 h-24 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 transform rotate-3 translate-y-2 flex flex-col justify-between p-2 shadow-lg">
                      <div className="w-5 h-5 rounded-full bg-amber-400 mx-auto" />
                      <div className="h-1 w-full bg-white/40 rounded" />
                    </div>
                  </div>
                ) : (
                  <div className="relative flex items-center justify-center">
                    <div className="w-48 h-28 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-3 shadow-xl flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="text-[10px] text-white/80 font-mono">100 / 100</div>
                      </div>
                      <div className="w-full bg-emerald-400/30 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[98%]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1 font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                      <Tag className="w-3 h-3" /> {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center text-xs font-bold text-indigo-600 group-hover:text-indigo-800">
                  <span>Read full analysis</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
