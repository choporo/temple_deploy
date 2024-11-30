import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "Your Website",
    description: "A cool website that everyone should check out!",
    site_url: "http://templeroad.kr",
    feed_url: `http://templeroad.kr/feed.xml`,
    copyright: `${new Date().getFullYear()} http://templeroad.kr`,
    language: "ko",
    pubDate: new Date(),
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
