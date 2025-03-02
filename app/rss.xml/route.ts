import { fetchPropertiesRss } from "@/utils/action";
import RSS from "rss";

export async function GET() {
  const posts = await fetchPropertiesRss()

  const feed = new RSS({
    title: "국내 전통사찰 여행 | 절로 가",
    description: "사찰 이름의 유래부터 내려오는 전설까지... 알기 쉽게 풀어 쓴 사찰 관련 여행정보 안내",
    generator: 'RSS for Node and Next.js',
    site_url: "http://templeroad.kr",
    feed_url: `http://templeroad.kr/feed.xml`,
    copyright: `${new Date().getFullYear()} http://templeroad.kr`,
    language: "ko-Kr",
    pubDate: new Date(),
    ttl:60
  });

  posts.forEach((post) => {
    feed.item({
      title: post.name,
      description: post.title,
      url: `https://templeroad.kr/properties/${post.id}`,
      date: post.updatedAt,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
