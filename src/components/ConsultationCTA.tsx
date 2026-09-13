import React, { useState } from 'react'
import { Check, Shield, Lock, Send, CheckCircle2, ArrowRight, Calendar, Sparkles } from 'lucide-react'

export const ConsultationCTA: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full Project (Design + Dev)',
    details: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#01283C] text-white relative overflow-hidden border-t border-[#083247]">
      {/* Ambient lighting glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#006092]/25 via-[#01283C]/10 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#CBFF97]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Centered Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#CBFF97] mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CBFF97] animate-pulse" />
          <span>Ready to Scale / 14-Day Rapid Delivery</span>
        </div>

        {/* Centered Calm Headline (Exact Ordina Editorial Look) */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-3xl mx-auto mb-6">
          Ready to turn your website into a revenue engine?
        </h2>

        {/* Centered Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Let&apos;s build a high-performance website engineered for conversion. Book a free 30-minute discovery call or send us your scope below.
        </p>

        {/* Centered Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <a
            href="https://calendly.com/adeniyiabayomi16/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#CBFF97] hover:bg-[#bdfd7f] text-[#01283C] font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm active:scale-98 group cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#01283C]" />
            <span>Schedule Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#01283C] group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#inquiry-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/15 transition-all duration-200"
          >
            <span>Send Direct Scope</span>
          </a>
        </div>

        {/* Calm Centered Inquiry Card */}
        <div id="inquiry-form" className="max-w-xl mx-auto text-left">
          <div className="bg-white text-slate-900 rounded-3xl p-7 sm:p-9 shadow-2xl border border-white/10 relative">
            
            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3.5 border border-emerald-100">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#083247] mb-1.5">Project Scope Received</h3>
                <p className="text-[#737373] text-xs sm:text-sm max-w-sm mb-6">
                  Thank you! Our lead architects will review your project and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-full bg-[#01283C] text-white text-xs font-semibold hover:bg-[#083247] transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F0F0F0]">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#083247]">
                      Direct Project Inquiry
                    </h3>
                    <p className="text-[11px] text-[#737373] mt-0.5">
                      Response guaranteed within 24 hours
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FAFAFA] border border-[#F0F0F0] text-[11px] font-semibold text-[#01283C]">
                    Zero Obligation
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-[#083247] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Mitchell"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:border-[#01283C] text-xs sm:text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#083247] mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:border-[#01283C] text-xs sm:text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#083247] mb-1">
                      Project Objective
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:border-[#01283C] text-xs sm:text-sm"
                    >
                      <option value="High-Converting E-Commerce Redesign">High-Converting E-Commerce Redesign</option>
                      <option value="Custom Modern Web Application">Custom Modern Web Application</option>
                      <option value="Brand Identity & Conversion UI/UX">Brand Identity & Conversion UI/UX</option>
                      <option value="Full Project (Design + Architecture)">Full Project (Design + Architecture)</option>
                      <option value="Core Web Vitals & Speed Optimization">Core Web Vitals & Speed Optimization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#083247] mb-1">
                      Brief Project Overview
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Share your timeline, current bottlenecks, or desired outcomes..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:border-[#01283C] text-xs sm:text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#01283C] hover:bg-[#083247] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-3.5 h-3.5 text-[#CBFF97] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>

                {/* Trust footer inside card */}
                <div className="mt-4 pt-3 border-t border-[#F0F0F0] flex items-center justify-between text-[11px] text-[#737373]">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" /> 256-Bit SSL Encrypted
                  </span>
                  <span className="flex items-center gap-1 font-medium text-[#083247]">
                    <Shield className="w-3.5 h-3.5 text-[#01283C]" /> Strict NDA Guaranteed
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Former Contact Details Strip below card */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-medium">
          <span>Email: <a href="mailto:hello@webomnis.agency" className="text-white hover:underline">hello@webomnis.agency</a></span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>WhatsApp: <a href="https://wa.me/234000000000" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">+234 (0) 800 000 0000</a></span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Response: <strong className="text-[#CBFF97]">Within 24 hours</strong></span>
        </div>

      </div>
    </section>
  )
}
