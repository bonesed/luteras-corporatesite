import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 画像最適化を無効化
  },
};

export default nextConfig;


