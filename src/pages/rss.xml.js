import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Space Ahead - An Astro v4 Blog",
    description: "Space Ahead is 👩‍🚀 Astro-naut Sid's blog. He writes stories about his travels to galaxies far and wide.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-US</language>`
  });
}
