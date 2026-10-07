import React, { useState } from 'react'

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const whatsappUrl = 'https://wa.me/message/JCWKMMI2VZ5IO1'

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Greeting popup */}
      <div 
        className={`hidden sm:flex items-center gap-2 bg-white text-[#130B2B] text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg border border-[#DDD4F5] transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-90 -translate-x-1'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Chat with us on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WebOmnis on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Pulsing glow ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* Online Status Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </span>

        {/* WhatsApp Official SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform duration-300 group-hover:rotate-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.002 2C8.28 2 2 8.28 2 16.003c0 2.584.698 5.105 2.023 7.31L2 30.003l6.892-1.98a13.924 13.924 0 007.11 1.98h.005c7.721 0 14.001-6.28 14.001-14.004 0-3.74-1.457-7.256-4.103-9.902A13.91 13.91 0 0016.002 2zm8.17 19.824c-.34.954-1.696 1.748-2.77 1.98-.737.158-1.702.285-4.945-1.057-4.148-1.716-6.818-5.94-7.025-6.216-.208-.276-1.684-2.242-1.684-4.276s1.066-3.036 1.446-3.45c.38-.415.828-.518 1.104-.518.276 0 .552.002.793.014.256.012.598-.097.935.713.345.83 1.173 2.863 1.277 3.07.103.207.172.449.034.725-.137.276-.207.449-.414.69-.207.242-.435.54-.62.725-.207.207-.424.432-.182.846.241.414 1.073 1.77 2.302 2.864 1.58 1.408 2.913 1.844 3.327 2.051.414.207.656.173.897-.103.242-.276 1.035-1.208 1.311-1.622.276-.414.552-.345.931-.207.38.138 2.414 1.139 2.828 1.346.414.207.69.31.793.483.103.173.103 1.001-.237 1.955z" />
        </svg>
      </a>
    </div>
  )
}
