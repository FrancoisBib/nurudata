import React from 'react'

interface TextEffectProps {
  preset?: string
  speedSegment?: number
  as?: React.ElementType
  className?: string
  per?: string
  delay?: number
  children: React.ReactNode
}

export const TextEffect: React.FC<TextEffectProps> = ({
  as: Component = 'div',
  className,
  children,
  ...props
}) => {
  return <Component className={className}>{children}</Component>
}