import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,  // This will allow builds to proceed even with ESLint errors
  },
};

export default nextConfig;


