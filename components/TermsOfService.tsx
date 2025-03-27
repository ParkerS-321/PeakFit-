import { Inter } from 'next/font/google'
import Link from 'next/link'

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
    <div className="max-w-[800px] mx-auto">
      <div className="prose prose-lg max-w-none">
        <h1>Terms of Service</h1>
        
        <p>
          Please read and accept Apple's standard{' '}
          <Link 
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Terms of Service
          </Link>
          {' '}in addition to the terms below.
        </p>

        <h2>ADDITIONAL TERMS AND CONDITIONS FOR PeakFit AI</h2>

        <h3>1. Health and Safety Disclaimer</h3>
        <ul>
          <li>This app is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</li>
          <li>Always seek the advice of your physician or other qualified health provider before starting any new exercise program.</li>
          <li>By using this app, you acknowledge that there are risks inherent in any physical activity and you voluntarily accept those risks.</li>
        </ul>

        <h3>2. No Medical Advice</h3>
        <ul>
          <li>The content provided through this app, including workout plans, exercise descriptions, and fitness tracking, does not constitute medical advice.</li>
          <li>The app does not create a physician-patient relationship between the app providers and users.</li>
          <li>Users should stop exercising immediately and seek medical attention if they experience any pain, discomfort, dizziness, or injury.</li>
        </ul>

        <h3>3. Fitness and Exercise Risks</h3>
        <ul>
          <li>Exercise and physical activity involve inherent risks, including but not limited to injury, disability, or death.</li>
          <li>Users participate in workouts and exercises at their own risk.</li>
          <li>The app providers are not responsible for any injuries or health complications that may result from using the app.</li>
        </ul>

        <h3>4. User Responsibilities</h3>
        <ul>
          <li>Users must ensure they are physically capable of performing the exercises.</li>
          <li>Users are responsible for maintaining proper form during exercises.</li>
          <li>Users should modify or skip exercises that exceed their fitness level or physical capabilities.</li>
          <li>Users with pre-existing conditions should consult healthcare providers before using the app.</li>
        </ul>

        <h3>5. Content Accuracy</h3>
        <ul>
          <li>While we strive for accuracy, we make no guarantees regarding the completeness or accuracy of exercise information.</li>
          <li>Exercise descriptions and demonstrations are guidelines only.</li>
          <li>Users should seek professional instruction for proper exercise form and technique.</li>
        </ul>

        <h3>6. Results Disclaimer</h3>
        <ul>
          <li>Results from using the app may vary between individuals.</li>
          <li>We make no guarantees regarding fitness improvements or weight loss results.</li>
          <li>Success depends on various factors including diet, consistency, and individual physiology.</li>
        </ul>

        <h3>7. Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by law, the app providers shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from:
        </p>
        <ul>
          <li>Use or inability to use the app</li>
          <li>Any injuries sustained while following the app's workout programs</li>
          <li>Any health complications related to exercise performed using the app</li>
          <li>Reliance on information provided through the app</li>
        </ul>

        <h3>8. Indemnification</h3>
        <ul>
          <li>Users agree to indemnify and hold harmless the app providers from any claims, damages, or expenses arising from their use of the app.</li>
        </ul>

        <p className="font-medium">
          By using this app, you acknowledge that you have read, understood, and agree to these additional terms and conditions.
        </p>

        <p className="text-sm text-neutral-600 mt-8">
          Last updated: {currentDate}
        </p>
      </div>
    </div>
  )
} 