'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const searchParams = useSearchParams()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  useEffect(() => {
    // Check if redirected from password reset
    if (searchParams.get('reset') === 'success') {
      setShowSuccessMessage(true)
      // Hide message after 5 seconds
      const timer = setTimeout(() => setShowSuccessMessage(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login
        </h2>
        
        {showSuccessMessage && (
          <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Password reset successful! You can now log in with your new password.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <p className="text-center text-gray-600">
          Login page placeholder
        </p>
        <div className="text-center">
          <a
            href="/auth/reset-password"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Go to Reset Password
          </a>
        </div>
      </div>
    </div>
  )
}

