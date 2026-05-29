import type { CollectionEntry } from 'astro:content';
import type { Media } from '../components/ProjectCard.astro';

type ProjectEntry = CollectionEntry<'projects'>;
type MediaType = 'image' | 'video';

function siteRootUrl(): URL {
    return new URL(import.meta.env.BASE_URL, import.meta.env.SITE);
}

/** Join a site path with the configured `base` (safe regardless of trailing slashes). */
export function withBase(path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }

    const root = siteRootUrl();

    if (path.startsWith('#')) {
        const basePath = root.pathname.replace(/\/$/, '');
        return `${basePath}${path}`;
    }

    const relativePath = path.replace(/^\//, '');
    const url = new URL(relativePath || '.', root);
    return `${url.pathname}${url.search}${url.hash}`;
}

/** Prefix public/ paths with the site base (e.g. /karlivaredesign-astro/). */
export function resolvePublicPath(path: string): string {
    return withBase(path);
}

function toMedia(mediaType: MediaType, src: string, poster?: string): Media {
    if (mediaType === 'video') {
        return {
            type: 'video',
            src: resolvePublicPath(src),
            poster: poster ? resolvePublicPath(poster) : undefined,
        };
    }

    return {
        type: 'image',
        src: resolvePublicPath(src),
    };
}

/** Listing card thumbnail media. */
export function getListingCoverMedia(project: ProjectEntry): Media {
    const { listingCoverMediaType, listingCover, listingCoverPoster } = project.data;
    return toMedia(listingCoverMediaType, listingCover, listingCoverPoster);
}

/** Project hero background media. */
export function getHeroMedia(project: ProjectEntry): Media {
    const { heroCoverMediaType, heroCover, heroCoverPoster } = project.data;
    return toMedia(heroCoverMediaType, heroCover, heroCoverPoster);
}

/** Default public paths for a project slug (for docs / copy-paste in frontmatter). */
export function projectMediaPaths(slug: string) {
    const base = `/projects/${slug}`;
    return {
        listingCoverImage: `${base}/listing-cover.jpg`,
        listingCoverVideo: `${base}/listing-cover.mp4`,
        listingCoverPoster: `${base}/listing-cover-poster.jpg`,
        heroCoverImage: `${base}/hero-cover.jpg`,
        heroCoverVideo: `${base}/hero-cover.mp4`,
        heroCoverPoster: `${base}/hero-cover-poster.jpg`,
    };
}
