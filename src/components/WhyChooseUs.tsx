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
    <section id="why-us" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Analytics Dashboard Card (Ordina Card Style) */}
          <div className="lg:col-span-6">
            <div className="ordina-card p-6 sm:p-8 rounded-3xl relative animated-surface">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F0F0F0]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#083247]">
                    Live Performance
                  </span>
                  <h4 className="text-lg font-bold text-[#083247] mt-0.5">
                    {activeQuarter} Web Metrics & Growth
                  </h4>
                </div>
                
                {/* Quarter Switcher */}
                <div className="inline-flex rounded-full bg-[#FAFAFA] p-1 border border-[#EAEAEA] text-xs font-semibold">
                  <button
                    onClick={() => setActiveQuarter('Q3')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeQuarter === 'Q3'
                        ? 'bg-[#01283C] text-white shadow-sm'
                        : 'text-slate-600 hover:text-[#01283C]'
                    }`}
                  >
                    Q3
                  </button>
                  <button
                    onClick={() => setActiveQuarter('Q4')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeQuarter === 'Q4'
                        ? 'bg-[#01283C] text-white shadow-sm'
                        : 'text-slate-600 hover:text-[#01283C]'
                    }`}
                  >
                    Q4
                  </button>
                </div>
              </div>

              {/* Stat Highlight Pill */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#083247] tracking-tight">
                    {activeQuarter === 'Q4' ? '+145.8%' : '+112.4%'}
                  </div>
                  <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                    <span>Peak Conversion Velocity</span>
                    <span className="text-slate-400 font-normal">vs previous period</span>
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-400 uppercase">Avg Page Speed</div>
                  <div className="text-xl font-bold text-[#083247]">0.42s</div>
                </div>
              </div>

              {/* Responsive SVG Chart */}
              <div className="w-full h-48 sm:h-56 relative bg-[#FAFAFA] rounded-2xl p-4 border border-[#EAEAEA] flex flex-col justify-between">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 320 120">
                  <defs>
                    <linearGradient id="chartArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#006092" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#006092" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#006092" />
                      <stop offset="100%" stopColor="#01283C" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Gridlines */}
                  <line x1="0" y1="20" x2="320" y2="20" stroke="#EAEAEA" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="320" y2="60" stroke="#EAEAEA" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="100" x2="320" y2="100" stroke="#EAEAEA" strokeWidth="1" strokeDasharray="3 3" />

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
                          fill={isLast ? '#01283C' : '#006092'}
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
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  Realtime Core Web Vitals Audited
                </span>
                <span className="font-bold text-[#083247]">99.8% Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Column: "Why WebOmnis is your top choice" */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAEAEA] shadow-sm text-xs font-semibold text-[#01283C] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#01283C]" />
              <span>Value Proposition</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#083247] tracking-tight mt-2 mb-6 leading-tight">
              <TextCascade
                segments={[
                  { text: 'Why WebOmnis is' },
                  { text: 'your top choice', className: 'text-[#737373] font-normal', breakBefore: true },
                ]}
              />
            </h2>
            <p className="text-[#737373] text-sm sm:text-base leading-relaxed mb-8">
              We eliminate traditional agency bloat. When you partner with WebOmnis, you work directly with senior architects, top-tier frontend developers, and dedicated UX specialists who understand business bottom lines.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[#01283C] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#083247]">Zero Technical Debt</h4>
                  <p className="text-xs sm:text-sm text-[#737373]">Modular, cleanly documented TypeScript codebases that your in-house team can scale effortlessly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[#01283C] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#083247]">Guaranteed Core Web Vitals (95+)</h4>
                  <p className="text-xs sm:text-sm text-[#737373]">Sub-second load times engineered specifically to increase organic search ranks and ad spend conversion.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[#01283C] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#083247]">Direct Senior Access</h4>
                  <p className="text-xs sm:text-sm text-[#737373]">No account managers playing telephone. Weekly sprints with the senior engineers writing your code.</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#01283C] hover:bg-[#083247] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all group"
            >
              <span>About Our Process</span>
              <ArrowRight className="w-4 h-4 text-[#CBFF97] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
