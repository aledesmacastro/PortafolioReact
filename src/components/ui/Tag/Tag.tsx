import React from 'react'

interface TagProps {
  label: string
  className?: string
}

const Tag: React.FC<TagProps> = ({ label, className = '' }) => (
  <span className={`tag ${className}`.trim()}>{label}</span>
)

export default Tag
