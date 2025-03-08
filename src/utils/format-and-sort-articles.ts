interface PrimitiveArticle {
  url: string;
  frontmatter: {
    title: string;
    description: string;
    pubDate: string;
  };
}

interface Article {
  title: string;
  description: string;
  pubDate: string;
  url: string;
}

export function formatAndSortArticles(
  articles: Record<string, PrimitiveArticle>
): Article[] {
  return Object.values(articles)
    .sort((a, b) => a.frontmatter.pubDate.localeCompare(b.frontmatter.pubDate))
    .reverse()
    .map((article) => ({
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      pubDate: article.frontmatter.pubDate,
      url: article.url,
    }));
}
