import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.skeidar.no",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
