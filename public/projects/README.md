# Project media files

Drop assets for each project in `public/projects/<project-slug>/`.

The slug should match the MDX filename in `src/content/projects/` (e.g. `draig-therapeutics`).

## Listing cover vs hero cover

Each project can use **separate** assets for:

- the **listing cover** — thumbnail on the home page project card, and
- the **hero cover** — full-viewport background on that project’s detail page

Each can be **either** an image **or** a video.

## Per-project folder

```text
public/projects/<project-slug>/
  listing-cover.jpg              # when listingCoverMediaType is image
  listing-cover.mp4              # when listingCoverMediaType is video (or .mov, .webm)
  listing-cover-poster.jpg       # optional — listing video poster only
  hero-cover.jpg                 # when heroCoverMediaType is image
  hero-cover.mp4                 # when heroCoverMediaType is video (or .mov, .webm)
  hero-cover-poster.jpg          # optional — hero video poster only
```

You can reuse the same file for both if you prefer — just point both frontmatter paths at it.

## Frontmatter

```yaml
listingCoverMediaType: image   # or video
listingCover: /projects/<project-slug>/listing-cover.jpg
# listingCover: /projects/<project-slug>/listing-cover.mp4   # when video
# listingCoverPoster: /projects/<project-slug>/listing-cover-poster.jpg   # optional, video only

heroCoverMediaType: image   # or video
heroCover: /projects/<project-slug>/hero-cover.jpg
# heroCover: /projects/<project-slug>/hero-cover.mp4   # when video
# heroCoverPoster: /projects/<project-slug>/hero-cover-poster.jpg   # optional, video only
```

Copy `public/projects/_template/` when starting a new project.

## Project gallery (below Credits)

Add gallery images and videos in the same `public/projects/<project-slug>/` folder. Compose layouts in `src/content/projects/<slug>.mdx` after the frontmatter block.

Available components (no import needed):

- `FullWidthImage` — one frame (`src`, `alt`, optional `type`, `poster`, optional `variant`: `landscape` or `landscapeWide` for 1360×630 stills)
- `HalfWidthLandscape` — `images` (two landscape frames)
- `HalfWidthPortrait` — `images` (two portrait frames; optional `variant`: `portrait` or `portraitTall` for 644×822 frames)
- `TwoColSquareImage` — `images` (two square 354×354 frames; column on mobile, row at lg)
- `ThreeColPortrait` — `images` (three portrait frames)
- `MixedLandscapePortrait` — `landscape`, `portrait`

Each frame defaults to `type: 'image'`. For video, set `type: 'video'` and optionally `poster` for a still before playback.

Example:

```mdx
<FullWidthImage
  src="/projects/draig-therapeutics/detail-01.jpg"
  alt="Homepage hero mockup"
/>

<FullWidthImage
  type="video"
  src="/projects/draig-therapeutics/demo.mov"
  poster="/projects/draig-therapeutics/demo-poster.jpg"
  alt="Homepage interaction demo"
/>

<HalfWidthLandscape
  images={[
    { src: '/projects/draig-therapeutics/detail-02.jpg', alt: 'Screen one' },
    {
      type: 'video',
      src: '/projects/draig-therapeutics/detail-03.mov',
      alt: 'Screen two motion',
    },
  ]}
/>
```
