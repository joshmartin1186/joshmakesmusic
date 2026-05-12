# Photos directory

Drop your real photos here with these exact filenames. The site references them
as static paths — replace the placeholders and they appear automatically.

## Required files

| Filename | Aspect | Where it appears | Source from your set |
|---|---|---|---|
| `hero.jpg` | landscape (e.g. 2560×1440 or larger) | full-bleed hero on landing | the silhouette aurora shot (3rd pick) |
| `portrait.jpg` | portrait (3:4 — e.g. 1200×1600) | bio section | the standing-with-guitar aurora shot (2nd pick) |
| `landscape.jpg` | landscape | dimmed background of the album section | the sitting-on-rock cyan/teal shot (1st pick) |
| `og.jpg` | 1200×630 exactly | social share / Open Graph preview | a cropped version of `hero.jpg` works |

## Notes

- JPG over PNG for these — keeps the bundle light, Next/Image will re-encode
  to AVIF/WebP on the fly anyway.
- Optimize before upload (e.g. squoosh.app) — aim for <500KB each.
- The names matter: the React components reference them by exact path.
- If you want different filenames, edit `src/app/page.tsx` to match.

## Placeholders

`hero.svg`, `portrait.svg`, `landscape.svg` are placeholder gradients so the
dev server renders without broken images. Delete them once your real `.jpg`
files are in place (Next/Image will pick whichever file extension exists).
