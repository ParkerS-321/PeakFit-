import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className={`${inter.className} prose prose-neutral max-w-none p-6 bg-white rounded-lg`}>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for PeakFit AI</h1>
      <p className="text-sm text-neutral-600 mb-8" suppressHydrationWarning>Last Updated: {currentDate}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
        <p>PeakFit AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our mobile application.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">2.1. Information You Provide</h3>
          <ul className="list-disc pl-6">
            <li><strong>Account Information</strong>: Basic profile information for app functionality</li>
            <li><strong>Workout Data</strong>: Your exercise records and progress, stored locally on your device</li>
            <li><strong>Photos</strong>: Optional physique photos for AI analysis (these are processed for analysis and not stored permanently)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">2.2. Automatically Collected Information</h3>
          <ul className="list-disc pl-6">
            <li><strong>App Usage Data</strong>: Basic information about how you use the app</li>
            <li><strong>Device Information</strong>: Basic device information required for app functionality</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p>We use your information only to:</p>
        <ul className="list-disc pl-6">
          <li>Provide workout tracking functionality</li>
          <li>Generate personalized workout plans</li>
          <li>Process your subscription through Apple's App Store</li>
          <li>Improve app performance and features</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Data Storage and Privacy</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">4.1. Local Storage</h3>
          <ul className="list-disc pl-6">
            <li>Most of your data is stored locally on your device</li>
            <li>Workout data remains on your device</li>
            <li>You can delete app data at any time by uninstalling the app</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">4.2. Third-Party Services</h3>
          <p>We use the following services:</p>
          <ul className="list-disc pl-6">
            <li>Apple App Store for app distribution and payments</li>
            <li>RevenueCat for subscription management</li>
            <li>OpenAI workout plan generation and physique analysis (photos are processed but not stored)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Photo Privacy</h2>
        <ul className="list-disc pl-6">
          <li>Camera and photo library access is used only for physique analysis</li>
          <li>Photos are processed securely and are not stored permanently</li>
          <li>You can deny or revoke photo permissions in your device settings</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Subscription Data</h2>
        <ul className="list-disc pl-6">
          <li>All payments are processed by Apple through the App Store</li>
          <li>We do not collect or store payment information</li>
          <li>Subscription status is managed through RevenueCat</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">7. Data Deletion</h2>
        <p>You can remove your data by:</p>
        <ul className="list-disc pl-6">
          <li>Deleting the app from your device</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
        <p>We may update this policy periodically. Continued use of the app after changes implies acceptance of the updated policy.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">9. Contact</h2>
        <p>For questions about this privacy policy, please contact us through the App Store listing or at hello@peakfitai.com.</p>
      </section>
    </div>
  )
} 