'use client'

import { ReactNode } from 'react'

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: ReactNode
  className?: string
}

export function Form({ onSubmit, children, className = '' }: FormProps) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  )
}

