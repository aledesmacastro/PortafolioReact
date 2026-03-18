import { useEffect, useRef, useState } from 'react'

interface UseIntersectionOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

/**
 * Detecta cuando un elemento entra al viewport.
 * Retorna [ref, isVisible] — asigna ref al elemento que quieres observar.
 */
export function useIntersection<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionOptions = {}
): [React.RefObject<T>, boolean] {
  const { threshold = 0.15, rootMargin = '0px', triggerOnce = true } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) observer.unobserve(el)
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isVisible]
}
