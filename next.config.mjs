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
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbshgdpsuzsoyipensta.supabase.co",
      },
    ],
    formats:["image/avif"],
    unoptimized: true
  },

};

export default withSvgr(nextConfig);
