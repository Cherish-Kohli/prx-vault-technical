# PRX Vault - Password Reset Technical Challenge

A Next.js application implementing a password reset flow with Supabase Edge Functions integration.

## 🚀 Live Deployment

- **Frontend (Vercel)**: [https://prx-vault-technical-1tlk29lwp-cherishs-projects-933889ca.vercel.app](https://prx-vault-technical-1tlk29lwp-cherishs-projects-933889ca.vercel.app)
- **Backend (Supabase)**: Edge Function `log-password-reset` deployed and working
- **Status**: ✅ Fully functional and tested in production

### Test the Application
1. Visit: [https://prx-vault-technical-1tlk29lwp-cherishs-projects-933889ca.vercel.app/auth/reset-password](https://prx-vault-technical-1tlk29lwp-cherishs-projects-933889ca.vercel.app/auth/reset-password)
2. Fill out the form with a valid password (8+ chars, uppercase, number, special char)
3. Submit to see the Edge Function in action
4. You'll be redirected to the login page with a success message

## Features

✅ Reset Password UI with comprehensive validation  
✅ Supabase Edge Function (log-password-reset)  
✅ Password strength indicator (Weak/Medium/Strong)  
✅ Reusable form component  
✅ Toast notifications for user feedback  
✅ Unit tests for validation logic  
✅ Local Supabase setup support  

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form** + **Zod** for form validation
- **Supabase JS Client** for Edge Function calls
- **Jest** for unit testing

## Prerequisites

- Node.js 18+ installed
- Supabase CLI installed (`npm install -g supabase`)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Initialize Supabase Locally (Optional)

If you want to test with local Supabase:

```bash
supabase init
supabase start
```

Copy the anon key from the Supabase output and add it to your `.env.local` file.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Serve Supabase Functions Locally (Optional)

In a separate terminal:

```bash
npm run supabase:serve
```

Or if you have Supabase CLI installed globally:

```bash
supabase functions serve
```

## Testing

Run unit tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Routes

- `/auth/reset-password` - Password reset form with validation
- `/auth/login` - Login page (redirect target after successful reset)

## Password Validation Rules

- Minimum 8 characters
- At least 1 uppercase letter
- At least 1 number
- At least 1 special character
- Passwords must match

## Supabase Edge Function

The `log-password-reset` function is located at:
```
supabase/functions/log-password-reset/index.ts
```

**Expected Input:**
```json
{
  "email": "user@example.com",
  "resetTime": "2025-12-09T05:50:00.000Z"
}
```

**Response:**
```json
{
  "status": "logged"
}
```

## Project Structure

```
prx-vault-technical/
├── app/
│   ├── auth/
│   │   ├── reset-password/
│   │   │   └── page.tsx
│   │   └── login/
│   │       └── page.tsx
│   └── ...
├── components/
│   ├── ui/
│   │   ├── Form.tsx
│   │   └── Toast.tsx
│   └── PasswordStrengthIndicator.tsx
├── lib/
│   ├── supabase.ts
│   └── validations.ts
├── supabase/
│   └── functions/
│       └── log-password-reset/
│           └── index.ts
├── __tests__/
│   └── validations.test.ts
└── ...
```

## Deployment

### Cloud Deployment (Completed ✅)

The application is successfully deployed to production:

- **Vercel (Frontend)**: 
  - Live URL: [https://prx-vault-technical.vercel.app/](https://prx-vault-technical-1tlk29lwp-cherishs-projects-933889ca.vercel.app)
  - Status: ✅ Deployed and working
  - Auto-deployment enabled from GitHub

- **Supabase (Backend)**: 
  - Project ID: `zbswsrkmgaafzavwrzsl`
  - Edge Function: `log-password-reset` ✅ Deployed
  - Dashboard: https://supabase.com/dashboard/project/zbswsrkmgaafzavwrzsl
  - Function logs available in Supabase Dashboard

### Deploy to Vercel (Instructions for Local Setup)

If you want to deploy your own instance:

1. Push your code to GitHub
2. Import your project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

The application will be automatically deployed and you'll get a public preview link.

## Bonus Features Implemented

- ✅ Password strength indicator (Weak/Medium/Strong)
- ✅ Unit tests for validation logic (8 test cases)
- ✅ Reusable form component
- ✅ Toast/snackbar for success messages
- ✅ Password requirements checklist with real-time validation
- ✅ Success message on login page after password reset
- ✅ Deployed to Vercel with public preview link
- ✅ Edge Function deployed to Supabase Cloud
- ✅ CORS configured for production

## Submission Summary

✅ **All Requirements Completed**
- Part 1: Reset Password UI - Complete
- Part 2: Supabase Edge Function - Complete and deployed
- Part 3: Local setup code ready (can be tested locally)
- All validation rules implemented
- All form behaviors implemented
- Edge Function logs to console as required

✅ **Tech Stack Requirements**
- Next.js 16 with App Router
- Tailwind CSS
- react-hook-form + zod
- Supabase JS client
- Supabase CLI support

✅ **Production Ready**
- Deployed to Vercel
- Edge Function deployed to Supabase
- CORS configured
- Environment variables set
- Fully functional and tested

## License

MIT
