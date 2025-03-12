'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Playfair_Display, Inter } from 'next/font/google'

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
        <nav className="flex items-center gap-4 pr-24">
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
        <section className="py-20 pl-6 bg-white relative">
          <div className="max-w-[1300px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Mobile: Image appears first, Desktop: Content appears first */}
              <div className="w-full lg:hidden mb-8 order-1">
                <img 
                  src="/images/hero_flow.png" 
                  alt="PeakFit AI Plan Page" 
                  className="w-full h-auto max-h-[500px] object-contain"
                />
              </div>
              <div className="w-full lg:max-w-[450px] pr-8 order-2 lg:order-1">
                <h1 className={`text-4xl lg:text-6xl font-bold mb-6 text-left ${inter.className}`}>
                  Create personalized workout plans <br />with just a few clicks.
                </h1>
                <p className="text-lg lg:text-xl text-neutral-600 mb-8 text-left">
                  Introducing PeakFit AI, the AI-powered workout tracking app that simplifies working out. 
                  Snap a photo and enter some basic information, and PeakFit AI will instantly generate a personalized workout plan with
                  tailored progression. Stay on track with personalized insights and achievements to help you 
                  level up!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="relative flex-1 w-full max-w-sm">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-neutral-400 text-sm"
                    />
                  </div>
                  <Button className="w-full sm:w-auto bg-black text-white hover:bg-neutral-800">Join the Waitlist</Button>
                </div>
              </div>
              {/* Desktop: Image appears second */}
              <div className="hidden lg:flex w-full lg:flex-1 justify-end order-2 mt-12 lg:mt-0 pl-16 pr-6">
                <img 
                  src="/images/hero_flow.png" 
                  alt="PeakFit AI Plan Page" 
                  className="w-auto h-auto max-h-[850px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-20 px-6 bg-[#F8F9FB] scroll-mt-20">
          <div className="max-w-[1300px] mx-auto">
            <div className="pt-16">
              <div className="mb-12">
                <h2 className={`text-4xl font-bold ${inter.className}`}>How does PeakFit AI work?</h2>
              </div>
              <div className="flex flex-col lg:flex-row items-start gap-16">
                <div className="w-full lg:flex-1 order-1">
                  <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                    When you generate a workout plan with PeakFit AI, many things happen. 
                    First, we will use your basic information to understand your goals and current fitness level.
                    Then, you will have the option to upload pictures of your physique and enter information such as available equipment, desired workout time, desired plan length, and more.
                    Finally, our multimodal AI model will combine the results and generate a personalized workout plan for you.
                  </p>
                </div>
                <div className="w-full lg:flex-[1.5] flex justify-center lg:justify-end mt-8 lg:mt-0 order-2">
                  <div className="relative w-full max-w-[800px]">
                    <div className="absolute w-full flex justify-start px-4 -top-8">
                      <div className="text-center w-[200px] -ml-8">
                        <p className="text-sm font-medium text-neutral-600">Upload your physique (optional)</p>
                      </div>
                      <div className="text-center w-[200px] ml-[140px]">
                        <p className="text-sm font-medium text-neutral-600">Enter Plan Details</p>
                      </div>
                      <div className="text-center w-[200px] ml-[110px]">
                        <p className="text-sm font-medium text-neutral-600">Get your plan</p>
                      </div>
                    </div>
                    <img 
                      src="/images/plan_flow5-Photoroom.png" 
                      alt="PeakFit AI Exercise Page" 
                      className="w-full h-auto max-w-full lg:max-h-[1500px] object-contain px-4 lg:px-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accuracy Section */}
        <section id="why-peakfit" className="py-20 px-6 bg-[#F8F9FB] scroll-mt-20">
          <div className="max-w-[1300px] mx-auto">
            <div className="pt-16">
              <div className="mb-12">
                <h2 className={`text-4xl font-bold ${inter.className}`}>Why PeakFit AI?</h2>
              </div>
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="w-full lg:flex-1 flex flex-col justify-center order-1">
                  <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                    Working out can be both intimidating and overwhelming. This is what makes PeakFit AI so special. We take the thinking out of the
                    gym for you. Simply tell us your goals, and we will generate a personalized workout plan for you that adapts to your progress. No more expensive trainers,
                    no more guessing at the best approach. Just a simple, easy to follow plan. PeakFit AI will give you the tools to level up both in the gym and out.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 lg:mb-0">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="text-2xl font-bold mb-2">50%</div>
                      <div className="text-sm text-neutral-600">
                        Of new gym members quit within the first 6 months
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="text-2xl font-bold mb-2">40%</div>
                      <div className="text-sm text-neutral-600">
                        Of people who start working out say they have gym-anxiety
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:flex-[1.2] flex justify-center lg:justify-end order-2">
                  <div className="relative w-full max-w-[800px]">
                    <img 
                      src="/images/app_stats2.png" 
                      alt="PeakFit AI Exercise Page" 
                      className="w-full h-auto max-w-full lg:max-h-[1200px] object-contain px-4 lg:px-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-black text-white">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-4 ${inter.className}`}>Try PeakFit AI today.</h2>
            <p className="text-xl text-neutral-300 mb-8">Personalized workout tracking with just a few clicks.</p>
            <div className="flex gap-4 items-center max-w-md mx-auto">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-400 text-sm"
                />
              </div>
              <Button size="lg" className="bg-white text-black hover:bg-neutral-200">Join the Waitlist</Button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-neutral-600 bg-white">
        <p>Copyright © 2025 PeakFit AI LLC</p>
        <div className="mt-2">
          <Link href="#" className="hover:text-white">Terms of Service</Link>
          <span className="mx-2">|</span>
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link href="#" className="hover:text-white">Contact Support</Link>
        </div>
      </footer>
    </div>
  )
}