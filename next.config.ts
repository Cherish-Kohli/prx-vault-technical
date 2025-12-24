import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Exclude supabase directory from Next.js build
  typescript: {
    // Ignore build errors in supabase directory
    ignoreBuildErrors: false,
  },
  // Exclude supabase from file tracing
  experimental: {
    outputFileTracingExcludes: {
      '*': ['./supabase/**/*'],
    },
  },
};

export default nextConfig;
