import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Next.jsの静的エクスポートを有効化
  images: {
    unoptimized: true, // 画像最適化を無効化（エラー回避）
  },
};

export default nextConfig;

