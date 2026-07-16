import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const seo = {
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  canonical: z.string().url().or(z.literal('')).optional(),
  ogImage: z.string().optional(),
};

const common = {
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().default(true),
  heroImage: z.string().optional(),
  heroAlt: z.string().optional(),
  categories: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  ...seo,
};


const routeStopSchema = z.object({
  number: z.number().int().positive(),
  name: z.string(),
  date: z.string().optional(),
  latitude: z.number(),
  longitude: z.number(),
  returnAtEnd: z.boolean().optional()
});

const galleryImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional()
});

const reisen = defineCollection({
  loader: glob({ base: './src/content/reisen', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    type: z.literal('reisebericht'),
    subtitle: z.string().optional(),
    destination: z.string(),
    region: z.string().optional(),
    ship: z.string().optional(),
    shipSlug: z.string().optional(),
    operator: z.string().optional(),
    startDate: z.coerce.date().nullable().optional(),
    endDate: z.coerce.date().nullable().optional(),
    rating: z.number().min(1).max(5).nullable().optional(),
    wouldBookAgain: z.boolean().nullable().optional(),
    duration: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(),
    routeTitle: z.string().optional(),
    routeIntro: z.string().optional(),
    routeCenter: z.tuple([z.number(), z.number()]).default([42.5, 7.5]),
    routeZoom: z.number().min(1).max(19).default(5),
    routeStops: z.array(routeStopSchema).default([]),
    galleryTitle: z.string().optional(),
    gallery: z.array(galleryImageSchema).default([]),
  }),
});


const reisetage = defineCollection({
  loader: glob({ base: './src/content/reisetage', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    type: z.literal('reisetag'),
    dayType: z.enum(['anreise', 'landgang', 'seetag', 'ausschiffung']).default('landgang'),
    subtitle: z.string().optional(),
    travelDate: z.coerce.date().nullable().optional(),
    trip: z.string(),
    day: z.number().int().positive(),
    location: z.string(),
    country: z.string().optional(),
    arrival: z.string().optional(),
    departure: z.string().optional(),
    weather: z.string().optional(),
    temperature: z.string().optional(),
    activity: z.string().optional(),
    tender: z.boolean().default(false),
    portSlug: z.string().optional(),
    photoRating: z.number().min(1).max(5).nullable().optional(),
    momentOfDay: z.string().optional(),
    smallMemory: z.string().optional(),
    heroCaption: z.string().optional(),
    galleryTitle: z.string().optional(),
    gallery: z.array(galleryImageSchema).default([]),
  }),
});

const haefen = defineCollection({
  loader: glob({ base: './src/content/haefen', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    type: z.literal('hafen'),
    subtitle: z.string().optional(),
    trip: z.string(),
    country: z.string(),
    visitDate: z.coerce.date().nullable().optional(),
    arrival: z.string().optional(),
    departure: z.string().optional(),
    tender: z.boolean().default(false),
    latitude: z.number(),
    longitude: z.number(),
    mapZoom: z.number().min(1).max(19).default(14),
    visitStatus: z.enum(['erlebt', 'geplant']).default('erlebt'),
    recommendedLens: z.string().optional(),
    bestTime: z.string().optional(),
    heroCaption: z.string().optional(),
    spots: z.array(z.object({
      name: z.string(),
      latitude: z.number(),
      longitude: z.number(),
      note: z.string().optional(),
      lens: z.string().optional(),
      bestTime: z.string().optional(),
    })).default([]),
    galleryTitle: z.string().optional(),
    gallery: z.array(galleryImageSchema).default([]),
  }),
});

const schiffe = defineCollection({
  loader: glob({ base: './src/content/schiffe', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    type: z.literal('schiff'),
    operator: z.string(),
    shipClass: z.string().optional(),
    yearBuilt: z.number().int().positive().nullable().optional(),
    passengers: z.number().int().positive().nullable().optional(),
    length: z.string().optional(),
    width: z.string().optional(),
    cabins: z.number().int().positive().nullable().optional(),
    heroCaption: z.string().optional(),
    rating: z.number().min(1).max(5).nullable().optional(),
  }),
});

const orte = defineCollection({
  loader: glob({ base: './src/content/orte', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    type: z.literal('ort'),
    subtitle: z.string().optional(),
    route: z.string(),
    country: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    mapZoom: z.number().min(1).max(19).default(14),
    recommendedLens: z.string().optional(),
    bestTime: z.string().optional(),
    visitStatus: z.enum(['erlebt', 'geplant']).default('erlebt'),
    preparationTitle: z.string().optional(),
    preparationText: z.string().optional(),
    spots: z.array(z.object({
      name: z.string(),
      latitude: z.number(),
      longitude: z.number(),
      note: z.string().optional(),
      lens: z.string().optional(),
      bestTime: z.string().optional(),
    })).default([]),
  }),
});

const fotospots = defineCollection({
  loader: glob({ base: './src/content/fotospots', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    type: z.literal('fotospot'),
    place: z.string(),
    country: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    bestTime: z.string().optional(),
    lens: z.string().optional(),
    difficulty: z.enum(['leicht', 'mittel', 'anspruchsvoll']).default('leicht'),
    walkingTime: z.string().optional(),
  }),
});

const ausruestung = defineCollection({
  loader: glob({ base: './src/content/ausruestung', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    type: z.literal('ausruestung'),
    equipmentType: z.enum(['Kamera', 'Objektiv', 'Rucksack', 'Filter', 'Stativ', 'Zubehör']),
    manufacturer: z.string().optional(),
    model: z.string().optional(),
    rating: z.number().min(1).max(5).nullable().optional(),
  }),
});

const artikel = defineCollection({
  loader: glob({ base: './src/content/artikel', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    type: z.literal('artikel'),
    section: z.enum(['Fotografie', 'Reiseplanung', 'Erfahrungen', 'Ausrüstung']),
  }),
});

export const collections = { reisen, reisetage, haefen, schiffe, orte, fotospots, ausruestung, artikel };
