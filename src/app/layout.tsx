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
    default: "Josh Martin · Cosmic Mountain Guitar",
    template: "%s · Josh Martin",
  },
  description:
    "Josh Martin is a cosmic mountain guitarist from Colorado Springs. Solo fingerstyle and effects-soaked electric playing in the American Primitive tradition. Debut album Western Mind on Eiderdown Records (2025).",
  keywords: [
    "Josh Martin",
    "cosmic mountain guitar",
    "American Primitive guitar",
    "fingerstyle guitar",
    "Eiderdown Records",
    "Western Mind",
    "ambient guitar",
    "Colorado guitarist",
  ],
  authors: [{ name: "Josh Martin" }],
  creator: "Josh Martin",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Josh Martin · Cosmic Mountain Guitar",
    description:
      "Debut album Western Mind on Eiderdown Records (2025). Coverage: Acoustic Guitar Magazine, Bandcamp Daily, Aquarium Drunkard, KEXP.",
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
    title: "Josh Martin · Cosmic Mountain Guitar",
    description:
      "Debut album Western Mind on Eiderdown Records (2025).",
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
