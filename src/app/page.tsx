import Image from "next/image";
import Link from "next/link";
import {
  album,
  artist,
  bio,
  contact,
  credibilityStrip,
  featuredTracks,
  landingQuotes,
} from "@/lib/content";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <CredibilityStrip />
      <Listen />
      <Quotes />
      <BioTeaser />
      <AlbumSection />
      <Contact />
      <Footer />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/photos/hero.jpg"
          alt={`${artist.name}, silhouette against aurora sky`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 md:py-10">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Josh Martin
        </span>
        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-[0.18em] text-muted md:flex">
          <a href="#listen" className="hover:text-foreground">Listen</a>
          <a href="#bio" className="hover:text-foreground">Bio</a>
          <Link href="/press" className="hover:text-aurora">Press Kit ↗</Link>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-6xl flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-aurora">
          {artist.tagline}
        </p>
        <h1 className="font-display-tight mt-4 text-6xl leading-[0.95] md:text-8xl lg:text-9xl">
          {artist.name}
        </h1>
        <p className="mt-6 max-w-xl text-base text-foreground/90 md:text-lg">
          {artist.positioning}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#listen"
            className="inline-flex items-center gap-2 rounded-full border border-border-stronger bg-foreground/5 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] backdrop-blur hover:bg-foreground/10"
          >
            Listen ↓
          </a>
          <a
            href={`mailto:${contact.booking}`}
            className="inline-flex items-center gap-2 rounded-full border border-aurora/40 bg-aurora/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-aurora hover:bg-aurora/20"
          >
            Booking
          </a>
          <Link
            href="/press"
            className="inline-flex items-center gap-2 rounded-full border border-border-stronger bg-foreground/5 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] backdrop-blur hover:bg-foreground/10"
          >
            Press Kit ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

function CredibilityStrip() {
  return (
    <section className="border-t border-border-subtle px-6 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-faint">
          <span className="text-aurora">Heard on</span>
          {credibilityStrip.map((name, i) => (
            <span key={name} className="flex items-center gap-x-6">
              <span className="text-foreground/80">{name}</span>
              {i < credibilityStrip.length - 1 && <span className="text-faint">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Listen() {
  return (
    <section id="listen" className="border-t border-border-subtle px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Listen · featured tracks</SectionLabel>
        <p className="mt-6 max-w-2xl font-display text-2xl leading-tight md:text-3xl">
          {album.title}, the debut on {album.label}.
        </p>
        <p className="mt-3 max-w-2xl text-muted">{album.recordingNote}</p>

        <ol className="mt-12 divide-y divide-border-subtle border-y border-border-subtle">
          {featuredTracks.map((t, i) => (
            <li
              key={t.title}
              className="grid items-baseline gap-2 py-6 md:grid-cols-[3rem_1fr_auto] md:gap-8"
            >
              <span className="font-mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="font-display text-3xl md:text-4xl">{t.title}</div>
                <div className="mt-1 text-sm text-muted">{t.role}</div>
              </div>
              <div className="flex gap-3 font-mono text-xs uppercase tracking-[0.18em]">
                {t.bandcampHref && (
                  <a
                    href={t.bandcampHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border-stronger px-3 py-1.5 hover:bg-foreground/5"
                  >
                    Bandcamp ↗
                  </a>
                )}
                {t.spotifyHref && (
                  <a
                    href={t.spotifyHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border-stronger px-3 py-1.5 hover:bg-foreground/5"
                  >
                    Spotify ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <a
            href={album.bandcampHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-aurora/40 bg-aurora/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-aurora hover:bg-aurora/20"
          >
            Full album on Bandcamp ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function Quotes() {
  return (
    <section className="border-t border-border-subtle px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Press</SectionLabel>
        <ul className="mt-12 space-y-12">
          {landingQuotes.map((q, i) => (
            <li key={i} className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <div>{q.outlet}</div>
                <div className="mt-2 text-faint">{q.author}</div>
              </div>
              <blockquote className="font-display text-2xl leading-snug text-foreground md:text-3xl">
                <span className="text-aurora">&ldquo;</span>
                {q.quote}
                <span className="text-aurora">&rdquo;</span>
              </blockquote>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            href="/press"
            className="inline-flex items-center gap-2 rounded-full border border-aurora/40 bg-aurora/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-aurora hover:bg-aurora/20"
          >
            Full press kit ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

function BioTeaser() {
  // First two paragraphs of the medium bio — keep the landing scrollable.
  // Full bios live on /press with copy buttons.
  const teaser = bio.medium.slice(0, 2);

  return (
    <section id="bio" className="border-t border-border-subtle px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
        <div>
          <SectionLabel>Bio</SectionLabel>
          <div className="mt-6 aspect-[3/4] w-full overflow-hidden rounded-lg border border-border-subtle">
            <Image
              src="/photos/portrait.jpg"
              alt={`${artist.name} portrait`}
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            {teaser.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/press#bios"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-aurora hover:underline"
            >
              Full bio + press kit →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 border-t border-border-subtle pt-8 font-mono text-xs uppercase tracking-[0.18em] text-muted md:grid-cols-3">
            <div>
              <div className="text-faint">Influences</div>
              <div className="mt-2 normal-case tracking-normal text-foreground/80">
                {artist.influences.primary.join(" · ")}
              </div>
              <div className="mt-1 normal-case tracking-normal text-foreground/60">
                {artist.influences.secondary.join(" · ")}
              </div>
              <div className="mt-1 normal-case tracking-normal text-foreground/50">
                via {artist.influences.foundational[0]}
              </div>
            </div>
            <div>
              <div className="text-faint">Based</div>
              <div className="mt-2 normal-case tracking-normal text-foreground/80">
                {artist.hometown}
              </div>
            </div>
            <div>
              <div className="text-faint">Label</div>
              <div className="mt-2 normal-case tracking-normal text-foreground/80">
                {album.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AlbumSection() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border-subtle">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/photos/landscape.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32">
        <SectionLabel>Debut</SectionLabel>
        <h2 className="font-display-tight mt-6 text-5xl leading-[0.95] md:text-7xl">
          {album.title}
        </h2>
        <dl className="mt-10 grid gap-y-4 font-mono text-xs uppercase tracking-[0.18em] md:grid-cols-2 md:gap-x-12">
          <div className="flex gap-4">
            <dt className="min-w-24 text-faint">Released</dt>
            <dd className="normal-case tracking-normal text-foreground/80">
              {album.released}
            </dd>
          </div>
          <div className="flex gap-4">
            <dt className="min-w-24 text-faint">Label</dt>
            <dd className="normal-case tracking-normal text-foreground/80">
              {album.label}
            </dd>
          </div>
          <div className="flex gap-4 md:col-span-2">
            <dt className="min-w-24 text-faint">Format</dt>
            <dd className="normal-case tracking-normal text-foreground/80">
              {album.format}
            </dd>
          </div>
          <div className="flex gap-4 md:col-span-2">
            <dt className="min-w-24 text-faint">Recording</dt>
            <dd className="normal-case tracking-normal text-foreground/80">
              {album.recordingNote}
            </dd>
          </div>
        </dl>
        <a
          href={album.bandcampHref}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-aurora/40 bg-aurora/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-aurora hover:bg-aurora/20"
        >
          Western Mind on Bandcamp ↗
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border-subtle px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Contact</SectionLabel>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              Booking
            </div>
            <a
              href={`mailto:${contact.booking}`}
              className="mt-3 block font-display text-2xl text-foreground hover:text-aurora md:text-3xl"
            >
              {contact.booking}
            </a>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              Press
            </div>
            <a
              href={`mailto:${contact.press}`}
              className="mt-3 block font-display text-2xl text-foreground hover:text-aurora md:text-3xl"
            >
              {contact.press}
            </a>
            <Link
              href="/press"
              className="mt-2 inline-block font-mono text-xs uppercase tracking-[0.18em] text-aurora hover:underline"
            >
              Press kit ↗
            </Link>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              Label
            </div>
            <a
              href={contact.label.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block font-display text-2xl text-foreground hover:text-aurora md:text-3xl"
            >
              {contact.label.name}
            </a>
            <a
              href={`mailto:${contact.label.contact}`}
              className="mt-1 block font-mono text-xs text-muted hover:text-aurora"
            >
              {contact.label.contact}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.18em]">
          <a
            href={contact.socials.bandcamp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border-stronger px-4 py-2 hover:bg-foreground/5"
          >
            Bandcamp ↗
          </a>
          <a
            href={contact.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border-stronger px-4 py-2 hover:bg-foreground/5"
          >
            Instagram ↗
          </a>
          <a
            href={contact.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border-stronger px-4 py-2 hover:bg-foreground/5"
          >
            YouTube ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border-subtle px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 font-mono text-xs uppercase tracking-[0.18em] text-faint md:flex-row md:items-center">
        <div>
          © {new Date().getFullYear()} {artist.name}
        </div>
        <div className="flex gap-6">
          <Link href="/press" className="hover:text-aurora">Press Kit</Link>
          <span>Built quietly in Colorado.</span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-aurora">
      <span className="h-px w-8 bg-aurora/60" />
      <span>{children}</span>
    </div>
  );
}
