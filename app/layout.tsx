import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: "PeakFit AI",
  description: "Create personalized workout plans with AI-powered insights. Join the waitlist today!",
  icons: {
    icon: [
      {
        url: '/images/barbell_panda.png',
        type: 'image/png',
        sizes: '32x32'
      },
      {
        url: '/images/barbell_panda.png',
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    apple: {
      url: '/images/barbell_panda.png',
      type: 'image/png',
      sizes: '180x180'
    },
    shortcut: { url: '/images/barbell_panda.png' }
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/png" href="/images/barbell_panda.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/barbell_panda.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/barbell_panda.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/barbell_panda.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
