import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
