import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: z.object({
        client: z.string(),
        year: z.string(),
        sortOrder: z.number(),
        /** Listing card thumbnail — image or video. */
        listingCoverMediaType: z.enum(['image', 'video']).default('image'),
        listingCover: z.string(),
        /** Optional still frame before listing video loads. */
        listingCoverPoster: z.string().optional(),
        /** Project hero background — image or video. */
        heroCoverMediaType: z.enum(['image', 'video']).default('image'),
        heroCover: z.string(),
        /** Optional still frame before hero video loads. */
        heroCoverPoster: z.string().optional(),
        /** Hero overlay tint — light (cream) or dark (charcoal-brown). */
        heroOverlayStyle: z.enum(['light', 'dark']).default('light'),
        /** When false, listing shows "under construction" and the project page is not built. */
        published: z.boolean().default(false),
        listingDescription: z.string(),
        projectDescription: z.string(),
        deliverables: z.array(z.string()),
        credits: z.record(z.string(), z.string()),
    }),
});

export const collections = {
    projects,
};
