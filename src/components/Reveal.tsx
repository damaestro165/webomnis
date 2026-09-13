import React, { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal-motion ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
