import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Bensmaine Mohamed El Kamel - Software Engineer",
  description:
    "The personal portfolio of Bensmaine Mohamed El Kamel, a software engineer specializing in crafting high-performance applications with Python, FastAPI, and Next.js.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Bensmaine Mohamed",
    "El Kamel",
  ],
  authors: [{ name: "Bensmaine Mohamed El Kamel" }],
  openGraph: {
    title: "Bensmaine Mohamed El Kamel - Software Engineer",
    description:
      "Building high-performance applications, from concept to code.",
    images: ["/favicon.ico"],
    url: "https://elkamel.dev",
    siteName: "El Kamel Portfolio",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
