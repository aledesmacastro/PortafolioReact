import React from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from '../../../hooks/useIntersection'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
}) => {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 })

  const offset = 30
  const initial: Record<string, number> = { opacity: 0 }
  if (direction === 'up')    initial.y = offset
  if (direction === 'down')  initial.y = -offset
  if (direction === 'left')  initial.x = offset
  if (direction === 'right') initial.x = -offset

  const animate = isVisible
    ? { opacity: 1, x: 0, y: 0 }
    : initial

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
