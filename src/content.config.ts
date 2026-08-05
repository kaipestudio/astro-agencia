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
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
    category: z.string(),
    icon: z.string(),
    image: z.string().optional(),
    gradient: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { servicos, posts, portfolio };