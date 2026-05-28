import FullWidthImage from './FullWidthImage.astro';
import HalfWidthLandscape from './HalfWidthLandscape.astro';
import HalfWidthPortrait from './HalfWidthPortrait.astro';
import MixedLandscapePortrait from './MixedLandscapePortrait.astro';
import ThreeColPortrait from './ThreeColPortrait.astro';

/** MDX components available in project gallery bodies without per-file imports. */
export const projectGalleryMdxComponents = {
    FullWidthImage,
    HalfWidthLandscape,
    HalfWidthPortrait,
    ThreeColPortrait,
    MixedLandscapePortrait,
};
