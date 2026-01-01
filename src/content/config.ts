import { defineCollection, z } from 'astro:content';

const gateCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(0),
    tags: z.array(z.string()).optional(),
  }),
});

const mechanicalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    order: z.number().default(0),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'gate': gateCollection,
  'mechanical': mechanicalCollection,
};
