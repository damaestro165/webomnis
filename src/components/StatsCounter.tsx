import React from 'react'

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      value: '15+',
      label: 'Years Combined Expertise',
      circlePercent: 90
    },
    {
      value: '1,500+',
      label: 'Production Sprints Delivered',
      circlePercent: 95
    },
    {
      value: '99%',
      label: 'Client Satisfaction Rate',
      circlePercent: 99
    }
  ]

  return (
    <section className="py-12 bg-[#F8F7FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Stats Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100/90">
          
          <div className="text-center sm:text-left mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Proven Track Record
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            
            {stats.map((st, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Circular ring indicator matching image */}
                <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-indigo-600 transition-all duration-1000"
                      strokeDasharray={`${st.circlePercent}, 100`}
                      strokeWidth="3"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-xl font-extrabold text-[#0F172A] tracking-tight">
                    {st.value}
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-500 max-w-[140px]">
                  {st.label}
                </span>
              </div>
            ))}

            {/* Highlighted Box (2 Continents) */}
            <div className="h-full min-h-[120px] bg-gradient-to-br from-indigo-100/80 via-purple-100/60 to-indigo-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-indigo-200/50 shadow-inner">
              <span className="text-2xl sm:text-3xl font-black text-indigo-950 tracking-tight">
                2 Continents
              </span>
              <span className="text-xs font-semibold text-indigo-700/80 mt-1">
                Global Delivery & Redundancy
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
