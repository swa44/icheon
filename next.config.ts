import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rgfvubjdjyuitprsagkx.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async rewrites() {
    return [
      // 송석준.이천.com (xn--3i4bljw2q.xn--hu5bi8g.com) -> /song
      {
        source: "/",
        has: [{ type: "host", value: "xn--3i4bljw2q.xn--hu5bi8g.com" }],
        destination: "/song",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--3i4bljw2q.xn--hu5bi8g.com" }],
        destination: "/song/:path*",
      },
      // 김재국.이천.com (xn--3e0bqpe42d.xn--hu5bi8g.com) -> /kimjk
      {
        source: "/",
        has: [{ type: "host", value: "xn--3e0bqpe42d.xn--hu5bi8g.com" }],
        destination: "/kimjk",
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--3e0bqpe42d.xn--hu5bi8g.com" }],
        destination: "/kimjk/:path*",
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
