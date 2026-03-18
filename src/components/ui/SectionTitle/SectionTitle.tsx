import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => (
  <div className={`section-title ${className}`.trim()}>
    <h2 className="section-title__heading">{title}</h2>
    {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
  </div>
)

export default SectionTitle
