import { config } from "process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbshgdpsuzsoyipensta.supabase.co",
      },
    ],
  },
};

export default nextConfig;
