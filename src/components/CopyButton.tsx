"use client";

import { useState } from "react";

type Props = {
  /** Plain-text content to write to the clipboard. */
  text: string;
  /** Optional label shown in the idle state. Defaults to "Copy". */
  label?: string;
  /** Optional className override for the button. */
  className?: string;
};

/**
 * Small clipboard button used in the press kit for one-tap copy of bios
 * and short artist info. Resets after 2 seconds.
 */
export function CopyButton({ text, label = "Copy", className }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Permissions denied or unsupported. Fall back to selecting nothing —
      // the user can manually copy from the bio body if needed.
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-live="polite"
      className={
        className ??
        "inline-flex items-center gap-2 rounded-full border border-border-stronger bg-foreground/5 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground/80 hover:bg-foreground/10 active:scale-[0.98] transition"
      }
    >
      {copied ? "Copied ✓" : `${label} ↗`}
    </button>
  );
}
