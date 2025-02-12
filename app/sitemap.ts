import { fetchAllProperties } from "@/utils/action";
import type { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap>{
    const properties = await fetchAllProperties()
    const posts = properties.map((post) =>({
        url: `https://templeroad.kr/properties/${post.id}`,
        lastModified: post.updatedAt
    }))
    
    const routes = ["", "/properties", "/about"].map((route) =>({
        url: `https://templeroad.kr${route}`,
        lastModified: new Date().toISOString().split("T")[0]
    }))
    
    return[...routes, ...posts]
}