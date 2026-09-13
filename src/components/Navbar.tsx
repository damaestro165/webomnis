import React, { useState } from 'react'
import { ArrowRight, Menu, X, Globe, Sparkles } from 'lucide-react'

interface NavbarProps {
  onOpenConsultation?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#01283C]/90 border-b border-[#083247] transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#083247] text-white text-xs py-2 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-[#CBFF97] px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CBFF97] animate-pulse"></span>
              Q3/Q4 Availability
            </span>
            <span className="hidden sm:inline text-slate-300 font-medium text-xs">
              Now accepting new web development & redesign projects
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CBFF97]"></span> All Systems Operational
            </span>
            <a href="mailto:hello@webomnis.agency" className="text-white hover:text-[#CBFF97] transition-colors font-medium">
              hello@webomnis.agency
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#CBFF97] shadow-sm group-hover:scale-105 transition-transform duration-300">
            <span className="text-base font-black">W</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white flex items-center">
            WebOmnis
          </span>
        </a>

        {/* Desktop Links (Ordina Style Clean Nav) */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a 
            href="#contact"
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#CBFF97] hover:bg-[#bdfd7f] text-[#01283C] text-[13px] font-bold transition-all duration-300 shadow-sm active:scale-98"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#01283C]" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-indigo-100 px-6 py-5 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 font-medium text-slate-700">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600 transition-colors border-b border-slate-100"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600 transition-colors border-b border-slate-100"
            >
              Services
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600 transition-colors border-b border-slate-100"
            >
              Process
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600 transition-colors border-b border-slate-100"
            >
              Why Us
            </a>
            <a 
              href="#work" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600 transition-colors border-b border-slate-100"
            >
              Work
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600 transition-colors border-b border-slate-100"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false)
                if (onOpenConsultation) onOpenConsultation()
              }}
              className="w-full mt-2 py-3 rounded-xl bg-[#0F172A] text-white text-center font-semibold text-sm shadow-md"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
