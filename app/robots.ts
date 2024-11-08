import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/properties/", "/about"],
    },
    sitemap: "https://templeroad.kr/sitemap.xml",
  };
}
