import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const siteUrl = "https://joshmakesmusic.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Josh Martin — American Primitive Guitar",
    template: "%s · Josh Martin",
  },
  description:
    "Josh Martin is an American Primitive guitarist from Colorado Springs. His debut Western Mind (Eiderdown Records, 2025) draws on John Fahey, William Tyler, and Marisa Anderson.",
  keywords: [
    "Josh Martin",
    "American Primitive guitar",
    "fingerstyle guitar",
    "Eiderdown Records",
    "Western Mind",
    "cosmic pastoral",
    "Colorado guitarist",
  ],
  authors: [{ name: "Josh Martin" }],
  creator: "Josh Martin",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Josh Martin — American Primitive Guitar",
    description:
      "Debut full-length Western Mind on Eiderdown Records (2025). Coverage: Acoustic Guitar Magazine, Bandcamp Daily, Aquarium Drunkard, KEXP.",
    siteName: "Josh Martin",
    images: [
      {
        url: "/photos/og.jpg",
        width: 1200,
        height: 630,
        alt: "Josh Martin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Martin — American Primitive Guitar",
    description:
      "Debut full-length Western Mind on Eiderdown Records (2025).",
    images: ["/photos/og.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
