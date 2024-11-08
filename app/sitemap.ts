import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://templeroad.kr",
    },
    {
      url: "https://templeroad.kr/properties",
    },
    {
      url: "https://templeroad.kr/about",
    },
  ];
}
