import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toheed Ahmed | Full Stack Developer & SaaS Builder",
  description: "Full Stack Developer focused on scalable web applications, SaaS products, and workflow automation. Available for internships, freelance, and full-time opportunities.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "SaaS",
    "Web Development",
    "Node.js",
    "TypeScript",
    "Product Development",
  ],
  authors: [{ name: "Toheed Ahmed" }],
  creator: "Toheed Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toheed-portfolio.com",
    siteName: "Toheed Ahmed - Portfolio",
    title: "Toheed Ahmed | Full Stack Developer & SaaS Builder",
    description: "Full Stack Developer focused on scalable web applications, SaaS products, and workflow automation.",
    images: [
      {
        url: "https://toheed-portfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Toheed Ahmed Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toheed Ahmed | Full Stack Developer",
    description: "Full Stack Developer building scalable SaaS products",
    creator: "@toheed_ahmed",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-dark-bg text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
