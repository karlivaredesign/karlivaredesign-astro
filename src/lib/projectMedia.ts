import type { CollectionEntry } from 'astro:content';
import type { Media } from '../components/ProjectCard.astro';

type ProjectEntry = CollectionEntry<'projects'>;

/** Join a site path with `base` (handles BASE_URL with or without a trailing slash). */
export function withBase(path: string): string {
    if (!path || path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }

    const base = import.meta.env.BASE_URL;

    if (path.startsWith('#')) {
        const root = base.endsWith('/') ? base.slice(0, -1) : base;
        return `${root}${path}`;
    }

    const normalizedBase = base.endsWith('/') ? base : `${base}/`;
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
    return `${normalizedBase}${normalizedPath}`;
}

/** Prefix public/ paths with the site base (e.g. /karlivaredesign-astro/). */
export function resolvePublicPath(path: string): string {
    return withBase(path);
}

/** Shared cover media for listing card and project hero. */
export function getCoverMedia(project: ProjectEntry): Media {
    const { coverMediaType, cover, coverPoster } = project.data;

    if (coverMediaType === 'video') {
        return {
            type: 'video',
            src: resolvePublicPath(cover),
            poster: coverPoster ? resolvePublicPath(coverPoster) : undefined,
        };
    }

    return {
        type: 'image',
        src: resolvePublicPath(cover),
    };
}

/** @deprecated Use getCoverMedia — same shared asset. */
export const getListingMedia = getCoverMedia;

/** @deprecated Use getCoverMedia — same shared asset. */
export const getHeroMedia = getCoverMedia;

/** Default public paths for a project slug (for docs / copy-paste in frontmatter). */
export function projectMediaPaths(slug: string) {
    const base = `/projects/${slug}`;
    return {
        coverImage: `${base}/cover.jpg`,
        coverVideo: `${base}/cover.mp4`,
        coverPoster: `${base}/poster.jpg`,
    };
}
