import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import GrandOpeningAnnouncement from '../components/GrandOpeningAnnouncement'
import { saveAgeVerification } from '@/lib/ageVerificationStorage'

const TestModalPage: NextPage = () => {
  const [resetKey, setResetKey] = useState(0)

  useEffect(() => {
    // Clear the dismissal flag and set age verified for testing
    localStorage.removeItem('grandOpeningDismissed')
    saveAgeVerification()
  }, [resetKey])

  const resetModal = () => {
    localStorage.removeItem('grandOpeningDismissed')
    setResetKey(prev => prev + 1)
    window.location.reload()
  }

  return (
    <>
      <SEO
        title="Test Modal - The Library Dispensary"
        description="Test page for the Grand Opening modal popup"
      />
      <GrandOpeningAnnouncement />
      <div className="min-h-screen bg-library-dark flex items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-display text-library-gold mb-6">Grand Opening Modal Test</h1>
          <p className="text-library-cream mb-8">
            The grand opening modal should appear after 1.5 seconds.
          </p>
          <div className="space-y-4 text-left bg-library-brown/30 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-library-gold">Test Instructions:</h2>
            <ul className="list-disc list-inside space-y-2 text-library-cream">
              <li>Modal should appear automatically after 1.5 seconds</li>
              <li>Should have a dark overlay background with blur</li>
              <li>Should be centered on screen</li>
              <li>Click the X button to close</li>
              <li>Click outside the modal to close</li>
              <li>Press Escape key to close</li>
              <li>After closing, refresh the page - modal should not appear again</li>
              <li>To reset: Clear localStorage or use developer tools</li>
            </ul>
            <div className="mt-4 p-4 bg-library-dark rounded space-y-4">
              <p className="text-sm text-library-gold-light font-mono">
                To reset in console: localStorage.removeItem('grandOpeningDismissed')
              </p>
              <button
                onClick={resetModal}
                className="px-6 py-2 bg-library-gold text-library-dark font-semibold rounded-lg hover:bg-library-gold-light transition-colors"
              >
                Reset Modal & Reload Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestModalPage