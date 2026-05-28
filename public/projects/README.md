# Project media files

Drop assets for each project in `public/projects/<project-slug>/`.

The slug should match the MDX filename in `src/content/projects/` (e.g. `draig-therapeutics`).

## One cover per project

The **same file** is used for:

- the listing page project card, and
- the hero on that project’s detail page

Use **either** an image **or** a video — not separate listing vs hero files.

## Per-project folder

```text
public/projects/<project-slug>/
  cover.jpg       # when coverMediaType is image
  cover.mp4       # when coverMediaType is video (or .mov, .webm)
  poster.jpg      # optional — video poster only (before playback)
```

## Frontmatter

```yaml
coverMediaType: image   # or video
cover: /projects/<project-slug>/cover.jpg
# cover: /projects/<project-slug>/cover.mp4   # when video
# coverPoster: /projects/<project-slug>/poster.jpg   # optional, video only
```

Copy `public/projects/_template/` when starting a new project.

## Project gallery (below Credits)

Add gallery images and videos in the same `public/projects/<project-slug>/` folder. Compose layouts in `src/content/projects/<slug>.mdx` after the frontmatter block.

Available components (no import needed):

- `FullWidthImage` — one frame (`src`, `alt`, optional `type`, `poster`)
- `HalfWidthLandscape` — `images` (two landscape frames)
- `HalfWidthPortrait` — `images` (two portrait frames)
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
