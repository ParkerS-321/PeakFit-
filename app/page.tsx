'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Playfair_Display, Inter } from 'next/font/google'
import { Carousel } from "@/components/ui/carousel"
import { joinWaitlist } from "./actions"

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

export default function Page() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const result = await joinWaitlist(email)
      if (result.success) {
        setStatus({ type: 'success', message: result.message || 'Thanks for joining our waitlist!' })
        setEmail('')
      } else {
        setStatus({ type: 'error', message: result.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`flex flex-col min-h-screen bg-[#F8F9FB] text-black ${inter.className}`}>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

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
              <Link href="#how-it-works" className="block px-4 py-2 text-sm text-black hover:bg-neutral-100">
                How does PeakFit AI work?
              </Link>
              <Link href="#why-peakfit" className="block px-4 py-2 text-sm text-black hover:bg-neutral-100">
                Why PeakFit AI?
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 pl-6 bg-white relative">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Mobile: Image appears first, Desktop: Content appears first */}
              <div className="w-full lg:hidden mb-8 order-1">
                <img 
                  src="/images/new_land_flow.png" 
                  alt="PeakFit AI Plan Page" 
                  className="w-full h-auto max-h-[800px] object-contain"
                />
              </div>
              <div className="w-full lg:max-w-[450px] pr-8 order-2 lg:order-1">
                <h1 className={`text-4xl lg:text-6xl font-bold mb-6 text-left ${inter.className}`}>
                  Create personalized workout plans <br />with just a few clicks.
                </h1>
                <p className="text-lg lg:text-xl text-neutral-600 mb-8 text-left">
                  PeakFit AI, the AI-powered workout tracking app that simplifies working out. 
                  Snap a photo (optional) and enter some basic information, and PeakFit AI will instantly generate a personalized workout plan with
                  tailored progression. Stay on track with personalized insights and achievements to help you 
                  level up!
                </p>
                <div className="bg-gradient-to-r from-neutral-50 via-white to-neutral-50 p-6 rounded-xl border border-neutral-100 shadow-lg">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-1">Join the Waitlist Today!</h3>
                    <p className="text-sm text-neutral-600">Be the first to experience AI-powered fitness.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="relative flex-1 w-full">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-lg border-2 border-neutral-200 focus:outline-none focus:border-black text-base shadow-sm"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-black text-white hover:bg-neutral-800 py-6 text-base font-medium shadow-lg transition-all duration-200 hover:shadow-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Joining...' : '🚀 Join the Waitlist'}
                    </Button>
                  </form>
                  {status.type && (
                    <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                      {status.message}
                    </p>
                  )}
                  <p className="text-xs text-center text-neutral-500 mt-3">
                    Join {Math.floor(Math.random() * 50) + 150}+ others waiting to transform their fitness journey
                  </p>
                </div>
              </div>
              {/* Desktop: Image appears second */}
              <div className="hidden lg:flex w-full lg:flex-1 justify-end order-2 mt-12 lg:mt-0 pl-16 pr-6">
                <img 
                  src="/images/new_land_flow.png" 
                  alt="PeakFit AI Plan Page" 
                  className="w-auto h-auto max-h-[1200px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-12 px-6 bg-[#F8F9FB] scroll-mt-20">
          <div className="max-w-[1300px] mx-auto">
            <div className="pt-8">
              <div className="mb-8 lg:pl-0">
                <h2 className={`text-4xl font-bold ${inter.className}`}>How does PeakFit AI work?</h2>
              </div>
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                <div className="w-full lg:w-[40%] order-1">
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    When you generate a workout plan with PeakFit AI, many things happen. 
                    First, we will use your basic information to understand your goals and current fitness level.
                    Then, you will have the option to upload pictures of your physique and enter information such as available equipment, desired workout time, desired plan length, and more.
                    Finally, our multimodal AI model will combine the results and generate a personalized workout plan for you.
                  </p>
                </div>
                <div className="w-full lg:w-[60%] flex justify-center lg:justify-end order-2 lg:-mt-12">
                  <div className="relative w-full max-w-[700px]">
                    <Carousel
                      images={[
                        {
                          src: "/images/physique_1.png",
                          alt: "Upload your physique",
                          label: "Upload your physique (optional)"
                        },
                        {
                          src: "/images/details.png",
                          alt: "Enter plan details",
                          label: "Enter Plan Details"
                        },
                        {
                          src: "/images/plan-view.png",
                          alt: "Get your personalized plan",
                          label: "Get your plan"
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 px-6 bg-[#F8F9FB] scroll-mt-20">
          <div className="max-w-[1300px] mx-auto">
            <div className="pt-8">
              <div className="mb-8 lg:pl-0">
                <h2 className={`text-4xl font-bold ${inter.className}`}>PeakFit AI Features</h2>
              </div>
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                <div className="w-full lg:w-[40%] order-1">
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    PeakFit AI comes packed with powerful features to enhance your fitness journey. 
                    Track your workouts with precision, monitor your progress with detailed statistics, 
                    and get AI-powered guidance throughout your fitness journey. Our intelligent 
                    workout tracking ensures you're always progressing and staying motivated, while 
                    our chat feature provides instant support and answers to all your fitness questions.
                  </p>
                  <div className="mt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="mr-2">📝</span>
                        <span className="text-neutral-600">AI-Powered Workout Plan Generation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">💬</span>
                        <span className="text-neutral-600">Ask-Peak: Your personal AI fitness coach that will try to any questions related to your workouts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🏋️</span>
                        <span className="text-neutral-600">Streamlined and guided workout sessions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">📈</span>
                        <span className="text-neutral-600">Stat and Progress tracking to ensure you're always on track</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-[60%] flex justify-center lg:justify-end order-2 lg:-mt-12">
                  <div className="relative w-full max-w-[800px]">
                    <img 
                      src="/images/features3.png" 
                      alt="PeakFit AI Features" 
                      className="w-full h-auto max-w-full lg:max-h-[700px] object-contain px-4 lg:px-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accuracy Section */}
        <section id="why-peakfit" className="py-12 px-6 bg-[#F8F9FB] scroll-mt-20">
          <div className="max-w-[1300px] mx-auto">
            <div className="pt-8">
              <div className="mb-8 lg:pl-0">
                <h2 className={`text-4xl font-bold ${inter.className}`}>Why PeakFit AI?</h2>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                <div className="w-full lg:w-[40%] flex flex-col justify-center order-1">
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    Working out can be both intimidating and overwhelming. This is what makes PeakFit AI so special. We take the thinking out of the
                    gym for you. Simply tell us your goals, and we will generate a personalized workout plan for you that adapts to your progress. No more expensive trainers,
                    no more guessing at the best approach. Just a simple, easy to follow plan. PeakFit AI will give you the tools to level up both in the gym and out.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 lg:mb-0">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="text-2xl font-bold mb-2" suppressHydrationWarning>50%</div>
                      <div className="text-sm text-neutral-600">
                        Of new gym members quit within the first 6 months
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="text-2xl font-bold mb-2" suppressHydrationWarning>40%</div>
                      <div className="text-sm text-neutral-600">
                        Of people who start working out say they have gym-anxiety
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[60%] flex justify-center lg:justify-end order-2 lg:-mt-12">
                  <div className="relative w-full max-w-[800px]">
                    <img 
                      src="/images/app_stats2.png" 
                      alt="PeakFit AI Exercise Page" 
                      className="w-full h-auto max-w-full lg:max-h-[700px] object-contain px-4 lg:px-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-black text-white">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-4 ${inter.className}`}>Try PeakFit AI today.</h2>
            <p className="text-xl text-neutral-300 mb-8">Personalized workout tracking with just a few clicks.</p>
            <form onSubmit={handleSubmit} className="flex gap-4 items-center max-w-md mx-auto">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-400 text-sm"
                  required
                />
              </div>
              <Button 
                type="submit"
                size="lg" 
                className="bg-white text-black hover:bg-neutral-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
              </Button>
            </form>
            {status.type && (
              <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.message}
              </p>
            )}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-white py-8 px-6">
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
      </main>
    </div>
  )
}