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
    <section id="contact" className="py-24 sm:py-32 bg-[#130B2B] text-white relative overflow-hidden border-t border-[#25164E]">
      {/* Ambient lighting glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#6754E9]/25 via-[#6754E9]/10 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#6754E9]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Centered Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#C4B5FD] mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD] animate-pulse" />
          <span>Ready to Grow / 14-Day Delivery</span>
        </div>

        {/* Centered Calm Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-3xl mx-auto mb-6">
          Ready to turn your website into a customer magnet?
        </h2>

        {/* Centered Subtitle */}
        <p className="text-purple-100/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Let&apos;s build a fast, clean website that brings you more phone calls, appointments, and paying customers. Book a free 15-minute chat or send us a quick note below.
        </p>

        {/* Centered Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <a
            href="https://calendly.com/adeniyiabayomi16/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#6754E9] hover:bg-[#5542D0] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md active:scale-98 group cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Book a Free Call</span>
            <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#inquiry-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/15 transition-all duration-200"
          >
            <span>Send a Message</span>
          </a>
        </div>

        {/* Calm Centered Inquiry Card */}
        <div id="inquiry-form" className="max-w-xl mx-auto text-left">
          <div className="bg-white text-slate-900 rounded-3xl p-7 sm:p-9 shadow-2xl border border-[#DDD4F5] relative">
            
            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-50 text-[#6754E9] rounded-full flex items-center justify-center mb-3.5 border border-[#DDD4F5]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#130B2B] mb-1.5">Project Scope Received</h3>
                <p className="text-[#5B5370] text-xs sm:text-sm max-w-sm mb-6">
                  Thank you! Our lead architects will review your project and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-full bg-[#130B2B] text-white text-xs font-semibold hover:bg-[#25164E] transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DDD4F5]">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#130B2B]">
                      Direct Project Inquiry
                    </h3>
                    <p className="text-[11px] text-[#5B5370] mt-0.5">
                      Response guaranteed within 24 hours
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#EEEBFF] border border-[#DDD4F5] text-[11px] font-semibold text-[#130B2B]">
                    Zero Obligation
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-[#130B2B] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Mitchell"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4F5] bg-[#F8F6FF] focus:bg-white focus:outline-none focus:border-[#6754E9] text-xs sm:text-sm transition-all text-[#130B2B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#130B2B] mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4F5] bg-[#F8F6FF] focus:bg-white focus:outline-none focus:border-[#6754E9] text-xs sm:text-sm transition-all text-[#130B2B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#130B2B] mb-1">
                      Project Objective
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4F5] bg-[#F8F6FF] focus:bg-white focus:outline-none focus:border-[#6754E9] text-xs sm:text-sm text-[#130B2B]"
                    >
                      <option value="New Business Website">New Business Website</option>
                      <option value="Online Store / E-Commerce">Online Store / E-Commerce</option>
                      <option value="Website Redesign & Refresh">Website Redesign & Refresh</option>
                      <option value="Speed & Google Visibility">Speed & Google Visibility</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#130B2B] mb-1">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="What kind of business do you run and what are you looking to achieve?"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4F5] bg-[#F8F6FF] focus:bg-white focus:outline-none focus:border-[#6754E9] text-xs sm:text-sm transition-all resize-none text-[#130B2B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#6754E9] hover:bg-[#5542D0] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>

                {/* Trust footer inside card */}
                <div className="mt-4 pt-3 border-t border-[#DDD4F5] flex items-center justify-between text-[11px] text-[#5B5370]">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" /> 100% Confidential
                  </span>
                  <span className="flex items-center gap-1 font-medium text-[#130B2B]">
                    <Shield className="w-3.5 h-3.5 text-[#6754E9]" /> Free Quote & Zero Pressure
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Contact Details Strip below card */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-purple-200/70 font-medium">
          <span>Email: <a href="mailto:hello@webomnis.com" className="text-white hover:underline font-bold">hello@webomnis.com</a></span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Phone / WhatsApp: <a href="https://wa.me/message/JCWKMMI2VZ5IO1" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">+234-802-117-3032</a></span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Response: <strong className="text-[#C4B5FD]">Within 24 hours</strong></span>
        </div>

      </div>
    </section>
  )
}
