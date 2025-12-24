'use client'

interface PasswordRequirementsProps {
  password: string
  confirmPassword?: string
}

export function PasswordRequirements({ password, confirmPassword }: PasswordRequirementsProps) {
  const requirements = [
    {
      label: '8+ characters',
      met: password.length >= 8,
    },
    {
      label: 'At least 1 uppercase letter',
      met: /[A-Z]/.test(password),
    },
    {
      label: 'At least 1 number',
      met: /[0-9]/.test(password),
    },
    {
      label: 'At least 1 special character',
      met: /[^A-Za-z0-9]/.test(password),
    },
    {
      label: 'Passwords must match',
      met: confirmPassword ? password === confirmPassword : password.length === 0,
      showOnlyWhenTyping: true,
    },
  ]

  const visibleRequirements = requirements.filter(
    (req) => !req.showOnlyWhenTyping || (req.showOnlyWhenTyping && confirmPassword)
  )

  if (!password && !confirmPassword) {
    return (
      <div className="mt-2 text-sm text-gray-600">
        <p className="font-medium mb-2">Password must include:</p>
        <ul className="list-disc list-inside space-y-1">
          {requirements.slice(0, 4).map((req, index) => (
            <li key={index} className="text-gray-500">
              {req.label}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="mt-2 text-sm">
      <p className="font-medium mb-2 text-gray-700">Password requirements:</p>
      <ul className="space-y-1">
        {visibleRequirements.map((req, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className={req.met ? 'text-green-600' : 'text-gray-400'}>
              {req.met ? '✓' : '○'}
            </span>
            <span className={req.met ? 'text-green-600' : 'text-gray-600'}>
              {req.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

