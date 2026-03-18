import React from 'react'

interface IconProps {
  svg: React.ReactNode
  className?: string
  size?: number
  label?: string
}

const Icon: React.FC<IconProps> = ({ svg, className = '', size, label }) => (
  <span
    className={`icon ${className}`.trim()}
    role={label ? 'img' : 'presentation'}
    aria-label={label}
    aria-hidden={!label}
    style={size ? { width: size, height: size, display: 'inline-flex' } : undefined}
  >
    {svg}
  </span>
)

export default Icon
