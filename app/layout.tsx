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
  title: 'PeakFit AI | Join the Waitlist',
  description: 'Create personalized workout plans with AI. Join the waitlist to be the first to experience AI-powered fitness.',
  openGraph: {
    title: 'PeakFit AI | Join the Waitlist',
    description: 'Create personalized workout plans with AI. Join the waitlist to be the first to experience AI-powered fitness.',
    url: 'https://peakfit.ai',
    siteName: 'PeakFit AI',
    images: [
      {
        url: '/images/barbell_panda.png',
        width: 800,
        height: 800,
        alt: 'PeakFit AI Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeakFit AI | Join the Waitlist',
    description: 'Create personalized workout plans with AI. Join the waitlist to be the first to experience AI-powered fitness.',
    images: ['/images/barbell_panda.png'],
  },
  icons: {
    icon: '/images/barbell_panda.png',
    shortcut: '/images/barbell_panda.png',
    apple: '/images/barbell_panda.png',
  }
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
