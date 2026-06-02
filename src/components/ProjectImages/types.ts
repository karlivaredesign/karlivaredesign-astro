export type ImageVariant =
    | 'landscape'
    | 'landscapeWide'
    | 'portrait'
    | 'portraitTall'
    | 'square'
    | 'fill';

/** One gallery frame — image (default) or video. */
export type ProjectFrameMedia = {
    src: string;
    alt: string;
    type?: 'image' | 'video';
    /** Optional still before video loads (video only). */
    poster?: string;
    /** Scale inside the frame (e.g. 1.05 crops ~5% from the edges). */
    zoom?: number;
};
