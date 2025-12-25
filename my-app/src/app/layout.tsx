import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AYRA - Your Private AI Companion",
  description: "AYRA is a private, emotionally-aware AI companion that respects your privacy while providing intelligent, proactive assistance. Not a chatbot. A true companion.",
  keywords: ["AI companion", "private AI", "AYRA", "artificial intelligence", "personal assistant", "privacy-first AI"],
  authors: [{ name: "AYRA Team" }],
  openGraph: {
    title: "AYRA - Your Private AI Companion",
    description: "Not a chatbot. A companion. Experience private, emotionally-aware AI that truly understands you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
