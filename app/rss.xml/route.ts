import { templePosts } from "@/utils/posts";
import RSS from "rss";

export async function GET() {
  const posts = templePosts;

  const feed = new RSS({
    title: "절로 가",
    description: "잠시 쉬어가기 좋은 우리나라 전통사찰 안내",
    site_url: "http://templeroad.kr",
    feed_url: `http://templeroad.kr/feed.xml`,
    copyright: `${new Date().getFullYear()} http://templeroad.kr`,
    language: "ko",
    pubDate: new Date(),
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: post.link,
      date: post.pubDate,
      guid: post.link,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
