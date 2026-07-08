import React from 'react'

type BadgeProps = {
  children: React.ReactNode
}

export default function Badge({ children }: BadgeProps) {
  return <span className="badge">{children}</span>
}
