export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login
        </h2>
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

