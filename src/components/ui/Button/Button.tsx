import React from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  as: Tag = 'button',
  href,
  target,
  rel,
  children,
  className = '',
  ...rest
}) => {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (Tag === 'a') {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
