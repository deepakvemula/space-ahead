import rss from "@astrojs/rss";
import { withBase } from "../utils/helpers";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blogs");
  return rss({
    title: "Space Ahead - An Astro v5 Blog",
    description:
      "Space Ahead is 👩‍🚀 Astro-naut Sid's blog. He writes stories about his travels to galaxies far and wide.",
    site: context.site + withBase("/"),
    trailingSlash: false,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: withBase(`/blog/${post.id}/`),
    })),
    customData: `<language>en-US</language>`,
    stylesheet: withBase("/pretty-feed-v3.xsl"),
  });
}
