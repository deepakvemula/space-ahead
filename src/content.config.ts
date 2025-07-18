import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
        image: z.object({
            url: z.string(),
            alt: z.string().optional()
        })
        .optional(),
    }),
});

export const collections = {
    posts: postsCollection,
};