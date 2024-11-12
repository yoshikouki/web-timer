import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
