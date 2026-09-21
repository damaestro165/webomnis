import React, { useState } from 'react'
import { Zap, GitBranch, ArrowRight, Cpu, BarChart3 } from 'lucide-react'
import { CountUp } from '../hooks/useCountUp'

export const WorkflowDarkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const workflows = [
    {
      id: 'lead-sync',
      title: 'Automated Lead Qualification',
      subtitle: 'Zero-drop lead routing',
      desc: 'Form submissions and inquiry events trigger instantaneous webhook validation, CRM contact creation, and automated WhatsApp/email confirmation in under 2 seconds.',
      icon: GitBranch,
      metrics: [
        { label: 'Ingestion Latency', val: '< 18ms' },
        { label: 'Pipeline Capture Rate', val: '99.99%' },
        { label: 'Drop-off Reduction', val: '-58%' }
      ],
      codeSnippet: `// WebOmnis Edge Ingestion Pipeline
export async function POST(req: Request) {
  const { lead, payload } = await req.json()
  
  // Instant CRM Sync + Multi-channel routing
  await Promise.all([
    crm.leads.create({ ...lead, verified: true }),
    telemetry.recordConversion({ source: 'hero-funnel' }),
    notifications.dispatchInstantAlert(lead.contact)
  ])
  return Response.json({ status: 200, latency: '14ms' })
}`
    },
    {
      id: 'headless-commerce',
      title: 'Headless E-Commerce Sync',
      subtitle: 'Sub-second checkout funnels',
      desc: 'Decoupled frontend architecture synchronizes directly with Shopify, Stripe, and modern inventory databases to deliver blazing speed without traditional CMS lag.',
      icon: Cpu,
      metrics: [
        { label: 'Time-to-Interactive', val: '0.42s' },
        { label: 'Checkout Abandonment', val: '-34%' },
        { label: 'Catalog Revalidation', val: 'Instant' }
      ],
      codeSnippet: `// Edge-Rendered Dynamic Checkout Session
const session = await stripe.checkout.sessions.create({
  mode: 'payment',
  customer_email: user.email,
  line_items: cart.map(item => ({
    price: item.priceId,
    quantity: item.qty
  })),
  success_url: \`\${ORIGIN}/order/confirmed?id={CHECKOUT_SESSION_ID}\`
})`
    },
    {
      id: 'vitals-telemetry',
      title: 'Core Web Vitals Autopilot',
      subtitle: 'Continuous performance health',
      desc: '24/7 automated monitoring tracks First Contentful Paint, Cumulative Layout Shift, and server response across 40+ global edge locations.',
      icon: BarChart3,
      metrics: [
        { label: 'Lighthouse Score', val: '100 / 100' },
        { label: 'Global Uptime', val: '99.98%' },
        { label: 'Edge Edge Locations', val: '310+ PoPs' }
      ],
      codeSnippet: `// Automated Health Check & Web Vitals Audit
export const vitalsConfig = {
  thresholds: {
    lcp: 500, // < 0.5s target
    fid: 10,  // < 10ms target
    cls: 0.01 // Zero layout shift
  },
  alertWebhook: process.env.OPS_SLACK_WEBHOOK
}`
    }
  ]

  const current = workflows[activeTab]
  const CurrentIcon = current.icon
  const renderMetricValue = (value: string) => {
    if (value === '< 18ms') return <><span>&lt; </span><CountUp end={18} suffix="ms" duration={1200} /></>
    if (value === '99.99%') return <CountUp end={99.99} decimals={2} suffix="%" duration={1500} />
    if (value === '-58%') return <CountUp end={58} prefix="-" suffix="%" duration={1500} />
    if (value === '0.42s') return <CountUp end={0.42} decimals={2} suffix="s" duration={1200} />
    if (value === '-34%') return <CountUp end={34} prefix="-" suffix="%" duration={1500} />
    if (value === '100 / 100') return <><CountUp end={100} duration={1400} /> / 100</>
    if (value === '99.98%') return <CountUp end={99.98} decimals={2} suffix="%" duration={1500} />
    if (value === '310+ PoPs') return <><CountUp end={310} suffix="+" duration={1500} /> PoPs</>

    return value
  }

  return (
    <section className="py-24 sm:py-32 bg-[#130B2B] text-white relative overflow-hidden border-y border-[#25164E]">
      
      {/* Background ambient lighting glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6754E9]/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6754E9]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Ordina Editorial 2-Tone Typography on Dark) */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#C4B5FD] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD] animate-pulse" />
            <span>Automated Systems & Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5">
            Automated workflows.{' '}
            <span className="text-purple-200/60 font-normal block sm:inline">
              Built for high-volume scale.
            </span>
          </h2>

          <p className="text-purple-100/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            We eliminate manual bottlenecks by wiring your frontend to robust backend automations, from instant payment orchestration to real-time CRM routing.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap gap-2.5 p-1.5 bg-white/5 rounded-2xl border border-white/10 w-fit mb-10">
          {workflows.map((wf, idx) => (
            <button
              key={wf.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-[#6754E9] text-white shadow-sm'
                  : 'text-purple-200/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{wf.title}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Workflow Display Card */}
        <div className="ordina-card-dark rounded-3xl p-6 sm:p-10 border border-[#25164E] shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#1C123D]/90 to-[#130B2B]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details & Verified Metrics */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#C4B5FD] uppercase tracking-wider mb-2">
                  <CurrentIcon className="w-4 h-4" />
                  <span>{current.subtitle}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {current.title}
                </h3>

                <p className="text-purple-100/80 text-sm sm:text-base leading-relaxed mb-8">
                  {current.desc}
                </p>

                {/* Live Performance Chips */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {current.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-purple-200/60 font-medium">{m.label}</div>
                      <div className="text-base sm:text-lg font-bold text-white font-mono mt-0.5">
                        {renderMetricValue(m.val)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#C4B5FD] hover:underline"
                >
                  <span>Request Custom Automation Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] text-purple-200/60">Zero Technical Debt</span>
              </div>
            </div>

            {/* Right Column: Clean Code / Architecture Blueprint Window */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#0B061A] border border-white/10 shadow-inner overflow-hidden font-mono text-xs">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <span className="text-[11px] text-slate-400 font-sans">production-pipeline.ts</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Verified
                  </span>
                </div>

                {/* Code body */}
                <div className="p-5 overflow-x-auto text-slate-300 leading-relaxed">
                  <pre className="text-[11px] sm:text-xs">
                    <code>{current.codeSnippet}</code>
                  </pre>
                </div>

                {/* Terminal status bar */}
                <div className="px-4 py-2 bg-white/5 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Status: 200 OK</span>
                  <span>Execution: Edge Runtime</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
