import { Inter } from 'next/font/google'
import Link from 'next/link'
import { getAllPosts } from '@/lib/markdown'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default async function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className={`min-h-screen bg-[#F8F9FB] ${inter.className}`}>
      {/* Navigation */}
      <header className="flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8">
            <img src="/images/barbell_panda.png" alt="PeakFit AI Logo" className="w-full h-full object-contain" />
          </div>
          <span className={`text-xl font-semibold ${inter.className}`}>PeakFit AI</span>
        </Link>
        <nav className="flex items-center gap-4 flex-1 justify-center lg:justify-end lg:pr-24">
          <div className="relative group">
            <button className="text-sm text-black hover:text-neutral-600">Features</button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/#features" className="block px-4 py-2 text-sm text-black hover:bg-neutral-100">
                Features
              </Link>
              <Link href="/#how-it-works" className="block px-4 py-2 text-sm text-black hover:bg-neutral-100">
                How does PeakFit AI work?
              </Link>
              <Link href="/#why-peakfit" className="block px-4 py-2 text-sm text-black hover:bg-neutral-100">
                Why PeakFit AI?
              </Link>
            </div>
          </div>
          <Link href="/blog" className="text-sm text-black hover:text-neutral-600">
            Blog
          </Link>
        </nav>
      </header>

      <main className="max-w-[800px] mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-2 ${inter.className}`}>Our Blog</h1>
          <p className="text-neutral-600">Follow for updates</p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-xl font-semibold mb-2 hover:text-neutral-600 transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-neutral-500">{post.date}</time>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center text-neutral-600 py-12">
            No blog posts yet. Check back soon!
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8">
              <img src="/images/barbell_panda.png" alt="PeakFit AI Logo" className="w-full h-full object-contain" />
            </div>
            <span className={`text-xl font-semibold ${inter.className}`}>PeakFit AI</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-neutral-400">•</span>
            <Link
              href="/privacy"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-400">•</span>
            <span className="text-sm text-neutral-600">© 2024 PeakFit AI. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
} 