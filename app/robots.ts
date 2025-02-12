import type { MetadataRoute } from "next";

export default function robots():MetadataRoute.Robots{
    return{
        rules:{
            userAgent: "*",
            allow: ["/", "/properties", "/about"],
            disallow: "/admin"
        },
        sitemap: "https://templeroad.kr/sitemap.xml",
        host: "https://templeroad.kr"
    }
}