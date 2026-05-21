import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin workspace root to this app (avoids picking up ~/package-lock.json)
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "industrymro.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/about-us", destination: "/About" },
      { source: "/our-solutions", destination: "/OurSolutions" },
      { source: "/our-offerings", destination: "/OurOfferings" },
      { source: "/careers", destination: "/Careers" },
      { source: "/contact-us", destination: "/ContactUs" },
    ];
  },
};

export default nextConfig;
