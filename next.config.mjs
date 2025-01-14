import { config } from "process";
import withSvgr from "next-svgr";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    staleTimes: {
      dynamin: 0,
      static: 180
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbshgdpsuzsoyipensta.supabase.co",
      },
    ],
  },

};

export default withSvgr(nextConfig);
