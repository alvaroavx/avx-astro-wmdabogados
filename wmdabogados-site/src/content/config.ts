import { defineCollection, z } from 'astro:content';

const area = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string().max(180),
    orden: z.number().optional(),
    keywords: z.array(z.string()).optional(),
  }),
});

const abogado = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    cargo: z.string(),
    bio: z.string(),
    credenciales: z.array(z.string()),
    foto: z.string().optional(),
    email: z.string().email().optional(),
    colegiatura: z.string().optional(),
    schemaPerson: z.boolean().default(true),
  }),
});

// Repite para casos (anonimizados), faq, blog
export const collections = { area, abogado };
