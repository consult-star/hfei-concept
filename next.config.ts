import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/hfei-concept",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
