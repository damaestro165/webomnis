import React, { useState } from 'react'
import { ArrowRight, CheckCircle, Award, Users } from 'lucide-react'
import { TextCascade } from './TextCascade'

export const WhyChooseUs: React.FC = () => {
  const [activeQuarter, setActiveQuarter] = useState<'Q3' | 'Q4'>('Q4')

  const chartDataQ4 = [
    { month: 'Jul', val: 32 },
    { month: 'Aug', val: 48 },
    { month: 'Sep', val: 40 },
    { month: 'Oct', val: 65 },
    { month: 'Nov', val: 58 },
    { month: 'Dec', val: 92 },
  ]

  const chartDataQ3 = [
    { month: 'Jan', val: 20 },
    { month: 'Feb', val: 35 },
    { month: 'Mar', val: 30 },
    { month: 'Apr', val: 50 },
    { month: 'May', val: 45 },
    { month: 'Jun', val: 78 },
  ]

  const activeData = activeQuarter === 'Q4' ? chartDataQ4 : chartDataQ3

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#EEEBFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Analytics Dashboard Card */}
          <div className="lg:col-span-6">
            <div className="ordina-card p-6 sm:p-8 rounded-3xl relative animated-surface bg-white border border-[#DDD4F5]">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DDD4F5]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6754E9]">
                    Growth Tracking
                  </span>
                  <h4 className="text-lg font-bold text-[#130B2B] mt-0.5">
                    {activeQuarter} Customer Inquiries & Growth
                  </h4>
                </div>
                
                {/* Quarter Switcher */}
                <div className="inline-flex rounded-full bg-[#F8F6FF] p-1 border border-[#DDD4F5] text-xs font-semibold">
                  <button
                    onClick={() => setActiveQuarter('Q3')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeQuarter === 'Q3'
                        ? 'bg-[#6754E9] text-white shadow-sm'
                        : 'text-[#5B5370] hover:text-[#130B2B]'
                    }`}
                  >
                    Q3
                  </button>
                  <button
                    onClick={() => setActiveQuarter('Q4')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeQuarter === 'Q4'
                        ? 'bg-[#6754E9] text-white shadow-sm'
                        : 'text-[#5B5370] hover:text-[#130B2B]'
                    }`}
                  >
                    Q4
                  </button>
                </div>
              </div>

              {/* Stat Highlight Pill */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#130B2B] tracking-tight">
                    {activeQuarter === 'Q4' ? '+145%' : '+112%'}
                  </div>
                  <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                    <span>More Phone Calls & Quotes</span>
                    <span className="text-[#8C85A3] font-normal">vs old website</span>
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#8C85A3] uppercase">Avg Mobile Load</div>
                  <div className="text-xl font-bold text-[#130B2B]">0.8s</div>
                </div>
              </div>

              {/* Responsive SVG Chart */}
              <div className="w-full h-48 sm:h-56 relative bg-[#F8F6FF] rounded-2xl p-4 border border-[#DDD4F5] flex flex-col justify-between">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 320 120">
                  <defs>
                    <linearGradient id="chartArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6754E9" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#6754E9" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6754E9" />
                      <stop offset="100%" stopColor="#5542D0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Gridlines */}
                  <line x1="0" y1="20" x2="320" y2="20" stroke="#DDD4F5" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="320" y2="60" stroke="#DDD4F5" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="100" x2="320" y2="100" stroke="#DDD4F5" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Area fill */}
                  <path
                    d={`M 0 110 
                       L 10 ${110 - activeData[0].val} 
                       L 70 ${110 - activeData[1].val} 
                       L 130 ${110 - activeData[2].val} 
                       L 190 ${110 - activeData[3].val} 
                       L 250 ${110 - activeData[4].val} 
                       L 310 ${110 - activeData[5].val} 
                       L 310 110 Z`}
                    fill="url(#chartArea)"
                    className="chart-area-motion"
                  />

                  {/* Smooth line */}
                  <path
                    d={`M 10 ${110 - activeData[0].val} 
                       C 40 ${110 - activeData[0].val - 5}, 50 ${110 - activeData[1].val + 5}, 70 ${110 - activeData[1].val}
                       C 90 ${110 - activeData[1].val - 5}, 110 ${110 - activeData[2].val + 5}, 130 ${110 - activeData[2].val}
                       C 150 ${110 - activeData[2].val - 5}, 170 ${110 - activeData[3].val + 5}, 190 ${110 - activeData[3].val}
                       C 210 ${110 - activeData[3].val - 5}, 230 ${110 - activeData[4].val + 5}, 250 ${110 - activeData[4].val}
                       C 270 ${110 - activeData[4].val - 10}, 290 ${110 - activeData[5].val + 5}, 310 ${110 - activeData[5].val}`}
                    fill="none"
                    stroke="url(#chartStroke)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="chart-line-motion"
                  />

                  {/* Data Nodes */}
                  {activeData.map((d, i) => {
                    const x = 10 + i * 60
                    const y = 110 - d.val
                    const isLast = i === activeData.length - 1
                    return (
                      <g key={i} className="cursor-pointer group">
                        <circle
                          cx={x}
                          cy={y}
                          r={isLast ? 5 : 3.5}
                          fill={isLast ? '#6754E9' : '#DDD4F5'}
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        />
                      </g>
                    )
                  })}
                </svg>

                {/* X Axis Labels */}
                <div className="flex justify-between text-[11px] font-semibold text-slate-400 pt-2 px-1">
                  {activeData.map((d, i) => (
                    <span key={i}>{d.month}</span>
                  ))}
                </div>
              </div>

              {/* Bottom Insight footnote */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-[#5B5370]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  Tested & Optimized on All Phones
                </span>
                <span className="font-bold text-[#130B2B]">100% Reliable</span>
              </div>
            </div>
          </div>

          {/* Right Column: "Why WebOmnis is your top choice" */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD4F5] shadow-sm text-xs font-semibold text-[#6754E9] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6754E9]" />
              <span>Why Business Owners Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#130B2B] tracking-tight mt-2 mb-6 leading-tight">
              <TextCascade
                segments={[
                  { text: 'Why WebOmnis is' },
                  { text: 'the right partner for you', className: 'text-[#5B5370] font-normal', breakBefore: true },
                ]}
              />
            </h2>
            <p className="text-[#5B5370] text-sm sm:text-base leading-relaxed mb-8">
              Most web agencies overcomplicate things with technical buzzwords and slow turnarounds. We keep it simple: we build fast, attractive websites that get your phone ringing and bring in customers.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-white border border-[#DDD4F5] text-[#6754E9] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#130B2B]">No Technical Confusion</h4>
                  <p className="text-xs sm:text-sm text-[#5B5370]">You don&apos;t need to learn code or manage hosting. We take care of everything and communicate in plain, friendly English.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-white border border-[#DDD4F5] text-[#6754E9] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#130B2B]">Built to Get Calls & Inquiries</h4>
                  <p className="text-xs sm:text-sm text-[#5B5370]">Every button, headline, and contact form is positioned to turn curious visitors into actual paying clients.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-white border border-[#DDD4F5] text-[#6754E9] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#130B2B]">Direct Communication</h4>
                  <p className="text-xs sm:text-sm text-[#5B5370]">You talk directly with the person building your website. No middlemen, no account managers playing telephone.</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#6754E9] hover:bg-[#5542D0] text-white font-semibold text-xs sm:text-sm shadow-md shadow-[#6754E9]/20 transition-all group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
