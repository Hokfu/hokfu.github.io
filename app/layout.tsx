import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Khant Htoo Naing | AI Software Engineer",
  description:
    "Portfolio of Khant Htoo Naing, AI Software Engineer focused on agentic systems, cognitive architectures, and scalable Go/Python microservices.",
  openGraph: {
    title: "Khant Htoo Naing | AI Software Engineer",
    description:
      "Agentic AI systems, memory-driven architectures, and scalable SaaS microservices.",
    url: siteUrl,
    siteName: "Khant Htoo Naing Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Khant Htoo Naing | AI Software Engineer",
    description:
      "Agentic AI systems, memory-driven architectures, and scalable SaaS microservices."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
