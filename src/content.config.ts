import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: z.object({
        client: z.string(),
        year: z.string(),
        sortOrder: z.number(),
        /** Shared media for listing card + project hero (one image or one video). */
        coverMediaType: z.enum(['image', 'video']).default('image'),
        cover: z.string(),
        /** Optional still frame before video loads (only when coverMediaType is video). */
        coverPoster: z.string().optional(),
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
