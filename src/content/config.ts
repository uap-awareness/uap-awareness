import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**\/*.md", base: "./src/blogs" }),
  schema: z.object({
    pubDate: z.date(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog };