import { templePosts } from "@/utils/posts";
import RSS from "rss";

export async function GET() {
  const posts = templePosts;

  const feed = new RSS({
    title: "국내 사찰 여행 | 절로 가",
    description: "가볼 만한 국내 전통사찰 여행정보",
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
