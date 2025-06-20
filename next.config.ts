import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/hfei-concept" : "",
  output: "export",
};

export default nextConfig;
