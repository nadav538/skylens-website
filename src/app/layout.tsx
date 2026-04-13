import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyLens | Cinematic Drone Visuals for Real Estate",
  description: "SkyLens provides premium cinematic drone photography and videography for real estate professionals. Sell properties faster with stunning aerial visuals.",
  keywords: ["drone photography", "real estate", "aerial videography", "property marketing", "SkyLens", "cinematic drone", "real estate drone"],
  authors: [{ name: "SkyLens" }],
  openGraph: {
    title: "SkyLens | Cinematic Drone Visuals for Real Estate",
    description: "Sell properties faster with cinematic drone visuals. More views. More buyers. More deals.",
    siteName: "SkyLens",
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "SkyLens - Cinematic Drone Visuals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyLens | Cinematic Drone Visuals for Real Estate",
    description: "Sell properties faster with cinematic drone visuals.",
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=630&fit=crop"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
