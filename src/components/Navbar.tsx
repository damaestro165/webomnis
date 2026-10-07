import React, { useState } from 'react'
import { ArrowRight, Menu, X, Mail, Phone } from 'lucide-react'

interface NavbarProps {
  onOpenConsultation?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#EEEBFF]/95 border-b border-[#DDD4F5] transition-all shadow-xs">
      {/* Top Contact Bar matching reference design */}
      <div className="bg-white/90 border-b border-[#DDD4F5] py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Email Us */}
          <a 
            href="mailto:hello@webomnis.com" 
            className="flex items-center gap-2.5 group transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#EEEBFF] border border-[#DDD4F5] flex items-center justify-center text-[#6754E9] group-hover:bg-[#6754E9] group-hover:text-white transition-colors shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-medium text-[#5B5370] leading-none">Email Us</span>
              <span className="text-xs sm:text-sm font-bold text-[#130B2B] group-hover:text-[#6754E9] transition-colors leading-tight">
                hello@webomnis.com
              </span>
            </div>
          </a>

          {/* Get a Proposal / Phone */}
          <a 
            href="tel:+2348021173032" 
            className="flex items-center gap-2.5 group transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#EEEBFF] border border-[#DDD4F5] flex items-center justify-center text-[#6754E9] group-hover:bg-[#6754E9] group-hover:text-white transition-colors shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-medium text-[#5B5370] leading-none">Get a Proposal</span>
              <span className="text-xs sm:text-sm font-bold text-[#130B2B] group-hover:text-[#6754E9] transition-colors leading-tight">
                +234-802-117-3032
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group">
          <img 
            src="/logo.png" 
            alt="WebOmnis Logo" 
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#5B5370]">
          <a href="#about" className="hover:text-[#6754E9] transition-colors">About</a>
          <a href="#services" className="hover:text-[#6754E9] transition-colors">Services</a>
          <a href="#process" className="hover:text-[#6754E9] transition-colors">Process</a>
          <a href="#why-us" className="hover:text-[#6754E9] transition-colors">Why Us</a>
          {/* <a href="#work" className="hover:text-[#6754E9] transition-colors">Work</a> */}
          <a href="#faq" className="hover:text-[#6754E9] transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-[#6754E9] transition-colors">Contact</a>
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a 
            href="#contact"
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6754E9] hover:bg-[#5542D0] text-white text-[13px] font-bold transition-all duration-300 shadow-sm shadow-[#6754E9]/20 active:scale-98"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-white" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#130B2B] hover:bg-[#DDD4F5]/50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#DDD4F5] px-6 py-5 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 font-medium text-slate-700">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#6754E9] transition-colors border-b border-slate-100"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#6754E9] transition-colors border-b border-slate-100"
            >
              Services
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#6754E9] transition-colors border-b border-slate-100"
            >
              Process
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#6754E9] transition-colors border-b border-slate-100"
            >
              Why Us
            </a>
            {/* <a 
              href="#work" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#6754E9] transition-colors border-b border-slate-100"
            >
              Work
            </a> */}
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#6754E9] transition-colors border-b border-slate-100"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#6754E9] transition-colors"
            >
              Contact
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false)
                if (onOpenConsultation) onOpenConsultation()
              }}
              className="w-full mt-2 py-3 rounded-xl bg-[#6754E9] hover:bg-[#5542D0] text-white text-center font-semibold text-sm shadow-md"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
