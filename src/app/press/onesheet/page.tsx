import type { Metadata } from "next";
import Link from "next/link";
import {
  album,
  artist,
  bio,
  contact,
  featuredTracks,
  pressQuotes,
  radioAndCuration,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "One-Sheet",
  description:
    "Single-page Josh Martin one-sheet — bio, top press, featured tracks, contact. Cmd/Ctrl-P to save as PDF.",
  robots: { index: false, follow: false }, // not for search; reachable from /press only
};

/**
 * Print-optimized single page. Screen view is a styled preview with a
 * "Save as PDF" hint banner; print view fits Letter portrait, no nav
 * chrome. Designed to be the file a booker prints and pins.
 */
export default function OneSheetPage() {
  const topQuotes = pressQuotes.slice(0, 2);

  return (
    <main className="bg-white text-neutral-900 print:bg-white print:text-black">
      <div className="print:hidden border-b border-neutral-300 bg-neutral-50 px-6 py-4">
        <div className="mx-auto flex max-w-[8.5in] items-center justify-between text-sm">
          <Link href="/press" className="text-neutral-600 hover:text-neutral-900">
            ← Press kit
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-neutral-600">
              Press <kbd className="rounded border border-neutral-300 bg-white px-1.5 py-0.5 text-xs">⌘P</kbd>{" "}
              / <kbd className="rounded border border-neutral-300 bg-white px-1.5 py-0.5 text-xs">Ctrl+P</kbd> to save as PDF.
            </span>
          </div>
        </div>
      </div>

      <article
        className="mx-auto bg-white p-10 print:p-0"
        style={{ maxWidth: "8.5in", minHeight: "11in" }}
      >
        {/* Header */}
        <header className="flex items-end justify-between border-b-2 border-neutral-900 pb-4">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-neutral-500">
              One-Sheet · Cosmic Mountain Guitar
            </p>
            <h1
              className="font-display-tight mt-1 text-5xl leading-[0.9]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              {artist.name}
            </h1>
          </div>
          <div className="text-right font-mono text-[0.65rem] uppercase tracking-[0.18em] text-neutral-600">
            <div>{artist.hometown}</div>
            <div>{album.label}</div>
            <div className="mt-1 text-neutral-500">
              joshmakesmusic.com
            </div>
          </div>
        </header>

        {/* Album block */}
        <section className="mt-5 grid grid-cols-[1fr_2fr] gap-6 text-sm leading-snug">
          <div>
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500">
              Debut LP
            </div>
            <div
              className="mt-1 text-2xl leading-tight"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              {album.title}
            </div>
            <dl className="mt-3 space-y-1 text-xs text-neutral-700">
              <Row label="Label" value={album.label} />
              <Row label="Released" value={album.released} />
              <Row label="Format" value={album.format} />
            </dl>
          </div>
          <div>
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500">
              Bio
            </div>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-neutral-800">
              {bio.short}
            </p>
          </div>
        </section>

        {/* Press quotes */}
        <section className="mt-6">
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500">
            Press
          </div>
          <ul className="mt-2 space-y-3">
            {topQuotes.map((q, i) => (
              <li key={i} className="border-l-2 border-neutral-900 pl-3">
                <p
                  className="text-[0.85rem] leading-snug text-neutral-800"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-neutral-500">
                  — {q.author}, {q.outlet} · {q.date}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Two-column: tracks + radio */}
        <section className="mt-6 grid grid-cols-2 gap-8">
          <div>
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500">
              Featured tracks
            </div>
            <ol className="mt-2 space-y-2 text-[0.8rem] leading-snug">
              {featuredTracks.map((t, i) => (
                <li key={t.title} className="flex gap-3">
                  <span className="font-mono text-[0.65rem] text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-medium">{t.title}</div>
                    <div className="text-[0.7rem] text-neutral-600">{t.role}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500">
              Radio · curation
            </div>
            <ul className="mt-2 space-y-1.5 text-[0.75rem] leading-snug text-neutral-800">
              {radioAndCuration.slice(0, 5).map((r, i) => (
                <li key={i} className="flex justify-between gap-3">
                  <span>
                    <span className="font-medium">{r.outlet}</span> · {r.show}
                  </span>
                  <span className="whitespace-nowrap text-neutral-500">{r.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer / contact */}
        <footer className="mt-6 border-t-2 border-neutral-900 pt-3">
          <div className="grid grid-cols-3 gap-4 text-[0.75rem] leading-snug">
            <Contact label="Booking" value={contact.booking} />
            <Contact label="Press" value={contact.press} />
            <Contact label="Label" value={`${contact.label.name} · ${contact.label.contact}`} />
          </div>
          <p className="mt-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.24em] text-neutral-400">
            joshmakesmusic.com · {artist.hometown}
          </p>
        </footer>
      </article>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <dt className="w-16 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-neutral-500">
        {label}
      </dt>
      <dd className="flex-1">{value}</dd>
    </div>
  );
}

function Contact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-neutral-500">
        {label}
      </div>
      <div className="mt-1 text-neutral-800">{value}</div>
    </div>
  );
}
