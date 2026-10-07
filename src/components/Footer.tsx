import React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

const TwitterIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const DribbbleIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
)

export const Footer: React.FC = () => {
  const footerTicker = [
    'Performance-first websites',
    'Conversion architecture',
    'AI automation',
    'E-commerce systems',
    'Design systems',
    'Core Web Vitals',
  ]
  const tickerItems = [...footerTicker, ...footerTicker, ...footerTicker]

  return (
    <footer className="bg-[#EEEBFF] border-t border-[#DDD4F5] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Info & Office Card (Ordina Card Style) */}
        <div className="ordina-card rounded-3xl p-8 sm:p-10 mb-16 animated-surface relative overflow-hidden bg-white border border-[#DDD4F5]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Office HQ */}
            <div className="flex items-start gap-4 reveal-stagger-card">
              <div className="w-11 h-11 rounded-2xl bg-[#6754E9] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#5B5370] uppercase tracking-wider mb-1">Our Location</h4>
                <p className="text-sm font-bold text-[#130B2B] leading-snug">
                  Lagos, Nigeria<br />
                  Serving Businesses Worldwide
                </p>
              </div>
            </div>

            {/* Direct Email */}
            <div className="flex items-start gap-4 reveal-stagger-card">
              <div className="w-11 h-11 rounded-2xl bg-[#6754E9] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#5B5370] uppercase tracking-wider mb-1">Direct Email</h4>
                <a href="mailto:hello@webomnis.com" className="text-sm font-bold text-[#130B2B] hover:text-[#6754E9] hover:underline leading-snug">
                  hello@webomnis.com
                </a>
                <p className="text-xs text-[#5B5370] mt-1">Average response time: &lt; 2 hours</p>
              </div>
            </div>

            {/* Call Line */}
            <div className="flex items-start gap-4 reveal-stagger-card">
              <div className="w-11 h-11 rounded-2xl bg-[#6754E9] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#5B5370] uppercase tracking-wider mb-1">Phone & WhatsApp</h4>
                <a href="tel:+2348021173032" className="text-sm font-bold text-[#130B2B] hover:text-[#6754E9] hover:underline leading-snug">
                  +234-802-117-3032
                </a>
                <p className="text-xs text-[#5B5370] mt-1">Available Mon-Sat for client calls</p>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="WebOmnis Logo" 
                className="h-8 w-auto object-contain" 
              />
            </div>
            <p className="text-[#5B5370] text-xs sm:text-sm max-w-sm leading-relaxed mb-6">
              We build fast, beautiful websites and online stores that turn visitors into phone calls, appointments, and paying customers.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#130B2B] bg-white px-3 py-1.5 rounded-full w-fit border border-[#DDD4F5] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for New Projects</span>
            </div>
          </div>

          {/* Col 1: Solutions */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#130B2B] mb-4">Services</h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B5370]">
              <li><a href="#services" className="hover:text-[#6754E9] transition-colors">Business Websites</a></li>
              <li><a href="#services" className="hover:text-[#6754E9] transition-colors">Online Stores</a></li>
              <li><a href="#services" className="hover:text-[#6754E9] transition-colors">Website Redesign</a></li>
              <li><a href="#services" className="hover:text-[#6754E9] transition-colors">Speed & Google SEO</a></li>
              <li><a href="#services" className="hover:text-[#6754E9] transition-colors">Mobile Optimization</a></li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#130B2B] mb-4">Company</h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B5370]">
              <li><a href="#why-us" className="hover:text-[#6754E9] transition-colors">Why WebOmnis</a></li>
              {/* <li><a href="#work" className="hover:text-[#6754E9] transition-colors">Client Case Studies</a></li> */}
              <li><a href="#process" className="hover:text-[#6754E9] transition-colors">Our 4-Step Process</a></li>
              <li><a href="#faq" className="hover:text-[#6754E9] transition-colors">Common Questions</a></li>
              <li><a href="#contact" className="hover:text-[#6754E9] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#130B2B] mb-4">Governance</h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B5370]">
              <li><a href="#" className="hover:text-[#6754E9] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#6754E9] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#6754E9] transition-colors">NDA Guarantee</a></li>
              <li><a href="#" className="hover:text-[#6754E9] transition-colors">Security & SLA</a></li>
              <li><a href="#" className="hover:text-[#6754E9] transition-colors">Cookie Preferences</a></li>
            </ul>
          </div>

        </div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-10 py-4 border-y border-[#DDD4F5] bg-[#F8F6FF] overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8F6FF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8F6FF] to-transparent z-10 pointer-events-none" />
          <div className="motion-track flex items-center gap-8">
            {tickerItems.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-[#130B2B]/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-[#DDD4F5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B5370]">
          <p>Copyright 2026 WebOmnis / Built for performance. Designed for growth.</p>
          
          <div className="flex items-center gap-3 text-[#5B5370]">
            <a href="#" className="p-2 rounded-full border border-[#DDD4F5] bg-white hover:bg-[#6754E9] hover:border-[#6754E9] hover:text-white transition-all" aria-label="Twitter">
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="p-2 rounded-full border border-[#DDD4F5] bg-white hover:bg-[#6754E9] hover:border-[#6754E9] hover:text-white transition-all" aria-label="LinkedIn">
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="p-2 rounded-full border border-[#DDD4F5] bg-white hover:bg-[#6754E9] hover:border-[#6754E9] hover:text-white transition-all" aria-label="GitHub">
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="p-2 rounded-full border border-[#DDD4F5] bg-white hover:bg-[#6754E9] hover:border-[#6754E9] hover:text-white transition-all" aria-label="Dribbble">
              <DribbbleIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
