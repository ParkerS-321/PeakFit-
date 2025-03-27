import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | PeakFit AI',
  description: 'Terms of Service and conditions for using PeakFit AI',
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 