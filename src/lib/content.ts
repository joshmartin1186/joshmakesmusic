// Single source of truth for EPK content.
// Mirrors /docs/press-kit-source.md in the parent music-promo repo.
// Update here, redeploy. Or eventually wire to MDX.

export const artist = {
  name: "Josh Martin",
  tagline: "Cosmic Mountain Guitar · Colorado Springs",
  positioning:
    "Solo fingerstyle and effects-soaked electric guitar from the base of the Front Range.",
  location: "Colorado Springs, Colorado",
  hometown: "Colorado Springs, CO",
  genre: "Cosmic Mountain Guitar",
  influences: {
    primary: ["Marisa Anderson", "William Tyler"],
    secondary: ["Daniel Bachman", "Glenn Jones"],
    foundational: ["John Fahey"],
  },
} as const;

export const bio = {
  short: `Josh Martin is a cosmic mountain guitarist from Colorado Springs. He plays solo fingerstyle and effects-soaked electric in the American Primitive tradition, pushed out toward ambient and cosmic country. His debut full-length, Western Mind, was released by Seattle's Eiderdown Records in November 2025, recorded alone in a shed at the base of the Front Range. The record drew early support from Acoustic Guitar Magazine, Bandcamp Daily, Aquarium Drunkard, and KEXP, and was described by The Third Eye as approaching "the spectral Americana of William Tyler."`,

  medium: [
    `Josh Martin is a cosmic mountain guitarist from Colorado Springs. His music lives in the American Primitive tradition and drifts out toward ambient washes, cosmic country, and psychedelic folk.`,
    `His debut full-length, Western Mind, was released on Seattle's Eiderdown Records in November 2025. The record is a cassette edition of 100 with screen-printed artwork, recorded, mixed, and mastered alone in a shed at the base of the Front Range. Within weeks of release, the album drew coverage from Acoustic Guitar Magazine, Bandcamp Daily, Aquarium Drunkard, and The Third Eye, with radio support from KEXP (Pacific Notions and drive-time programming) and Jeff Conklin's The Trailhead.`,
    `Critic Nick Pipitone described the record as approaching "the spectral Americana of William Tyler," writing that "a guitar can function as a landscape more than a lead instrument." Western Mind isn't trying to depict the American West so much as channel it: the imagined West, the internal West, the one that flashes in memory and myth.`,
    `Goose Creek, a single Martin released a year before Western Mind, appeared on Aquarium Drunkard's Winter Solstice playlist and was curated by Prairiewolf into Mountain Meander: A Collection of Colorado Sounds. He is currently writing new material at the same shed-studio outside Colorado Springs.`,
  ],

  long: [
    `Josh Martin is a cosmic mountain guitarist from Colorado Springs, Colorado. His music is solo fingerstyle and effects-heavy electric playing, present and quiet, occasionally country-twanged, sometimes drifting toward open ambient passages, but always anchored to a sense of physical place.`,
    `His debut full-length, Western Mind, was released by Seattle's Eiderdown Records in November 2025. The album was recorded, mixed, and mastered alone in a shed at the base of the Front Range, and arrived as a limited cassette edition of 100 with screen-printed artwork alongside a digital release. The collaborator on "Westcliffe," the record's lead track, is Stefan Beck of Eiderdown labelmates Golden Brown and of Prairiewolf, a long-running creative bridge across the Colorado scene.`,
    `Within weeks of release, Western Mind drew coverage from Acoustic Guitar Magazine, where Joey Lusterman wrote that "Josh Martin paints guitar-centered landscapes" with "a strong sense of place"; from Bandcamp Daily, which featured the record in its Best Country Music of November 2025; from The Third Eye, whose Nick Pipitone called the record "the imagined West, the internal West" and traced its closest comparison to William Tyler's "spectral Americana"; and from Aquarium Drunkard, which programmed Martin's "Goose Creek" into its curated catalog alongside Daniel Bachman, Ryley Walker, Cameron Knowler, and Sir Richard Bishop.`,
    `On radio, the record has been featured on KEXP's Pacific Notions (Alex Ruder) and on KEXP drive-time programming with DJ Riz. Jeff Conklin played "Tarryall" on The Trailhead 191 in a set bracketed by Sir Richard Bishop and Golden Brown.`,
    `Martin's work pre-dates Western Mind in the Colorado scene: his single "Goose Creek," released in August 2024, appeared on Aquarium Drunkard's Winter Solstice Spotify playlist and was selected by Prairiewolf for Mountain Meander: A Collection of Colorado Sounds. He is currently writing new material at the same shed-studio outside Colorado Springs.`,
  ],
} as const;

// Full press quotes — used on /press. Editors get the unabridged versions
// they can pull from. Order = roughly by outlet weight.
export const pressQuotes = [
  {
    quote:
      "Colorado guitarist Josh Martin paints guitar-centered landscapes on Western Mind. Hints of country twang and flowing rhythm suggest a strong sense of place.",
    outlet: "Acoustic Guitar Magazine",
    author: "Joey Lusterman",
    date: "Winter 2025–26",
    href: "https://acousticguitar.com/recent-and-remarkable-records-from-winter-2025-26/",
    tier: 1,
  },
  {
    quote:
      "There's country music like they make in Nashville and then there's the big ol' wide open country music of Josh Martin, a Colorado-based guitarist whose music is like a wordless travelogue of the vast empty spaces that stretch across the American West. The song titles set the scene — 'Goose Creek,' 'Hwy 24,' 'Crags,' 'Truck Stop Hymnal' — and Martin uses six strings and some electronic sounds to conjure up backlit clouds, sun-dappled rivers, darkening skies, distant lightning, rolling pastures, and the steady thrum of a life lived among it all.",
    outlet: "Bandcamp Daily",
    author: "Ben Salmon",
    date: "November 21, 2025",
    href: "https://daily.bandcamp.com/",
    tier: 1,
  },
  {
    quote:
      "Martin pushes the form into a sort of dream logic… comes closest to the spectral Americana of William Tyler. A guitar can function as a landscape more than a lead instrument.",
    outlet: "The Third Eye",
    author: "Nick Pipitone",
    date: "November 8, 2025",
    href: "https://thirdeyepsychrock.blog/2025/11/08/western-mind-by-josh-martin/",
    tier: 2,
  },
  {
    quote:
      "Western Mind isn't trying to depict the American West so much as channel it. This is the imagined West, the internal West, the one that flashes in memory and myth.",
    outlet: "The Third Eye",
    author: "Nick Pipitone",
    date: "November 8, 2025",
    href: "https://thirdeyepsychrock.blog/2025/11/08/western-mind-by-josh-martin/",
    tier: 2,
  },
  {
    quote:
      "The mountains in the American West hold a different aura than those in the East. Listening to Josh Martin's stunningly beautiful Western Mind LP, you can immediately sense that aura. Martin, a Colorado-based guitarist, has crafted a musical homage to the \u201Cgrandeur and sublime beauty\u201D of his home state, offering odes to the \u201Chigh lonesome byways and wind-blown denizens\u201D of both the real and the imagined West.",
    outlet: "Revolt of the Apes",
    author: "", // TODO: confirm byline
    date: "December 9, 2025",
    href: "", // TODO: paste Instagram post permalink
    tier: 2,
  },
] as const;

// Curated landing-page quotes — 3 max, compressed for atmosphere. The two
// Third Eye quotes are combined into a single line because consecutive
// quotes from the same outlet read as filler on a landing page.
export const landingQuotes = [
  {
    quote:
      "Josh Martin paints guitar-centered landscapes on Western Mind. A strong sense of place.",
    outlet: "Acoustic Guitar Magazine",
    author: "Joey Lusterman",
    href: "https://acousticguitar.com/recent-and-remarkable-records-from-winter-2025-26/",
  },
  {
    quote:
      "The big ol' wide open country music of Josh Martin: a wordless travelogue of the vast empty spaces that stretch across the American West.",
    outlet: "Bandcamp Daily",
    author: "Ben Salmon",
    href: "https://daily.bandcamp.com/",
  },
  {
    quote:
      "Comes closest to the spectral Americana of William Tyler. Western Mind isn't trying to depict the American West so much as channel it: the imagined West, the internal West, the one that flashes in memory and myth.",
    outlet: "The Third Eye",
    author: "Nick Pipitone",
    href: "https://thirdeyepsychrock.blog/2025/11/08/western-mind-by-josh-martin/",
  },
] as const;

export const radioAndCuration = [
  {
    outlet: "KEXP",
    show: "Pacific Notions (Alex Ruder)",
    date: "Nov 9, 2025",
    track: "Western Mind",
    href: "https://kexp.org",
  },
  {
    outlet: "KEXP",
    show: "Drive time (DJ Riz)",
    date: "Nov 2025",
    track: "Tarryall",
    href: "https://kexp.org",
  },
  {
    outlet: "Bandcamp Daily",
    show: "Best Country Music of November 2025 (Ben Salmon)",
    date: "Nov 21, 2025",
    track: "Western Mind",
    href: "https://daily.bandcamp.com",
  },
  {
    outlet: "Aquarium Drunkard",
    show: "Winter Solstice playlist + curated catalog",
    date: "2025",
    track: "Goose Creek",
    href: "https://aquariumdrunkard.com",
  },
  {
    outlet: "The Trailhead",
    show: "Episode 191 (Jeff Conklin)",
    date: "Nov 23, 2025",
    track: "Tarryall",
    href: "https://ambientaudiophile.substack.com",
  },
  {
    outlet: "Record Crates United",
    show: "Mountain Meander: A Collection of Colorado Sounds (curated by Prairiewolf)",
    date: "Sept 5, 2024",
    track: "Goose Creek",
    href: "https://recordcratesunited.com/2024/09/05/mountain-meander-a-collection-of-colorado-sounds-curated-by-prairiewolf/",
  },
] as const;

export const featuredTracks = [
  {
    title: "Westcliffe",
    role: "Lead. Features Stefan Beck (Golden Brown / Prairiewolf)",
    bandcampHref:
      "https://eiderdownrecords.bandcamp.com/album/western-mind",
    spotifyHref: null as string | null,
  },
  {
    title: "Goose Creek",
    role: "Aquarium Drunkard curation · Prairiewolf-selected · single 2024",
    bandcampHref:
      "https://eiderdownrecords.bandcamp.com/album/western-mind",
    spotifyHref: null as string | null,
  },
  {
    title: "Tarryall",
    role: "Played on KEXP (DJ Riz) and The Trailhead 191 (Jeff Conklin)",
    bandcampHref:
      "https://eiderdownrecords.bandcamp.com/album/western-mind",
    spotifyHref: null as string | null,
  },
] as const;

export const album = {
  title: "Western Mind",
  label: "Eiderdown Records",
  released: "November 7, 2025",
  format: "Cassette edition of 100 (screen-printed artwork) + digital",
  recordingNote:
    "Self-recorded, mixed, and mastered in a shed at the base of the Front Range.",
  bandcampHref: "https://eiderdownrecords.bandcamp.com/album/western-mind",
} as const;

export const liveVideo = {
  // TBD: Joshua to provide live performance video URL
  embedHref: null as string | null,
  title: "Live performance",
};

// Press photo pack. Each is downloadable as-is from /public/photos.
// `credit` is TBD until Joshua confirms photographers — placeholder shipped
// with a TODO so the press page is still functional. Photographers should
// be credited inline next to each download link.
export const pressPhotos = [
  {
    src: "/photos/hero.jpg",
    alt: "Josh Martin, full figure against aurora-lit sky on rock outcropping",
    credit: "Photo: Poonam Martin · Sigma fp",
    orientation: "landscape" as const,
    use: "Hero / cover / wide editorial",
    downloadName: "josh-martin-press-01-hero.jpg",
  },
  {
    src: "/photos/portrait.jpg",
    alt: "Josh Martin, vertical portrait on rock at dusk",
    credit: "Photo: Poonam Martin · Sigma fp",
    orientation: "portrait" as const,
    use: "Magazine column / poster / social vertical",
    downloadName: "josh-martin-press-02-portrait.jpg",
  },
  {
    src: "/photos/landscape.jpg",
    alt: "Josh Martin, landscape composition with mountains",
    credit: "Photo: Poonam Martin · Sigma fp",
    orientation: "landscape" as const,
    use: "Web banner / social header / festival lineup graphic",
    downloadName: "josh-martin-press-03-landscape.jpg",
  },
  {
    src: "/photos/press-04-playing.jpg",
    alt: "Josh Martin seated on a rock outcropping playing acoustic guitar at dusk, mountains in the distance",
    credit: "Photo: Poonam Martin · Sigma fp",
    orientation: "landscape" as const,
    use: "Editorial feature / artist-with-instrument shot",
    downloadName: "josh-martin-press-04-playing.jpg",
  },
] as const;

// One-line credibility markers, used as a compressed strip on the landing
// and as part of the one-sheet summary.
export const credibilityStrip = [
  "Acoustic Guitar Magazine",
  "Bandcamp Daily",
  "Aquarium Drunkard",
  "KEXP",
  "The Third Eye",
  "The Trailhead",
] as const;

export const contact = {
  booking: "booking@joshmakesmusic.com",
  press: "press@joshmakesmusic.com",
  label: {
    name: "Eiderdown Records",
    contact: "eiderdownrecords@gmail.com",
    href: "https://eiderdownrecords.bandcamp.com",
  },
  socials: {
    bandcamp: "https://joshmakesstuff.bandcamp.com",
    spotify: "https://open.spotify.com/artist/5GLM362jngsKxjBLeJgXay",
    instagram: "https://instagram.com/josh.makes.music",
    youtube: "https://youtube.com/@josh_j_martin",
  },
} as const;
