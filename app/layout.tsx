import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "500", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Toheed Ahmed | Full Stack Engineer & SaaS Builder",
  description: "Premium Full Stack Developer portfolio. Building scalable web applications, SaaS products, and workflow automation tools. Available for opportunities.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "SaaS",
    "Web Development",
    "TypeScript",
    "Product Development",
    "Frontend Engineer",
    "Backend Engineer",
    "Web Engineer",
  ],
  authors: [{ name: "Toheed Ahmed" }],
  creator: "Toheed Ahmed",
  metadataBase: new URL("https://toheed-portfolio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toheed-portfolio.com",
    siteName: "Toheed Ahmed - Portfolio",
    title: "Toheed Ahmed | Full Stack Engineer & SaaS Builder",
    description: "Premium Full Stack Developer portfolio. Building scalable web applications and SaaS products.",
    images: [
      {
        url: "https://toheed-portfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Toheed Ahmed Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toheed Ahmed | Full Stack Engineer",
    description: "Full Stack Developer building premium digital experiences and SaaS products",
    creator: "@toheed_ahmed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`} style={{ scrollBehavior: "smooth" }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-slate-950 text-slate-100 font-inter">
        {children}
      </body>
    </html>
  );
}
