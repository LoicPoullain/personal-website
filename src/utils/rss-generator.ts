interface Article {
  title: string;
  description: string;
  pubDate: string;
  url: string;
}

export function generateRSSFeed(
  articles: Article[],
  blogTitle: string,
  blogDescription: string,
  blogUrl: string,
  siteUrl: string
): string {
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${blogTitle}]]></title>
    <description><![CDATA[${blogDescription}]]></description>
    <link>${blogUrl}</link>
    <atom:link href="${blogUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Astro</generator>${
      articles.length > 0
        ? articles
            .map(
              (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${siteUrl}${article.url}</link>
      <guid isPermaLink="true">${siteUrl}${article.url}</guid>
      <pubDate>${new Date(article.pubDate).toUTCString()}</pubDate>
    </item>`
            )
            .join("")
        : ""
    }
  </channel>
</rss>`;

  return rssXml;
}
