export type ImageVariant = 'landscape' | 'portrait' | 'fill';

/** One gallery frame — image (default) or video. */
export type ProjectFrameMedia = {
    src: string;
    alt: string;
    type?: 'image' | 'video';
    /** Optional still before video loads (video only). */
    poster?: string;
};
