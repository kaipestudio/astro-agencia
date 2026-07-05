import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/servicos" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { servicos, posts };