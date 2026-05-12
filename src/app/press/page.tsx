import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";
import {
  album,
  artist,
  bio,
  contact,
  featuredTracks,
  pressPhotos,
  pressQuotes,
  radioAndCuration,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "Press kit for Josh Martin — bios, press quotes, downloadable photos, streaming links, and contact for booking, press, and label.",
  openGraph: {
    title: "Press Kit · Josh Martin",
    description:
      "Bios, press quotes, downloadable photos, streaming, and contact.",
    images: [{ url: "/photos/og.jpg", width: 1200, height: 630, alt: "Josh Martin" }],
  },
};

export default function PressKitPage() {
  return (
    <main className="flex-1">
      <Header />
      <Intro />
      <QuotesSection />
      <BiosSection />
      <PhotoPack />
      <ListenSection />
      <RadioAndCurationSection />
      <ContactSection />
      <FooterNav />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 md:px-12 md:py-10 border-b border-border-subtle">
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-foreground"
      >
        ← {artist.name}
      </Link>
      <nav className="hidden gap-8 font-mono text-xs uppercase tracking-[0.18em] text-muted md:flex">
        <a href="#quotes" className="hover:text-foreground">Press</a>
        <a href="#bios" className="hover:text-foreground">Bios</a>
        <a href="#photos" className="hover:text-foreground">Photos</a>
        <a href="#listen" className="hover:text-foreground">Listen</a>
        <a href="#contact" className="hover:text-foreground">Contact</a>
      </nav>
    </header>
  );
}

function Intro() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 border-b border-border-subtle">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-aurora">
          Press Kit
        </p>
        <h1 className="font-display-tight mt-4 text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
          {artist.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/90 md:text-xl">
          {artist.positioning} Debut LP{" "}
          <em className="not-italic text-aurora">{album.title}</em> on {album.label} ({album.released}).
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/press/onesheet"
            className="inline-flex items-center gap-2 rounded-full border border-aurora/40 bg-aurora/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-aurora hover:bg-aurora/20"
          >
            One-sheet ↗
          </a>
          <a
            href="#photos"
            className="inline-flex items-center gap-2 rounded-full border border-border-stronger bg-foreground/5 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] hover:bg-foreground/10"
          >
            Photos ↓
          </a>
          <a
            href={`mailto:${contact.booking}`}
            className="inline-flex items-center gap-2 rounded-full border border-border-stronger bg-foreground/5 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] hover:bg-foreground/10"
          >
            Booking
          </a>
          <a
            href={`mailto:${contact.press}`}
            className="inline-flex items-center gap-2 rounded-full border border-border-stronger bg-foreground/5 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] hover:bg-foreground/10"
          >
            Press
          </a>
        </div>
      </div>
    </section>
  );
}

function QuotesSection() {
  return (
    <section
      id="quotes"
      className="border-b border-border-subtle px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Press</SectionLabel>
        <ul className="mt-12 space-y-16">
          {pressQuotes.map((q, i) => (
            <li key={i} className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <div>{q.outlet}</div>
                <div className="mt-2 text-faint">{q.author}</div>
                <div className="mt-1 text-faint">{q.date}</div>
                {q.href && (
                  <a
                    href={q.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-aurora hover:underline"
                  >
                    Read →
                  </a>
                )}
              </div>
              <blockquote className="font-display text-2xl leading-snug text-foreground md:text-3xl">
                <span className="text-aurora">&ldquo;</span>
                {q.quote}
                <span className="text-aurora">&rdquo;</span>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BiosSection() {
  // Build plain-text copy versions of each bio length.
  const shortText = bio.short;
  const mediumText = bio.medium.join("\n\n");
  const longText = bio.long.join("\n\n");

  return (
    <section
      id="bios"
      className="border-b border-border-subtle px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Bios · ready to paste</SectionLabel>

        <div className="mt-12 space-y-16">
          <BioBlock label="Short · ≈100 words" copyText={shortText}>
            <p>{shortText}</p>
          </BioBlock>

          <BioBlock label={`Medium · ≈${approxWords(mediumText)} words`} copyText={mediumText}>
            {bio.medium.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </BioBlock>

          <BioBlock label={`Long · ≈${approxWords(longText)} words`} copyText={longText}>
            {bio.long.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </BioBlock>
        </div>
      </div>
    </section>
  );
}

function BioBlock({
  label,
  copyText,
  children,
}: {
  label: string;
  copyText: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_3fr] md:gap-12">
      <div className="flex items-start justify-between md:flex-col md:items-start md:gap-4">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-aurora">
          {label}
        </div>
        <CopyButton text={copyText} />
      </div>
      <div className="space-y-4 text-base leading-relaxed text-foreground/90 md:text-lg">
        {children}
      </div>
    </div>
  );
}

function PhotoPack() {
  return (
    <section
      id="photos"
      className="border-b border-border-subtle px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Press photos · click to download</SectionLabel>
        <p className="mt-6 max-w-2xl text-muted">
          Right-click → Save, or click the file name to download. Please include
          the photographer credit when publishing.
        </p>

        <ul className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {pressPhotos.map((p) => (
            <li key={p.src} className="space-y-4">
              <a
                href={p.src}
                download={p.downloadName}
                className="block overflow-hidden rounded-lg border border-border-subtle bg-foreground/5 transition hover:border-aurora/40"
              >
                <div
                  className={
                    p.orientation === "portrait"
                      ? "relative aspect-[3/4]"
                      : "relative aspect-[3/2]"
                  }
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </a>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                {p.use}
              </div>
              <div className="text-sm text-foreground/80">{p.credit}</div>
              <a
                href={p.src}
                download={p.downloadName}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-aurora hover:underline"
              >
                {p.downloadName} ↓
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ListenSection() {
  return (
    <section
      id="listen"
      className="border-b border-border-subtle px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Listen</SectionLabel>
        <p className="mt-6 max-w-2xl font-display text-2xl leading-tight md:text-3xl">
          {album.title}, the debut on {album.label}.
        </p>
        <p className="mt-3 max-w-2xl text-muted">{album.recordingNote}</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <a
            href={album.bandcampHref}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-lg border border-border-subtle p-6 transition hover:border-aurora/40"
          >
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-aurora">
              Bandcamp
            </div>
            <div className="mt-3 font-display text-2xl leading-tight">
              Full album + cassette
            </div>
            <div className="mt-2 text-muted">
              Edition of 100, screen-printed artwork.
            </div>
            <div className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-foreground/70 group-hover:text-aurora">
              Open →
            </div>
          </a>
          <a
            href="https://open.spotify.com/artist"
            target="_blank"
            rel="noreferrer"
            className="group block rounded-lg border border-border-subtle p-6 transition hover:border-aurora/40"
          >
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-aurora">
              Spotify
            </div>
            <div className="mt-3 font-display text-2xl leading-tight">
              Streaming
            </div>
            <div className="mt-2 text-muted">
              For programmers and editors.
            </div>
            <div className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-foreground/70 group-hover:text-aurora">
              Open →
            </div>
          </a>
        </div>

        <h3 className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-faint">
          Featured tracks
        </h3>
        <ol className="mt-6 divide-y divide-border-subtle border-y border-border-subtle">
          {featuredTracks.map((t, i) => (
            <li
              key={t.title}
              className="grid items-baseline gap-2 py-6 md:grid-cols-[3rem_1fr_auto] md:gap-8"
            >
              <span className="font-mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="font-display text-2xl md:text-3xl">{t.title}</div>
                <div className="mt-1 text-sm text-muted">{t.role}</div>
              </div>
              {t.bandcampHref && (
                <a
                  href={t.bandcampHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border-stronger px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] hover:bg-foreground/5"
                >
                  Bandcamp ↗
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RadioAndCurationSection() {
  return (
    <section className="border-b border-border-subtle px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Radio · Curation</SectionLabel>
        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {radioAndCuration.map((r, i) => (
            <li
              key={i}
              className="group rounded-lg border border-border-subtle p-6 transition hover:border-border-stronger"
            >
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-aurora">
                {r.outlet}
              </div>
              <div className="mt-3 font-display text-xl leading-tight">{r.show}</div>
              <div className="mt-4 flex items-center justify-between font-mono text-xs text-faint">
                <span>{r.date}</span>
                <span className="text-muted">{r.track}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="border-b border-border-subtle px-6 py-20 md:px-12 md:py-28"
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

function FooterNav() {
  return (
    <footer className="px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 font-mono text-xs uppercase tracking-[0.18em] text-faint md:flex-row md:items-center">
        <div>
          © {new Date().getFullYear()} {artist.name}
        </div>
        <Link href="/" className="hover:text-aurora">
          ← Back to {artist.name}
        </Link>
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

function approxWords(text: string): number {
  return Math.round(text.trim().split(/\s+/).length / 10) * 10;
}
