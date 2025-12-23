'use client'

import { calculatePasswordStrength } from '@/lib/validations'

interface PasswordStrengthIndicatorProps {
  password: string
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  if (!password) return null

  const strength = calculatePasswordStrength(password)
  
  const strengthConfig = {
    weak: { label: 'Weak', color: 'bg-red-500', width: 'w-1/3' },
    medium: { label: 'Medium', color: 'bg-yellow-500', width: 'w-2/3' },
    strong: { label: 'Strong', color: 'bg-green-500', width: 'w-full' },
  }

  const config = strengthConfig[strength]

  return (
    <div className="mt-2">
      <div className="flex items-center gap-2 mb-1">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className={`h-full ${config.color} ${config.width} transition-all duration-300`} />
        </div>
        <span className="text-sm text-gray-600">{config.label}</span>
      </div>
    </div>
  )
}

