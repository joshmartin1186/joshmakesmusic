# Photos directory

Drop your real photos here with these exact filenames. The site references them
as static paths. Replace the placeholders and they appear automatically.

## Required files

| Filename | Aspect | Where it appears |
|---|---|---|
| `hero.jpg` | landscape (e.g. 2560×1440 or larger) | full-bleed hero on landing |
| `portrait.jpg` | portrait (3:4, e.g. 1200×1600) | bio section |
| `landscape.jpg` | landscape | dimmed background of the album section |
| `og.jpg` | 1200×630 exactly | social share / Open Graph preview |

## Notes

- JPG over PNG. Keeps the bundle light. Next/Image re-encodes to AVIF/WebP on the fly anyway.
- Optimize before upload (e.g. squoosh.app). Aim for <500KB each.
- The names matter: the React components reference them by exact path.
- If you want different filenames, edit `src/app/page.tsx` to match.
