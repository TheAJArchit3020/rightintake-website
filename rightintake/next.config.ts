import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.rightintake.com" }
        ],
        destination: "https://rightintake.com/:path*",
        permanent: true,
      },
      // Optionally, also redirect root www without path
      {
        source: "/",
        has: [
          { type: "host", value: "www.rightintake.com" }
        ],
        destination: "https://rightintake.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
