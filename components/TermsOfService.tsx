import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className={`${inter.className} prose prose-neutral max-w-none p-6 bg-white rounded-lg`}>
      <h1 className="text-3xl font-bold mb-6">Terms of Service for PeakFit AI</h1>
      <p className="text-sm text-neutral-600 mb-8">Last Updated: {currentDate}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>By downloading, installing, or using PeakFit AI (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not access or use the App.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Description of Service</h2>
        <p>PeakFit AI is an AI-powered workout tracking application that provides:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personalized workout plans</li>
          <li>Progress tracking</li>
          <li>Exercise guidance</li>
          <li>Workout statistics</li>
          <li>AI-powered workout assistance</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
        <ol className="list-decimal pl-6">
          <li className="mb-2">You must create an account to use the App.</li>
          <li className="mb-2">You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li className="mb-2">You must provide accurate and complete information when creating your account.</li>
          <li>You are responsible for all activities that occur under your account.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Subscription Services</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">4.1. Free Tier Limitations:</h3>
          <ul className="list-disc pl-6">
            <li>Limited to 1 active workout plan</li>
            <li>Maximum of 5 completed workouts</li>
            <li>Basic features access</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">4.2. Pro Subscription:</h3>
          <ul className="list-disc pl-6">
            <li>Available as monthly or annual subscription</li>
            <li>Unlimited workout plans</li>
            <li>Unlimited completed workouts</li>
            <li>Access to all premium features</li>
            <li>Subscription automatically renews unless cancelled</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">4.3. Payment and Billing:</h3>
          <ul className="list-disc pl-6">
            <li>All purchases are processed through Apple's App Store</li>
            <li>Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date</li>
            <li>You can manage and cancel subscriptions through your App Store account settings</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. User Data and Privacy</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">5.1. The App collects and processes:</h3>
          <ul className="list-disc pl-6">
            <li>Profile information</li>
            <li>Workout data</li>
            <li>Physical measurements</li>
            <li>Exercise progress</li>
            <li>Photos (with explicit permission)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">5.2. We use this data to:</h3>
          <ul className="list-disc pl-6">
            <li>Provide personalized workout plans</li>
            <li>Track your progress</li>
            <li>Analyze your performance</li>
            <li>Improve our services</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. User Content</h2>
        <p>6.1. You retain rights to any content you submit to the App</p>
        <p>6.2. You grant us a license to use your content to:</p>
        <ul className="list-disc pl-6">
          <li>Provide and improve our services</li>
          <li>Analyze workout patterns</li>
          <li>Generate personalized recommendations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">7. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ol className="list-decimal pl-6">
          <li>Use the App for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to any part of the App</li>
          <li>Share your account credentials with others</li>
          <li>Interfere with or disrupt the App's operation</li>
          <li>Upload malicious content or code</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">8. Health and Safety Disclaimer</h2>
        <ol className="list-decimal pl-6">
          <li>Consult your physician before starting any exercise program</li>
          <li>The App's recommendations are not medical advice</li>
          <li>You exercise at your own risk</li>
          <li>We are not responsible for any injuries or health issues</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">9. Intellectual Property</h2>
        <ol className="list-decimal pl-6">
          <li>The App and its original content are protected by copyright and other intellectual property laws</li>
          <li>The AI training models and algorithms are proprietary</li>
          <li>You may not copy, modify, or distribute our content without permission</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">10. Termination</h2>
        <ol className="list-decimal pl-6">
          <li>We may terminate or suspend your account for violations of these Terms</li>
          <li>You may terminate your account at any time</li>
          <li>Subscription refunds are subject to Apple's App Store policies</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">11. Limitation of Liability</h2>
        <p>11.1. The App is provided "as is" without warranties</p>
        <p>11.2. We are not liable for:</p>
        <ul className="list-disc pl-6">
          <li>Personal injury during workouts</li>
          <li>Data loss or inaccuracies</li>
          <li>Service interruptions</li>
          <li>Third-party content</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">12. Changes to Terms</h2>
        <ol className="list-decimal pl-6">
          <li>We reserve the right to modify these Terms at any time</li>
          <li>Continued use of the App after changes constitutes acceptance</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">13. Contact Information</h2>
        <p>For questions about these Terms, contact us at: hello@peakfitai.com</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">14. Governing Law</h2>
        <p>These Terms are governed by the laws of the State of Florida, United States.</p>
      </section>
    </div>
  )
} 