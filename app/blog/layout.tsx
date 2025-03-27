import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | PeakFit AI',
  description: 'Latest updates and insights from PeakFit AI',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 