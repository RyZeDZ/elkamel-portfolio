import type { Metadata } from "next";
import localFont from "next/font/local";
import { Martian_Mono } from "next/font/google";
import "./globals.css";

const zodiak = localFont({
  src: [
    { path: "./fonts/Zodiak-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Zodiak-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Zodiak-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-zodiak",
  display: "swap",
});

const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-martian",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elkamel.dev"),
  title: "Kamel Bensmaine — Portfolio",
  description:
    "CS graduate from Algeria building AI pipelines, backends, and security tooling. Co-founder of GuppyNodes and Nexara.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kamel Bensmaine — Portfolio",
    description:
      "CS graduate from Algeria building AI pipelines, backends, and security tooling.",
    url: "https://elkamel.dev",
    siteName: "elkamel.dev",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamel Bensmaine — Portfolio",
    description:
      "CS graduate from Algeria building AI pipelines, backends, and security tooling.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${zodiak.variable} ${switzer.variable} ${martian.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kamel Bensmaine",
              url: "https://elkamel.dev",
              jobTitle: "Software Developer",
              address: { "@type": "PostalAddress", addressCountry: "DZ" },
              alumniOf: "Université Larbi Ben M'hidi",
              sameAs: [
                "https://github.com/RyZeDZ",
                "https://linkedin.com/in/elkamelbens",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
