# joshmakesmusic.com

Electronic press kit for **Josh Martin** — American Primitive guitarist from Colorado Springs. Debut album *Western Mind* (Eiderdown Records, 2025).

## Stack

- Next.js 16 (App Router, React 19)
- Tailwind CSS 4
- Vercel Analytics
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Editing content

Everything that changes regularly — bio text, press quotes, radio plays, featured tracks, contact info — lives in [`src/lib/content.ts`](src/lib/content.ts). Edit that file, save, push. Vercel redeploys automatically.

The structure is intentional — one source of truth, typed, easy to skim:

- `artist` — name, tagline, location, influences
- `bio` — short, medium, long (all three displayed at different points)
- `pressQuotes` — quote / outlet / author / date / link
- `radioAndCuration` — radio plays and curated placements
- `featuredTracks` — three lead tracks with Bandcamp + Spotify links
- `album` — *Western Mind* metadata
- `contact` — booking, press, label, socials

## Photos

Drop real photos into [`public/photos/`](public/photos/) — see the README in that folder for required filenames and aspects. The current files are placeholders.

## Project layout

```
src/
  app/
    layout.tsx     # fonts, metadata, analytics
    page.tsx       # the whole EPK — one scrolling page, ~7 sections
    globals.css    # theme tokens + Tailwind import
  lib/
    content.ts     # ← edit this to change anything
public/
  photos/          # hero / portrait / landscape / og
```

---

Built quietly in Colorado.
