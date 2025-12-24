import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Exclude supabase directory from file tracing (moved out of experimental in Next.js 16)
  outputFileTracingExcludes: {
    '*': ['./supabase/**/*'],
  },
};

export default nextConfig;
