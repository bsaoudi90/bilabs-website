import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // If you use next/image on a static host, you typically need this:
  images: { unoptimized: true },

  // Optional: if you want relative assets (helpful when hosting under a subpath)
  // trailingSlash: true,
};

export default nextConfig;
