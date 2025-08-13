import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import AgeVerificationProvider from "@/components/AgeVerificationProvider";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Library | Premier Cannabis Dispensary in West Orange, NJ",
  description: "The Library is West Orange's premier cannabis dispensary offering recreational and medical marijuana products. Visit us for quality cannabis, expert guidance, and exceptional service.",
  keywords: "cannabis dispensary, West Orange NJ, marijuana dispensary, recreational cannabis, medical marijuana, The Library dispensary",
  authors: [{ name: "The Library" }],
  creator: "The Library",
  publisher: "The Library",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://thelibrarynj.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Library | Premier Cannabis Dispensary in West Orange, NJ",
    description: "West Orange's premier cannabis dispensary offering quality products and expert guidance.",
    url: "https://thelibrarynj.com",
    siteName: "The Library",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Library Cannabis Dispensary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Library | Cannabis Dispensary",
    description: "West Orange's premier cannabis dispensary",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <AgeVerificationProvider>
          {children}
        </AgeVerificationProvider>
      </body>
    </html>
  );
}
