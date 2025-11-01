import { formatAndSortArticles } from "../../utils/format-and-sort-articles";
import { generateRSSFeed } from "../../utils/rss-generator";

export async function GET() {
  const articles = formatAndSortArticles(
    import.meta.glob("./articles/*.md", { eager: true })
  );

  const siteUrl = import.meta.env.SITE;
  const blogUrl = `${siteUrl}/software-engineering`;

  const rssXml = generateRSSFeed(
    articles,
    "Loïc Poullain - Software Engineering Articles",
    "My articles about software engineering.",
    blogUrl,
    siteUrl
  );

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
