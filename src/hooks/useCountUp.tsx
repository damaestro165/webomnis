import { useState, useEffect, useRef } from 'react'

interface UseCountUpOptions {
  duration?: number
  decimals?: number
}

export function useCountUp(endValue: number, options: UseCountUpOptions = {}) {
  const { duration = 1800, decimals = 0 } = options
  const [count, setCount] = useState<number>(0)
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setCount(endValue)
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number | null = null

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            // Ease out cubic: 1 - pow(1 - progress, 3)
            const easeProgress = 1 - Math.pow(1 - progress, 3)
            const currentVal = easeProgress * endValue
            setCount(Number(currentVal.toFixed(decimals)))

            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              setCount(endValue)
            }
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [endValue, duration, decimals, hasAnimated])

  return { count, elementRef }
}

interface CountUpProps {
  end: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1800,
  className = ''
}) => {
  const { count, elementRef } = useCountUp(end, { duration, decimals })

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {suffix}
    </span>
  )
}
