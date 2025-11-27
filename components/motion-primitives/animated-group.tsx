import React from 'react'

interface AnimatedGroupProps {
  variants?: any
  className?: string
  children: React.ReactNode
}

export const AnimatedGroup: React.FC<AnimatedGroupProps> = ({
  className,
  children,
  ...props
}) => {
  return <div className={className}>{children}</div>
}