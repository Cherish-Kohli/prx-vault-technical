import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Exclude supabase directory from Next.js build
  experimental: {
    outputFileTracingExcludes: {
      '*': ['./supabase/**/*'],
    },
  },
};

export default nextConfig;
