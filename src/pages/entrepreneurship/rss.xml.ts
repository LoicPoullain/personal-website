import { formatAndSortArticles } from "../../utils/format-and-sort-articles";
import { generateRSSFeed } from "../../utils/rss-generator";

export async function GET() {
  const articles = formatAndSortArticles(
    import.meta.glob("./articles/*.md", { eager: true })
  );

  const siteUrl = import.meta.env.SITE;
  const blogUrl = `${siteUrl}/entrepreneurship`;

  const rssXml = generateRSSFeed(
    articles,
    "Loïc Poullain - Entrepreneurship Articles",
    "My articles about entrepreneurship.",
    blogUrl,
    siteUrl
  );

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
