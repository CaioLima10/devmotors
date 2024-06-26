import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.cosmicjs.com",
      },
      {
        protocol: "https",
        hostname: "imgix.cosmicjs.com",
      },
    ],
  },
};

export default nextConfig;
