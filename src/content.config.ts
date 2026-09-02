import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Áreas de atuação — cada .md é uma landing page de SEO (/areas/<slug>).
const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: z.object({
    title: z.string(), // <h1> e base do <title>
    // Nome curto para menus, cards e listas (ex.: "Aposentadorias").
    shortTitle: z.string(),
    // Meta description específica (~150-160 caracteres). Obrigatória para SEO.
    description: z.string(),
    // Palavra-chave-alvo principal (documental, não renderiza).
    keyword: z.string().optional(),
    // Frase de apoio exibida abaixo do H1.
    summary: z.string(),
    order: z.number().default(99), // ordena o índice /areas
    featured: z.boolean().default(false), // marca "Principal"
    draft: z.boolean().default(false),
    updatedDate: z.coerce.date().optional(),
    // Perguntas frequentes -> seção + JSON-LD FAQPage.
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    // Slugs de áreas relacionadas.
    related: z.array(z.string()).default([]),
  }),
});

// Blog — motor de tráfego informacional.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keyword: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Schardosim, Dilarez e Marian Advogados Associados'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { areas, blog };
