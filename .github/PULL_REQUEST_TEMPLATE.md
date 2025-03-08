## Description

## SEO checklist

**Content**

- [ ] The page content includes targeted keywords found using [Google Trends](https://trends.google.fr/trends/) and [Google Keyword Planner](https://ads.google.com/aw/keywordplanner/home).
- [ ] These keywords are used in the title, header, anchor texts, image alt texts, strong tags, title tags, etc.
- [ ] The page directory contains a `keywords.txt` file showing the targeted keywords.

**Structure**

- [ ] The page has a title that is short (a few words or an expression), descriptive and different from other pages.
- [ ] The page has a meta `description` that summarizes it precisely (one or two sentences, or even a short paragraph) and is different from other pages.
- [ ] The page is structured with `h1`, `h2`, `h3` tags, etc., to highlight important text. These tags function like an plan, are not too numerous and do not have too long headings.
- [ ] The URL is well-structured without containing an excessive number of keywords.
- [ ] If possible, a breadcrumb trail should be included.
- [ ] Images are displayed with `<Image>` tag, not CSS if they are to be referenced. They point to a file with a descriptive name and the `alt` attribute is defined with a short text.
- [ ] The style of links is different from that of ordinary text.
- [ ] Link anchor texts are descriptive (no “page”, “article”, “click here” or visible URL).
- [ ] Links to sites I don't want to promote (GA, competitors) have the `rel="nofollow"` attribute.
- [ ] The page is responsive and mobile-friendly. There are no large videos that cannot be played. Content is identical for mobile and desktop versions (text content, images, videos, titles, descriptions, links).
- [ ] `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<form>`, `<nav>` and `<label>` tags are used where relevant.
- [ ] Images and videos are compressed.
- [ ] There are no major problems revealed by the Lighthouse extension. Check with `npm run build && npx serve@latest out`.

**Internationalization (if applicable)**

- [ ] The page in translated in French and Spanish under the `/fr` and `/es` paths.
- [ ] There is no automatic redirect but a link to change the page language.
- [ ] The page use the `hreflang` attribute as follows: `<link rel="alternate" hreflang="fr" href="fullURL" />`. The tags should include all the languages including the one of the page plus the value `x-default`. The other pages should do the same.
- [ ] URL are encode using UTF-8.

**Backlinks**

- [ ] If the page is new, a backlink strategy is ready.
